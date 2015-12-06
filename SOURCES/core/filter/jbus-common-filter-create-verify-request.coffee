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

normalizeCompositionRequest = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true

        ###
            request =
                ref: reference
                types: array of jsMoniker strings
                path: string (path corresponds to whatever ref addresses)
                suppressError: boolean
        ###

        localTypeCheck = (request__) ->
            innerResponse = TYPES.check.inTypeSet { value: request__.ref, types: request__.types }
            if innerResponse.error
                errors.unshift innerResponse.error
                errors.unshift "Internal error while checking property '#{request__.path}'."
                return false
            if not innerResponse.result
                if not (request__.suppressError? and request__.suppressError)
                    errors.unshift innerResponse.guidance
                    errors.unshift "Invalid data type specified for property '#{request__.path}'."
                return false
            true

        if not localTypeCheck({ ref: request_, path: '~', types: 'jsObject' })
            break
        nrequest = {}

        if not localTypeCheck({ref: request_.operationID, path: '~.operationID', types: 'jsString'})
            break

        if request_.operationID == 'demo'
            nrequest.operationID = IDENTIFIER.irut.fromEther()
        else
            innerResponse = IDENTIFIER.irut.isIRUT request_.operationID
            if innerResponse.error
                errors.unshift innerResponse.error
                errors.unshift "Internal error checking property '~.operationID'."
                break
            if not innerResponse.result
                errors.unshift innerResponse.guidance
                errors.unshift "Invalid IRUT specified for '~.operationID:"
                break
            nrequest.operationID = request_.operationID

        if not localTypeCheck({ref: request_.operationName, path: '~.operationName', types: 'jsString', suppressError: true})
            nrequest.operationName = 'unnamed'
        else
            nrequest.operationName = request_.operationName
        
        if not localTypeCheck({ref: request_.operationDescription, path: '~.operationDescription', types: 'jsString', suppressError: true})
            nrequest.operationDescription = nrequest.operationID + " provides no description."
        else
            nrequest.operationDescription = request_.operationDescription

        if not localTypeCheck({ref: request_.inputName, path: '~.inputName', types: 'jsString', suppressError: true})
            nrequest.inputName = nrequest.operationID + " input"
        else
            nrequest.inputName = request_.inputName

        if not localTypeCheck({ref: request_.inputDescription, path: '~.inputDescription', types: 'jsString', suppressError: true})
            nrequest.inputDesription = nrequest.operationID + " input provides no description."
        else
            nrequest.inputDescription = request_.inputDescription

        if not localTypeCheck({ref: request_.inputFilterSpec, path: '~.inputFilterSpec', types: [ 'jsUndefined', 'jsObject' ]})
            break
        nrequest.inputFilterSpec = request_.inputFilterSpec

        if not localTypeCheck({ref: request_.outputName, path: '~.outputName', types: 'jsString', suppressError: true})
            nrequest.outputName = nrequest.operationID + " output"
        else
            nrequest.outputName = request_.outputName

        if not localTypeCheck({ref: request_.outputDescription, path: '~.outputDescription', types: 'jsString', suppressError: true})
            nrequest.outputDescription = nrequest.operationID + " output provides no description."
        else
            nrequest.outputDescription = request_.outputDescription

        if not localTypeCheck({ref: request_.outputFilterSpec, path: '~.outputFilterSpec', types: [ 'jsUndefined', 'jsObject' ]})
            break
        nrequest.outputFilterSpec = request_.outputFilterSpec

        if not localTypeCheck({ref: request_.bodyFunction, path: '~.bodyFunction', types: [ 'jsFunction', 'jsUndefined' ]})
            break
        nrequest.bodyFunction = request_.bodyFunction

        response.result = nrequest

    if errors.length
        response.error = errors.join ' '
    response






