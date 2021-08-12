###
----------------------------------------------------------------------
 
           +---+---+---+---+
 chaos --> | J | B | U | S | --> order
           +---+---+---+---+

Copyright (C) 2015 Encapsule.io Bellevue, WA USA

JBUS is licensed under the GNU Affero General Public License v3.0.
Please consult the included LICENSE file for agreement terms.

----------------------------------------------------------------------
###
#
#
#

UUIDV4 = (require 'uuid').v4
MURMUR = require 'murmurhash-js'

TYPES = require './arc_core_types'

MODULE = module.exports = {}

###
    Generate an Internet-Routable Unique Token (IRUT)

    IRUT's are 22-character, ASCII-encoded, UUID v4, URI and RIS token-friendly string identifiers.

    Use cases:
    1. v4 UUID uniqueness semantics: addressed w/node-uuid package
    2. ASCII: addressed by using base64 encoding of the v4 UUID
    3. Short as possible: addressed by trimming superfluous '=' padding from base64 encoding
    4. URI token safe: addressed by replacing '/' characters with '_'
    5. RIS token safe: addressed by replacing '+' with '-'

    References:
    http://tools.ietf.org/html/rfc3986
    http://en.wikipedia.org/wiki/Base64
    http://stackoverflow.com/questions/11431886/url-safe-uuids-in-the-smallest-number-of-characters
    http://stackoverflow.com/questions/6182315/how-to-do-base64-encoding-in-node-js
    http://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string

    Note: I've made this funky. If seed_ is undefined, then a v4 UUID is generated and used as the
    basis of the IRUT. Otherwise, we take a look at whatever was passed to us, convert it to an
    ASCII string (this operation must be idempotent), divide it into four substrings of roughly
    equal lengths (again this too must be idempotent), and then the 128-bit basis of the IRUT
    is 4x32-bit Murmur3 hashes of the four substrings. This feature is used to fingerprint ARC's
    primarily.
###
MODULE.fromEther = ->
    r1 = UUIDV4 null, new Uint8Array 16, 0
    #    r2 = (new Buffer r1).toString 'base64'
    r2 = (Buffer.from r1).toString 'base64'
    tail = r2.length
    pads = 0
    while r2.charAt(tail - 1) == '='
        tail--
    r3 = r2.slice 0, tail
    r4 = r3.replace(/\+/g, "-")
    r5 = r4.replace(/\//g, "_")
    r5


###
    2021.02.25 --- YES WE ARE STILL USING THIS EVERY DAY :-)
    Circling back here after all this time this IRUT idea works very well in practice.
    TODO: WE ARE CURRENTLY WASTING 4-BITS! IRUT is now 128-bit unique but could be 132-bit
    without any change in memory use.

    Request/response-style generator returns an IRUT format 128-bit
    hybrid Murmur3 hash of whatever ref_ refers to (so long as its a string,
    object, or array). Note that if object or arry, the reference is serialized
    to JSON dropping any functions or undefined properties from the seed UTF-8
    string. The seed UTF-8 is converted to ASCII, and then divided into four
    roughly equal chunks each of which is Murmur3 hashed to produce four 32-bit
    hash results. The byte representation of this 128-bit composite hash is
    then converted to base64 and cherry picked (character substitution algoritm)
    to ensure that it is URI routable. This algorithm is idempotent.
    Note that given the way that the seed ASCII string is chunked, touching
    the resource referred to by ref_ will not necessarily destabilize the
    entire generated IRUT string. Murmur3 IRUTS have for all intents and purposes
    the same overall unique semantics associated with a 128-bit UUID v4-backed IRUT
    and should only ever be compared for equality. There is never any recoverable
    information of value in an IRUT except its uniqueness (and in the case of
    Murmur3-backed IRUT's idempotence which means we can use the algorithm to
    verify the correctness of various resources for correctness and integrity at
    fairly low cost. If anything, this implementation is a bit conservative.
    Later when I profile we'll see. We might be able to get away with 64-bits here?

###
MODULE.fromReference = (ref_) ->
    errors = []
    response = error: null, result: null
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true
        checkResponse = TYPES.check.isJSON ref_
        if checkResponse.error
            errors.unshift checkResponse.error
            break
        if not checkResponse.result
            errors.unshift "Input reference must address top-level data convertible directly to JSON."
            break
        r0 = (checkResponse.result == 'jsonString') and ref_ or JSON.stringify ref_
        r0Buffer = Buffer.from r0, 'utf-8'
        r1 = r0Buffer.toString 'ascii'
        if not r1.length
            errors.unshift "No data to hash!"
            break
        if r1.length < 64
            r1 = Array(Math.ceil((64/r1.length)+ 1)).join r1
        chunkLength = Math.ceil r1.length / 4
        index = 0
        rangeStart = 0
        r2hashes = []
        while rangeStart < r1.length
            chunk = r1.substring rangeStart, (rangeStart + chunkLength)
            hash = MURMUR chunk
            r2hashes[index] = hash & 0xFF
            r2hashes[index + 4] = (hash & 0xFF00) >> 8
            r2hashes[index + 8] = (hash & 0xFF0000) >> 16
            r2hashes[index + 12] = (hash & 0xFF000000) >> 24
            rangeStart += chunkLength
            index++

        r2 = (Buffer.from r2hashes).toString 'base64'
        pads = 0
        while r2.charAt(r2.length - pads - 1) == '='
            pads++
        r3 = r2.slice 0, r2.length - pads
        r4 = r3.replace(/\+/g, "-")
        r5 = r4.replace(/\//g, "_")
        response.result = r5
    if errors.length
        errors.unshift "jbus common identifier IRUT generation failed:"
        response.error = errors.join ' '
    response

MODULE.isIRUT = (irut_) ->
    response = error: null, guidance: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true

        checkResponse = TYPES.check.inTypeSet value: irut_, types: 'jsString'
        if checkResponse.error
            errors.unshift checkResponse.error
            break
        if not checkResponse.result
            response.guidance = checkResponse.guidance
            response.result = false
            break

        if irut_.length != 22
            response.guidance = "Expected 22-character string. Found #{irut_.length}-character string instead."
            response.result = false
            break

        match = irut_.match /^([A-Z]|[a-z]|[0-9]|-|_){22}$/
        if match == null
            response.guidance = "Expected only Base64 characters (substitute: '+' > '-', '/' > '_')."
            response.result = false
            break

        response.result = true

    if errors.length
        errors.unshift "jbus common IRUT identifier verification failed:"
        response.error = errors.join ' '

    response
