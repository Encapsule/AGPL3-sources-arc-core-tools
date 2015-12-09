(function() {
  module.exports = {
    ____types: "jsObject",
    ioCache: {
      ____types: "jsObject",
      inputsMap: {
        ____accept: "jsObject"
      },
      outputsMap: {
        ____accept: "jsObject"
      },
      typeConstraints: {
        ____types: "jsArray",
        element: {
          ____types: "jsString"
        }
      }
    },
    ioCacheReport: {
      ____types: "jsObject",
      bad: {
        ____types: "jsObject",
        missingInputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        },
        mislabeledInputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        },
        missingOutputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        },
        mislabeledOutputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        },
        superfluousInputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        },
        superfluousOutputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        }
      },
      good: {
        ____types: "jsObject",
        inputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        },
        outputs: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        }
      }
    }
  };

}).call(this);
