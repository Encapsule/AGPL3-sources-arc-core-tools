
FILTERLIB = require './arc_core_filter'

# --------------------------------------------------------------------------
# Internal algorithm implementation.

createMergedFilterSpecModel =
    require './arc_core_type_discriminator_merged_model_digraph'

createAmbiguityModel =
    require './arc_core_type_discriminator_ambiguity_detector'

createRuntimeParseModel =
    require './arc_core_type_discriminator_runtime_parse_digraph'

createDiscriminatorFilterRuntime =
    require './arc_core_type_discriminator_runtime'

# --------------------------------------------------------------------------

filterlibResponse = FILTERLIB.create

    operationID: "5A8uDJunQUm1w-HcBPQ6Gw"
    operationName: "Request Discriminator Filter Factory"
    operationDescription: "Manufactures a new Filter object that routes its request to 1:N registered sub-Filter objects based on analysis of the request signature."

    inputFilterSpec:
        ____label: "Request Object"
        ____description: "Discriminator filter factory request object."
        ____types: "jsObject"
        options:
            ____label: "Options Object"
            ____description: "Factory options object."
            ____types: "jsObject"
            ____defaultValue: {}
            action:
                ____label: "Action Flag"
                ____description: "The action to be taken by the generated Discriminator Filter."
                ____accept: "jsString"
                ____inValueSet: [ "getFilterID", "getFilter", "routeRequest" ]
                ____defaultValue: "getFilterID"
        filters:
            ____label: "Array of Filters"
            ____description: "An array Filter objects that define the set of request signatures to be analyzed."
            ____types: "jsArray"
            filter:
                ____label: "Sub-Filter Object"
                ____description: "Pre-constructed Filter object."
                ____types: "jsObject"
                filterDescriptor:
                    ____accept: "jsObject"
                request:
                    ____accept: "jsFunction"

    bodyFunction: (request_) ->
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while !inBreakScope
            inBreakScope = true

            if request_.filters.length < 2
                errors.unshift "Invalid request. You must specify an array of two or more Filter objects to construct a Discriminator Filter."
                break

            console.log "STAGE 1: MERGED FILTER SPEC GRAPH BUILDER OUTPUT"
            innerResponse = createMergedFilterSpecModel request_.filters
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            mergedModel = innerResponse.result
            console.log mergedModel.digraph.toJSON(undefined, 4)

            console.log "STAGE 2: PARTITION AND COLOR GRAPH BY AMBIGUITY"
            innerResponse = createAmbiguityModel mergedModel.digraph

            if innerResponse.error
                errors.unshift innerResponse.error
                errors.unshift "Internal error analyzing input filter array: "
                break
            ambiguityModel = innerResponse.result
            console.log ambiguityModel.digraph.toJSON(undefined, 4)

            # Exit with error if the input filter set cannot be discriminated.
            # Note that we may relax this policy enforcement later with an options object flag.

            console.log "... checking for ambiguities in the ambiguity model"
            ambiguityModel.ambiguousFilterSpecificationErrors.forEach (error_) -> errors.push error_
            if errors.length
                break

            console.log "STAGE 3: GIVEN AN UNAMBIGUOUS MODEL DIGRAPH CREATE RUNTIME MODEL"
            innerResponse = createRuntimeParseModel ambiguityModel.digraph
            if innerResponse.error
                errors.unshift innerResponse.error
                break

            runtimeParseDigraph = innerResponse.result
            console.log runtimeParseDigraph.toJSON undefined, 4

            console.log "STAGE 4: GENERATE DISCRIMINATOR RUNTIME FILTER"
            innerResponse = createDiscriminatorFilterRuntime.request
                filterTable: mergedModel.filterTable
                parseDigraph: runtimeParseDigraph
                options: request_.options

            if innerResponse.error
                errors.unshift innerResponse.error
                break

            runtimeFilter = innerResponse.result

            response.result = runtimeFilter

            break

        if errors.length
            response.error = errors.join(" ")
        response

    outputName: "Type Desrimination Filter Output"
    outputDescriptor: "A generated Type Descriminator Filter."
    outputFilterSpec:
        ____opaque: true

if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
