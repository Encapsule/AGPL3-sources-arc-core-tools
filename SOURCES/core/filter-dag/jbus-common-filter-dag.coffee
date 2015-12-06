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

FILTER = require 'jbus-common-filter'
GRAPH = require 'jsgraph'
FILTERDAGFACTORY = require './jbus-common-filter-dag-create'

module.exports =

    __meta:
        name:        'jbus-common-filter-dag'
        version:     '0.0.6'
        author:      'Encapsule.io'
        license:     'AGPL-3.0'

    create: FILTERDAGFACTORY.request



