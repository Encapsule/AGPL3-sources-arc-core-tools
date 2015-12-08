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

module.exports =

    inputName: "FilterDAG Factory Request Object"
    inputDescription: "Developer-specified request object that models the system to be hosted by the generated FilterDAG object."
    inputFilterSpec:
        ____label: "FilterDAG Factory request object."
        ____description: "Request object containing a declarative model of a system to host in the generated FilterDAG object."
        ____types: "jsObject"

        dagID:
            ____label: "ID"
            ____description: "Globally-unique, version-independent, identifier string (e.g. IRUT) to assign the generated FilterDAG object."
            ____accept: "jsString"

        dagName:
            ____label: "Name"
            ____description: "Short-form name to assign the generated FilterDAG object."
            ____accept: "jsString"

        dagDescription:
            ____label: "Description"
            ____description: "Longer-form description to assign the generated FilterDAG object."
            ____accept: "jsString"

        dagSpecification:
            ____label: "FilterDAG Model"
            ____description: "Filter DAG system descriptor object passed to the FilterDAG factory."
            ____types: "jsObject"

            constraints:
                ____label: "FilterDAG System Constraints"
                ____description: "Filter DAG system data type and processing function declaration manifest."
                ____types: "jsObject"

                types:
                    ____label: "System Data Types"
                    ____description: "An array specifying the identity and semantics of data types to be used in the generated FilterDAG object."
                    ____types: "jsArray"
                    ____defaultValue: []

                    typeDescriptor:
                        ____label: "Data Type Descriptor"
                        ____description: "Describes the model of a single data type in the generated FilterDAG object."
                        ____types: "jsObject"

                        name:
                            ____label: "Type Name"
                            ____description: "Short-form unique name to assign to this data type (for machines)."
                            ____accept: "jsString"

                        label:
                            ____label: "Type Label"
                            ____description: "Longer-form desciptive moniker for this type (for humans)."
                            ____accept: [ "jsNull", "jsString" ]
                            ____defaultValue: null

                        description:
                            ____label: "Type Description"
                            ____description: "Longer-form desciption of this type (for humans)."
                            ____accept: [ "jsNull", "jsString" ]
                            ____defaultValue: null

                         filterSpec:
                             ____label: "Type Specification"
                             ____description: "JBUS Filter-format Filter Spec object."
                             ____accept: "jsObject"
                             ____defaultValue: { ____opaque: true }

                functions:
                    ____label: "System Functions"
                    ____description: "An array of FilterDAG function descriptor objects."
                    ____types: "jsArray"
                    ____defaultValue: []

                    functionDescriptor:
                        ____label: "Function Descriptor"
                        ____description: "Describes the model of a single request function to be used in the generated FilterDAG object."
                        ____types: "jsObject"

                        name:
                            ____label: "Function Name"
                            ____description: "Short-form unique name to assign to this function (for machines)."
                            ____accept: "jsString"

                        label:
                            ____label: "Function Label"
                            ____description: "Longer-form desciptive moniker for this function (for humans)."
                            ____accept: [ "jsNull", "jsString" ]
                            ____defaultValue: null

                        description:
                            ____label: "Function Description"
                            ____description: "Longer-form desciption of this function (for humans)."
                            ____accept: [ "jsNull", "jsString" ]
                            ____defaultValue: null

                        filterBinding:
                            ____label: "Filter Binding"
                            ____description: "Filter binding descriptor object."
                            ____types: "jsObject"

                            id:
                                ____label: "Filter ID"
                                ____description: "The IRUT operation ID of the Filter that implements this function."
                                ____accept: "jsString"

                            name:
                                ____label: "Filter Name"
                                ____description: "The operation Name of the Filter that implements this function (informational only)."
                                ____accept: [ "jsNull", "jsString" ]
                                ____defaultValue: null

                    
            model:
                ____label: "FilterDAG System Model"
                ____description: "FilterDAG system model descriptor object."
                ____types: "jsObject"


                inputs:
                    ____label: "System Inputs Model"
                    ____description: "An array of FilterDAG system input descriptor objects."
                    ____types: "jsArray"
                    ____defaultValue: []

                    inputDescriptor:
                        ____label: "System Input Descriptor"
                        ____description: "Describes an input to the FilterDAG reactive system."
                        ____types: "jsObject"

                        name:
                            ____label: "Input Name"
                            ____description: "Short-form name of the input."
                            ____types: "jsString"
                        label:
                            ____label: "Input Label"
                            ____description: "Short-form label of the input."
                            ____types: [ "jsNull", "jsString" ]
                            ____defaultValue: null
                        description:
                            ____label: "Input Description"
                            ____description: "Longer-form description of the input."
                            ____types: [ "jsNull", "jsString" ]
                            ____defaultValue: null
                        typeConstraint:
                            ____label: "Input Type Constraint Name"
                            ____description: "The input's associated data type name declared in the DAG specification's constraint object."
                            ____types: "jsString"


                outputs:
                    ____label: "System Outputs Model"
                    ____description: "An array of FilterDAG system output descriptor objects."
                    ____types: "jsArray"
                    ____defaultValue: []

                    outputDescriptor:
                        ____label: "System Input Descriptor"
                        ____description: "Describes an input to the FilterDAG reactive system."
                        ____types: "jsObject"

                        name:
                            ____label: "Output Name"
                            ____description: "Short-form name of the output."
                            ____types: "jsString"
                        label:
                            ____label: "Output Label"
                            ____description: "Short-form label of the output."
                            ____types: [ "jsNull", "jsString" ]
                            ____defaultValue: null
                        description:
                            ____label: "Output Description"
                            ____description: "Longer-form description of the output."
                            ____types: [ "jsNull", "jsString" ]
                            ____defaultValue: null
                        typeConstraint:
                            ____label: "Output Type Constraint Name"
                            ____description: "The output's associated data type name declared in the DAG specification's constraint object."
                            ____types: "jsString"


                transformations:
                    ____label: "System Transformations Model"
                    ____description: "An array of FilterDAG system transformation descriptor objects."
                    ____types: "jsArray"
                    ____defaultValue: []

                    transformDescriptor:
                        ____label: "Transform Descriptor"
                        ____description: "Describes a single data transformation within the generated FilterDAG object."
                        ____types: "jsObject"

                        name:
                            ____label: "Transformation Name"
                            ____description: "Short-form name of this transformation."
                            ____accept: "jsString"

                        label:
                            ____label: "Transformation Label"
                            ____description: "Short-form label of this transformation for documentation."
                            ____accept: [ "jsNull", "jsString" ]
                            ____defaultValue: null

                        description:
                            ____label: "Transformation Description"
                            ____description: "Longer-form description of this transformation for documentation."
                            ____accept: [ "jsNull", "jsString" ]
                            ____defaultValue: null

                        inputModels:
                            ____label: "System Input Models"
                            ____description: "An array of system input model descriptors."
                            ____types: "jsArray"

                            inputModelDescriptor:
                                ____label: "System Input Model Descriptor",
                                ____description: "System input model descriptor object."
                                ____types: "jsObject"

                                inputModel:
                                    ____label: "System Output Model"
                                    ____description: "The name of the FilterDAG input or output model to bind to the transformation's output."
                                    ____accept: "jsString"

                                requestMapping:
                                    ____label: "Function Request Mapping"
                                    ____description: "A dot delimited string starting w/`request` that indicates the mapping from inputModel to function request object."
                                    ____accept: "jsString"
                                    ____defaultValue: "request"


                        outputModel:
                            ____label: "System Output Model"
                            ____description: "The name of the FilterDAG input or output model to bind to the transformation's output."
                            ____accept: "jsString"


                        functionConstraint:
                            ____label: "System Function Constraint",
                            ____description: "The name of the FilterDAG constraint function that implements the desired transformation."
                            ____accept: "jsString"


            context:
                ____label: "FilterDAG System Context"
                ____description: "Developer-specified common context object (opaque to the FilterDAG factory) made available to all JBUS Filter objects bound into the generated FilterDAG object."
                ____accept: "jsObject"
                ____defaultValue: {}
