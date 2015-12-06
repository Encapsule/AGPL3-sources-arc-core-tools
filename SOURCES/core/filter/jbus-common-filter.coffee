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

IDENTIFIER = require 'jbus-common-identifier'
TYPES = IDENTIFIER.__bundle.types
NODEUUID = IDENTIFIER.__bundle.nodeuuid
MURMURHASHJS = IDENTIFIER.__bundle.murmurhashjs
FILTERFACTORY = require './jbus-common-filter-create'

FILTER = module.exports =

    __meta:
        name:        'jbus-common-filter'
        version:     '0.0.13'
        author:      'Encapsule.io'
        license:     'AGPL-3.0'

    __bundle:
        jbus_common_types: TYPES
        jbus_common_identifier: IDENTIFIER
        nodeuuid: NODEUUID
        murmurhashjs: MURMURHASHJS

    create: FILTERFACTORY
