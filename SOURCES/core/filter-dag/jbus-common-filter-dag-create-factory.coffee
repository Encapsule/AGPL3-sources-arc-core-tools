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

FILTERLIB = require 'jbus-common-filter'
IDENTIFIERLIB = FILTERLIB.__bundle.jbus_common_identifier

FILTERDAGREQFS = require './filterdag-create-input'

filterlibResponse = FILTERLIB.create
    operationID: '-OOcB4IIRQuMWZJ0zZKPUw'
    operationName: "FilterDAG Runtime Generator"
    operationDescription: "Constructs and initializes a FilterDAG reactive system simulation runtime host instance from a FilterDAG Specification Manifest."

    bodyFunction: (request_) ->
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            result = {}

            genTag =
                id: this.operationID
                name: this.operationName

            innerResponse = IDENTIFIERLIB.irut.fromReference result
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            genTag.hash = innerResponse.result

            result.generator = genTag

            response.result = result
            break

        if errors.length
           response.error = errors.join " "
        response



if filterlibResponse.error
    throw new Error filterlibResponse.error
module.exports = filterlibResponse.result
