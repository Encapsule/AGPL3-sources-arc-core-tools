module.exports =
    ____types: "jsObject"

    ioCache:
        ____types: "jsObject"
        inputsMap:
            ____accept: "jsObject"
            ____label: "Input Models Map"
            ____description: "Map of declared input models."
        outputsMap:
            ____accept: "jsObject"
            ____label: "Output Models Map"
            ____description: "Map of declared output models."
        typeConstraints:
            ____types: "jsArray"
            element:
                ____types: "jsString"

    ioCacheReport:
        ____types: "jsObject"
        bad:
            ____types: "jsObject"
            missingInputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
            mislabeledInputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
            missingOutputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
            mislabeledOutputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
            superfluousInputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
            superfluousOutputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
        good:
            ____types: "jsObject"
            inputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
            outputs:
                ____types: "jsArray"
                element:
                    ____types: "jsString"
