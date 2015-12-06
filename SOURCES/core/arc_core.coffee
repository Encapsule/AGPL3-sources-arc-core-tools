###
----------------------------------------------------------------------
 
           +---+---+---+---+
 chaos --> | J | B | U | S | --> order
           +---+---+---+---+

Copyright (C) 2015 Encapsule.io Bellevue, WA USA

This software is licensed under the terms of the GNU Affero General
Public License v3.0. 

Please review the included LICENSE file for specific agreement terms.
See also: https://opensource.org/licenses/AGPL-3.0

Source code:   https://github.com/encapsule.jbus
Documentation: https://encapsule.io/projects/jbus/docs/common
Licensing:     https://encapsule.io/licening

----------------------------------------------------------------------
###
#
#
#

FILTER = require 'jbus-common-filter'

COMMON = module.exports =

    __meta:
        name:        'jbus-common'
        version:     '0.1.13'
        author:      'Encapsule.io'
        license:     'AGPL-3.0'

    __bundle:
        murmurhash:  FILTER.__bundle.murmurhashjs
        nodeuuid:    FILTER.__bundle.nodeuuid

    util:            require('jbus-common-util')
    graph:           require('jsgraph')
    types:           FILTER.__bundle.jbus_common_types
    identifier:      FILTER.__bundle.jbus_common_identifier
    filter:          FILTER
    filterDAG:       require('jbus-common-filter-dag')
