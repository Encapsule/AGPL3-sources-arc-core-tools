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

MURMUR = require 'murmurhash-js'

MODULE = module.exports = {}

MODULE.fromUTF8 = (utf8_) ->
    utf8 = Buffer.from utf8_, 'utf-8'
    ascii = utf8.toString 'ascii'
    MURMUR ascii

MODULE.fromReference = (ref_) ->
    MODULE.fromUTF8 JSON.stringify ref_

MODULE.toIRUT = (hash_) ->
    buffer = Buffer.alloc 4
    buffer.writeUInt32LE hash_, 0
    r1 = buffer.toString 'base64'
    pads = 0
    while r1.charAt(r1.length - pads - 1) == '='
        pads++
    r2 = r1.slice 0, r1.length - pads
    r3 = r2.replace(/\+/g, "-")
    r4 = r3.replace(/\//g, "_")
    r4
