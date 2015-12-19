
FILTERLIB = require './arc_core_filter'

# --------------------------------------------------------------------------
# Internal algorithm implementation.

buildMergedFilterSpecDigraphModel =
    require './arc_core_type_discriminator_merged_model_digraph'

partitionAndColorMergedModelByAmbiguity =
    require './arc_core_type_discriminator_ambiguity_detector'

deduceRuntimeParseDigraphFromAmbiguityColoring =
    require './arc_core_type_discriminator_runtime_parse_digraph'

# --------------------------------------------------------------------------

filterlibResponse = FILTERLIB.create

    operationID: "5A8uDJunQUm1w-HcBPQ6Gw"
    operationName: "Request Discriminator Filter Factory"
    operationDescription: "Manufactures a new Filter object that routes its request to 1:N registered sub-Filter objects based on analysis of the request signature."

    inputFilterSpec:
        ____label: "Array of Filters"
        ____description: "An array Filter objects that define the set of request signatures to be analyzed."
        ____types: "jsArray"
        filter:
            ____label: "Sub-Filter Object"
            ____description: "Pre-constructed Filter object."
            ____accept: "jsObject"

    bodyFunction: (request_) ->
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while !inBreakScope
            inBreakScope = true

            console.log "STAGE 1: MERGED FILTER SPEC GRAPH BUILDER OUTPUT"
            innerResponse = buildMergedFilterSpecDigraphModel request_
            if innerResponse.error
                errors.unshift innerResponse.error
                break
            mergedFilterSpecDigraphModel = innerResponse.result
            console.log mergedFilterSpecDigraphModel.digraph.toJSON(undefined, 4)

            console.log "STAGE 2: PARTITION AND COLOR GRAPH BY AMBIGUITY"
            innerResponse = partitionAndColorMergedModelByAmbiguity mergedFilterSpecDigraphModel.digraph
            console.log mergedFilterSpecDigraphModel.digraph.toJSON(undefined, 4)

            if innerResponse.error
                errors.unshift innerResponse.error
                errors.unshift "Internal error analyzing input filter array: "
                break

            ambiguityModel = innerResponse.result

            # Exit with error if the input filter set cannot be discriminated.
            ambiguityModel.ambiguousFilterSpecificationErrors.forEach (error_) -> errors.push error_
            if errors.length
                break

            innerResponse = deduceRuntimeParseDigraphFromAmbiguityColoring ambiguityModel
            if innerResponse.error
                errors.unshift innerResponse.error
                break

            response.result = ambiguityModel
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
