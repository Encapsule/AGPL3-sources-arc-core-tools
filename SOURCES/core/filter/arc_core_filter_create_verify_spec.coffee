
IDENTIFIER = require './arc_core_identifier'
TYPES = require './arc_core_types'

###
    request = {
        path: string
        typemap: object
    }
###

verifyCompositionTypeMapDeclaration = module.exports = (request_) ->
    response = error: null, result: null
    errors = []
    inBreakScope = false
    while not inBreakScope
        inBreakScope = true

        innerResponse = TYPES.check.inTypeSet value: request_, types: 'jsObject'
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        if not innerResponse.result
            errors.unshift innerResponse.guidance
            errors.unshift "Invalid request:"
            break

        innerResponse = TYPES.check.inTypeSet value: request_.path, types: 'jsString'
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        if not innerResponse.result
            errors.unshift innerResponse.guidance
            errors.unshift "Invalid request:"
            break

        innerResponse = TYPES.check.inTypeSet value: request_.typemap, types: 'jsObject'
        if innerResponse.error
            errors.unshift innerResponse.error
            break
        if not innerResponse.result
            errors.unshift innerResponse.guidance
            errors.unshift "Invalid request:"
            break

        mapQueue = []

        mapQueue.push request_

        while mapQueue.length

            # inside while mapQueue.length

            constraint = "default"
            constraintOptions = undefined
            jsMonikers = undefined
            label = undefined
            description = undefined

            validTypeConstraint = false
            acceptNamespace = false
            opaqueNamespace = false
            asMapNamespace = false
            defaulted = false
            subnamespacesDeclared = 0

            typemapDescriptor = mapQueue.shift()
            typepath = typemapDescriptor.path? and typemapDescriptor.path or '~'
            typemap = typemapDescriptor.typemap

            for mapPropertyName of typemap

                mapPropertyValue = typemap[mapPropertyName]

                switch mapPropertyName

                    when '____opaque'
                        if mapPropertyValue
                            opaqueNamespace = true
                        break

                    when '____asMap'
                        if mapPropertyValue
                            asMapNamespace = true
                        break

                    when '____defaultValue'
                        defaulted = true
                        break

                    when '____accept'
                        if (validTypeConstraint)
                            errors.unshift "Redundant type constraint declared on namespace '#{mapPropertyName}'."
                            break
                        innerResponse = verifyTypeConstraintArgs('____accept', mapPropertyValue)
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            break
                        acceptNamespace = true
                        validTypeConstraint = true
                        break

                    when '____types'
                        if (validTypeConstraint)
                            errors.unshift "Redundant type constraint declared on namespace '#{mapPropertyName}'."
                            break
                        innerResponse = verifyTypeConstraintArgs('____types', mapPropertyValue)
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            break
                        validTypeConstraint = true
                        break

                    when '____label'
                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue, types: [ 'jsString' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error checking directive '#{mapPropertyName}':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error checking directive '#{mapPropertyName}':"
                            break
                        label = mapPropertyValue
                        break

                    when '____description'
                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue, types: [ 'jsString' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error checking directive '#{mapPropertyName}':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error checking directive '#{mapPropertyName}':"
                            break
                        description = mapPropertyValue
                        break

                    when '____appdsl'
                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue, types: [ 'jsObject' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error checking directive '#{mapPropertyName}':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error checking directive '#{mapPropertyName}':"
                            break
                        break

                    when '____inValueSet'
                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue, types: [ 'jsArray' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error checking directive '#{mapPropertyName}':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error checking directive '#{mapPropertyName}':"
                            break
                        constraint = 'inValueSet'
                        constraintOptions = mapPropertyValue
                        break

                    when '____inRangeInclusive'
                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue, types: [ 'jsObject' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error checking directive '#{mapPropertyName}':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error checking directive '#{mapPropertyName}':"
                            break

                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue.begin, types: [ 'jsNumber', 'jsString' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error checking directive '#{mapPropertyName}.begin':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error checking directive '#{mapPropertyName}.begin':"
                            break

                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue.end, types: [ 'jsNumber', 'jsString' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error checking directive '#{mapPropertyName}.end':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error checking directive '#{mapPropertyName}.end':"
                            break
                        constraint = 'inRangeInclusive'
                        constraintOptions = mapPropertyValue
                        break

                    else
                        if mapPropertyName.indexOf('____') == 0
                            errors.unshift "Unrecognized typemap directive '#{mapPropertyName}' not allowed in declaration."
                            break
                        innerResponse = TYPES.check.inTypeSet value: mapPropertyValue, types: [ 'jsObject' ]
                        if innerResponse.error
                            errors.unshift innerResponse.error
                            errors.unshift "Internal error queuing typemap object '#{mapPropertyName}':"
                            break
                        if not innerResponse.result
                            errors.unshift innerResponse.guidance
                            errors.unshift "Error queuing typemap object '#{mapPropertyName}':"
                            break
                        newPath = "#{typepath}.#{mapPropertyName}"
                        mapQueue.push {path: newPath, typemap: mapPropertyValue}
                        subnamespacesDeclared++
                        break

                    # end of switch propertyName

                # inside for mapPropertyName of typemap

            # inside while mapQueue.length

            if not errors.length
                inBreakScope = false
                while not inBreakScope
                    inBreakScope = true

                    if acceptNamespace and subnamespacesDeclared
                        errors.unshift "You cannot declare subnamespace filter spec(s) of a parent namespace declared using '____accept'."
                        break

                    if asMapNamespace and (subnamespacesDeclared != 1)
                        errors.unshift "Namespaces declared using '____asMap' set true must declare a single subnamespace declaration."
                        break

                    if not (validTypeConstraint or opaqueNamespace)
                        errors.unshift "Missing required '____accept', '____types', or '_____opaque' type constraint directive."
                        break

                    if validTypeConstraint and opaqueNamespace
                        errors.unshift "You cannot specify '____accept' or '____types' constraints on an '____opaque' namespace."
                        break

                    if opaqueNamespace and constraintOptions
                        errors.unshift "You cannot specify value-based constraints on an '____opaque' namespace."
                        break

                    if validTypeConstraint and defaulted
                        constraintProp = acceptNamespace and '____accept' or '____types'
                        if -1 != typemap[constraintProp].indexOf('jsUndefined')
                            errors.unshift "You cannot specifiy a default value on an optional namespace."
                            break

            if errors.length
                errors.unshift "While examining data namespace '#{typepath}':"
                break

        # inside break scope

    # function body scope

    if errors.length
        response.error = errors.join ' '
    else
        response.result = request_.typemap

    response


verifyTypeConstraintArgs = (name_, argument_) ->
    response = error: null, result: null
    errors2 = []
    inBreakScope = false
    while !inBreakScope
        inBreakScope = true
        innerResponse = TYPES.check.inTypeSet value: argument_, types: [ 'jsString', 'jsArray' ]
        if innerResponse.error
            errors2.unshift innerResponse.error
            errors2.unshift "Internal error checking directive '#{name_}':"
            break
        if not innerResponse.result
            errors2.unshift innerResponse.guidance
            errors2.unshift "Error checking directive '#{name_}':"
            break
        if innerResponse.result == 'jsString'
            value = [argument_]
        else
            value = argument_
        if value.length
            for jsMoniker in value
                innerResponse = TYPES.convert to: 'jsCode', from: 'jsMoniker', value: jsMoniker
                if innerResponse.error
                    errors2.push innerResponse.error
                    break
            if !errors2.length
                response.result = true
            else
                errors2.unshift "Error(s) in '#{name_}' directive declaration."
        else
            errors2.unshift "Type specification '#{name_}' directive is missing argument(s)."

    if errors2.length
        response.error = errors2.join ' '
    response
