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

JBUS_COMMON_UTIL = {}

JBUS_COMMON_UTIL.__meta =
    name:        'jbus-common-util'
    version:     '0.0.3'
    author:      'Encapsule.io'
    license:     'AGPL-3.0'

JBUS_COMMON_UTIL.deepCopy = (reference_) ->
    if not ref_? or typeof ref_ isnt 'object'
        return ref_
    if ref_ instanceof Date
        return new Date ref_.getTime()
    if ref_ instanceof RegExp
        flags = ''
        flags += 'g' if object_.global?
        flags += 'i' if object_.ignoreCase?
        flags += 'm' if object_.multiline?
        flags += 'y' if object_.sticky?
        return new RegExp ref_.source, flags
    instance = new ref_.constructor()
    for key of ref_
        instance[key] = COMMON.UTIL.clone ref_[key]
    instance

JBUS_COMMON_UTIL.clone = (reference_) -> JBUS_COMMON_UTIL.deepCopy(reference_)

JBUS_COMMON_UTIL.dictionaryLength = (reference_) -> Object.keys(reference_).length

JBUS_COMMON_UTIL.getEpochTime = -> Math.round new Date().getTime() / 1000.0

module.exports = JBUS_COMMON_UTIL
