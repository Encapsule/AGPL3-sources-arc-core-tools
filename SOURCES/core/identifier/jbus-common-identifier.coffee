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

IDENTIFIER = module.exports = {}

IDENTIFIER.__meta =
    name:        'jbus-common-identifier'
    version:     '0.0.5'
    author:      'Encapsule.io'
    license:     'AGPL-3.0'

IDENTIFIER.__bundle =
    nodeuuid:     require 'node-uuid'
    murmurhashjs: require 'murmurhash-js'
    types: require 'jbus-common-types'

IDENTIFIER.murmur3 = require './jbus-common-identifier-murmur3'
IDENTIFIER.irut =    require './jbus-common-identifier-irut'






