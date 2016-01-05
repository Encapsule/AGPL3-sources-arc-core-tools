
'use strict'

typeCodes = require './arc_core_types_codes'

MODULE = {}

###
String identifiers used to keep track of conversion source/destination dimension type.
###
MODULE.dimensions = [ 'jsReference', 'jsCode', 'jsTypeString', 'jsMoniker', 'jsonMoniker' ]

###
Lookup expected JavaScript type string from JavaScript Type Code (JSTC) ordinal.
###
MODULE.jsTypeString = []
MODULE.jsTypeString[typeCodes.__undefined] = '[object Undefined]'
MODULE.jsTypeString[typeCodes.__null] = '[object Null]'
MODULE.jsTypeString[typeCodes.__boolean] = '[object Boolean]'
MODULE.jsTypeString[typeCodes.__string] = '[object String]'
MODULE.jsTypeString[typeCodes.__number] = '[object Number]'
MODULE.jsTypeString[typeCodes.__object] = '[object Object]'
MODULE.jsTypeString[typeCodes.__array] = '[object Array]'
MODULE.jsTypeString[typeCodes.__function] = '[object Function]'

###
Lookup JavaScript type moniker string from its JavaScript Type Code (JSTC) ordinal.
###
MODULE.jsMoniker = []
MODULE.jsMoniker[typeCodes.__undefined] = 'jsUndefined'
MODULE.jsMoniker[typeCodes.__null] = 'jsNull'
MODULE.jsMoniker[typeCodes.__boolean] = 'jsBoolean'
MODULE.jsMoniker[typeCodes.__string] = 'jsString'
MODULE.jsMoniker[typeCodes.__number] = 'jsNumber'
MODULE.jsMoniker[typeCodes.__object] = 'jsObject'
MODULE.jsMoniker[typeCodes.__array] = 'jsArray'
MODULE.jsMoniker[typeCodes.__function] = 'jsFunction'

###
Lookup JSON type moniker string from its offset JavaScript Type Code (JSTC) ordinal.
###
MODULE.jsonMoniker = []
MODULE.jsonMoniker[typeCodes.__undefined] = null
MODULE.jsonMoniker[typeCodes.__null] = 'jsonNull'
MODULE.jsonMoniker[typeCodes.__boolean] = 'jsonBoolean'
MODULE.jsonMoniker[typeCodes.__string] = 'jsonString'
MODULE.jsonMoniker[typeCodes.__number] = 'jsonNumber'
MODULE.jsonMoniker[typeCodes.__object] = 'jsonObject'
MODULE.jsonMoniker[typeCodes.__array] = 'jsonArray'
MODULE.jsonMoniker[typeCodes.__function] = null


###
Hash table for looking up a JavaScript Type Code (JSTC) given a JavaScript Type Moniker (JSTM).
###
MODULE.jsCodes = {}
jstc = 0
while jstc < typeCodes.__GUARD
    MODULE.jsCodes[MODULE.jsMoniker[jstc]] = jstc++
    

Object.freeze MODULE

module.exports = MODULE
