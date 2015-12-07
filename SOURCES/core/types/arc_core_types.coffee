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

jbus = {}
jbus.common = {}
jbus.common.types = module.exports = {}
jbus.common.types.codes = require './arc_core_types_codes'
jbus.common.types.convert = require './arc_core_types_convert'
jbus.common.types.check = require './arc_core_types_check'
