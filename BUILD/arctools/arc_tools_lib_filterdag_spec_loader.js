/*
----------------------------------------------------------------------
 
           +---+---+---+---+
 chaos --> | J | B | U | S | --> order
           +---+---+---+---+

Copyright (C) 2015 Encapsule.io Bellevue, WA USA

JBUS is licensed under the GNU Affero General Public License v3.0. 

Please consult the included LICENSE file for agreement terms.

----------------------------------------------------------------------
*/

var ARC_CORE = require('../arccore');

var response = ARC_CORE.filter.create({
    operationID: "XkLs1-s1SFGTchfd9eZqYA",
    operationName: "FilterDAG Factory Request Loader",
    operationDescription: "Loads a FilterDAG factory request object loader.",
    inputFilterSpec: {
        ____label: "FilterDAG Factory Wrapper",
        ____description: "Wraps an IRUT-identified FilterDAG factory request object.",
        ____types: "jsObject",
        'XkLs1-s1SFGTchfd9eZqYA': {
            ____label: "FilterDAG Specification Object",
            ____description: "An unparsed FilterDAG factory request object to be compiled into a FilterDAG manifest.",
            ____accept: "jsObject",
            ____defaultValue: {
                generateID: true,
                dagID: "",
                dagName: "",
                dagDescription: "",
                dagSpecification: {
                    model: {
                        inputs: [],
                        transformations: [],
                        outputs: []
                    },
                    constraints: {
                        types: [],
                        functons: []
                    }
                }
            }
        }
    },
    bodyFunction: function(request_) {
        var response = { error: null, result: request_ };
        var result = request_['XkLs1-s1SFGTchfd9eZqYA'];
        if (result.generateID) {
            result.dagID = ARC_CORE.identifier.irut.fromEther();
            delete result.generateID;
        }
        response.result = result;
        return response;
    }
});

if (response.error) {
    throw new Error(response.error);
}
module.exports = response.result;
