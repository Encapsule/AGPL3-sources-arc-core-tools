(function() {
  module.exports = {
    ____label: "FilterDAG Transform Model Descriptor",
    ____description: "FilterDAG transform model processor response object.",
    ____types: "jsObject",
    digraph: {
      ____label: "Transform Digraph",
      ____description: "Reference to a Encapsule/jsgraph DirectedGraph model of the FilterDAG transform model.",
      ____accept: "jsObject"
    },
    dependencies: {
      ____label: "Tranform Digraph Dependencies",
      ____description: "Models and constraints that the transform digraph declares as dependencies.",
      ____types: "jsObject",
      models: {
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
        },
        transforms: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        }
      },
      constraints: {
        ____types: "jsObject",
        functions: {
          ____types: "jsArray",
          element: {
            ____types: "jsString"
          }
        }
      }
    }
  };

}).call(this);
