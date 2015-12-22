TYPELIB = require './arc_core_types'

# checkPropertyNameTypeConstraint =

module.exports = (propertyName_, typeConstraint_, namespaceReference_) ->
    response = error: null, result: null
    propertyReference = namespaceReference_[propertyName_]
    checkResponse = TYPELIB.check.inTypeSet
        value: propertyReference
        types: typeConstraint_
    if checkResponse.error
        response.error = checkResponse.error
        return response
    if checkResponse.result
        response.result = pass: true, reference: propertyReference
    else
        response.result = pass: false, reference: undefined
    response
