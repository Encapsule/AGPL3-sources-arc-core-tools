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

'use strict'

MODULE =
    __undefined: 0
    __null: 1
    __boolean: 2
    __string: 3
    __number: 4
    __object: 5
    __array: 6
    __function: 7
    __GUARD: 8

Object.freeze MODULE

module.exports = MODULE


