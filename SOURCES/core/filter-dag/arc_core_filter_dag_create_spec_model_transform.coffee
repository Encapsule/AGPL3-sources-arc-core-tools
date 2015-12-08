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
FILTERDAGREQFS = require './arc_core_filter_dag_create_ifs'
FILTERDAGXFORMFS = require './arc_core_filter_dag_create_spec_model_transform_ofs'
GRAPHLIB = require './arc_core_graph'

filterlibResponse = FILTERLIB.create
    operationID: 'h6w300MIQaegK6rK9fDeOw'
    operationName: "FilterDAG Transformation Digraph Generator"
    operationDescription: "Creates a digraph model of the functional transformations to be modeled by a FilterDAG reactive system host."

    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.transformations

    bodyFunction: (request_) ->
        response = error: null, result: null
        errors = []
        inBreakScope = false
        while not inBreakScope
            inBreakScope = true

            # Determine is the input array contains eny elements.
            if not request_.length
                errors.unshift "You must specify at least one transformation descriptor."
                break

            # Create the transform directed graph model.
            innerResponse = GRAPHLIB.directed.create
                name: "Model Transformations Digraph"
                description: "Directed graph model of a FilterDAG reactive data transformation system."
            if innerResponse.error
                errors.unshift innerResponse.error
                errors.unshift "Interal error allocating digraph:"
                break
            transformDigraph = innerResponse.result
            transformDigraphDependencies =
                models:
                    inputs: []
                    outputs: []
                    transforms: []
                constraints:
                    functions: []

            index = 0
            request_.forEach (transformation_) ->

                # Evaluate a specific transformation descriptor object.

                if transformDigraph.isVertex transformation_.name
                    errors.unshift "Transformation '#{transformation_.name}' illegally re-defined."
                    return

                transformDigraphDependencies.models.transforms.push transformation_.name

                if not transformation_.inputModels.length
                    errors.unshift "Transformation '#{transformation_.name}' must declare at least one input model."
                    return

                if transformDigraph.isVertex transformation_.outputModel
                    vertexProperties = transformDigraph.getVertexProperty(transformation_.outputModel)
                    if vertexProperties.type != "value"
                        errors.unshift "Transform '#{transformation_.name}' specifies an illegal output model " +
                            "'#{transformation_.outputModel}' of type '#{vertexPropertes.type}'."
                        return
                    if transformDigraph.inDegree transformation_.outputModel
                        edge = transformDigraph.inEdges(transformation_.outputModel)[0]
                        errors.unshift "Transformation '#{transformation_.name}' specifies output model " +
                            "'#{transformation_.outputModel}' that is already specified as the output of transformation '#{edge.u}'."
                        return
                else
                    transformDigraph.addVertex u: transformation_.outputModel, p: { type: "value" }
                    if transformDigraphDependencies.models.outputs.indexOf(transformation_.outputModel) == -1
                        transformDigraphDependencies.models.outputs.push transformation_.outputModel

                transformDigraph.addVertex u: transformation_.name, p: { type: "transformation" }

                if transformDigraphDependencies.constraints.functions.indexOf(transformation_.functionConstraint) == -1
                    transformDigraphDependencies.constraints.functions.push transformation_.functionConstraint

                transformDigraph.addEdge e: { u: transformation_.name, v: transformation_.outputModel }, p: { type: "output" }

                if transformation_.inputModels.length

                    transformation_.inputModels.forEach (inputModel_) ->
                        if transformDigraph.isVertex inputModel_.inputModel
                            if transformDigraph.getVertexProperty(inputModel_.inputModel).type != "value"
                                errors.unshift "Transform '#{transformation_.name}' specifies an illegal input model '#{inputModel_.inputModel}'."
                                return
                        else
                            transformDigraph.addVertex u: inputModel_.inputModel, p: { type: "value" }

                            if transformDigraphDependencies.models.inputs.indexOf(inputModel_.inputModel)
                                transformDigraphDependencies.models.inputs.push inputModel_.inputModel

                        transformDigraph.addEdge e: { u: inputModel_.inputModel, v: transformation_.name }, p: { type: "input", mapping: inputModel_.requestMapping }

                else
                    errors.unshift "transformations[" + index + "] declares no input models."

                index++

            if errors.length
                break

            # Do some static analysis on the transform digraph and ensure it's acyclic

            startVertices = transformDigraph.getRootVertices()
            if not startVertices.length
                errors.unshift "Illegal DAG model declares no external system input values."
                startVertices.push transformDigraph.getVertices()[0]

            backEdges = []

            cycleDetector =
                backEdge: (request_) ->
                    backEdges.push request_.e
                    true

            dftResponse = GRAPHLIB.directed.depthFirstTraverse digraph: transformDigraph, visitor: cycleDetector, options: startVertices: startVertices
            if dftResponse.error
                errors.unshift dftResponse.error
                break

            if backEdges.length
                errors.unshift "Illegal cycle in DAG model introduced by edge: '#{JSON.stringify(backEdges)}'."
                break

            response.result =
                digraph: transformDigraph.toObject()
                dependencies: transformDigraphDependencies

             #console.log "\n\n[#{this.operationName}:#{this.operationID}]:"
             #console.log JSON.stringify(response, undefined, 4)

        if errors.length
            response.error = errors.join " "

        response

    outputFilterSpec: FILTERDAGXFORMFS


if filterlibResponse.error
    throw new Error filterlibResponse.error

module.exports = filterlibResponse.result
