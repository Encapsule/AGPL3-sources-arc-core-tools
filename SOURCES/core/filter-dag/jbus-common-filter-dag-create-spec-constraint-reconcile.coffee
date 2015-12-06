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


filterlibResponse = FILTERLIB.create
    operationID: 'ABIJoB_lRfeP4keMZgRkzA'
    operationName: "FilterDAG Constraint Reconciler"
    operationDescription: "Reconciles a FilterDAG constraint specification and returns an intermediate result."

    bodyFunction: (request_) ->

        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            result = request_

            response.result = result
            break

        if errors.length
           response.error = errors.join " "
        response

if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
