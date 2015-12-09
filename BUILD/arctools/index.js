module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

	var ARC_CORE = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./arc_core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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


/***/ }
/******/ ]);