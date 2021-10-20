// discriminator2-factory-filter.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph")
    };


    const factoryResponse = arccore.filter.create({
        operationID: "jNWiDDr0Tie_1fskDUa7XQ",
        operationName: "Request Discriminator Filter Factory",
        operationDescription: "This filter synthesizes and returns a discriminator filter specialized on N input filters.",

        inputFilterSpec: require("./discriminator2-factory-filter-input-spec"),
        outputFilterSpec: { ____accept: "jsObject" }, // specialized filter object instance

        bodyFunction: function(request_) {
            return { error: null };
        } // bodyFunction
    });

})();


