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

FILTERLIB = require './arc_core_filter'

IDENTIFIERLIB = require './arc_core_identifier'
FILTERDAGREQFS = require './arc_core_filter_dag_create_ifs'


filterlibResponse = FILTERLIB.create
    operationID: '3mXe4YE_RVG7cqZXz92izw'
    operationName: "FilterDAG Type Constraint Processor"
    operationDescription: "Parses a FilterDAG type constraint specification and returns an intermediate result."

    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.constraints.types

    bodyFunction: (request_) ->

        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            if not request_.length
                errors.unshift "You must specify at least one type constraint descriptor."
                break

            filterSpecMap = {}
            typeMap = {}

            index = 0
            request_.forEach (typeDescriptor_) ->
                value = typeMap[typeDescriptor_.name]
                if value? and value
                    errors.unshift "Illegal duplicate name value '#{typeDescriptor_.name}' found examining constraints.types[#{index}]."
                    return

                value = typeMap[typeDescriptor_.name] = typeDescriptor_
                delete value.name

                innerResponse = FILTERLIB.create
                    operationID: 'demo'
                    inputFilterSpec: value.filterSpec

                if innerResponse.error
                    errors.unshift innerResponse.error
                    errors.unshift "Invalid filter specification declared for type constraint name '#{typeDescriptor_.name}':"
                    return

                innerResponse = IDENTIFIERLIB.irut.fromReference value.filterSpec
                if innerResponse.error
                    errors.unshift innerResponse.error
                    return

                value.id = innerResponse.result
                filterSpecMap[innerResponse.result] = value.filterSpec
                index++

            if not errors.length
                response.result =
                    types: typeMap
                    filterSpecs: filterSpecMap
            break

        if errors.length
            response.error = errors.join " "
        response

if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
