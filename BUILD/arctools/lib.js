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

	module.exports = {
	    meta: __webpack_require__(23),
	    commander: __webpack_require__(70),
	    chalk: __webpack_require__(14),
	    arccore: __webpack_require__(29),
	    fileDirEnumSync: __webpack_require__(63),
	    jsrcFileLoaderSync: __webpack_require__(65),
	    stringToFileSync: __webpack_require__(66),
	    filterdagSpecLoader: __webpack_require__(64),
	    createToolBanner: __webpack_require__(67),
	    clistyles: __webpack_require__(24)
	};


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

	(function() {
	  var FILTER, FILTERFACTORY;

	  FILTERFACTORY = __webpack_require__(36);

	  FILTER = module.exports = {
	    create: FILTERFACTORY
	  };

	}).call(this);


/***/ },
/* 2 */
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

	(function() {
	  var IDENTIFIER;

	  IDENTIFIER = module.exports = {};

	  IDENTIFIER.hash = __webpack_require__(55);

	  IDENTIFIER.irut = __webpack_require__(56);

	}).call(this);


/***/ },
/* 3 */
/***/ function(module, exports) {

	
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

	(function() {
	  module.exports = {
	    inputName: "FilterDAG Factory Request Object",
	    inputDescription: "Developer-specified request object that models the system to be hosted by the generated FilterDAG object.",
	    inputFilterSpec: {
	      ____label: "FilterDAG Factory request object.",
	      ____description: "Request object containing a declarative model of a system to host in the generated FilterDAG object.",
	      ____types: "jsObject",
	      dagID: {
	        ____label: "ID",
	        ____description: "Globally-unique, version-independent, identifier string (e.g. IRUT) to assign the generated FilterDAG object.",
	        ____accept: "jsString"
	      },
	      dagName: {
	        ____label: "Name",
	        ____description: "Short-form name to assign the generated FilterDAG object.",
	        ____accept: "jsString"
	      },
	      dagDescription: {
	        ____label: "Description",
	        ____description: "Longer-form description to assign the generated FilterDAG object.",
	        ____accept: "jsString"
	      },
	      dagSpecification: {
	        ____label: "FilterDAG Model",
	        ____description: "Filter DAG system descriptor object passed to the FilterDAG factory.",
	        ____types: "jsObject",
	        constraints: {
	          ____label: "FilterDAG System Constraints",
	          ____description: "Filter DAG system data type and processing function declaration manifest.",
	          ____types: "jsObject",
	          types: {
	            ____label: "System Data Types",
	            ____description: "An array specifying the identity and semantics of data types to be used in the generated FilterDAG object.",
	            ____types: "jsArray",
	            ____defaultValue: [],
	            typeDescriptor: {
	              ____label: "Data Type Descriptor",
	              ____description: "Describes the model of a single data type in the generated FilterDAG object.",
	              ____types: "jsObject",
	              name: {
	                ____label: "Type Name",
	                ____description: "Short-form unique name to assign to this data type (for machines).",
	                ____accept: "jsString"
	              },
	              label: {
	                ____label: "Type Label",
	                ____description: "Longer-form desciptive moniker for this type (for humans).",
	                ____accept: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              description: {
	                ____label: "Type Description",
	                ____description: "Longer-form desciption of this type (for humans).",
	                ____accept: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              filterSpec: {
	                ____label: "Type Specification",
	                ____description: "JBUS Filter-format Filter Spec object.",
	                ____accept: "jsObject",
	                ____defaultValue: {
	                  ____opaque: true
	                }
	              }
	            }
	          },
	          functions: {
	            ____label: "System Functions",
	            ____description: "An array of FilterDAG function descriptor objects.",
	            ____types: "jsArray",
	            ____defaultValue: [],
	            functionDescriptor: {
	              ____label: "Function Descriptor",
	              ____description: "Describes the model of a single request function to be used in the generated FilterDAG object.",
	              ____types: "jsObject",
	              name: {
	                ____label: "Function Name",
	                ____description: "Short-form unique name to assign to this function (for machines).",
	                ____accept: "jsString"
	              },
	              label: {
	                ____label: "Function Label",
	                ____description: "Longer-form desciptive moniker for this function (for humans).",
	                ____accept: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              description: {
	                ____label: "Function Description",
	                ____description: "Longer-form desciption of this function (for humans).",
	                ____accept: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              filterBinding: {
	                ____label: "Filter Binding",
	                ____description: "Filter binding descriptor object.",
	                ____types: "jsObject",
	                id: {
	                  ____label: "Filter ID",
	                  ____description: "The IRUT operation ID of the Filter that implements this function.",
	                  ____accept: "jsString"
	                },
	                name: {
	                  ____label: "Filter Name",
	                  ____description: "The operation Name of the Filter that implements this function (informational only).",
	                  ____accept: ["jsNull", "jsString"],
	                  ____defaultValue: null
	                }
	              }
	            }
	          }
	        },
	        model: {
	          ____label: "FilterDAG System Model",
	          ____description: "FilterDAG system model descriptor object.",
	          ____types: "jsObject",
	          inputs: {
	            ____label: "System Inputs Model",
	            ____description: "An array of FilterDAG system input descriptor objects.",
	            ____types: "jsArray",
	            ____defaultValue: [],
	            inputDescriptor: {
	              ____label: "System Input Descriptor",
	              ____description: "Describes an input to the FilterDAG reactive system.",
	              ____types: "jsObject",
	              name: {
	                ____label: "Input Name",
	                ____description: "Short-form name of the input.",
	                ____types: "jsString"
	              },
	              label: {
	                ____label: "Input Label",
	                ____description: "Short-form label of the input.",
	                ____types: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              description: {
	                ____label: "Input Description",
	                ____description: "Longer-form description of the input.",
	                ____types: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              typeConstraint: {
	                ____label: "Input Type Constraint Name",
	                ____description: "The input's associated data type name declared in the DAG specification's constraint object.",
	                ____types: "jsString"
	              }
	            }
	          },
	          outputs: {
	            ____label: "System Outputs Model",
	            ____description: "An array of FilterDAG system output descriptor objects.",
	            ____types: "jsArray",
	            ____defaultValue: [],
	            outputDescriptor: {
	              ____label: "System Input Descriptor",
	              ____description: "Describes an input to the FilterDAG reactive system.",
	              ____types: "jsObject",
	              name: {
	                ____label: "Output Name",
	                ____description: "Short-form name of the output.",
	                ____types: "jsString"
	              },
	              label: {
	                ____label: "Output Label",
	                ____description: "Short-form label of the output.",
	                ____types: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              description: {
	                ____label: "Output Description",
	                ____description: "Longer-form description of the output.",
	                ____types: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              typeConstraint: {
	                ____label: "Output Type Constraint Name",
	                ____description: "The output's associated data type name declared in the DAG specification's constraint object.",
	                ____types: "jsString"
	              }
	            }
	          },
	          transformations: {
	            ____label: "System Transformations Model",
	            ____description: "An array of FilterDAG system transformation descriptor objects.",
	            ____types: "jsArray",
	            ____defaultValue: [],
	            transformDescriptor: {
	              ____label: "Transform Descriptor",
	              ____description: "Describes a single data transformation within the generated FilterDAG object.",
	              ____types: "jsObject",
	              name: {
	                ____label: "Transformation Name",
	                ____description: "Short-form name of this transformation.",
	                ____accept: "jsString"
	              },
	              label: {
	                ____label: "Transformation Label",
	                ____description: "Short-form label of this transformation for documentation.",
	                ____accept: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              description: {
	                ____label: "Transformation Description",
	                ____description: "Longer-form description of this transformation for documentation.",
	                ____accept: ["jsNull", "jsString"],
	                ____defaultValue: null
	              },
	              inputModels: {
	                ____label: "System Input Models",
	                ____description: "An array of system input model descriptors.",
	                ____types: "jsArray",
	                inputModelDescriptor: {
	                  ____label: "System Input Model Descriptor",
	                  ____description: "System input model descriptor object.",
	                  ____types: "jsObject",
	                  inputModel: {
	                    ____label: "System Output Model",
	                    ____description: "The name of the FilterDAG input or output model to bind to the transformation's output.",
	                    ____accept: "jsString"
	                  },
	                  requestMapping: {
	                    ____label: "Function Request Mapping",
	                    ____description: "A dot delimited string starting w/`request` that indicates the mapping from inputModel to function request object.",
	                    ____accept: "jsString",
	                    ____defaultValue: "request"
	                  }
	                }
	              },
	              outputModel: {
	                ____label: "System Output Model",
	                ____description: "The name of the FilterDAG input or output model to bind to the transformation's output.",
	                ____accept: "jsString"
	              },
	              functionConstraint: {
	                ____label: "System Function Constraint",
	                ____description: "The name of the FilterDAG constraint function that implements the desired transformation.",
	                ____accept: "jsString"
	              }
	            }
	          }
	        },
	        context: {
	          ____label: "FilterDAG System Context",
	          ____description: "Developer-specified common context object (opaque to the FilterDAG factory) made available to all JBUS Filter objects bound into the generated FilterDAG object.",
	          ____accept: "jsObject",
	          ____defaultValue: {}
	        }
	      }
	    }
	  };

	}).call(this);


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* 
	   Encapsule/jsgraph/src/helper-functions.js

	   Copyright (C) 2014-2015 Christopher D. Russell

	   This library is published under the MIT License and is part of the
	   Encapsule Project System in Cloud (SiC) open service architecture.
	   Please follow https://twitter.com/Encapsule for news and updates
	   about jsgraph and other time saving libraries that do amazing things
	   with in-memory data on Node.js and HTML.
	*/

	var JSType = function(reference_) {
	    return Object.prototype.toString.call(reference_);
	};

	/*
	  request = {
	      ref: reference
	      types: string or array of strings (e.g. '[object Object]')
	  }
	  response = {
	      error: null (success) or string (error)
	      result: null (failure) or JSType of request.ref (success)
	  }

	*/
	var JSTypeInTypeSet = function(request_) {
	    var response = { error: null, result: null };
	    var errors = [];
	    var allowedTypeSet = {};
	    var jstype = JSType(request_.types);
	    switch (jstype) {
	    case '[object String]':
	        allowedTypeSet = [ request_.types ];
	        break;
	    case '[object Array]':
	        allowedTypeSet = request_.types;
	        break;
	    default:
	        errors.unshift("Invalid request.types value type '" + jstype + "'. Expected either '[object String]' or '[object Array]'.");
	        break;
	    }
	    jstype = JSType(request_.description);
	    if (jstype !== '[object String]') {
	        errors.unshift("Invalid request.description value type '" + jstype + "'. Expected '[object String]'.");
	    }
	    if (!errors.length) {
	        jsType = JSType(request_.ref);
	        response.result = (allowedTypeSet.indexOf(jsType) !== -1) && jsType || null;
	    }
	    if (!response.result) {
	        response.guidance = request_.description + " value type '" + jstype + "' is invalid. Expected one of [" + allowedTypeSet.join(',') + "].";
	    }
	    if (errors.length) {
	        errors.unshift("JSTypeInTypeSet failed:");
	        response.error = errors.join(' ');
	    }
	    return response;

	};

	 var setPropertyValueIfUndefined = function(reference_, propertyName_, valueOrFunction_) {
	     var type = JSType(reference_[propertyName_]);
	    if (type === '[object Undefined]') {
	        type = JSType(valueOrFunction_);
	        if (type !== '[object Function]') {
	            reference_[propertyName_] = valueOrFunction_;
	        } else {
	            reference_[propertyName_] = valueOrFunction_();
	        }
	        return true;
	    }
	    return false;
	};

	module.exports = {
	    JSType: JSType,
	    setPropertyValueIfUndefined: setPropertyValueIfUndefined
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	----------------------------------------------------------------------
	 
	           +---+---+---+---+
	 chaos --> | J | B | U | S | --> order
	           +---+---+---+---+

	Copyright (C) 2015 Encapsule.io Bellevue, WA USA

	This software is licensed under the terms of the GNU Affero General
	Public License v3.0.

	Please review the included LICENSE file for specific agreement terms.
	See also: https://opensource.org/licenses/AGPL-3.0

	Source code:   https://github.com/encapsule.jbus
	Documentation: https://encapsule.io/projects/jbus/docs/common
	Licensing:     https://encapsule.io/licening

	----------------------------------------------------------------------
	 */

	(function() {
	  var jbus;

	  jbus = {};

	  jbus.common = {};

	  jbus.common.types = module.exports = {};

	  jbus.common.types.codes = __webpack_require__(9);

	  jbus.common.types.convert = __webpack_require__(21);

	  jbus.common.types.check = __webpack_require__(62);

	}).call(this);


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
	  Encapsule/jsgraph/src/digraph-algorithm-common-colors.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/


	// Encapsule/jsgraph/src/digraph-color.js
	//

	// Color ordinals used by directed graph algorithms.

	module.exports = {
	    white: 0,
	    gray: 1,
	    black: 2
	};



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* --------------------------------------------------------------------------

	   The MIT License (MIT)

	   Copyright (c) 2014-2015 Christopher D. Russell

	   Permission is hereby granted, free of charge, to any person obtaining a copy
	   of this software and associated documentation files (the "Software"), to deal
	   in the Software without restriction, including without limitation the rights
	   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	   copies of the Software, and to permit persons to whom the Software is
	   furnished to do so, subject to the following conditions:

	   The above copyright notice and this permission notice shall be included in all
	   copies or substantial portions of the Software.

	   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	   SOFTWARE.

	  This library is part of the Encapsule Project System in Cloud (SiC) open service
	  architecture. Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things with in-memory
	  data on Node.js and HTML.  https://github.com/encapsule http://blog.encapsule.org

	-------------------------------------------------------------------------- */

	var jsgraph = module.exports = {

	    // Directed graph support
	    directed: {

	        ////
	        // Create a DirectedGraph container object.
	        //
	        // var response = jsgraph.directed.create(request);
	        //
	        // request = Undefined, JSON string, or data object [1]
	        //
	        // response = {
	        //     error: null or string explaining why result is null
	        //     result: DirectedGraph container object or null if error
	        // }
	        //
	        // Notes:
	        //
	        // [1] see DirectedGraph.toJSON/toObject methods.
	        //
	        ////
	        create: __webpack_require__(16).createDirectedGraph,

	        // Directed graph transposition algorithm.
	        // Creates a new DirectedGraph container object that's identical
	        // to a caller-specified digraph except that the direction of the
	        // the edges are reverese in the result digraph. Note that if present,
	        // vertex and edge properties in the source digraph are copied by
	        // reference to the result digraph.
	        transpose: __webpack_require__(32),

	        // Directed graph breadth-first traversal visitor algorithm.
	        breadthFirstTraverse: __webpack_require__(30),

	        // Directed graph depth-first traversal visitor algorithm.
	        depthFirstTraverse: __webpack_require__(31),

	        // ADVANCED

	        // Color constant hashtable (advanced).
	        colors: __webpack_require__(7),

	        // Directed graph traversal context factory (advanced).
	        createTraversalContext: __webpack_require__(17)

	    }
	};




/***/ },
/* 9 */
/***/ function(module, exports) {

	
	/*
	----------------------------------------------------------------------
	 
	           +---+---+---+---+
	 chaos --> | J | B | U | S | --> order
	           +---+---+---+---+

	Copyright (C) 2015 Encapsule.io Bellevue, WA USA

	This software is licensed under the terms of the GNU Affero General
	Public License v3.0.

	Please review the included LICENSE file for specific agreement terms.
	See also: https://opensource.org/licenses/AGPL-3.0

	Source code:   https://github.com/encapsule.jbus
	Documentation: https://encapsule.io/projects/jbus/docs/common
	Licensing:     https://encapsule.io/licening

	----------------------------------------------------------------------
	 */

	(function() {
	  'use strict';
	  var MODULE;

	  MODULE = {
	    __undefined: 0,
	    __null: 1,
	    __boolean: 2,
	    __string: 3,
	    __number: 4,
	    __object: 5,
	    __array: 6,
	    __function: 7,
	    __GUARD: 8
	  };

	  Object.freeze(MODULE);

	  module.exports = MODULE;

	}).call(this);


/***/ },
/* 10 */
/***/ function(module, exports) {

	
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

	(function() {
	  var ARC_CORE_UTIL;

	  ARC_CORE_UTIL = {};

	  ARC_CORE_UTIL.deepCopy = function(ref_) {
	    var flags, instance, key;
	    if ((ref_ == null) || typeof ref_ !== 'object') {
	      return ref_;
	    }
	    if (ref_ instanceof Date) {
	      return new Date(ref_.getTime());
	    }
	    if (ref_ instanceof RegExp) {
	      flags = '';
	      if (object_.global != null) {
	        flags += 'g';
	      }
	      if (object_.ignoreCase != null) {
	        flags += 'i';
	      }
	      if (object_.multiline != null) {
	        flags += 'm';
	      }
	      if (object_.sticky != null) {
	        flags += 'y';
	      }
	      return new RegExp(ref_.source, flags);
	    }
	    instance = new ref_.constructor();
	    for (key in ref_) {
	      instance[key] = ARC_CORE_UTIL.deepCopy(ref_[key]);
	    }
	    return instance;
	  };

	  ARC_CORE_UTIL.clone = function(ref_) {
	    return ARC_CORE_UTIL.deepCopy(ref_);
	  };

	  ARC_CORE_UTIL.dictionaryLength = function(ref_) {
	    return Object.keys(ref_).length;
	  };

	  ARC_CORE_UTIL.getEpochTime = function() {
	    return Math.round(new Date().getTime() / 1000.0);
	  };

	  module.exports = ARC_CORE_UTIL;

	}).call(this);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

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

		
		/*
		----------------------------------------------------------------------

		           +---+---+---+---+
		 chaos --> | J | B | U | S | --> order
		           +---+---+---+---+

		Copyright (C) 2015 Encapsule.io Bellevue, WA USA

		This software is licensed under the terms of the GNU Affero General
		Public License v3.0.

		Please review the included LICENSE file for specific agreement terms.
		See also: https://opensource.org/licenses/AGPL-3.0

		Source code:   https://github.com/encapsule.jbus
		Documentation: https://encapsule.io/projects/jbus/docs/common
		Licensing:     https://encapsule.io/licening

		----------------------------------------------------------------------
		 */

		(function() {
		  var ARC_BUILD, COMMON;

		  ARC_BUILD = __webpack_require__(20);

		  COMMON = module.exports = {
		    __meta: {
		      name: 'arccore',
		      version: ARC_BUILD.version,
		      codename: ARC_BUILD.codename,
		      author: ARC_BUILD.author,
		      buildID: ARC_BUILD.buildID
		    },
		    __bundle: {
		      murmurhash_js: __webpack_require__(11),
		      nodeuuid: __webpack_require__(19)
		    },
		    discriminator: {
		      create: __webpack_require__(48).request
		    },
		    filter: __webpack_require__(1),
		    filterDAG: __webpack_require__(30),
		    graph: __webpack_require__(7),
		    identifier: __webpack_require__(2),
		    types: __webpack_require__(5),
		    util: __webpack_require__(9)
		  };

		}).call(this);


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

		(function() {
		  var FILTER, FILTERFACTORY;

		  FILTERFACTORY = __webpack_require__(27);

		  FILTER = module.exports = {
		    create: FILTERFACTORY
		  };

		}).call(this);


	/***/ },
	/* 2 */
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

		(function() {
		  var IDENTIFIER;

		  IDENTIFIER = module.exports = {};

		  IDENTIFIER.hash = __webpack_require__(46);

		  IDENTIFIER.irut = __webpack_require__(47);

		}).call(this);


	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		
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

		(function() {
		  module.exports = {
		    inputName: "FilterDAG Factory Request Object",
		    inputDescription: "Developer-specified request object that models the system to be hosted by the generated FilterDAG object.",
		    inputFilterSpec: {
		      ____label: "FilterDAG Factory request object.",
		      ____description: "Request object containing a declarative model of a system to host in the generated FilterDAG object.",
		      ____types: "jsObject",
		      dagID: {
		        ____label: "ID",
		        ____description: "Globally-unique, version-independent, identifier string (e.g. IRUT) to assign the generated FilterDAG object.",
		        ____accept: "jsString"
		      },
		      dagName: {
		        ____label: "Name",
		        ____description: "Short-form name to assign the generated FilterDAG object.",
		        ____accept: "jsString"
		      },
		      dagDescription: {
		        ____label: "Description",
		        ____description: "Longer-form description to assign the generated FilterDAG object.",
		        ____accept: "jsString"
		      },
		      dagSpecification: {
		        ____label: "FilterDAG Model",
		        ____description: "Filter DAG system descriptor object passed to the FilterDAG factory.",
		        ____types: "jsObject",
		        constraints: {
		          ____label: "FilterDAG System Constraints",
		          ____description: "Filter DAG system data type and processing function declaration manifest.",
		          ____types: "jsObject",
		          types: {
		            ____label: "System Data Types",
		            ____description: "An array specifying the identity and semantics of data types to be used in the generated FilterDAG object.",
		            ____types: "jsArray",
		            ____defaultValue: [],
		            typeDescriptor: {
		              ____label: "Data Type Descriptor",
		              ____description: "Describes the model of a single data type in the generated FilterDAG object.",
		              ____types: "jsObject",
		              name: {
		                ____label: "Type Name",
		                ____description: "Short-form unique name to assign to this data type (for machines).",
		                ____accept: "jsString"
		              },
		              label: {
		                ____label: "Type Label",
		                ____description: "Longer-form desciptive moniker for this type (for humans).",
		                ____accept: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              description: {
		                ____label: "Type Description",
		                ____description: "Longer-form desciption of this type (for humans).",
		                ____accept: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              filterSpec: {
		                ____label: "Type Specification",
		                ____description: "JBUS Filter-format Filter Spec object.",
		                ____accept: "jsObject",
		                ____defaultValue: {
		                  ____opaque: true
		                }
		              }
		            }
		          },
		          functions: {
		            ____label: "System Functions",
		            ____description: "An array of FilterDAG function descriptor objects.",
		            ____types: "jsArray",
		            ____defaultValue: [],
		            functionDescriptor: {
		              ____label: "Function Descriptor",
		              ____description: "Describes the model of a single request function to be used in the generated FilterDAG object.",
		              ____types: "jsObject",
		              name: {
		                ____label: "Function Name",
		                ____description: "Short-form unique name to assign to this function (for machines).",
		                ____accept: "jsString"
		              },
		              label: {
		                ____label: "Function Label",
		                ____description: "Longer-form desciptive moniker for this function (for humans).",
		                ____accept: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              description: {
		                ____label: "Function Description",
		                ____description: "Longer-form desciption of this function (for humans).",
		                ____accept: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              filterBinding: {
		                ____label: "Filter Binding",
		                ____description: "Filter binding descriptor object.",
		                ____types: "jsObject",
		                id: {
		                  ____label: "Filter ID",
		                  ____description: "The IRUT operation ID of the Filter that implements this function.",
		                  ____accept: "jsString"
		                },
		                name: {
		                  ____label: "Filter Name",
		                  ____description: "The operation Name of the Filter that implements this function (informational only).",
		                  ____accept: ["jsNull", "jsString"],
		                  ____defaultValue: null
		                }
		              }
		            }
		          }
		        },
		        model: {
		          ____label: "FilterDAG System Model",
		          ____description: "FilterDAG system model descriptor object.",
		          ____types: "jsObject",
		          inputs: {
		            ____label: "System Inputs Model",
		            ____description: "An array of FilterDAG system input descriptor objects.",
		            ____types: "jsArray",
		            ____defaultValue: [],
		            inputDescriptor: {
		              ____label: "System Input Descriptor",
		              ____description: "Describes an input to the FilterDAG reactive system.",
		              ____types: "jsObject",
		              name: {
		                ____label: "Input Name",
		                ____description: "Short-form name of the input.",
		                ____types: "jsString"
		              },
		              label: {
		                ____label: "Input Label",
		                ____description: "Short-form label of the input.",
		                ____types: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              description: {
		                ____label: "Input Description",
		                ____description: "Longer-form description of the input.",
		                ____types: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              typeConstraint: {
		                ____label: "Input Type Constraint Name",
		                ____description: "The input's associated data type name declared in the DAG specification's constraint object.",
		                ____types: "jsString"
		              }
		            }
		          },
		          outputs: {
		            ____label: "System Outputs Model",
		            ____description: "An array of FilterDAG system output descriptor objects.",
		            ____types: "jsArray",
		            ____defaultValue: [],
		            outputDescriptor: {
		              ____label: "System Input Descriptor",
		              ____description: "Describes an input to the FilterDAG reactive system.",
		              ____types: "jsObject",
		              name: {
		                ____label: "Output Name",
		                ____description: "Short-form name of the output.",
		                ____types: "jsString"
		              },
		              label: {
		                ____label: "Output Label",
		                ____description: "Short-form label of the output.",
		                ____types: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              description: {
		                ____label: "Output Description",
		                ____description: "Longer-form description of the output.",
		                ____types: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              typeConstraint: {
		                ____label: "Output Type Constraint Name",
		                ____description: "The output's associated data type name declared in the DAG specification's constraint object.",
		                ____types: "jsString"
		              }
		            }
		          },
		          transformations: {
		            ____label: "System Transformations Model",
		            ____description: "An array of FilterDAG system transformation descriptor objects.",
		            ____types: "jsArray",
		            ____defaultValue: [],
		            transformDescriptor: {
		              ____label: "Transform Descriptor",
		              ____description: "Describes a single data transformation within the generated FilterDAG object.",
		              ____types: "jsObject",
		              name: {
		                ____label: "Transformation Name",
		                ____description: "Short-form name of this transformation.",
		                ____accept: "jsString"
		              },
		              label: {
		                ____label: "Transformation Label",
		                ____description: "Short-form label of this transformation for documentation.",
		                ____accept: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              description: {
		                ____label: "Transformation Description",
		                ____description: "Longer-form description of this transformation for documentation.",
		                ____accept: ["jsNull", "jsString"],
		                ____defaultValue: null
		              },
		              inputModels: {
		                ____label: "System Input Models",
		                ____description: "An array of system input model descriptors.",
		                ____types: "jsArray",
		                inputModelDescriptor: {
		                  ____label: "System Input Model Descriptor",
		                  ____description: "System input model descriptor object.",
		                  ____types: "jsObject",
		                  inputModel: {
		                    ____label: "System Output Model",
		                    ____description: "The name of the FilterDAG input or output model to bind to the transformation's output.",
		                    ____accept: "jsString"
		                  },
		                  requestMapping: {
		                    ____label: "Function Request Mapping",
		                    ____description: "A dot delimited string starting w/`request` that indicates the mapping from inputModel to function request object.",
		                    ____accept: "jsString",
		                    ____defaultValue: "request"
		                  }
		                }
		              },
		              outputModel: {
		                ____label: "System Output Model",
		                ____description: "The name of the FilterDAG input or output model to bind to the transformation's output.",
		                ____accept: "jsString"
		              },
		              functionConstraint: {
		                ____label: "System Function Constraint",
		                ____description: "The name of the FilterDAG constraint function that implements the desired transformation.",
		                ____accept: "jsString"
		              }
		            }
		          }
		        },
		        context: {
		          ____label: "FilterDAG System Context",
		          ____description: "Developer-specified common context object (opaque to the FilterDAG factory) made available to all JBUS Filter objects bound into the generated FilterDAG object.",
		          ____accept: "jsObject",
		          ____defaultValue: {}
		        }
		      }
		    }
		  };

		}).call(this);


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		/* 
		   Encapsule/jsgraph/src/helper-functions.js

		   Copyright (C) 2014-2015 Christopher D. Russell

		   This library is published under the MIT License and is part of the
		   Encapsule Project System in Cloud (SiC) open service architecture.
		   Please follow https://twitter.com/Encapsule for news and updates
		   about jsgraph and other time saving libraries that do amazing things
		   with in-memory data on Node.js and HTML.
		*/

		var JSType = function(reference_) {
		    return Object.prototype.toString.call(reference_);
		};

		/*
		  request = {
		      ref: reference
		      types: string or array of strings (e.g. '[object Object]')
		  }
		  response = {
		      error: null (success) or string (error)
		      result: null (failure) or JSType of request.ref (success)
		  }

		*/
		var JSTypeInTypeSet = function(request_) {
		    var response = { error: null, result: null };
		    var errors = [];
		    var allowedTypeSet = {};
		    var jstype = JSType(request_.types);
		    switch (jstype) {
		    case '[object String]':
		        allowedTypeSet = [ request_.types ];
		        break;
		    case '[object Array]':
		        allowedTypeSet = request_.types;
		        break;
		    default:
		        errors.unshift("Invalid request.types value type '" + jstype + "'. Expected either '[object String]' or '[object Array]'.");
		        break;
		    }
		    jstype = JSType(request_.description);
		    if (jstype !== '[object String]') {
		        errors.unshift("Invalid request.description value type '" + jstype + "'. Expected '[object String]'.");
		    }
		    if (!errors.length) {
		        jsType = JSType(request_.ref);
		        response.result = (allowedTypeSet.indexOf(jsType) !== -1) && jsType || null;
		    }
		    if (!response.result) {
		        response.guidance = request_.description + " value type '" + jstype + "' is invalid. Expected one of [" + allowedTypeSet.join(',') + "].";
		    }
		    if (errors.length) {
		        errors.unshift("JSTypeInTypeSet failed:");
		        response.error = errors.join(' ');
		    }
		    return response;

		};

		 var setPropertyValueIfUndefined = function(reference_, propertyName_, valueOrFunction_) {
		     var type = JSType(reference_[propertyName_]);
		    if (type === '[object Undefined]') {
		        type = JSType(valueOrFunction_);
		        if (type !== '[object Function]') {
		            reference_[propertyName_] = valueOrFunction_;
		        } else {
		            reference_[propertyName_] = valueOrFunction_();
		        }
		        return true;
		    }
		    return false;
		};

		module.exports = {
		    JSType: JSType,
		    setPropertyValueIfUndefined: setPropertyValueIfUndefined
		};


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		
		/*
		----------------------------------------------------------------------
		 
		           +---+---+---+---+
		 chaos --> | J | B | U | S | --> order
		           +---+---+---+---+

		Copyright (C) 2015 Encapsule.io Bellevue, WA USA

		This software is licensed under the terms of the GNU Affero General
		Public License v3.0.

		Please review the included LICENSE file for specific agreement terms.
		See also: https://opensource.org/licenses/AGPL-3.0

		Source code:   https://github.com/encapsule.jbus
		Documentation: https://encapsule.io/projects/jbus/docs/common
		Licensing:     https://encapsule.io/licening

		----------------------------------------------------------------------
		 */

		(function() {
		  var jbus;

		  jbus = {};

		  jbus.common = {};

		  jbus.common.types = module.exports = {};

		  jbus.common.types.codes = __webpack_require__(8);

		  jbus.common.types.convert = __webpack_require__(17);

		  jbus.common.types.check = __webpack_require__(53);

		}).call(this);


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		/*
		  Encapsule/jsgraph/src/digraph-algorithm-common-colors.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/


		// Encapsule/jsgraph/src/digraph-color.js
		//

		// Color ordinals used by directed graph algorithms.

		module.exports = {
		    white: 0,
		    gray: 1,
		    black: 2
		};



	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		/* --------------------------------------------------------------------------

		   The MIT License (MIT)

		   Copyright (c) 2014-2015 Christopher D. Russell

		   Permission is hereby granted, free of charge, to any person obtaining a copy
		   of this software and associated documentation files (the "Software"), to deal
		   in the Software without restriction, including without limitation the rights
		   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		   copies of the Software, and to permit persons to whom the Software is
		   furnished to do so, subject to the following conditions:

		   The above copyright notice and this permission notice shall be included in all
		   copies or substantial portions of the Software.

		   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		   SOFTWARE.

		  This library is part of the Encapsule Project System in Cloud (SiC) open service
		  architecture. Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things with in-memory
		  data on Node.js and HTML.  https://github.com/encapsule http://blog.encapsule.org

		-------------------------------------------------------------------------- */

		var jsgraph = module.exports = {

		    // Directed graph support
		    directed: {

		        ////
		        // Create a DirectedGraph container object.
		        //
		        // var response = jsgraph.directed.create(request);
		        //
		        // request = Undefined, JSON string, or data object [1]
		        //
		        // response = {
		        //     error: null or string explaining why result is null
		        //     result: DirectedGraph container object or null if error
		        // }
		        //
		        // Notes:
		        //
		        // [1] see DirectedGraph.toJSON/toObject methods.
		        //
		        ////
		        create: __webpack_require__(12).createDirectedGraph,

		        // Directed graph transposition algorithm.
		        // Creates a new DirectedGraph container object that's identical
		        // to a caller-specified digraph except that the direction of the
		        // the edges are reverese in the result digraph. Note that if present,
		        // vertex and edge properties in the source digraph are copied by
		        // reference to the result digraph.
		        transpose: __webpack_require__(23),

		        // Directed graph breadth-first traversal visitor algorithm.
		        breadthFirstTraverse: __webpack_require__(21),

		        // Directed graph depth-first traversal visitor algorithm.
		        depthFirstTraverse: __webpack_require__(22),

		        // ADVANCED

		        // Color constant hashtable (advanced).
		        colors: __webpack_require__(6),

		        // Directed graph traversal context factory (advanced).
		        createTraversalContext: __webpack_require__(13)

		    }
		};




	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		
		/*
		----------------------------------------------------------------------
		 
		           +---+---+---+---+
		 chaos --> | J | B | U | S | --> order
		           +---+---+---+---+

		Copyright (C) 2015 Encapsule.io Bellevue, WA USA

		This software is licensed under the terms of the GNU Affero General
		Public License v3.0.

		Please review the included LICENSE file for specific agreement terms.
		See also: https://opensource.org/licenses/AGPL-3.0

		Source code:   https://github.com/encapsule.jbus
		Documentation: https://encapsule.io/projects/jbus/docs/common
		Licensing:     https://encapsule.io/licening

		----------------------------------------------------------------------
		 */

		(function() {
		  'use strict';
		  var MODULE;

		  MODULE = {
		    __undefined: 0,
		    __null: 1,
		    __boolean: 2,
		    __string: 3,
		    __number: 4,
		    __object: 5,
		    __array: 6,
		    __function: 7,
		    __GUARD: 8
		  };

		  Object.freeze(MODULE);

		  module.exports = MODULE;

		}).call(this);


	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		
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

		(function() {
		  var ARC_CORE_UTIL;

		  ARC_CORE_UTIL = {};

		  ARC_CORE_UTIL.deepCopy = function(ref_) {
		    var flags, instance, key;
		    if ((ref_ == null) || typeof ref_ !== 'object') {
		      return ref_;
		    }
		    if (ref_ instanceof Date) {
		      return new Date(ref_.getTime());
		    }
		    if (ref_ instanceof RegExp) {
		      flags = '';
		      if (object_.global != null) {
		        flags += 'g';
		      }
		      if (object_.ignoreCase != null) {
		        flags += 'i';
		      }
		      if (object_.multiline != null) {
		        flags += 'm';
		      }
		      if (object_.sticky != null) {
		        flags += 'y';
		      }
		      return new RegExp(ref_.source, flags);
		    }
		    instance = new ref_.constructor();
		    for (key in ref_) {
		      instance[key] = ARC_CORE_UTIL.deepCopy(ref_[key]);
		    }
		    return instance;
		  };

		  ARC_CORE_UTIL.clone = function(ref_) {
		    return ARC_CORE_UTIL.deepCopy(ref_);
		  };

		  ARC_CORE_UTIL.dictionaryLength = function(ref_) {
		    return Object.keys(ref_).length;
		  };

		  ARC_CORE_UTIL.getEpochTime = function() {
		    return Math.round(new Date().getTime() / 1000.0);
		  };

		  module.exports = ARC_CORE_UTIL;

		}).call(this);


	/***/ },
	/* 10 */
	/***/ function(module, exports) {

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


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var murmur3 = __webpack_require__(55)
		var murmur2 = __webpack_require__(54)

		module.exports = murmur3
		module.exports.murmur3 = murmur3
		module.exports.murmur2 = murmur2


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		// Inspired by the Boost Graph Library (BGL)
		// http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/index.html
		// http://en.wikipedia.org/wiki/Directed_graph

		var helperFunctions = __webpack_require__(4);
		var digraphParams = __webpack_require__(26);
		var digraphImport = __webpack_require__(25);
		var digraphExport = __webpack_require__(24);

		(function() {
		    var __bind = function(method, scope){ return function(){ return method.apply(scope, arguments); }; };

		    var DirectedGraph = (function() {
		        function DirectedGraph(jsonOrObject_) {

		            // Meta methods
		            this.getGraphName = __bind(this.getGraphName, this);
		            this.setGraphName = __bind(this.setGraphName, this);
		            this.getGraphDescription = __bind(this.getGraphDescription, this);
		            this.setGraphDescription = __bind(this.setGraphDescription, this);

		            // Vertex-scope methods
		            this.isVertex = __bind(this.isVertex, this);
		            this.addVertex = __bind(this.addVertex, this);
		            this.removeVertex = __bind(this.removeVertex, this);
		            this.getVertexProperty = __bind(this.getVertexProperty, this);
		            this.setVertexProperty = __bind(this.setVertexProperty, this);
		            this.hasVertexProperty = __bind(this.hasVertexProperty, this);
		            this.clearVertexProperty = __bind(this.clearVertexProperty, this);
		            this.inDegree = __bind(this.inDegree, this);
		            this.inEdges = __bind(this.inEdges, this);
		            this.outDegree = __bind(this.outDegree, this);
		            this.outEdges = __bind(this.outEdges, this);

		            // Edge-scope methods
		            this.isEdge = __bind(this.isEdge, this);
		            this.addEdge = __bind(this.addEdge, this);
		            this.removeEdge = __bind(this.removeEdge, this);
		            this.getEdgeProperty = __bind(this.getEdgeProperty, this);
		            this.setEdgeProperty = __bind(this.setEdgeProperty, this);
		            this.hasEdgeProperty = __bind(this.hasEdgeProperty, this);
		            this.clearEdgeProperty = __bind(this.clearEdgeProperty, this);

		            // Digraph-scope methods
		            this.verticesCount = __bind(this.verticesCount, this);
		            this.getVertices = __bind(this.getVertices, this);
		            this.edgesCount = __bind(this.edgesCount, this);
		            this.getEdges = __bind(this.getEdges, this);
		            this.rootVerticesCount = __bind(this.rootVerticesCount, this);
		            this.getRootVertices = __bind(this.getRootVertices, this);
		            this.leafVerticesCount = __bind(this.leafVerticesCount, this);
		            this.getLeafVertices = __bind(this.getLeafVertices, this);
		            this.toObject = __bind(this.toObject, this);
		            this.toJSON = __bind(this.toJSON, this);
		            this.fromObject = __bind(this.fromObject, this);
		            this.fromJSON = __bind(this.fromJSON, this);

		            // DirectedGraph container private runtime state.
		            this._private = {
		                name: "",
		                description: "",
		                vertexMap: {},
		                rootMap: {},
		                leafMap: {},
		                edgeCount: 0,
		                constructionError: null
		            };
		            if ((jsonOrObject_ !== null) && jsonOrObject_) {
		                var innerResponse = digraphImport(this, jsonOrObject_);
		                if (innerResponse.error) {
		                    this._private.constructionError = "DirectedGraph constructor failed: " + innerResponse.error;
		                }
		            }
		        }

		        // META METHODS

		        DirectedGraph.prototype.getGraphName = function() {
		            return this._private.name;
		        };

		        DirectedGraph.prototype.setGraphName = function(string_) {
		            var response = { error: null, result: null };
		            if (helperFunctions.JSType(string_) === '[object String]') {
		                this._private.name = string_;
		                response.result = true;
		            } else {
		                response.error = "Invalid graph name specified. Expected '[object String]'.";
		            }
		            return response;
		        };

		        DirectedGraph.prototype.getGraphDescription = function() {
		            return this._private.description;
		        };

		        DirectedGraph.prototype.setGraphDescription = function(string_) {
		            var response = { error: null, result: null };
		            if (helperFunctions.JSType(string_) === '[object String]') {
		                this._private.description = string_;
		                response.result = true;
		            } else {
		                response.error = "Invalid graph name specified. Expected '[object String]'.";
		            }
		            return response;
		        };

		        // VERTEX-SCOPE METHODS

		        DirectedGraph.prototype.isVertex = function (vertexId_) {
		            var innerResponse = digraphParams.verifyVertexReadRequest(vertexId_);
		            if (innerResponse.error) {
		                return false;
		            }
		            var vertex = this._private.vertexMap[vertexId_];
		            return (vertex !== null) && vertex && true || false;
		        };

		        /*
		          request = {
		              u: vertex ID string
		              p: optional property (must be serializable to JSON)
		          }
		          response = {
		              error: null or error string
		              result: vertex ID string or null if error
		          }
		         */
		        DirectedGraph.prototype.addVertex = function (request_) {
		            var response = { error: null, result: null };
		            var errors = [];
		            var inBreakScope = false;
		            while (!inBreakScope) {
		                inBreakScope = true;
		                var innerResponse = digraphParams.verifyVertexWriteRequest(request_);
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                var vertex = this._private.vertexMap[request_.u];
		                if ((vertex === null) || !vertex) {
		                    vertex = this._private.vertexMap[request_.u] = {};
		                    vertex.edges = {};
		                    vertex.edges.in = {};
		                    vertex.edges.out = {};
		                    this._private.rootMap[request_.u] = {};
		                    this._private.leafMap[request_.u] = {};
		                }
		                if (helperFunctions.JSType(request_.p) !== '[object Undefined]') {
		                    vertex.properties = request_.p;
		                }
		                response.result = request_.u;
		            } // end while !inBreakScope
		            if (errors.length) {
		                errors.unshift("DirectedGraph.addVertex failed:");
		                response.error = errors.join(' ');
		            }
		            return response;
		        };

		        DirectedGraph.prototype.removeVertex = function (vertexId_) {
		            var innerResponse = digraphParams.verifyVertexReadRequest(vertexId_);
		            if (innerResponse.error) {
		                return false;
		            }
		            var vertexU = this._private.vertexMap[vertexId_];
		            if ((vertexU === null) || !vertexU) {
		                return false;
		            }
		            var vertexIdX;
		            for (vertexIdX in vertexU.edges.out) {
		                this.removeEdge({ u: vertexId_, v: vertexIdX});
		            }
		            for (vertexIdX in vertexU.edges.in) {
		                this.removeEdge({ u: vertexIdX, v: vertexId_});
		            }
		            delete this._private.vertexMap[vertexId_];
		            delete this._private.rootMap[vertexId_];
		            delete this._private.leafMap[vertexId_];
		            return true;
		        };

		        DirectedGraph.prototype.getVertexProperty = function(vertexId_) {
		            if (!this.isVertex(vertexId_)) {
		                return void 0;
		            }
		            return this._private.vertexMap[vertexId_].properties;
		        };

		        /*
		          request = {
		              u: vertex ID string
		              p: optional property (must be serializable to JSON)
		          }
		          response = {
		              error: null or error string
		              result: vertex ID string or null if error
		          }
		         */
		        DirectedGraph.prototype.setVertexProperty = function(request_) {
		            return this.addVertex(request_);
		        };

		        DirectedGraph.prototype.hasVertexProperty = function(vertexId_) {
		            if (!this.isVertex(vertexId_)) {
		                return false;
		            }
		            if (helperFunctions.JSType(this._private.vertexMap[vertexId_].properties) === '[object Undefined]') {
		                return false;
		            }
		            return true;
		        };

		        DirectedGraph.prototype.clearVertexProperty = function(vertexId_) {
		            if (!this.isVertex(vertexId_)) {
		                return false;
		            }
		            delete this._private.vertexMap[vertexId_].properties;
		            return true;
		        };

		        DirectedGraph.prototype.inDegree = function (vertexId_) {
		            return this.isVertex(vertexId_)?Object.keys(this._private.vertexMap[vertexId_].edges.in).length:-1;
		        };

		        DirectedGraph.prototype.inEdges = function(vertexId_) {
		            var result = [];
		            if (this.isVertex(vertexId_)) {
		                for (var vertexIdV in this._private.vertexMap[vertexId_].edges.in) {
		                    result.push({ u: vertexIdV, v: vertexId_});
		                }
		            }
		            return result;
		        };

		        DirectedGraph.prototype.outDegree = function (vertexId_) {
		            return this.isVertex(vertexId_)?Object.keys(this._private.vertexMap[vertexId_].edges.out).length:-1;
		        };

		        DirectedGraph.prototype.outEdges = function(vertexId_) {
		            var result = [];
		            if (this.isVertex(vertexId_)) {
		                for (var vertexIdV in this._private.vertexMap[vertexId_].edges.out) {
		                    result.push({ u: vertexId_, v: vertexIdV});
		                }
		            }
		            return result;
		        };

		        // EDGE-SCOPE METHODS

		        /*
		          request = {
		              u: string,
		              v: string,
		          }
		          response = Boolean true if edge exists. Otherwise, false.
		          Note that invalid requests are coalesced as negative responses.
		        */
		        DirectedGraph.prototype.isEdge = function(request_) {
		            var response = false;
		            var inBreakScope = false;
		            while (!inBreakScope) {
		                inBreakScope = true;
		                if (digraphParams.verifyEdgeReadRequest(request_).error) {
		                    break;
		                }
		                var vertexU = this._private.vertexMap[request_.u];
		                var vertexV = this._private.vertexMap[request_.v];
		                if (!((vertexU !== null) && vertexU && (vertexV !== null) && vertexV)) {
		                    break;
		                }
		                var edge = vertexU.edges.out[request_.v];
		                response = (edge !== null) && edge && true || false;
		            }
		            return response;
		        };

		        /*
		          request = {
		              e: { u: string, v: string },
		              p: (optional) property serializable to JSON
		          }
		          response = {
		              error: error string or null
		              result: edge descriptor object or null iff error
		          }
		         */
		        DirectedGraph.prototype.addEdge = function (request_) {
		            var response = { error: null, result: null };
		            var errors = [];
		            var inBreakScope = false;
		            while (!inBreakScope) {
		                inBreakScope = true;
		                var innerResponse = digraphParams.verifyEdgeWriteRequest(request_);
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                innerResponse = this.addVertex({ u: request_.e.u });
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                innerResponse = this.addVertex({ u: request_.e.v });
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                var outEdge = this._private.vertexMap[request_.e.u].edges.out[request_.e.v];
		                if ((outEdge === null) || !outEdge) {
		                    outEdge = this._private.vertexMap[request_.e.u].edges.out[request_.e.v] = {};
		                    delete this._private.leafMap[request_.e.u];
		                }
		                var inEdge = this._private.vertexMap[request_.e.v].edges.in[request_.e.u];
		                if ((inEdge === null) || !inEdge) {
		                    inEdge = this._private.vertexMap[request_.e.v].edges.in[request_.e.u] = {};
		                    this._private.edgeCount++;
		                    delete this._private.rootMap[request_.e.v];
		                }
		                if (helperFunctions.JSType(request_.p) !== '[object Undefined]') {
		                    outEdge.properties = request_.p;
		                }
		                response.result = request_.e;
		            } // end while !inBreakScope
		            if (errors.length) {
		                errors.unshift("DirectedGraph.addEdge failed:");
		                response.error = errors.join(' ');
		            }
		            return response;
		        };

		        /*
		          request = {
		              u: string,
		              v: string,
		          }
		          response = {
		              error: null or error string explaining why result is null
		              result: Boolean true if successful. False if edge doesn't exist.
		          }
		        */
		        DirectedGraph.prototype.removeEdge = function(request_) {
		            var response = { error: null, result: null };
		            var errors = [];
		            var inBreakScope = false;
		            while (!inBreakScope) {
		                inBreakScope = true;
		                var innerResponse = digraphParams.verifyEdgeReadRequest(request_);
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                var vertexU = this._private.vertexMap[request_.u];
		                var vertexV = this._private.vertexMap[request_.v];
		                if (!((vertexU !== null) && vertexU && (vertexV !== null) && vertexV)) {
		                    response.result = false;
		                    break;
		                }
		                var outEdgeMap = vertexU.edges.out;
		                var edge = outEdgeMap[request_.v];
		                if (!((edge !== null) && edge)) {
		                    response.result = false;
		                    break;
		                }
		                delete outEdgeMap[request_.v];
		                if (!Object.keys(outEdgeMap).length) {
		                    this._private.leafMap[request_.u] = {};
		                }
		                var inEdgeMap = vertexV.edges.in;
		                delete inEdgeMap[request_.u];
		                if (!Object.keys(inEdgeMap).length) {
		                    this._private.rootMap[request_.v] = {};
		                }
		                if (this._private.edgeCount) {
		                    this._private.edgeCount--;
		                }
		                response.result = true;
		            } // while !inBreakScope
		            if (errors.length) {
		                errors.unshift("DirectedGraph.removeEdge failed:");
		                response.error = errors.join(' ');
		            }
		            return response;
		        };

		        /*
		          request = {
		              u: string,
		              v: string
		          }
		          response = void 0 or whatever property is assigned to the edge
		          Note that build requests are coalesced to void 0 responses.
		         */

		        DirectedGraph.prototype.getEdgeProperty = function(request_) {
		            var response = void 0;
		            var inBreakScope = false;
		            while (!inBreakScope) {
		                inBreakScope = true;
		                if (digraphParams.verifyEdgeReadRequest(request_).error) {
		                    break;
		                }
		                var vertexU = this._private.vertexMap[request_.u];
		                var vertexV = this._private.vertexMap[request_.v];
		                if (!((vertexU !== null) && vertexU && (vertexV !== null) && vertexV)) {
		                    break;
		                }
		                response = vertexU.edges.out[request_.v].properties;
		            }
		            return response;
		        };

		        /*
		          request = {
		              e: { u: string, v: string },
		              p: (optional) property serializable to JSON
		          }
		          response = {
		              error: error string or null
		              result: edge descriptor object or null iff error
		          }
		         */
		        DirectedGraph.prototype.setEdgeProperty = function(request_) {
		            return this.addEdge(request_);
		        };

		        DirectedGraph.prototype.hasEdgeProperty = function(request_) {
		            if (!this.isEdge(request_)) {
		                return false;
		            }
		            if (helperFunctions.JSType(this._private.vertexMap[request_.u].edges.out[request_.v].properties) === '[object Undefined]') {
		                return false;
		            }
		            return true;
		        };

		        DirectedGraph.prototype.clearEdgeProperty = function(request_) {
		            if (!this.isEdge(request_)) {
		                return false;
		            }
		            delete this._private.vertexMap[request_.u].edges.out[request_.v].properties;
		            return true;
		        };

		        // DIGRAPH-SCOPE METHODS

		        DirectedGraph.prototype.verticesCount = function() {
		            return Object.keys(this._private.vertexMap).length;
		        };

		        DirectedGraph.prototype.getVertices = function() {
		            var vertices = [];
		            for (var vertexId in this._private.vertexMap) {
		                vertices.push(vertexId);
		            }
		            return vertices;
		        };

		        DirectedGraph.prototype.edgesCount = function() {
		            return this._private.edgeCount;
		        };

		        DirectedGraph.prototype.getEdges = function() {
		            var edges = [];
		            var vertices = this.getVertices();
		            var processVertexOutEdges = function(outEdges_) {
		                outEdges_.forEach(function(outEdge_) {
		                    edges.push(outEdge_);
		                });
		            };
		            var self = this;
		            vertices.forEach(function(vertexId_) {
		                processVertexOutEdges(self.outEdges(vertexId_));
		            });
		            return edges;
		        };

		        DirectedGraph.prototype.rootVerticesCount = function() {
		            return Object.keys(this._private.rootMap).length;
		        };

		        DirectedGraph.prototype.getRootVertices = function() {
		            var rootVertices = [];
		            for (var vertexId in this._private.rootMap) {
		                rootVertices.push(vertexId);
		            }
		            return rootVertices;
		        };

		        DirectedGraph.prototype.leafVerticesCount = function() {
		            return Object.keys(this._private.leafMap).length;
		        };

		        DirectedGraph.prototype.getLeafVertices = function() {
		            var leafVertices = [];
		            for (var vertexId in this._private.leafMap) {
		                leafVertices.push(vertexId);
		            }
		            return leafVertices;
		        };

		        DirectedGraph.prototype.toObject = function () {
		            return digraphExport.exportObject(this);
		        };

		        DirectedGraph.prototype.toJSON = function(replacer_, space_) {
		            return digraphExport.exportJSON(this, replacer_, space_);
		        };

		        DirectedGraph.prototype.fromObject = function (object_) {
		            return digraphImport(this, object_);
		        };

		        DirectedGraph.prototype.fromJSON = function(json_) {
		            return digraphImport(this, json_);
		        };

		        return DirectedGraph;

		    })();

		    var createDirectedGraph = function (jsonOrObject_) {
		        var response = { error: null, result: null };
		        var digraph = new DirectedGraph(jsonOrObject_);
		        if (digraph._private.constructionError) {
		            response.error = digraph._private.constructionError;
		        } else {
		            response.result = digraph;
		        }
		        return response;
		    };

		    module.exports = {
		        /*
		          createDirectedGraph is a wrapper around JavaScript operator new jsgraph.DirectedGraph(...)
		          that returns an error/result response object. This is the preferred mechanism by which
		          jsgraph-derived client code should construct DirectedGraph container object instance(s).
		        */
		        createDirectedGraph: createDirectedGraph,

		        /*
		          DirectedGraph is constructed with JavaScript operator new but may fail during construction
		          if an error is encountered parsing the constructor's optional JSON/data object in-paramter.
		          After contruction, clients should check DirectedGraph.constructionError === null to ensure
		          that construction was successful. If a construction error occurred, constructionError is the
		          response.error string returned by DirectedGraph's data import subroutine.
		        */
		        DirectedGraph: DirectedGraph

		    };

		}).call(this);


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph-algorithm-common-context.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		var helperFunctions = __webpack_require__(4);
		var colors = __webpack_require__(6);

		module.exports = function (request_) {
		    var response = { error: null, result: null };
		    var errors = [];
		    var traverseContext = { searchStatus: 'pending', colorMap: {}, undiscoveredMap: {} };
		    var initializeColorMapRecord = function (vertexId_) {
		        traverseContext.colorMap[vertexId_] = colors.white;
		        traverseContext.undiscoveredMap[vertexId_] = true;
		    };
		    var inBreakScope = false;
		    while (!inBreakScope) {
		        inBreakScope = true;
		        var objectTS = '[object Object]';
		        // Verify request.
		        var type = helperFunctions.JSType(request_);
		        if (type !== objectTS) {
		            errors.unshift("Expected request to be of type '" + objectTS + "' but found '" + type + "'.");
		            break;
		        }
		        // Verify request.digraph.
		        type = helperFunctions.JSType(request_.digraph);
		        if (type !== objectTS) {
		            errors.unshift("Expected request.digraph to be of type '" + objectTS + "' but found '" + type + "'.");
		            break;
		        }
		        // Initialize the BFS search context object.
		        request_.digraph.getVertices().forEach(initializeColorMapRecord);
		        // Assign the result. Note that it's incumbant upon the first invocation of
		        // traversal algorithm  to check/set the traverseContext.searchStatus flag and
		        // correctly call the visitor.initializeVertex callback on each vertex in the
		        // color map prior to the start of the search. traverseContext.searchStatus should
		        // be 'running' while a search is in progress. 'terminated' if prematurely terminated
		        // by client visitor code. 'complete' when search concludes normally.
		        response.result = traverseContext;
		    }
		    if (errors.length) {
		        errors.unshift("jsgraph.directed.createTraverseContext failed:");
		        response.error = errors.join(' ');
		    }
		    return response;
		};


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/arc/digraph-algorithm-common-request.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		var helperFunctions = __webpack_require__(4);
		var TRAVERSE_CONTEXT = __webpack_require__(13);

		/*
		  request = {
		      digraph: reference to jsgraph.DirectedGraph container object (required)
		      visitor: reference to jsgraph BFV visitor object (required)
		      options: {
		          startVector: reference to a vertex ID string, or an array of vertex ID strings (optional)
		              Note: if ommitted, BFT uses the digraph's root vertex set as the start vertex set
		          allowEmptyStartVector: Boolean flag (optional - default is false is omitted)
		          signalStart: Boolean flag (optional - default is true if ommitted)
		              Note: By default, BFT will call startVertex on each search root vertex.
		              In advanced scenarios you may wish to override this behavior.
		          traverseContext: reference to BFT search context object (optional)
		              Note: By default, BFT allocates the traversal context internally and returns it to
		              the caller. In advanced scenarios you may wish to provide a pre-initialized
		              (or potentially pre-colored) traversal context object.
		          }
		      }
		  }

		  response = {
		      error: null or string explaining why result is null
		      result: Traversal context object or null if error
		  }
		*/

		module.exports = function (request_) {

		    var response = { error: null, result: null };
		    var errors = [];
		    var nrequest = null;
		    var inBreakScope = false;

		    var createTraverseContext = function() {
		        var response = TRAVERSE_CONTEXT({ digraph: nrequest.digraph });
		        var result = null;
		        if (response.error) {
		            errors.unshift(response.error);
		        } else {
		            result = response.result;
		        }
		        return result;
		    };

		    var getRootVertices = function() {
		        return nrequest.digraph.getRootVertices();
		    };
		        
		    while (!inBreakScope) {
		        inBreakScope = true;

		        // Verify the outer shape of the request object.
		        var innerResponse = helperFunctions.JSType(request_);
		        if (innerResponse !== '[object Object]') {
		            errors.unshift("Missing request object ~. Found type '" + innerResponse + "'.");
		            break;
		        }
		        nrequest = {};
		        innerResponse = helperFunctions.JSType(request_.digraph);
		        if (innerResponse !== '[object Object]') {
		            errors.unshift("Missing required DirectedGraph reference ~.digraph. Found type '" + innerResponse + "'.");
		            break;
		        }
		        nrequest.digraph = request_.digraph;
		        innerResponse = helperFunctions.JSType(request_.visitor);
		        if (innerResponse !== '[object Object]') {
		            errors.unshift("Missing required visitor object reference ~.visitor. Found type '" + innerResponse + "'.");
		            break;
		        }
		        
		        nrequest.visitor = request_.visitor;
		        innerResponse = helperFunctions.JSType(request_.options);
		        if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Object]')) {
		            errors.unshift("Options object ~.options is the wrong type. Found type '" + innerResponse + "'.");
		            break;
		        }
		        nrequest.options = {};
		        if (innerResponse === '[object Object]') {
		            innerResponse = helperFunctions.JSType(request_.options.startVector);
		            switch (innerResponse) {
		            case '[object Undefined]':
		                break;
		            case '[object String]':
		                nrequest.options.startVector = [ request_.options.startVector ];
		                break;
		            case '[object Array]':
		                nrequest.options.startVector = request_.options.startVector;
		                break;
		            default:
		                errors.unshift("Options object property ~.options.startVector is the wrong type. Expected either '[object String]', '[object Array]', or '[object Undefined]'. Found type '" + innerResponse + "'.");
		                break;
		            } // end switch

		            if (errors.length) {
		                break;
		            }

		            innerResponse = helperFunctions.JSType(request_.options.allowEmptyStartVector);
		            if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Boolean]')) {
		                errors.unshift("Options object property ~.options.allowEmptyStartVector is the wrong type. Expected either '[object Boolean]' or '[object Undefined]. Found type '" + innerResponse + "'.");
		                break;
		            }
		            if (innerResponse == '[object Boolean]') {
		                nrequest.options.allowEmptyStartVector = request_.options.allowEmptyStartVector;
		            }

		            innerResponse = helperFunctions.JSType(request_.options.signalStart);
		            if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Boolean]')) {
		                errors.unshift("Options object property ~.options.signalStart is the wrong type. Expected either '[object Boolean]' or '[object Undefined]'. Found type '" + innerResponse + "'.");
		                break;
		            }
		            if (innerResponse === '[object Boolean]') {
		                nrequest.options.signalStart = request_.options.signalStart;
		            }


		            innerResponse = helperFunctions.JSType(request_.options.traverseContext);
		            if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Object]')) {
		                errors.unshift("Options object property ~.options.traverseContext is the wrong type. Expected either '[object Object]' or '[object Undefined']. Found type '" + innerResponse + "'.");
		                break;
		            }
		            if (innerResponse === '[object Object]') {
		                nrequest.options.traverseContext = request_.options.traverseContext;
		            }

		        } // end if options object specified
		        
		        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'startVector', getRootVertices);
		        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'allowEmptyStartVector', false);
		        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'signalStart', true);
		        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'traverseContext', createTraverseContext);

		        // Ensure that the starting vertex set is not empty (unless allowed).
		        if (!nrequest.options.startVector.length && !nrequest.options.allowEmptyStartVector) {
		            errors.unshift("Traversal aborted because we don't know which vertex to start on. Specify a graph that has at least one root vertex, explicity specify the start vertex (or vertices) via `request.options.startVector` array, or suppress this error by setting `request.options.allowEmptyStartVector` to Boolean true.");
		            break;
		        }

		        response.result = nrequest;

		    }
		    if (errors.length) {
		        response.error = errors.join(' ');
		    } else {
		        response.result = nrequest;
		    }
		    return response;

		};


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph-algorithm-common-visit.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		// Wraps call to DirectedGraph algorithm visitor function callbacks.

		var helperFunctions = __webpack_require__(4);

		/*
		  request = {
		      visitor: interface object reference
		      algorithm: string name of the algorithm for error messages
		      method: string name of the visitor method to call
		      request: request object to pass to the visitor method
		  },
		  response = {
		      error: null or string explaining by response.error is null
		      result: null (error) or Boolean flag set true to continue search
		  }
		*/

		module.exports = function (request_) {

		    var response = { error: null, result: null };
		    var errors = [];
		    var inBreakScope = false;
		    while (!inBreakScope) {
		        inBreakScope = true;
		        var visitorCallback = request_.visitor[request_.method];
		        var jstype = helperFunctions.JSType(visitorCallback);
		        // If the visitor function is not defined on the visitor object, return true to continue the search.
		        if (jstype !== '[object Function]') {
		            if (jstype !== '[object Undefined]') {
		                errors.unshift(request_.algorithm + " visitor interface method '" + request_.method + "' is type '" + jstype + "' instead of '[object Function]' as expected.");
		                break;
		            }
		            response.result = true;
		            break;
		        }
		        var continueSearch = visitorCallback(request_.request);
		        jstype = helperFunctions.JSType(continueSearch);
		        if (jstype !== '[object Boolean]') {
		            errors.unshift(request_.algorithm + " visitor interface error in callback function '" + request_.method + "'. Function returned type '" + jstype + "' instead of expected '[object Boolean]'.");
		            break;
		        }
		        response.result = continueSearch;
		    }
		    if (errors.length) {
		        response.error = errors.join(' ');
		    }
		    return response;
		};





	/***/ },
	/* 16 */
	/***/ function(module, exports) {

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


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		
		/*
		----------------------------------------------------------------------
		 
		           +---+---+---+---+
		 chaos --> | J | B | U | S | --> order
		           +---+---+---+---+

		Copyright (C) 2015 Encapsule.io Bellevue, WA USA

		This software is licensed under the terms of the GNU Affero General
		Public License v3.0.

		Please review the included LICENSE file for specific agreement terms.
		See also: https://opensource.org/licenses/AGPL-3.0

		Source code:   https://github.com/encapsule.jbus
		Documentation: https://encapsule.io/projects/jbus/docs/common
		Licensing:     https://encapsule.io/licening

		----------------------------------------------------------------------
		 */

		(function() {
		  var convert, typeCodes, typeLUTS;

		  typeCodes = __webpack_require__(8);

		  typeLUTS = __webpack_require__(18);


		  /*
		      request = {
		          to: dimension string used to select the result set
		          from: dimension string used to interpret the reference of value
		          value: JavaScript reference to a value taken as a 'from' to be converted to a 'to'
		      }
		      response = {
		          error: null or string explaining by result is null
		          result: integer in range 0 to 7 inclusive (jsCode) or string (jsStringType, jsMoniker, jsonMoniker) or null to indicate error
		      }
		   */

		  convert = function(request_) {
		    var errors, forwardLookup, inBreakScope, jsCode, lookupResult, request, requestType, response, rewriteRequest, table, valueType;
		    errors = [];
		    response = {
		      error: null,
		      result: null
		    };
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      if (!((request_ != null) && request_)) {
		        errors.unshift("Missing request object.");
		        break;
		      }
		      requestType = Object.prototype.toString.call(request_);
		      if (requestType !== '[object Object]') {
		        errors.unshift("Invalid request value type. Expected reference to '[object Object]'.");
		        break;
		      }
		      request = {};
		      if (!((request_.from != null) && request_.from)) {
		        errors.unshift("Invalid request missing 'from' property.");
		        break;
		      }
		      requestType = Object.prototype.toString.call(request_.from);
		      if (requestType !== '[object String]') {
		        errors.unshift("Invalid request 'from' value type. Expected reference to '[object String]'.");
		        break;
		      }
		      request.from = request_.from;
		      if (!((request_.to != null) && request_.to)) {
		        errors.unshift("Invalid request missing 'to' property.");
		        break;
		      }
		      requestType = Object.prototype.toString.call(request_.to);
		      if (requestType !== '[object String]') {
		        errors.unshift("Invalid request 'to' value type. Expected reference to '[object String]'.");
		        break;
		      }
		      request.to = request_.to;
		      valueType = Object.prototype.toString.call(request_.value);
		      forwardLookup = true;
		      rewriteRequest = void 0;
		      switch (request.from) {
		        case 'jsReference':
		          rewriteRequest = {
		            to: request.to,
		            from: 'jsTypeString',
		            value: Object.prototype.toString.call(request_.value)
		          };
		          forwardLookup = false;
		          break;
		        case 'jsCode':
		          if (valueType !== '[object Number]') {
		            errors.unshift("Invalid request 'value' type. Expected reference to '[object Number]'.");
		            break;
		          }
		          if ((request_.value < 0) || (request_.value >= typeCodes.__GUARD)) {
		            errors.unshift("Invalid request 'value' '" + request_.value + "' is not a valid 'jsCode' value.");
		          }
		          break;
		        case 'jsMoniker' || 'jsonMoniker' || 'jsTypeString':
		          if (valueType !== '[object String]') {
		            errors.unshift("Invalid request 'value' type. Expected reference to '[object String]'.");
		          }
		          forwardLookup = false;
		          break;
		        default:
		          errors.unshift("[" + typeLUTS.dimensions + "].");
		          errors.unshift("Invalid request 'from' value '" + request.from + "' is not a valid dimension string. Valid dimensions:");
		          break;
		      }
		      if (errors.length) {
		        break;
		      }
		      if (!((rewriteRequest != null) && rewriteRequest)) {
		        request.value = request_.value;
		      } else {
		        request = rewriteRequest;
		      }
		      table = typeLUTS[forwardLookup && request.to || request.from];
		      if (!((table != null) && table)) {
		        errors.unshift("[" + typeLUTS.dimensions + "].");
		        errors.unshift("No conversion operator from '" + request.from + "' to '" + request.to + "' available. Valid dimensions:");
		        break;
		      }
		      if (forwardLookup) {
		        lookupResult = table[request.value];
		      } else {
		        lookupResult = table.indexOf(request.value);
		        if (lookupResult === -1) {
		          errors.unshift("[" + typeLUTS.dimensions + "].");
		          errors.unshift("Invalid request 'value' specifies unknown " + request.to + " '" + request.value + "'. Valid dimensions:");
		          break;
		        }
		        if (request.to !== 'jsCode') {
		          table = typeLUTS[request.to];
		          if (!((table != null) && table)) {
		            errors.unshift("Valid dimensions: [" + typeLUTS.dimensions + "].");
		            errors.unshift("No conversion to '" + request.to + "' available.");
		            break;
		          }
		          jsCode = lookupResult;
		          lookupResult = table[jsCode];
		          if (!((lookupResult != null) && lookupResult)) {
		            errors.unshift("No coversion from dimension '" + request.from + "' to '" + request.to + "' for value '" + request.value + "'.");
		            break;
		          }
		        }
		      }
		      response.result = lookupResult;
		    }
		    if (errors.length) {
		      errors.unshift("jbus type conversion failed:");
		      response.error = errors.join(" ");
		    }
		    return response;
		  };

		  module.exports = convert;

		}).call(this);


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		
		/*
		----------------------------------------------------------------------
		 
		           +---+---+---+---+
		 chaos --> | J | B | U | S | --> order
		           +---+---+---+---+

		Copyright (C) 2015 Encapsule.io Bellevue, WA USA

		This software is licensed under the terms of the GNU Affero General
		Public License v3.0.

		Please review the included LICENSE file for specific agreement terms.
		See also: https://opensource.org/licenses/AGPL-3.0

		Source code:   https://github.com/encapsule.jbus
		Documentation: https://encapsule.io/projects/jbus/docs/common
		Licensing:     https://encapsule.io/licening

		----------------------------------------------------------------------
		 */

		(function() {
		  'use strict';
		  var MODULE, jstc, typeCodes;

		  typeCodes = __webpack_require__(8);

		  MODULE = {};


		  /*
		  String identifiers used to keep track of conversion source/destination dimension type.
		   */

		  MODULE.dimensions = ['jsReference', 'jsCode', 'jsTypeString', 'jsMoniker', 'jsonMoniker'];


		  /*
		  Lookup expected JavaScript type string from JavaScript Type Code (JSTC) ordinal.
		   */

		  MODULE.jsTypeString = [];

		  MODULE.jsTypeString[typeCodes.__undefined] = '[object Undefined]';

		  MODULE.jsTypeString[typeCodes.__null] = '[object Null]';

		  MODULE.jsTypeString[typeCodes.__boolean] = '[object Boolean]';

		  MODULE.jsTypeString[typeCodes.__string] = '[object String]';

		  MODULE.jsTypeString[typeCodes.__number] = '[object Number]';

		  MODULE.jsTypeString[typeCodes.__object] = '[object Object]';

		  MODULE.jsTypeString[typeCodes.__array] = '[object Array]';

		  MODULE.jsTypeString[typeCodes.__function] = '[object Function]';


		  /*
		  Lookup JavaScript type moniker string from its JavaScript Type Code (JSTC) ordinal.
		   */

		  MODULE.jsMoniker = [];

		  MODULE.jsMoniker[typeCodes.__undefined] = 'jsUndefined';

		  MODULE.jsMoniker[typeCodes.__null] = 'jsNull';

		  MODULE.jsMoniker[typeCodes.__boolean] = 'jsBoolean';

		  MODULE.jsMoniker[typeCodes.__string] = 'jsString';

		  MODULE.jsMoniker[typeCodes.__number] = 'jsNumber';

		  MODULE.jsMoniker[typeCodes.__object] = 'jsObject';

		  MODULE.jsMoniker[typeCodes.__array] = 'jsArray';

		  MODULE.jsMoniker[typeCodes.__function] = 'jsFunction';


		  /*
		  Lookup JSON type moniker string from its offset JavaScript Type Code (JSTC) ordinal.
		   */

		  MODULE.jsonMoniker = [];

		  MODULE.jsonMoniker[typeCodes.__undefined] = null;

		  MODULE.jsonMoniker[typeCodes.__null] = 'jsonNull';

		  MODULE.jsonMoniker[typeCodes.__boolean] = 'jsonBoolean';

		  MODULE.jsonMoniker[typeCodes.__string] = 'jsonString';

		  MODULE.jsonMoniker[typeCodes.__number] = 'jsonNumber';

		  MODULE.jsonMoniker[typeCodes.__object] = 'jsonObject';

		  MODULE.jsonMoniker[typeCodes.__array] = 'jsonArray';

		  MODULE.jsonMoniker[typeCodes.__function] = null;


		  /*
		  Hash table for looking up a JavaScript Type Code (JSTC) given a JavaScript Type Moniker (JSTM).
		   */

		  MODULE.jsCodes = {};

		  jstc = 0;

		  while (jstc < typeCodes.__GUARD) {
		    MODULE.jsCodes[MODULE.jsMoniker[jstc]] = jstc++;
		  }

		  Object.freeze(MODULE);

		  module.exports = MODULE;

		}).call(this);


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_RESULT__;//     uuid.js
		//
		//     Copyright (c) 2010-2012 Robert Kieffer
		//     MIT License - http://opensource.org/licenses/mit-license.php

		/*global window, require, define */
		(function(_window) {
		  'use strict';

		  // Unique ID creation requires a high quality random # generator.  We feature
		  // detect to determine the best RNG source, normalizing to a function that
		  // returns 128-bits of randomness, since that's what's usually required
		  var _rng, _mathRNG, _nodeRNG, _whatwgRNG, _previousRoot;

		  function setupBrowser() {
		    // Allow for MSIE11 msCrypto
		    var _crypto = _window.crypto || _window.msCrypto;

		    if (!_rng && _crypto && _crypto.getRandomValues) {
		      // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
		      //
		      // Moderately fast, high quality
		      try {
		        var _rnds8 = new Uint8Array(16);
		        _whatwgRNG = _rng = function whatwgRNG() {
		          _crypto.getRandomValues(_rnds8);
		          return _rnds8;
		        };
		        _rng();
		      } catch(e) {}
		    }

		    if (!_rng) {
		      // Math.random()-based (RNG)
		      //
		      // If all else fails, use Math.random().  It's fast, but is of unspecified
		      // quality.
		      var  _rnds = new Array(16);
		      _mathRNG = _rng = function() {
		        for (var i = 0, r; i < 16; i++) {
		          if ((i & 0x03) === 0) { r = Math.random() * 0x100000000; }
		          _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
		        }

		        return _rnds;
		      };
		      if ('undefined' !== typeof console && console.warn) {
		        console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
		      }
		    }
		  }

		  function setupNode() {
		    // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
		    //
		    // Moderately fast, high quality
		    if (true) {
		      try {
		        var _rb = __webpack_require__(56).randomBytes;
		        _nodeRNG = _rng = _rb && function() {return _rb(16);};
		        _rng();
		      } catch(e) {}
		    }
		  }

		  if (_window) {
		    setupBrowser();
		  } else {
		    setupNode();
		  }

		  // Buffer class to use
		  var BufferClass = ('function' === typeof Buffer) ? Buffer : Array;

		  // Maps for number <-> hex string conversion
		  var _byteToHex = [];
		  var _hexToByte = {};
		  for (var i = 0; i < 256; i++) {
		    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
		    _hexToByte[_byteToHex[i]] = i;
		  }

		  // **`parse()` - Parse a UUID into it's component bytes**
		  function parse(s, buf, offset) {
		    var i = (buf && offset) || 0, ii = 0;

		    buf = buf || [];
		    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
		      if (ii < 16) { // Don't overflow!
		        buf[i + ii++] = _hexToByte[oct];
		      }
		    });

		    // Zero out remaining bytes if string was short
		    while (ii < 16) {
		      buf[i + ii++] = 0;
		    }

		    return buf;
		  }

		  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
		  function unparse(buf, offset) {
		    var i = offset || 0, bth = _byteToHex;
		    return  bth[buf[i++]] + bth[buf[i++]] +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] +
		            bth[buf[i++]] + bth[buf[i++]] +
		            bth[buf[i++]] + bth[buf[i++]];
		  }

		  // **`v1()` - Generate time-based UUID**
		  //
		  // Inspired by https://github.com/LiosK/UUID.js
		  // and http://docs.python.org/library/uuid.html

		  // random #'s we need to init node and clockseq
		  var _seedBytes = _rng();

		  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
		  var _nodeId = [
		    _seedBytes[0] | 0x01,
		    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
		  ];

		  // Per 4.2.2, randomize (14 bit) clockseq
		  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

		  // Previous uuid creation time
		  var _lastMSecs = 0, _lastNSecs = 0;

		  // See https://github.com/broofa/node-uuid for API details
		  function v1(options, buf, offset) {
		    var i = buf && offset || 0;
		    var b = buf || [];

		    options = options || {};

		    var clockseq = (options.clockseq != null) ? options.clockseq : _clockseq;

		    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
		    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
		    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
		    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
		    var msecs = (options.msecs != null) ? options.msecs : new Date().getTime();

		    // Per 4.2.1.2, use count of uuid's generated during the current clock
		    // cycle to simulate higher resolution clock
		    var nsecs = (options.nsecs != null) ? options.nsecs : _lastNSecs + 1;

		    // Time since last uuid creation (in msecs)
		    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

		    // Per 4.2.1.2, Bump clockseq on clock regression
		    if (dt < 0 && options.clockseq == null) {
		      clockseq = clockseq + 1 & 0x3fff;
		    }

		    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
		    // time interval
		    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
		      nsecs = 0;
		    }

		    // Per 4.2.1.2 Throw error if too many uuids are requested
		    if (nsecs >= 10000) {
		      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
		    }

		    _lastMSecs = msecs;
		    _lastNSecs = nsecs;
		    _clockseq = clockseq;

		    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
		    msecs += 12219292800000;

		    // `time_low`
		    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
		    b[i++] = tl >>> 24 & 0xff;
		    b[i++] = tl >>> 16 & 0xff;
		    b[i++] = tl >>> 8 & 0xff;
		    b[i++] = tl & 0xff;

		    // `time_mid`
		    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
		    b[i++] = tmh >>> 8 & 0xff;
		    b[i++] = tmh & 0xff;

		    // `time_high_and_version`
		    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
		    b[i++] = tmh >>> 16 & 0xff;

		    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
		    b[i++] = clockseq >>> 8 | 0x80;

		    // `clock_seq_low`
		    b[i++] = clockseq & 0xff;

		    // `node`
		    var node = options.node || _nodeId;
		    for (var n = 0; n < 6; n++) {
		      b[i + n] = node[n];
		    }

		    return buf ? buf : unparse(b);
		  }

		  // **`v4()` - Generate random UUID**

		  // See https://github.com/broofa/node-uuid for API details
		  function v4(options, buf, offset) {
		    // Deprecated - 'format' argument, as supported in v1.2
		    var i = buf && offset || 0;

		    if (typeof(options) === 'string') {
		      buf = (options === 'binary') ? new BufferClass(16) : null;
		      options = null;
		    }
		    options = options || {};

		    var rnds = options.random || (options.rng || _rng)();

		    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
		    rnds[6] = (rnds[6] & 0x0f) | 0x40;
		    rnds[8] = (rnds[8] & 0x3f) | 0x80;

		    // Copy bytes to buffer, if provided
		    if (buf) {
		      for (var ii = 0; ii < 16; ii++) {
		        buf[i + ii] = rnds[ii];
		      }
		    }

		    return buf || unparse(rnds);
		  }

		  // Export public API
		  var uuid = v4;
		  uuid.v1 = v1;
		  uuid.v4 = v4;
		  uuid.parse = parse;
		  uuid.unparse = unparse;
		  uuid.BufferClass = BufferClass;
		  uuid._rng = _rng;
		  uuid._mathRNG = _mathRNG;
		  uuid._nodeRNG = _nodeRNG;
		  uuid._whatwgRNG = _whatwgRNG;

		  if (('undefined' !== typeof module) && module.exports) {
		    // Publish as node.js module
		    module.exports = uuid;
		  } else if (true) {
		    // Publish as AMD module
		    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return uuid;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


		  } else {
		    // Publish as global (in browsers)
		    _previousRoot = _window.uuid;

		    // **`noConflict()` - (browser only) to reset global 'uuid' var**
		    uuid.noConflict = function() {
		      _window.uuid = _previousRoot;
		      return uuid;
		    };

		    _window.uuid = uuid;
		  }
		})('undefined' !== typeof window ? window : null);


	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		module.exports = { version: "0.0.4", codename: "stillwater", author: "Encapsule", buildID: "MMsoC7piS_KIBd8sJbZnzg", buildTime: "1450647200"};

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph-algorithm-bft.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		/*
		  Inspired by the design of the Boost Graph Library (BGL)
		  http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/index.html

		  All visitor callback functions are optional.
		  See also BFS Visitor Concept documentation from the BGL:
		  http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/BFSVisitor.html

		  var breadthFirstVisitorInterface = {
		  initializeVertex: function(vertexId_, digraph_),
		  discoverVertex: function(vertexId_, digraph_),
		  startVertex: function(vertexId_, digraph_),
		  examineVertex: function(vertexId_, digraph_),
		  examineEdge: function(vertexIdU_, vertexIdV_, digraph_),
		  treeEdge: function(vertexIdU_, vertexIdV_, digraph_),
		  nonTreeEdge: function(vertexIdU_, vertexIdV_, digraph_),
		  grayTarget: function(vertexIdU_, vertexIdV_, digraph_),
		  blackTarget: function(vertexIdU_, vertexIdV_, digraph_),
		  finishVertex: function(vertexId_, digraph_)
		  };

		  request = {
		      digraph: reference to jsgraph.DirectedGraph container object (required)
		      visitor: reference to jsgraph BFV visitor object (required)
		      options: {
		          startVector: reference to a vertex ID string, or an array of vertex ID strings (optional)
		              Note: if ommitted, BFT uses the digraph's root vertex set as the start vertex set
		          signalStart: Boolean flag (optional - default is true if ommitted)
		              Note: By default, BFT will call startVertex on each search root vertex.
		              In advanced scenarios you may wish to override this behavior.
		          traverseContext: reference to BFT search context object (optional)
		              Note: By default, BFT allocates the traversal context internally and returns it to
		              the caller. In advanced scenarios you may wish to provide a pre-initialized
		              (or potentially pre-colored) traversal context object.
		          }
		      }
		  }

		  response = {
		      error: null or string explaining why result is null
		      result: BFS search context object
		  }
		*/

		var algorithmName = "BFT"; // constant string used in error messages
		var colors = __webpack_require__(6);
		var visitorCallback = __webpack_require__(15);
		var normalizeRequest = __webpack_require__(14);


		module.exports = function (request_) {

		    var nrequest = null; // normalized request object
		    var response = { error: null, result: null };
		    var errors = [];
		    var continueSearch = true;
		    var inBreakScope = false;
		    var searchQueue = [];

		    while (!inBreakScope) {
		        inBreakScope = true;
		        var index, vertexId;

		        var innerResponse = normalizeRequest(request_);
		        if (innerResponse.error) {
		            errors.unshift(innerResponse.error);
		            break;
		        }
		        nrequest = innerResponse.result;

		        // initializeVertex visitor callback.
		        if (nrequest.options.traverseContext.searchStatus === 'pending') {
		            for (vertexId in nrequest.options.traverseContext.colorMap) {
		                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'initializeVertex', request: { u: vertexId, g: nrequest.digraph }});
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                continueSearch = innerResponse.result;
		                if (!continueSearch) {
		                    break;
		                }
		            }
		        } // if searchStatus 'pending'

		        nrequest.options.traverseContext.searchStatus = 'active';

		        if (errors.length || !continueSearch) {
		            break;
		        }
		        
		        // Initialize the BF visit or search.
		        // Note that all that distinguishes visit from search is the number of starting vertices. One -> visit, N -> search.

		        for (index in nrequest.options.startVector) {
		            var startingVertexId = nrequest.options.startVector[index];
		            // Ensure the starting vertex is in the graph container.
		            if (!nrequest.digraph.isVertex(startingVertexId)) {
		                errors.unshift("BFT request failed. Vertex '" + startingVertexId + "' not found in specfied directed graph container.");
		                break;
		            }
		            // Ensure the vertex is white in the color map.
		            if (nrequest.options.traverseContext.colorMap[startingVertexId] !== colors.white) {
		                errors.unshift("BFT request failed. Vertex '" + startingVertexId + "' color map not initialized to white.");
		                break;
		            }

		            // startVertex visitor callback.
		            if (nrequest.options.signalStart) {
		                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'startVertex', request: { u: startingVertexId, g: nrequest.digraph }});
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                continueSearch = innerResponse.result;
		            }
		            
		            // Conditionally exit the loop if discoverVertex returned false.
		            if (errors.length || !continueSearch) {
		                break;
		            }

		            // discoverVertex visitor callback.
		            innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'discoverVertex', request: { u: startingVertexId, g: nrequest.digraph }});
		            if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                break;
		            }
		            continueSearch = innerResponse.result;

		            // Remove the vertex from the undiscovered vertex map.
		            delete nrequest.options.traverseContext.undiscoveredMap[startingVertexId];

		            // Add the vertex to the search
		            searchQueue.push(startingVertexId);

		            // Color the vertex discovered (gray)
		            nrequest.options.traverseContext.colorMap[startingVertexId] = colors.gray;

		            // Conditionally exit the loop if discoverVertex returned false.
		            if (!continueSearch) {
		                break;
		            }

		        } // for initialize search

		        // Execute the main breadth-first algorithm using the starting vertex set as the initial contents of the searchQueue.
		        while (searchQueue.length && continueSearch && !errors.length) {

		            vertexId = searchQueue.shift();

		            // By convention
		            nrequest.options.traverseContext.colorMap[vertexId] = colors.black;

		            // examineVertex visitor callback.
		            innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'examineVertex', request: { u: vertexId, g: nrequest.digraph }});
		            if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                break;
		            }
		            continueSearch = innerResponse.result;
		            if (!continueSearch) {
		                break;
		            }

		            var outEdges = nrequest.digraph.outEdges(vertexId);

		            for (index in outEdges) {

		                var outEdge = outEdges[index];

		                // examineEdge visitor callback.
		                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'examineEdge', request: { e: outEdge, g: nrequest.digraph }});
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                continueSearch = innerResponse.result;
		                if (!continueSearch) {
		                    break;
		                }

		                var colorV = nrequest.options.traverseContext.colorMap[outEdge.v];
		                switch (colorV) {

		                case colors.white:
		                    // discoverVertex visitor callback.
		                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'discoverVertex', request: { u: outEdge.v, g: nrequest.digraph }});
		                    if (innerResponse.error) {
		                        errors.unshift(innerResponse.error);
		                        break;
		                    }
		                    continueSearch = innerResponse.result;
		                    delete nrequest.options.traverseContext.undiscoveredMap[outEdge.v];
		                    if (!continueSearch) {
		                        break;
		                    }
		                    // treeEdge visitor callback.
		                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'treeEdge', request: { e: outEdge, g: nrequest.digraph }});
		                    if (innerResponse.error) {
		                        errors.unshift(innerResponse.error);
		                        break;
		                    }
		                    continueSearch = innerResponse.result;
		                    searchQueue.push(outEdge.v);
		                    nrequest.options.traverseContext.colorMap[outEdge.v] = colors.gray;
		                    break;

		                case colors.gray:
		                    // nonTreeEdge visitor callback.
		                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'nonTreeEdge', request: { e: outEdge, g: nrequest.digraph }});
		                    if (innerResponse.error) {
		                        errors.unshift(innerResponse.error);
		                        break;
		                    }
		                    continueSearch = innerResponse.result;
		                    if (continueSearch) {
		                        // grayTarget visitor callback.
		                        innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'grayTarget', request: { e: outEdge, g: nrequest.digraph }});
		                        if (innerResponse.error) {
		                            errors.unshift(innerResponse.error);
		                            break;
		                        }
		                        continueSearch = innerResponse.result;
		                    }
		                    break;

		                case colors.black:
		                    // nonTreeEdge visitor callback.
		                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'nonTreeEdge', request: { e: outEdge, g: nrequest.digraph }});
		                    if (innerResponse.error) {
		                        errors.unshift(innerResponse.error);
		                        break;
		                    }
		                    continueSearch = innerResponse.result;
		                    if (continueSearch) {
		                        // blackTarget visitor callback.
		                        innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'blackTarget', request: { e: outEdge, g: nrequest.digraph }});
		                        if (innerResponse.error) {
		                            errors.unshift(innerResponse.error);
		                            break;
		                        }
		                        continueSearch = innerResponse.result;
		                    }
		                    break;

		                default:
		                    errors.unshift("BFT failure: An invalid color value was found in the color map for vertex '" + outEdge.v + "'. Please file an issue!");
		                    break;

		                } // switch (colorV)

		                if (errors.length || !continueSearch) {
		                    break;
		                }
		                
		            } // for (outEdge in outEdges)

		            if (errors.length || !continueSearch) {
		                break;
		            }

		            // finishVertex visitor callback.
		            innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'finishVertex', request: { u: vertexId, g: nrequest.digraph }});
		            if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                break;
		            }
		            continueSearch = innerResponse.result;
		            if (!continueSearch) {
		                break;
		            }

		        } // while (searchQueue.length)

		    } // end while (!inBreakScope)

		    if (errors.length) {
		        if (nrequest) {
		            nrequest.options.traverseContext.searchStatus = 'error';
		        }
		        errors.unshift("jsgraph.directed.breadthFirstTraverse algorithm failure:");
		        response.error = errors.join(' ');
		    } else {
		        nrequest.options.traverseContext.searchStatus = continueSearch?'completed':'terminated';
		        response.result = nrequest.options.traverseContext;
		    }
		    return response;
		};


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph-algorithm-dft.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		var algorithmName = "DFT"; // used in error messages
		var colors = __webpack_require__(6);
		var visitorCallback = __webpack_require__(15);
		var normalizeRequest = __webpack_require__(14);


		module.exports = function (request_) {

		    var nrequest = null; // normalized request
		    var response = { error: null, result: null };
		    var errors = [];
		    var continueSearch = true;
		    var inBreakScope = false;

		    while (!inBreakScope) {
		        inBreakScope = true;
		        var index, vertexId;
		        var finishedEdges = {};
		        var innerRequest = null;
		        var hash = null;

		        var innerResponse = normalizeRequest(request_);
		        if (innerResponse.error) {
		            errors.unshift(innerResponse.error);
		            break;
		        }
		        nrequest = innerResponse.result;

		        // initializeVertex visitor callback.
		        if (nrequest.options.traverseContext.searchStatus === 'pending') {
		            for (vertexId in nrequest.options.traverseContext.colorMap) {
		                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'initializeVertex', request: { u: vertexId, g: nrequest.digraph }});
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                continueSearch = innerResponse.result;
		                if (!continueSearch) {
		                    break;
		                }
		            } // end for
		        } // if searchStatus 'pending'

		        nrequest.options.traverseContext.searchStatus = 'active';

		        if (errors.length || !continueSearch) {
		            break;
		        }

		        // Outer depth-first search loop iterates over the start vertex set.
		        for (index in nrequest.options.startVector) {

		            vertexId = nrequest.options.startVector[index];
		            
		            // Ensure the starting vertex is actually in the graph.
		            if (!nrequest.digraph.isVertex(vertexId)) {
		                errors.unshift("DFT request failed. Vertex '" + vertexId + "' not found in specified directed graph container.");
		                break;
		            }

		            // Ensure the starting vertex is undicovered (white in the color map).
		            if (nrequest.options.traverseContext.colorMap[vertexId] !== colors.white) {
		                errors.unshift("DFT request failed. Vertex '" + vertexId + "' color map not initialized to white.");
		                break;
		            }

		            // startVertex visitor callback
		            if (nrequest.options.signalStart) {
		                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'startVertex', request: { u: vertexId, g: nrequest.digraph }});
		                if (innerResponse.error) {
		                    errors.unshift(innerResponse.error);
		                    break;
		                }
		                continueSearch = innerResponse.result;
		            }
		            if (!continueSearch) {
		                break;
		            }

		            // searchStack is a FILO of FIFO's (or stack of queues if you prefer)
		            // initialized with starting vertex set member under-evaluation's ID.
		            var searchStack = [ [ vertexId ] ]; 

		            // Iterate until search stack is empty, a client visitor method returns false, or an error occurs.
		            while (searchStack.length && continueSearch && !errors.length) {

		                // Peek at the identifier of the vertex at the front of the queue atop the search stack.

		                var currentVertexId = (searchStack[searchStack.length - 1])[0];

		                switch (nrequest.options.traverseContext.colorMap[currentVertexId]) {

		                case colors.white:

		                    // Remove the vertex from the undiscovered map.
		                    delete nrequest.options.traverseContext.undiscoveredMap[currentVertexId];

		                    // Change the vertex's state to GRAY to record its discovery.
		                    nrequest.options.traverseContext.colorMap[currentVertexId] = colors.gray;

		                    // discoverVertex visitor callback.
		                    innerResponse = visitorCallback({
		                        algorithm: algorithmName,
		                        visitor: nrequest.visitor,
		                        method: 'discoverVertex',
		                        request: { u: currentVertexId, g: nrequest.digraph }
		                    });
		                    if (innerResponse.error) {
		                        errors.unshift(innerResponse.error);
		                        break;
		                    }
		                    continueSearch = innerResponse.result;
		                    if (!continueSearch) {
		                        break;
		                    }

		                    // treeEdge visitor callback.
		                    if (searchStack.length > 1) {
		                        innerResponse = visitorCallback({
		                            algorithm: algorithmName,
		                            visitor: nrequest.visitor,
		                            method: 'treeEdge',
		                            request: { e: { u: searchStack[searchStack.length - 2][0], v: currentVertexId }, g: nrequest.digraph }
		                        });
		                        if (innerResponse.error) {
		                            errors.unshift(innerResponse.error);
		                            break;
		                        } else {
		                            continueSearch = innerResponse.result;
		                            if (!continueSearch) {
		                                break;
		                            }
		                        }
		                    }

		                    // Examine adjacent vertices
		                    var vertexOutEdges = nrequest.digraph.outEdges(currentVertexId);
		                    var adjacentVertices = [];

		                    while (vertexOutEdges.length && !errors.length && continueSearch) {

		                        var adjacentVertexId = vertexOutEdges.shift().v;

		                        // examineEdge visitor callback.
		                        innerResponse = visitorCallback({
		                            algorithm: algorithmName,
		                            visitor: nrequest.visitor,
		                            method: 'examineEdge',
		                            request: { e: { u: currentVertexId, v: adjacentVertexId }, g: nrequest.digraph }
		                        });
		                        if (innerResponse.error) {
		                            errors.unshift(innerRepsonse.error);
		                            break;
		                        }
		                        continueSearch = innerResponse.result;
		                        if (!continueSearch) {
		                            break;
		                        }

		                        switch (nrequest.options.traverseContext.colorMap[adjacentVertexId]) {

		                        case colors.white:
		                            adjacentVertices.push(adjacentVertexId);
		                            break;
		                        case colors.gray:
		                            // backEdge visitor callback.
		                            innerResponse = visitorCallback({
		                                algorithm: algorithmName,
		                                visitor: nrequest.visitor,
		                                method: 'backEdge',
		                                request: { e: { u: currentVertexId, v: adjacentVertexId }, g: nrequest.digraph }
		                            });
		                            if (innerResponse.error) {
		                                errors.unshift(innerResponse.error);
		                            } else {
		                                continueSearch = innerResponse.result;
		                            }
		                            break;
		                        case colors.black:
		                            // forwardOrCrossEdge visitor callback.
		                            innerResponse = visitorCallback({
		                                algorithm: algorithmName,
		                                visitor: nrequest.visitor,
		                                method: 'forwardOrCrossEdge',
		                                request: { e: { u: currentVertexId, v: adjacentVertexId }, g: nrequest.digraph }
		                            });
		                            if (innerResponse.error) {
		                                errors.unshift(innerResponse.error);
		                            } else {
		                                continueSearch = innerResponse.result;
		                            }
		                            break;
		                        }
		                    }
		                    if (adjacentVertices.length) {
		                        searchStack.push(adjacentVertices);
		                    }                                

		                    break;

		                case colors.gray:
		                    // change the vertex's state to black to indicate search completion.
		                    nrequest.options.traverseContext.colorMap[currentVertexId] = colors.black;
		                    // finishVertex visitor callback.
		                    innerResponse = visitorCallback({
		                        algorithm: algorithmName,
		                        visitor: nrequest.visitor,
		                        method: 'finishVertex',
		                        request: { u: currentVertexId, g: nrequest.digraph }
		                    });
		                    if (innerResponse.error) {
		                        errors.unshift(innerResponse.error);
		                        break;
		                    }
		                    continueSearch = innerResponse.result;
		                    if (!continueSearch) {
		                        break;
		                    }
		                    var inEdgeSet = nrequest.digraph.inEdges(currentVertexId);
		                    while (inEdgeSet.length) {
		                        var inEdge = inEdgeSet.pop();
		                        hash = inEdge.u + inEdge.v;
		                        finishedEdges[hash] = inEdge;
		                    }
		                    searchStack[searchStack.length - 1].shift();
		                    if (!(searchStack[searchStack.length - 1].length)) {
		                        searchStack.pop();
		                    }
		                    break;

		                case colors.black:

		                    // The black sheep. The only way for a vertex to end up in this state
		                    // is for it to be queued after another adjacent vertex that reaches
		                    // it first in the depth-first search tree. By definition it's already
		                    // been 'finished'. 

		                    if (searchStack.length > 1) {
		                        innerRequest = { e: { u: (searchStack[searchStack.length - 2])[0], v: currentVertexId }, g: nrequest.digraph };
		                        innerResponse = visitorCallback({
		                            algorithm: algorithmName,
		                            visitor: nrequest.visitor,
		                            method: 'forwardOrCrossEdge',
		                            request: innerRequest
		                        });
		                        if (innerResponse.error) {
		                            errors.unshift(innerResponse.error);
		                            break;
		                        }
		                        continueSearch = innerResponse.result;
		                        if (!continueSearch) {
		                            break;
		                        }
		                    }
		                    searchStack[searchStack.length - 1].shift();
		                    if (!searchStack[searchStack.length - 1].length) {
		                        searchStack.pop();
		                    }
		                    break;

		                default:
		                    errors.unshift("DFT failure: An invalid color value was found in the color map for vertex '" + currentVertexId + "'.");
		                    break;
		                }
		            } // while search stack is not empty

		            if (errors.length || !continueSearch) {
		                break;
		            }
		            
		        } // end while outer depth-first search loop

		        if (errors.length || !continueSearch) {
		            break;
		        }

		        for (hash in finishedEdges) {
		            innerRequest = { e: finishedEdges[hash], g: nrequest.digraph };
		            innerResponse = visitorCallback({
		                algorithm: algorithmName,
		                visitor: nrequest.visitor,
		                method: 'finishEdge',
		                request: innerRequest
		            });
		            if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                break;
		            }
		            continueSearch = innerResponse.result;
		            if (!continueSearch) {
		                break;
		            }

		        } // end for


		    } // while !inBreakScope

		    if (errors.length) {
		        if (nrequest) {
		            nrequest.options.traverseContext.searchStatus = 'error';
		        }
		        errors.unshift("jsgraph.directed.depthFirstTraverse algorithm failure:");
		        response.error = errors.join(' ');
		    } else {
		        nrequest.options.traverseContext.searchStatus = continueSearch?'completed':'terminated';
		        response.result = nrequest.options.traverseContext;
		    }
		    return response;
		    

		};



	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph-algorithm-transpose.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		// transposeDirectedGraph computes the transpose of input digraph_,
		// returns the the result as a new DirectedGraph instance.
		// More info on directed graph transposition:
		// http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/transpose_graph.html

		var helperFunctions = __webpack_require__(4);
		var DirectedGraph = __webpack_require__(12).DirectedGraph;

		/*
		  request = DirectedGraph reference
		  response = {
		      error: null or string explaining why result is null
		      result: a new DirectedGraph instance with the same vertex set,
		              the edge set transposed (direction reversed), and vertex
		              and edge properties (if any) linked by reference to the
		              source digraph
		  }
		*/

		module.exports = function (digraph_) {
		    var response = { error: null, result: null };
		    var errors = [];
		    var innerResponse;

		    var digraphOut = new DirectedGraph();

		    var jstype = helperFunctions.JSType(digraph_);
		    if (jstype !== '[object Object]') {
		        errors.unshift("Expected reference to DirectedGraph but found type '" + jstype + "'.");
		    } else {
		        
		        digraph_.getVertices().forEach(function(vertexId_) {
		            innerResponse = digraphOut.addVertex({ u: vertexId_, p: digraph_.getVertexProperty(vertexId_) });
		            if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		            }
		        });

		        digraph_.getEdges().forEach(function(edge_) {
		            innerResponse = digraphOut.addEdge({ e: { u: edge_.v, v: edge_.u }, p: digraph_.getEdgeProperty(edge_) });
		            if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		            }
		        });

		    } // end else

		    if (errors.length) {
		        errors.unshift("jsgraph.directed.transpose failed:");
		        response.error = errors.join(' ');
		    } else {
		        response.result = digraphOut;
		    }
		    return response;
		};



	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph-json-export.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		// Export the topology and attached vertex and edge properties
		// of a DirectedGraph container object as a JSON-format UTF8 
		// string. This canonical format can be passed as an optional
		// constructor parameter to restore container state across
		// execution contexts.

		var helperFunctions = __webpack_require__(4);
		var DigraphDataExporter = module.exports = {};

		DigraphDataExporter.exportObject = function (digraph_) {
		    var digraphState = {
		        name: digraph_.getGraphName(),
		        description: digraph_.getGraphDescription(),
		        vlist: [],
		        elist: []
		    };
		    var vertexSerialized = {}; // Keep track of the vertices referenced in the edge list.
		    var edgeList = digraph_.getEdges();
		    var vertexList = digraph_.getVertices();
		    digraph_.getEdges().forEach(function(edge_) {
		        var edgeProperty = digraph_.getEdgeProperty(edge_);
		        digraphState.elist.push({ e: edge_, p: edgeProperty });
		        vertexSerialized[edge_.u] = vertexSerialized[edge_.v] = true;
		    });
		    digraph_.getVertices().forEach(function(vertexId_) {
		        var vertexProperty = digraph_.getVertexProperty(vertexId_);
		        var jstype = helperFunctions.JSType(vertexProperty);
		        // If the vertex has an attached property, serialize it to the vlist.
		        if (jstype !== '[object Undefined]') {
		            digraphState.vlist.push({ u: vertexId_, p: vertexProperty });
		        } else {
		            // If the vertex wasn't mentioned in the elist, we need to serialize, sans property, to the vlist.
		            if (vertexSerialized[vertexId_] !== true) {
		                digraphState.vlist.push({ u: vertexId_ });
		            }
		        }
		    });
		    return digraphState;
		};

		DigraphDataExporter.exportJSON = function (digraph_, replacer_, space_) {
		    return JSON.stringify(DigraphDataExporter.exportObject(digraph_), replacer_, space_);
		};


	/***/ },
	/* 25 */
	/***/ function(module, exports) {

		/*
		  Encapsule/jsgraph/src/digraph-json-import.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		module.exports = function (digraph_, jsonOrObject_) {

		    var jsonParse;
		    var getType = function(ref_) { return Object.prototype.toString.call(ref_); };
		    var response = { error: null, result: null };
		    var errors = [];
		    var inBreakScope = false;

		    var processVertex = function(vertexDescriptor_) {
		        type = getType(vertexDescriptor_);
		        if (type !== '[object Object]') {
		            errors.unshift("JSON semantics error: Expected vertex descriptor object in 'vlist' array but found '" + type + "' instead.");
		        } else {
		            type = getType(vertexDescriptor_.u);
		            if (type !== '[object String]') {
		                errors.unshift("JSON semantics error: Expected vertex descriptor property 'u' to be a string but found '" + type + "' instead.");
		            } else {
		                digraph_.addVertex({ u: vertexDescriptor_.u, p: vertexDescriptor_.p});
		            }
		        }
		    };

		    var processEdge = function (edgeDescriptor_) {
		        type = getType(edgeDescriptor_);
		        if (type !== '[object Object]') {
		            errors.unshift("JSON semantics error: Expected edge descriptor object in 'elist' array but found '" + type + "' instead.");
		        } else {
		            type = getType(edgeDescriptor_.e);
		            if (type !== '[object Object]') {
		                errors.unshift("JSON semantics error: Edge record in 'elist' should define edge descriptor object 'e' but but found '" + type + "' instead.");
		            } else {
		                type = getType(edgeDescriptor_.e.u);
		                if (type !== '[object String]') {
		                    errors.unshift("JSON semantics error: Expected edge descriptor property 'e.u' to be a string but found '" + type + "' instead.");
		                } else {
		                    type = getType(edgeDescriptor_.e.v);
		                    if (type !== '[object String]') {
		                        errors.unshift("JSON semantics error: Expected edge descriptor property 'e.v' to be a string but found '" + type + "' instead.");
		                    } else {
		                        digraph_.addEdge({ e: edgeDescriptor_.e, p: edgeDescriptor_.p});
		                    }
		                }
		            }
		        }
		    };

		    while (!inBreakScope) {
		        inBreakScope = true;

		        var type = getType(jsonOrObject_);
		        switch (type) {
		        case '[object String]':
		            try {
		                jsonParse = JSON.parse(jsonOrObject_);
		            } catch (exception_) {
		                errors.unshift("Exception occurred while parsing JSON: " + exception_.message);
		            }
		            break;
		        case '[object Object]':
		            jsonParse = jsonOrObject_;
		            break;
		        default:
		            errors.unshift("Invalid reference to '" + type + "' passed instead of expected JSON (or equivalent object) reference.");
		        }
		        if (errors.length) {
		            break;
		        }

		        type = getType(jsonParse);
		        if (type !== '[object Object]') {
		            errors.unshift("JSON semantics error: Expected top-level object but found '" + type + "'.");
		            break;
		        }

		        type = getType(jsonParse.name);
		        switch (type) {
		        case '[object Undefined]':
		            jsonParse.name = "";
		            break;
		        case '[object String]':
		            break;
		        default:
		            errors.unshift("JSON semantics error: Expected 'name' to be a string but found '" + type + "'.");
		            break;
		        }
		        digraph_.setGraphName(jsonParse.name);
		        
		        type = getType(jsonParse.description);
		        switch (type) {
		        case '[object Undefined]':
		            jsonParse.description = "";
		            break;
		        case '[object String]':
		            break;
		        default:
		            error.unshift("JSON semantics error: Expected 'description' to be a string but found '" + type + "'.");
		            break;
		        }
		        digraph_.setGraphDescription(jsonParse.description);
		            
		        type = getType(jsonParse.vlist);
		        switch (type) {
		        case '[object Undefined]':
		            jsonParse.vlist = []; // default to empty vertex list
		            break;
		        case '[object Array]':
		            // do nothing the array is parsed below
		            break;
		        default:
		            errors.unshift("JSON semantics error: Expected 'vlist' (vertices) to be an array but found '" + type + "'.");
		            break;
		        }
		        if (errors.length) {
		            break;
		        }

		        type = getType(jsonParse.elist);
		        switch (type) {
		        case '[object Undefined]':
		            jsonParse.elist = []; // default to empty edge list
		            break;
		        case '[object Array]':
		            // do nothing
		            break;
		        default:
		            errors.unshift("JSON semantics error: Expected 'elist' (edges) to be an array but found '" + type + "'.");
		        }
		        if (errors.length) {
		            break;
		        }

		        jsonParse.vlist.forEach(processVertex);
		        if (errors.length) {
		            break;
		        }

		        jsonParse.elist.forEach(processEdge);
		        if (errors.length) {
		            break;
		        }

		    } // while !inBreakScope

		    if (errors.length) {
		        response.error = errors.join(' ');
		    } else {
		        response.result = true;
		    }

		    return response;

		};


	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		/*
		  Encapsule/jsgraph/src/digraph-in-parameters.js

		  Copyright (C) 2014-2015 Christopher D. Russell

		  This library is published under the MIT License and is part of the
		  Encapsule Project System in Cloud (SiC) open service architecture.
		  Please follow https://twitter.com/Encapsule for news and updates
		  about jsgraph and other time saving libraries that do amazing things
		  with in-memory data on Node.js and HTML.
		*/

		var helperFunctions = __webpack_require__(4);

		var verifyVertexReadRequest = function(request_) {
		    var response = { error: null, result: false };
		    var jstype = helperFunctions.JSType(request_);
		    if (jstype !== '[object String]') {
		        response.error = "Invalid value type '" + jstype + "' found when expecting vertex read request. Expected '[object String]'.";
		    } else {
		        response.result = true;
		    }
		    return response;
		};

		var verifyVertexWriteRequest = function(request_) {
		    var response = { error: null, result: false };
		    var inBreakScope = false;
		    while (!inBreakScope) {
		        inBreakScope = true;
		        var jstype = helperFunctions.JSType(request_);
		        if (jstype !== '[object Object]') {
		            response.error = "Invalid value type '" + jstype + "' found when expecting a vertex write request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.u);
		        if (jstype !== '[object String]') {
		            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'u' in vertex write request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.p);
		        if (jstype === '[object Function]') {
		            response.error = "Invalid value type '" + jstype + " found while inspecting vertex property 'p' in vertex write request object. Must be serializable to JSON!";
		            break;
		        }
		        response.result = true;
		    }
		    return response;
		};

		var verifyEdgeReadRequest = function(request_) {
		    var response = { error: null, result: false };
		    var inBreakScope = false;
		    while (!inBreakScope) {
		        inBreakScope = true;
		        var jstype = helperFunctions.JSType(request_);
		        if (jstype !== '[object Object]') {
		            response.error = "Invalid value type '" + jstype + "' found when expecting edge read request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.u);
		        if (jstype !== '[object String]') {
		            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'u' in edge read request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.v);
		        if (jstype !== '[object String]') {
		            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'v' in edge read request object.";
		            break;
		        }
		        response.result = true;
		    }
		    return response;
		};

		var verifyEdgeWriteRequest = function(request_) {
		    var response = { error: null, result: false };
		    var inBreakScope = false;
		    while (!inBreakScope) {
		        inBreakScope = true;
		        var jstype = helperFunctions.JSType(request_);
		        if (jstype !== '[object Object]') {
		            response.error = "Invalid value type '" + jstype + "' found when expecting edge write request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.e);
		        if (jstype !== '[object Object]') {
		            response.error = "Invalid value type '" + jstype + "' found looking for edge descriptor object 'e' in edge write request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.e.u);
		        if (jstype !== '[object String]') {
		            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'e.u' in edge write request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.e.v);
		        if (jstype !== '[object String]') {
		            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'e.v' in edge write request object.";
		            break;
		        }
		        jstype = helperFunctions.JSType(request_.p);
		        if (jstype === '[object Function]') {
		            response.error = "Invalid value type '" + jstype + "' found while insecting edge property 'p' in edge write request object. Must be serializable to JSON!";
		            break;
		        }
		        response.result = true;
		    }
		    return response;
		};

		module.exports = {
		    verifyVertexReadRequest: verifyVertexReadRequest,
		    verifyVertexWriteRequest: verifyVertexWriteRequest,
		    verifyEdgeReadRequest: verifyEdgeReadRequest,
		    verifyEdgeWriteRequest: verifyEdgeWriteRequest
		};


	/***/ },
	/* 27 */
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

		(function() {
		  'use strict';
		  var Filter, IDENTIFIER, verifyFilterCreateRequest, verifyFilterSpecDeclaration;

		  IDENTIFIER = __webpack_require__(2);

		  verifyFilterCreateRequest = __webpack_require__(28);

		  verifyFilterSpecDeclaration = __webpack_require__(29);

		  Filter = __webpack_require__(44);


		  /*
		      request = {
		  
		           * Describes the function for machine readers.
		          operationID: required IRUT string
		  
		           * Describe the function for human readers.
		          operationName: required string
		          operationDescription: required string
		  
		           * Describe your function's inputs for human readers.
		          inputName: required string
		          inputDescription: required string
		  
		           * Describe your function's inputs for machine readers.
		          inputTypeMap: object
		  
		           * Describe your function's outputs for human readers.
		          outputName: required string
		          outputDescription: required string
		  
		           * Describe your function's outputs for machine readers.
		          
		          outputTypeMap: object
		  
		          bodyFunction: function you wish to wrap in a NormalizedFunction
		  
		      }
		      response = {
		          error: null or string explaining why result is null
		          result: a NormalizedFunction instance or null if an error occurred
		      }
		   */

		  module.exports = function(request_) {
		    var errors, functionDescriptor, inBreakScope, innerResponse, response;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      innerResponse = verifyFilterCreateRequest(request_);
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        break;
		      }
		      functionDescriptor = innerResponse.result;
		      if ((functionDescriptor.inputFilterSpec != null) && functionDescriptor.inputFilterSpec) {
		        innerResponse = verifyFilterSpecDeclaration({
		          path: '~.inputFilterSpec',
		          typemap: functionDescriptor.inputFilterSpec
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		      }
		      if ((functionDescriptor.outputFilterSpec != null) && functionDescriptor.outputFilterSpec) {
		        innerResponse = verifyFilterSpecDeclaration({
		          path: '~.outputFilterSpec',
		          typemap: functionDescriptor.outputFilterSpec
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		      }
		      Object.freeze(functionDescriptor);
		      response.result = new Filter(functionDescriptor);
		    }
		    if (errors.length) {
		      errors.unshift("jbus.common.filter.create request failed:");
		      response.error = errors.join(' ');
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 28 */
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

		(function() {
		  var IDENTIFIER, TYPES, normalizeCompositionRequest;

		  IDENTIFIER = __webpack_require__(2);

		  TYPES = __webpack_require__(5);

		  normalizeCompositionRequest = module.exports = function(request_) {
		    var errors, inBreakScope, innerResponse, localTypeCheck, nrequest, response;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;

		      /*
		          request =
		              ref: reference
		              types: array of jsMoniker strings
		              path: string (path corresponds to whatever ref addresses)
		              suppressError: boolean
		       */
		      localTypeCheck = function(request__) {
		        var innerResponse;
		        innerResponse = TYPES.check.inTypeSet({
		          value: request__.ref,
		          types: request__.types
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          errors.unshift("Internal error while checking property '" + request__.path + "'.");
		          return false;
		        }
		        if (!innerResponse.result) {
		          if (!((request__.suppressError != null) && request__.suppressError)) {
		            errors.unshift(innerResponse.guidance);
		            errors.unshift("Invalid data type specified for property '" + request__.path + "'.");
		          }
		          return false;
		        }
		        return true;
		      };
		      if (!localTypeCheck({
		        ref: request_,
		        path: '~',
		        types: 'jsObject'
		      })) {
		        break;
		      }
		      nrequest = {};
		      if (!localTypeCheck({
		        ref: request_.operationID,
		        path: '~.operationID',
		        types: 'jsString'
		      })) {
		        break;
		      }
		      if (request_.operationID === 'demo') {
		        nrequest.operationID = IDENTIFIER.irut.fromEther();
		      } else {
		        innerResponse = IDENTIFIER.irut.isIRUT(request_.operationID);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          errors.unshift("Internal error checking property '~.operationID'.");
		          break;
		        }
		        if (!innerResponse.result) {
		          errors.unshift(innerResponse.guidance);
		          errors.unshift("Invalid IRUT specified for '~.operationID:");
		          break;
		        }
		        nrequest.operationID = request_.operationID;
		      }
		      if (!localTypeCheck({
		        ref: request_.operationName,
		        path: '~.operationName',
		        types: 'jsString',
		        suppressError: true
		      })) {
		        nrequest.operationName = 'unnamed';
		      } else {
		        nrequest.operationName = request_.operationName;
		      }
		      if (!localTypeCheck({
		        ref: request_.operationDescription,
		        path: '~.operationDescription',
		        types: 'jsString',
		        suppressError: true
		      })) {
		        nrequest.operationDescription = nrequest.operationID + " provides no description.";
		      } else {
		        nrequest.operationDescription = request_.operationDescription;
		      }
		      if (!localTypeCheck({
		        ref: request_.inputName,
		        path: '~.inputName',
		        types: 'jsString',
		        suppressError: true
		      })) {
		        nrequest.inputName = nrequest.operationID + " input";
		      } else {
		        nrequest.inputName = request_.inputName;
		      }
		      if (!localTypeCheck({
		        ref: request_.inputDescription,
		        path: '~.inputDescription',
		        types: 'jsString',
		        suppressError: true
		      })) {
		        nrequest.inputDesription = nrequest.operationID + " input provides no description.";
		      } else {
		        nrequest.inputDescription = request_.inputDescription;
		      }
		      if (!localTypeCheck({
		        ref: request_.inputFilterSpec,
		        path: '~.inputFilterSpec',
		        types: ['jsUndefined', 'jsObject']
		      })) {
		        break;
		      }
		      nrequest.inputFilterSpec = request_.inputFilterSpec;
		      if (!localTypeCheck({
		        ref: request_.outputName,
		        path: '~.outputName',
		        types: 'jsString',
		        suppressError: true
		      })) {
		        nrequest.outputName = nrequest.operationID + " output";
		      } else {
		        nrequest.outputName = request_.outputName;
		      }
		      if (!localTypeCheck({
		        ref: request_.outputDescription,
		        path: '~.outputDescription',
		        types: 'jsString',
		        suppressError: true
		      })) {
		        nrequest.outputDescription = nrequest.operationID + " output provides no description.";
		      } else {
		        nrequest.outputDescription = request_.outputDescription;
		      }
		      if (!localTypeCheck({
		        ref: request_.outputFilterSpec,
		        path: '~.outputFilterSpec',
		        types: ['jsUndefined', 'jsObject']
		      })) {
		        break;
		      }
		      nrequest.outputFilterSpec = request_.outputFilterSpec;
		      if (!localTypeCheck({
		        ref: request_.bodyFunction,
		        path: '~.bodyFunction',
		        types: ['jsFunction', 'jsUndefined']
		      })) {
		        break;
		      }
		      nrequest.bodyFunction = request_.bodyFunction;
		      response.result = nrequest;
		    }
		    if (errors.length) {
		      response.error = errors.join(' ');
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 29 */
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

		(function() {
		  var IDENTIFIER, TYPES, verifyCompositionTypeMapDeclaration, verifyTypeConstraintArgs;

		  IDENTIFIER = __webpack_require__(2);

		  TYPES = __webpack_require__(5);


		  /*
		      request = {
		          path: string
		          typemap: object
		      }
		   */

		  verifyCompositionTypeMapDeclaration = module.exports = function(request_) {
		    var acceptNamespace, constraint, constraintOptions, constraintProp, defaulted, description, errors, inBreakScope, innerResponse, jsMonikers, label, mapPropertyName, mapPropertyValue, mapQueue, newPath, opaqueNamespace, response, subnamespacesDeclared, typemap, typemapDescriptor, typepath, validTypeConstraint;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      innerResponse = TYPES.check.inTypeSet({
		        value: request_,
		        types: 'jsObject'
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        break;
		      }
		      if (!innerResponse.result) {
		        errors.unshift(innerResponse.guidance);
		        errors.unshift("Invalid request:");
		        break;
		      }
		      innerResponse = TYPES.check.inTypeSet({
		        value: request_.path,
		        types: 'jsString'
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        break;
		      }
		      if (!innerResponse.result) {
		        errors.unshift(innerResponse.guidance);
		        errors.unshift("Invalid request:");
		        break;
		      }
		      innerResponse = TYPES.check.inTypeSet({
		        value: request_.typemap,
		        types: 'jsObject'
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        break;
		      }
		      if (!innerResponse.result) {
		        errors.unshift(innerResponse.guidance);
		        errors.unshift("Invalid request:");
		        break;
		      }
		      mapQueue = [];
		      mapQueue.push(request_);
		      while (mapQueue.length) {
		        constraint = "default";
		        constraintOptions = void 0;
		        jsMonikers = void 0;
		        label = void 0;
		        description = void 0;
		        validTypeConstraint = false;
		        acceptNamespace = false;
		        opaqueNamespace = false;
		        defaulted = false;
		        subnamespacesDeclared = false;
		        typemapDescriptor = mapQueue.shift();
		        typepath = (typemapDescriptor.path != null) && typemapDescriptor.path || '~';
		        typemap = typemapDescriptor.typemap;
		        for (mapPropertyName in typemap) {
		          mapPropertyValue = typemap[mapPropertyName];
		          switch (mapPropertyName) {
		            case '____opaque':
		              if (mapPropertyValue) {
		                opaqueNamespace = true;
		              }
		              break;
		            case '____defaultValue':
		              defaulted = true;
		              break;
		            case '____accept':
		              if (validTypeConstraint) {
		                errors.unshift("Redundant type constraint declared on namespace '" + mapPropertyName + "'.");
		                break;
		              }
		              innerResponse = verifyTypeConstraintArgs('____accept', mapPropertyValue);
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                break;
		              }
		              acceptNamespace = true;
		              validTypeConstraint = true;
		              break;
		            case '____types':
		              if (validTypeConstraint) {
		                errors.unshift("Redundant type constraint declared on namespace '" + mapPropertyName + "'.");
		                break;
		              }
		              innerResponse = verifyTypeConstraintArgs('____types', mapPropertyValue);
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                break;
		              }
		              validTypeConstraint = true;
		              break;
		            case '____label':
		              innerResponse = TYPES.check.inTypeSet({
		                value: mapPropertyValue,
		                types: ['jsString']
		              });
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              if (!innerResponse.result) {
		                errors.unshift(innerResponse.guidance);
		                errors.unshift("Error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              label = mapPropertyValue;
		              break;
		            case '____description':
		              innerResponse = TYPES.check.inTypeSet({
		                value: mapPropertyValue,
		                types: ['jsString']
		              });
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              if (!innerResponse.result) {
		                errors.unshift(innerResponse.guidance);
		                errors.unshift("Error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              description = mapPropertyValue;
		              break;
		            case '____inValueSet':
		              innerResponse = TYPES.check.inTypeSet({
		                value: mapPropertyValue,
		                types: ['jsArray']
		              });
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              if (!innerResponse.result) {
		                errors.unshift(innerResponse.guidance);
		                errors.unshift("Error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              constraint = 'inValueSet';
		              constraintOptions = mapPropertyValue;
		              break;
		            case '____inRangeInclusive':
		              innerResponse = TYPES.check.inTypeSet({
		                value: mapPropertyValue,
		                types: ['jsObject']
		              });
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              if (!innerResponse.result) {
		                errors.unshift(innerResponse.guidance);
		                errors.unshift("Error checking directive '" + mapPropertyName + "':");
		                break;
		              }
		              innerResponse = TYPES.check.inTypeSet({
		                value: mapPropertyValue.begin,
		                types: ['jsNumber', 'jsString']
		              });
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                errors.unshift("Internal error checking directive '" + mapPropertyName + ".begin':");
		                break;
		              }
		              if (!innerResponse.result) {
		                errors.unshift(innerResponse.guidance);
		                errors.unshift("Error checking directive '" + mapPropertyName + ".begin':");
		                break;
		              }
		              innerResponse = TYPES.check.inTypeSet({
		                value: mapPropertyValue.end,
		                types: ['jsNumber', 'jsString']
		              });
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                errors.unshift("Internal error checking directive '" + mapPropertyName + ".end':");
		                break;
		              }
		              if (!innerResponse.result) {
		                errors.unshift(innerResponse.guidance);
		                errors.unshift("Error checking directive '" + mapPropertyName + ".end':");
		                break;
		              }
		              constraint = 'inRangeInclusive';
		              constraintOptions = mapPropertyValue;
		              break;
		            default:
		              if (mapPropertyName.indexOf('____') === 0) {
		                errors.unshift("Unrecognized typemap directive '" + mapPropertyName + "' not allowed in declaration.");
		                break;
		              }
		              innerResponse = TYPES.check.inTypeSet({
		                value: mapPropertyValue,
		                types: ['jsObject']
		              });
		              if (innerResponse.error) {
		                errors.unshift(innerResponse.error);
		                errors.unshift("Internal error queuing typemap object '" + mapPropertyName + "':");
		                break;
		              }
		              if (!innerResponse.result) {
		                errors.unshift(innerResponse.guidance);
		                errors.unshift("Error queuing typemap object '" + mapPropertyName + "':");
		                break;
		              }
		              newPath = typepath + "." + mapPropertyName;
		              mapQueue.push({
		                path: newPath,
		                typemap: mapPropertyValue
		              });
		              subnamespacesDeclared = true;
		              break;
		          }
		          if (acceptNamespace && subnamespacesDeclared) {
		            errors.unshift("You cannot declare subnamespace filter spec(s) of a parent namespace declared using '____accept'.");
		            break;
		          }
		        }
		        if (!errors.length) {
		          inBreakScope = false;
		          while (!inBreakScope) {
		            inBreakScope = true;
		            if (!(validTypeConstraint || opaqueNamespace)) {
		              errors.unshift("Missing required '____accept', '____types', or '_____opaque' type constraint directive.");
		              break;
		            }
		            if (validTypeConstraint && opaqueNamespace) {
		              errors.unshift("You cannot specify '____accept' or '____types' constraints on an '____opaque' namespace.");
		              break;
		            }
		            if (opaqueNamespace && constraintOptions) {
		              errors.unshift("You cannot specify value-based constraints on an '____opaque' namespace.");
		              break;
		            }
		            if (validTypeConstraint && defaulted) {
		              constraintProp = acceptNamespace && '____accept' || '____types';
		              if (-1 !== typemap[constraintProp].indexOf('jsUndefined')) {
		                errors.unshift("You cannot specifiy a default value on an optional namespace.");
		                break;
		              }
		            }
		          }
		        }
		        if (errors.length) {
		          errors.unshift("While examining data namespace '" + typepath + "':");
		          break;
		        }
		      }
		    }
		    if (errors.length) {
		      response.error = errors.join(' ');
		    } else {
		      response.result = request_.typemap;
		    }
		    return response;
		  };

		  verifyTypeConstraintArgs = function(name_, argument_) {
		    var errors2, i, inBreakScope, innerResponse, jsMoniker, len, response, value;
		    response = {
		      error: null,
		      result: null
		    };
		    errors2 = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      innerResponse = TYPES.check.inTypeSet({
		        value: argument_,
		        types: ['jsString', 'jsArray']
		      });
		      if (innerResponse.error) {
		        errors2.unshift(innerResponse.error);
		        errors2.unshift("Internal error checking directive '" + name_ + "':");
		        break;
		      }
		      if (!innerResponse.result) {
		        errors2.unshift(innerResponse.guidance);
		        errors2.unshift("Error checking directive '" + name_ + "':");
		        break;
		      }
		      if (innerResponse.result === 'jsString') {
		        value = [argument_];
		      } else {
		        value = argument_;
		      }
		      if (value.length) {
		        for (i = 0, len = value.length; i < len; i++) {
		          jsMoniker = value[i];
		          innerResponse = TYPES.convert({
		            to: 'jsCode',
		            from: 'jsMoniker',
		            value: jsMoniker
		          });
		          if (innerResponse.error) {
		            errors2.push(innerResponse.error);
		            break;
		          }
		        }
		        if (!errors2.length) {
		          response.result = true;
		        } else {
		          errors2.unshift("Error(s) in '" + name_ + "' directive declaration.");
		        }
		      } else {
		        errors2.unshift("Type specification '" + name_ + "' directive is missing argument(s).");
		      }
		    }
		    if (errors2.length) {
		      response.error = errors2.join(' ');
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 30 */
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

		(function() {
		  var FILTERDAGFACTORY;

		  FILTERDAGFACTORY = __webpack_require__(31);

		  module.exports = {
		    create: FILTERDAGFACTORY.request
		  };

		}).call(this);


	/***/ },
	/* 31 */
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

		(function() {
		  var DAGGENERATOR, DAGSPECPROCESSOR, FILTERLIB, IDENTIFIERLIB, INPUTFS, OUTPUTFS, filterlibResponse, message;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  INPUTFS = __webpack_require__(3);

		  OUTPUTFS = __webpack_require__(33);

		  DAGSPECPROCESSOR = __webpack_require__(34);

		  DAGGENERATOR = __webpack_require__(32);

		  filterlibResponse = FILTERLIB.create({
		    operationID: "v_R2RUU9TEacuwgxmydxGw",
		    operationName: "FilterDAG Factory",
		    operationDescription: "FilterDAG reactive system host factory function.",
		    inputName: INPUTFS.inputName,
		    inputDescription: INPUTFS.inputDescription,
		    inputFilterSpec: INPUTFS.inputFilterSpec,
		    bodyFunction: function(request_) {
		      var errors, factorySpec, filterDAG, genTag, inBreakScope, innerResponse, response;
		      response = {
		        error: null,
		        response: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        innerResponse = IDENTIFIERLIB.irut.isIRUT(request_.dagID);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        if (!innerResponse.result) {
		          errors.unshift(innerResponse.guidance);
		          errors.unshift("Invalid value `" + request_.dagID + "` specified for `dagID`:");
		          break;
		        }
		        innerResponse = DAGSPECPROCESSOR.request(request_.dagSpecification);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        factorySpec = innerResponse.result;
		        innerResponse = DAGGENERATOR.request(factorySpec);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        filterDAG = innerResponse.result;
		        response.result = {
		          dagID: request_.dagID,
		          dagName: request_.dagName,
		          dagDescription: request_.dagDescription,
		          spec: factorySpec,
		          runtime: filterDAG
		        };
		        genTag = {
		          id: this.operationID,
		          name: this.operationName
		        };
		        innerResponse = IDENTIFIERLIB.irut.fromReference(response.result);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        genTag.hash = innerResponse.result;
		        response.result.generator = genTag;
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    message = [filterlibResponse.error];
		    message.unshift("Unable to load `jbus-common-filter-dag` module due to error:");
		    throw new Error(message.join(" "));
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 32 */
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

		(function() {
		  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  FILTERDAGREQFS = __webpack_require__(3);

		  filterlibResponse = FILTERLIB.create({
		    operationID: '-OOcB4IIRQuMWZJ0zZKPUw',
		    operationName: "FilterDAG Runtime Generator",
		    operationDescription: "Constructs and initializes a FilterDAG reactive system simulation runtime host instance from a FilterDAG Specification Manifest.",
		    bodyFunction: function(request_) {
		      var errors, genTag, inBreakScope, innerResponse, response, result;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        result = {};
		        genTag = {
		          id: this.operationID,
		          name: this.operationName
		        };
		        innerResponse = IDENTIFIERLIB.irut.fromReference(result);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        genTag.hash = innerResponse.result;
		        result.generator = genTag;
		        response.result = result;
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 33 */
	/***/ function(module, exports) {

		
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

		(function() {
		  module.exports = {
		    outputName: "FilterDAG Object",
		    outputDescription: "A FilterDAG reactive systems host object generated by the FilterDAG factory.",
		    outputFilterSpec: {
		      ____label: "FilterDAG",
		      ____description: "FilterDAG reactive system host object.",
		      ____types: "jsObject",
		      'fdnFVPtSQy6UR79kQ_AdHA': {
		        ____label: "FilterDAG Object Watermark",
		        ____description: "Unique IRUT assigned to all FilterDAG objects to facilitate runtime identification.",
		        ____accept: "jsBoolean",
		        ____defaultValue: true
		      },
		      dagID: {
		        ____opaque: true
		      },
		      dagIID: {
		        ____opaque: true
		      },
		      dagName: {
		        ____opaque: true
		      },
		      dagDescription: {
		        ____opaque: true
		      },
		      dagSpecification: {
		        ____opaque: true
		      }
		    }
		  };

		}).call(this);


	/***/ },
	/* 34 */
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

		(function() {
		  var CONSTRAINTPROCESSOR, FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, MODELPROCESSOR, SPECRECONCILER, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  FILTERDAGREQFS = __webpack_require__(3);

		  MODELPROCESSOR = __webpack_require__(39);

		  CONSTRAINTPROCESSOR = __webpack_require__(35);

		  SPECRECONCILER = __webpack_require__(43);

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'loZ5xDoyTO-bUq77KaBk8g',
		    operationName: "FilterDAG Spec Processor",
		    operationDescription: "Parses a FilerDAG specification descriptor and returns an intermediate result object.",
		    inputFilterSpec: FILTERDAGREQFS.dagSpecification,
		    bodyFunction: function(request_) {
		      var errors, filterDAGSpecification, genTag, inBreakScope, innerResponse, response, specificationConstraints, specificationModel;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        innerResponse = MODELPROCESSOR.request(request_.model);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        specificationModel = innerResponse.result;
		        innerResponse = CONSTRAINTPROCESSOR.request(request_.constraints);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        specificationConstraints = innerResponse.result;
		        innerResponse = SPECRECONCILER.request({
		          model: specificationModel,
		          constraints: specificationConstraints
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        filterDAGSpecification = innerResponse.result;
		        genTag = {
		          id: this.operationID,
		          name: this.operationName
		        };
		        innerResponse = IDENTIFIERLIB.irut.fromReference(filterDAGSpecification);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        genTag.hash = innerResponse.result;
		        filterDAGSpecification.generator = genTag;
		        response.result = filterDAGSpecification;
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 35 */
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

		(function() {
		  var CONSTRAINT_FUNCTIONS, CONSTRAINT_RECONCILE, CONSTRAINT_TYPES, FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  FILTERDAGREQFS = __webpack_require__(3);

		  CONSTRAINT_TYPES = __webpack_require__(38);

		  CONSTRAINT_FUNCTIONS = __webpack_require__(36);

		  CONSTRAINT_RECONCILE = __webpack_require__(37);

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'tmhYEUdOR_yk5NRLLk3u1A',
		    operationName: "FilterDAG Constraint Processor",
		    operationDescription: "Parses a FilterDAG constraint specification and returns an intermediate result.",
		    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.contraints,
		    bodyFunction: function(request_) {
		      var constraintFunctions, constraintTypes, errors, filterDAGConstraints, genTag, inBreakScope, innerResponse, response;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        innerResponse = CONSTRAINT_TYPES.request(request_.types);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        constraintTypes = innerResponse.result;
		        innerResponse = CONSTRAINT_FUNCTIONS.request(request_.functions);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        constraintFunctions = innerResponse.result;
		        innerResponse = CONSTRAINT_RECONCILE.request({
		          types: constraintTypes,
		          functions: constraintFunctions
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        filterDAGConstraints = innerResponse.result;
		        genTag = {
		          id: this.operationID,
		          name: this.operationName
		        };
		        innerResponse = IDENTIFIERLIB.irut.fromReference(filterDAGConstraints);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        genTag.hash = innerResponse.result;
		        filterDAGConstraints.generator = genTag;
		        response.result = filterDAGConstraints;
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 36 */
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

		(function() {
		  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  FILTERDAGREQFS = __webpack_require__(3);

		  filterlibResponse = FILTERLIB.create({
		    operationID: '7bqdXoXHSvm90lMvfkOUKQ',
		    operationName: "FilterDAG Function Constraint Processor",
		    operationDescription: "Parses a FilterDAG function constraint specification and returns an intermediate result.",
		    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.constraints.functions,
		    bodyFunction: function(request_) {
		      var errors, filterMap, functionMap, inBreakScope, index, response;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        if (!request_.length) {
		          errors.unshift("You must specifiy at least one function constraint descriptor.");
		          break;
		        }
		        filterMap = {};
		        functionMap = {};
		        index = 0;
		        request_.forEach(function(functionDescriptor_) {
		          var innerResponse, name, value, value1;
		          name = functionDescriptor_.name;
		          value = functionMap[name];
		          if ((value != null) && value) {
		            errors.unshift("Illegal duplicate name value '" + name + "' found examining constraints.functions[" + index + "].");
		          } else {
		            value = functionMap[name] = functionDescriptor_;
		            delete value.name;
		            innerResponse = IDENTIFIERLIB.irut.isIRUT(value.filterBinding.id);
		            if (innerResponse.error) {
		              errors.unshift(innerResponse.error);
		            }
		            if (!innerResponse.result) {
		              errors.unshift(innerResponse.guidance);
		              errors.unshift("Illegal filterBinding.id value '" + value.filterBinding.id + "' found examining constraints.functions[" + index + "]:");
		            }
		            value1 = filterMap[value.filterBinding.id];
		            if (!((value1 != null) && value)) {
		              filterMap[value.filterBinding.id] = null;
		            }
		          }
		          return index++;
		        });
		        if (!errors.length) {
		          response.result = {
		            functions: functionMap,
		            filters: filterMap
		          };
		        }
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 37 */
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

		(function() {
		  var FILTERLIB, IDENTIFIERLIB, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'ABIJoB_lRfeP4keMZgRkzA',
		    operationName: "FilterDAG Constraint Reconciler",
		    operationDescription: "Reconciles a FilterDAG constraint specification and returns an intermediate result.",
		    bodyFunction: function(request_) {
		      var errors, inBreakScope, response, result;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        result = request_;
		        response.result = result;
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 38 */
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

		(function() {
		  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  FILTERDAGREQFS = __webpack_require__(3);

		  filterlibResponse = FILTERLIB.create({
		    operationID: '3mXe4YE_RVG7cqZXz92izw',
		    operationName: "FilterDAG Type Constraint Processor",
		    operationDescription: "Parses a FilterDAG type constraint specification and returns an intermediate result.",
		    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.constraints.types,
		    bodyFunction: function(request_) {
		      var errors, filterSpecMap, inBreakScope, index, response, typeMap;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        if (!request_.length) {
		          errors.unshift("You must specify at least one type constraint descriptor.");
		          break;
		        }
		        filterSpecMap = {};
		        typeMap = {};
		        index = 0;
		        request_.forEach(function(typeDescriptor_) {
		          var innerResponse, value;
		          value = typeMap[typeDescriptor_.name];
		          if ((value != null) && value) {
		            errors.unshift("Illegal duplicate name value '" + typeDescriptor_.name + "' found examining constraints.types[" + index + "].");
		            return;
		          }
		          value = typeMap[typeDescriptor_.name] = typeDescriptor_;
		          delete value.name;
		          innerResponse = FILTERLIB.create({
		            operationID: 'demo',
		            inputFilterSpec: value.filterSpec
		          });
		          if (innerResponse.error) {
		            errors.unshift(innerResponse.error);
		            errors.unshift("Invalid filter specification declared for type constraint name '" + typeDescriptor_.name + "':");
		            return;
		          }
		          innerResponse = IDENTIFIERLIB.irut.fromReference(value.filterSpec);
		          if (innerResponse.error) {
		            errors.unshift(innerResponse.error);
		            return;
		          }
		          value.id = innerResponse.result;
		          filterSpecMap[innerResponse.result] = value.filterSpec;
		          return index++;
		        });
		        if (!errors.length) {
		          response.result = {
		            types: typeMap,
		            filterSpecs: filterSpecMap
		          };
		        }
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 39 */
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

		(function() {
		  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, MODELIOPROCESS, MODELRECONCILE, MODELXFORMGEN, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  IDENTIFIERLIB = __webpack_require__(2);

		  FILTERDAGREQFS = __webpack_require__(3);

		  MODELXFORMGEN = __webpack_require__(42);

		  MODELIOPROCESS = __webpack_require__(40);

		  MODELRECONCILE = __webpack_require__(41);

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'Xke4-hLKSIChJos77JVOmg',
		    operationName: "FilterDAG Model Processor",
		    operationDescription: "Parses a FilterDAG specification model and returns an intermediate result.",
		    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model,
		    bodyFunction: function(request_) {
		      var errors, filterDAGModel, genTag, inBreakScope, innerResponse, ioModel, response, transformModel;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        innerResponse = MODELXFORMGEN.request(request_.transformations);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        transformModel = innerResponse.result;
		        innerResponse = MODELIOPROCESS.request({
		          transformModel: transformModel,
		          model: {
		            inputs: request_.inputs,
		            outputs: request_.outputs
		          }
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        ioModel = innerResponse.result;
		        innerResponse = MODELRECONCILE.request({
		          transformSpecs: request_.transformations,
		          transformModel: transformModel,
		          ioModel: ioModel
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        filterDAGModel = innerResponse.result;
		        genTag = {
		          id: this.operationID,
		          name: this.operationName
		        };
		        innerResponse = IDENTIFIERLIB.irut.fromReference(filterDAGModel);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        genTag.hash = innerResponse.result;
		        filterDAGModel.generator = genTag;
		        response.result = filterDAGModel;
		        break;
		      }
		      if (errors.length) {
		        errors.unshift("Error(s) in spec model:");
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 40 */
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

		(function() {
		  var FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, INPUTFS, OUTPUTFS, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  FILTERDAGREQFS = __webpack_require__(3);

		  FILTERDAGXFORMFS = __webpack_require__(10);

		  INPUTFS = {
		    ____label: "I/O Model Processor Request",
		    ____types: "jsObject",
		    transformModel: FILTERDAGXFORMFS,
		    model: {
		      ____types: "jsObject",
		      inputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.inputs,
		      outputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.outputs
		    }
		  };

		  OUTPUTFS = __webpack_require__(16);

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'Lry7jHEARSasslVcxqVHww',
		    operationName: "FilterDAG I/O Model Processor",
		    operationDescription: "Parses input and output value declarations of a FilterDAG specification model and returns an intermediate result.",
		    inputFilterSpec: INPUTFS,
		    bodyFunction: function(request_) {
		      var bad, errors, guidance, inBreakScope, index, ioModelCache, ioModelCacheReport, ioModelErrors, key, response;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        ioModelCache = {
		          inputsMap: {},
		          outputsMap: {},
		          typeConstraints: []
		        };
		        index = 0;
		        request_.model.inputs.forEach(function(inputDescriptor_) {
		          var value;
		          value = ioModelCache.inputsMap[inputDescriptor_.name];
		          if ((value != null) && value) {
		            errors.unshift("Illegal duplicate name value '" + inputDescriptor_.name + "' found examining model.inputs[" + index + "].");
		          } else {
		            ioModelCache.inputsMap[inputDescriptor_.name] = inputDescriptor_;
		            if (ioModelCache.typeConstraints.indexOf(inputDescriptor_.typeContraint) === -1) {
		              ioModelCache.typeConstraints.push(inputDescriptor_.typeConstraint);
		            }
		          }
		          return index++;
		        });
		        index = 0;
		        request_.model.outputs.forEach(function(outputDescriptor_) {
		          var value;
		          value = ioModelCache.outputsMap[outputDescriptor_.name];
		          if ((value != null) && value) {
		            errors.unshift("Illegal duplicate name value '" + outputDescriptor_.name + "' found examining model.outputs[" + index + "].");
		          } else {
		            ioModelCache.outputsMap[outputDescriptor_.name] = outputDescriptor_;
		            if (ioModelCache.typeConstraints.indexOf(outputDescriptor_.typeConstraint) === -1) {
		              ioModelCache.typeConstraints.push(outputDescriptor_.typeConstraint);
		            }
		          }
		          return index++;
		        });
		        if (errors.length) {
		          break;
		        }
		        ioModelCacheReport = {
		          bad: {
		            missingInputs: [],
		            mislabeledInputs: [],
		            missingOutputs: [],
		            mislabeledOutputs: [],
		            superfluousInputs: [],
		            superfluousOutputs: []
		          },
		          good: {
		            inputs: [],
		            outputs: []
		          }
		        };
		        request_.transformModel.dependencies.models.inputs.forEach(function(inputName_) {
		          var value;
		          value = ioModelCache.inputsMap[inputName_];
		          if (!((value != null) && value)) {
		            if (ioModelCacheReport.bad.missingInputs.indexOf(inputName_) === -1) {
		              ioModelCacheReport.bad.missingInputs.push(inputName_);
		              errors.unshift("Transform model relies on undeclared input value model '" + inputName_ + "'.");
		              return;
		            }
		          }
		          value = ioModelCache.outputsMap[inputName_];
		          if ((value != null) && value) {
		            if (ioModelCacheReport.bad.mislabeledOutputs.indexOf(inputName_) === -1) {
		              ioModelCacheReport.bad.mislabeledOutputs.push(inputName_);
		              errors.unshift("Transform model relies on input value model '" + inputName_ + "' that is declared as an output model.");
		              return;
		            }
		          }
		          return ioModelCacheReport.good.inputs.push(inputName_);
		        });
		        request_.transformModel.dependencies.models.outputs.forEach(function(outputName_) {
		          var value;
		          value = ioModelCache.outputsMap[outputName_];
		          if (!((value != null) && value)) {
		            if (ioModelCacheReport.bad.missingOutputs.indexOf(outputName_) === -1) {
		              ioModelCacheReport.bad.missingOutputs.push(outputName_);
		              errors.unshift("Transform model relies on undeclared output value model '" + outputName_ + "'.");
		              return;
		            }
		          }
		          value = ioModelCache.inputsMap[outputName_];
		          if ((value != null) && value) {
		            if (ioModelCacheReport.bad.mislabeledInputs.indexOf(outputName_) === -1) {
		              ioModelCacheReport.bad.mislabeledInputs.push(outputName_);
		              errors.unshift("Transform model relies on output value model '" + outputName_ + "' that is declared as an input model.");
		              return;
		            }
		          }
		          return ioModelCacheReport.good.outputs.push(outputName_);
		        });
		        guidance = [];
		        for (key in ioModelCache.inputsMap) {
		          if (ioModelCacheReport.good.inputs.indexOf(key) === -1) {
		            ioModelCacheReport.bad.superfluousInputs.push(key);
		            guidance.unshift("Input model declares unreferenced model '" + key + "'.");
		          }
		        }
		        for (key in ioModelCache.outputsMap) {
		          if (ioModelCacheReport.good.outputs.indexOf(key) === -1) {
		            ioModelCacheReport.bad.superfluousOutputs.push(key);
		            guidance.unshift("Output model declared unreferenced model '" + key + "'.");
		          }
		        }
		        bad = ioModelCacheReport.bad;
		        ioModelErrors = bad.missingInputs.length + bad.mislabeledInputs.length + bad.missingOutputs.length + bad.mislabeledOutputs.length;
		        if (ioModelErrors) {
		          guidance.forEach(function(string_) {
		            return errors.push(string_);
		          });
		        }
		        if (errors.length) {
		          break;
		        }
		        response.result = {
		          ioCache: ioModelCache,
		          ioCacheReport: ioModelCacheReport
		        };
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    },
		    outputFilterSpec: OUTPUTFS
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 41 */
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

		(function() {
		  var FILTERDAGIOMODEL, FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, INPUTFS, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  FILTERDAGREQFS = __webpack_require__(3);

		  FILTERDAGXFORMFS = __webpack_require__(10);

		  FILTERDAGIOMODEL = __webpack_require__(16);

		  INPUTFS = {
		    ____types: "jsObject",
		    ____label: "FilterDAG Model Reconciler Request",
		    ____description: "FilterDAG model reconciliation request object.",
		    transformSpecs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.transformations,
		    transformModel: FILTERDAGXFORMFS,
		    ioModel: FILTERDAGIOMODEL
		  };

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'sRz7IX4XRVyzu9pSACki-g',
		    operationName: "FilterDAG Model Reconciler",
		    operationDescription: "Reconciles a FilterDAG specification model and returns an intermediate result.",
		    inputFilterSpec: INPUTFS,
		    bodyFunction: function(request_) {
		      var errors, filterDAGModel, inBreakScope, response, transformSpecsMap;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        filterDAGModel = {
		          transformDigraph: request_.transformModel.digraph,
		          transformModels: {
		            inputs: {},
		            outputs: {},
		            transforms: {}
		          },
		          inducedConstraints: {
		            types: [],
		            functions: []
		          }
		        };
		        request_.transformModel.dependencies.models.inputs.forEach(function(inputName_) {
		          filterDAGModel.transformModels.inputs[inputName_] = request_.ioModel.ioCache.inputsMap[inputName_];
		          return delete filterDAGModel.transformModels.inputs[inputName_].name;
		        });
		        request_.transformModel.dependencies.models.outputs.forEach(function(outputName_) {
		          filterDAGModel.transformModels.outputs[outputName_] = request_.ioModel.ioCache.outputsMap[outputName_];
		          return delete filterDAGModel.transformModels.outputs[outputName_].name;
		        });
		        transformSpecsMap = {};
		        request_.transformSpecs.forEach(function(transformSpec_) {
		          var transformSpec;
		          transformSpec = transformSpecsMap[transformSpec_.name] = transformSpec_;
		          delete transformSpec.name;
		          delete transformSpec.inputModels;
		          return delete transformSpec.outputModel;
		        });
		        request_.transformModel.dependencies.models.transforms.forEach(function(transformName_) {
		          return filterDAGModel.transformModels.transforms[transformName_] = transformSpecsMap[transformName_];
		        });
		        request_.transformModel.dependencies.constraints.functions.forEach(function(functionName_) {
		          return filterDAGModel.inducedConstraints.functions.push(functionName_);
		        });
		        filterDAGModel.inducedConstraints.functions.sort();
		        request_.ioModel.ioCache.typeConstraints.forEach(function(typeName_) {
		          return filterDAGModel.inducedConstraints.types.push(typeName_);
		        });
		        filterDAGModel.inducedConstraints.types.sort();
		        response.result = filterDAGModel;
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 42 */
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

		(function() {
		  var FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, GRAPHLIB, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  FILTERDAGREQFS = __webpack_require__(3);

		  FILTERDAGXFORMFS = __webpack_require__(10);

		  GRAPHLIB = __webpack_require__(7);

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'h6w300MIQaegK6rK9fDeOw',
		    operationName: "FilterDAG Transformation Digraph Generator",
		    operationDescription: "Creates a digraph model of the functional transformations to be modeled by a FilterDAG reactive system host.",
		    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.transformations,
		    bodyFunction: function(request_) {
		      var backEdges, cycleDetector, dftResponse, errors, inBreakScope, index, innerResponse, response, startVertices, transformDigraph, transformDigraphDependencies;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        if (!request_.length) {
		          errors.unshift("You must specify at least one transformation descriptor.");
		          break;
		        }
		        innerResponse = GRAPHLIB.directed.create({
		          name: "Model Transformations Digraph",
		          description: "Directed graph model of a FilterDAG reactive data transformation system."
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          errors.unshift("Interal error allocating digraph:");
		          break;
		        }
		        transformDigraph = innerResponse.result;
		        transformDigraphDependencies = {
		          models: {
		            inputs: [],
		            outputs: [],
		            transforms: []
		          },
		          constraints: {
		            functions: []
		          }
		        };
		        index = 0;
		        request_.forEach(function(transformation_) {
		          var edge, vertexProperties;
		          if (transformDigraph.isVertex(transformation_.name)) {
		            errors.unshift("Transformation '" + transformation_.name + "' illegally re-defined.");
		            return;
		          }
		          transformDigraphDependencies.models.transforms.push(transformation_.name);
		          if (!transformation_.inputModels.length) {
		            errors.unshift("Transformation '" + transformation_.name + "' must declare at least one input model.");
		            return;
		          }
		          if (transformDigraph.isVertex(transformation_.outputModel)) {
		            vertexProperties = transformDigraph.getVertexProperty(transformation_.outputModel);
		            if (vertexProperties.type !== "value") {
		              errors.unshift(("Transform '" + transformation_.name + "' specifies an illegal output model ") + ("'" + transformation_.outputModel + "' of type '" + vertexPropertes.type + "'."));
		              return;
		            }
		            if (transformDigraph.inDegree(transformation_.outputModel)) {
		              edge = transformDigraph.inEdges(transformation_.outputModel)[0];
		              errors.unshift(("Transformation '" + transformation_.name + "' specifies output model ") + ("'" + transformation_.outputModel + "' that is already specified as the output of transformation '" + edge.u + "'."));
		              return;
		            }
		          } else {
		            transformDigraph.addVertex({
		              u: transformation_.outputModel,
		              p: {
		                type: "value"
		              }
		            });
		            if (transformDigraphDependencies.models.outputs.indexOf(transformation_.outputModel) === -1) {
		              transformDigraphDependencies.models.outputs.push(transformation_.outputModel);
		            }
		          }
		          transformDigraph.addVertex({
		            u: transformation_.name,
		            p: {
		              type: "transformation"
		            }
		          });
		          if (transformDigraphDependencies.constraints.functions.indexOf(transformation_.functionConstraint) === -1) {
		            transformDigraphDependencies.constraints.functions.push(transformation_.functionConstraint);
		          }
		          transformDigraph.addEdge({
		            e: {
		              u: transformation_.name,
		              v: transformation_.outputModel
		            },
		            p: {
		              type: "output"
		            }
		          });
		          if (transformation_.inputModels.length) {
		            transformation_.inputModels.forEach(function(inputModel_) {
		              if (transformDigraph.isVertex(inputModel_.inputModel)) {
		                if (transformDigraph.getVertexProperty(inputModel_.inputModel).type !== "value") {
		                  errors.unshift("Transform '" + transformation_.name + "' specifies an illegal input model '" + inputModel_.inputModel + "'.");
		                  return;
		                }
		              } else {
		                transformDigraph.addVertex({
		                  u: inputModel_.inputModel,
		                  p: {
		                    type: "value"
		                  }
		                });
		                if (transformDigraphDependencies.models.inputs.indexOf(inputModel_.inputModel)) {
		                  transformDigraphDependencies.models.inputs.push(inputModel_.inputModel);
		                }
		              }
		              return transformDigraph.addEdge({
		                e: {
		                  u: inputModel_.inputModel,
		                  v: transformation_.name
		                },
		                p: {
		                  type: "input",
		                  mapping: inputModel_.requestMapping
		                }
		              });
		            });
		          } else {
		            errors.unshift("transformations[" + index + "] declares no input models.");
		          }
		          return index++;
		        });
		        if (errors.length) {
		          break;
		        }
		        startVertices = transformDigraph.getRootVertices();
		        if (!startVertices.length) {
		          errors.unshift("Illegal DAG model declares no external system input values.");
		          startVertices.push(transformDigraph.getVertices()[0]);
		        }
		        backEdges = [];
		        cycleDetector = {
		          backEdge: function(request_) {
		            backEdges.push(request_.e);
		            return true;
		          }
		        };
		        dftResponse = GRAPHLIB.directed.depthFirstTraverse({
		          digraph: transformDigraph,
		          visitor: cycleDetector,
		          options: {
		            startVertices: startVertices
		          }
		        });
		        if (dftResponse.error) {
		          errors.unshift(dftResponse.error);
		          break;
		        }
		        if (backEdges.length) {
		          errors.unshift("Illegal cycle in DAG model introduced by edge: '" + (JSON.stringify(backEdges)) + "'.");
		          break;
		        }
		        response.result = {
		          digraph: transformDigraph.toObject(),
		          dependencies: transformDigraphDependencies
		        };
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    },
		    outputFilterSpec: FILTERDAGXFORMFS
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 43 */
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

		(function() {
		  var FILTERLIB, filterlibResponse;

		  FILTERLIB = __webpack_require__(1);

		  filterlibResponse = FILTERLIB.create({
		    operationID: 'GLxLYuwnTCyCyr-lKfohUg',
		    operationName: "FilterDAG Specification Reconciler",
		    operationDescription: "Performs static analysis on a FilerDAG model and constraint declarations and returns an intermediate result.",
		    bodyFunction: function(request_) {
		      var errors, filterDAGManifest, inBreakScope, response;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        filterDAGManifest = {};
		        filterDAGManifest.model = {};
		        filterDAGManifest.model.system = request_.model.transformDigraph;
		        filterDAGManifest.model.map = request_.model.transformModels;
		        filterDAGManifest.constraints = {};
		        filterDAGManifest.constraints.types = {};
		        filterDAGManifest.constraints.functions = {};
		        filterDAGManifest.inducedRuntime = {
		          filterSpecs: {},
		          filters: {}
		        };
		        request_.model.inducedConstraints.types.forEach(function(typeName_) {
		          var value, value1;
		          value = request_.constraints.types.types[typeName_];
		          if (!((value != null) && value)) {
		            return errors.push("System model depends on undeclared constraint type '" + typeName_ + "'.");
		          } else {
		            value1 = filterDAGManifest.inducedRuntime.filterSpecs[value.id];
		            if (!((value1 != null) && value1)) {
		              filterDAGManifest.inducedRuntime.filterSpecs[value.id] = value.filterSpec;
		            }
		            delete value.filterSpec;
		            return filterDAGManifest.constraints.types[typeName_] = value;
		          }
		        });
		        request_.model.inducedConstraints.functions.forEach(function(functionName_) {
		          var value, value1;
		          value = request_.constraints.functions.functions[functionName_];
		          if (!((value != null) && value)) {
		            return errors.push("System model depends on undeclared constraint function '" + functionName_ + "'.");
		          } else {
		            value1 = filterDAGManifest.inducedRuntime.filters[value.filterBinding.id];
		            if (!((value1 != null) && value1)) {
		              filterDAGManifest.inducedRuntime.filters[value.filterBinding.id] = null;
		            }
		            value.id = value.filterBinding.id;
		            delete value.filterBinding;
		            return filterDAGManifest.constraints.functions[functionName_] = value;
		          }
		        });
		        response.result = filterDAGManifest;
		        break;
		      }
		      if (errors.length) {
		        errors.unshift("Unable to reconcile FilterDAG model and constraints.");
		        response.error = errors.join(" ");
		      }
		      return response;
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 44 */
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

		(function() {
		  'use strict';
		  var Filter, IDENTIFIER, bodyFunctionResponseFilter, filterRuntimeData,
		    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

		  IDENTIFIER = __webpack_require__(2);

		  filterRuntimeData = __webpack_require__(45);

		  bodyFunctionResponseFilter = {
		    ____types: 'jsObject',
		    ____label: "NF Response Object",
		    ____description: "Normalized Function (NF) response object.",
		    error: {
		      ____types: ['jsNull', 'jsString'],
		      ____label: "Error",
		      ____description: "A string explaining why response.result is null. Or, null if no error occurred.",
		      ____defaultValue: null
		    },
		    result: {
		      ____opaque: true,
		      ____label: "Result",
		      ____description: "Null if an error occurred. Otherwise, some opaque JavaScript value reference."
		    }
		  };

		  Object.freeze(bodyFunctionResponseFilter);

		  module.exports = Filter = (function() {
		    function Filter(filterDescriptor_) {
		      this.request = bind(this.request, this);
		      this.filterDescriptor = filterDescriptor_;
		    }

		    Filter.prototype.request = function(request_) {
		      var bodyFunctionResponse, dispatchState, errors, inBreakScope, inputFilterResponse, outputFilterResponse, response, returnSignatureCheck;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        dispatchState = "verifying input data";
		        inputFilterResponse = filterRuntimeData({
		          value: request_,
		          spec: this.filterDescriptor.inputFilterSpec
		        });
		        if (inputFilterResponse.error) {
		          errors.unshift(inputFilterResponse.error);
		          break;
		        }
		        if (this.filterDescriptor.bodyFunction) {
		          dispatchState = "executing function body";
		          bodyFunctionResponse = this.filterDescriptor.bodyFunction(inputFilterResponse.result);
		          dispatchState = "analyzing response signature";
		          returnSignatureCheck = filterRuntimeData({
		            value: bodyFunctionResponse,
		            spec: bodyFunctionResponseFilter
		          });
		          if (returnSignatureCheck.error) {
		            errors.unshift(returnSignatureCheck.error);
		            break;
		          }
		          dispatchState = "analyzing response disposition";
		          if (bodyFunctionResponse.error) {
		            errors.unshift(bodyFunctionResponse.error);
		            break;
		          }
		        } else {
		          bodyFunctionResponse = inputFilterResponse;
		        }
		        dispatchState = "verifying response result data";
		        outputFilterResponse = filterRuntimeData({
		          value: bodyFunctionResponse.result,
		          spec: this.filterDescriptor.outputFilterSpec
		        });
		        if (outputFilterResponse.error) {
		          errors.unshift(outputFilterResponse.error);
		          break;
		        }
		        response.result = outputFilterResponse.result;
		      }
		      if (errors.length) {
		        errors.unshift("An error occurred in function [" + this.filterDescriptor.operationName + "::" + this.filterDescriptor.operationID + "] while " + dispatchState + ":");
		        response.error = errors.join(' ');
		      }
		      return response;
		    };

		    return Filter;

		  })();

		}).call(this);


	/***/ },
	/* 45 */
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

		(function() {
		  var IDENTIFIER, TYPES, filterRuntimeData;

		  IDENTIFIER = __webpack_require__(2);

		  TYPES = __webpack_require__(5);


		  /*
		      request = {
		          value: variant
		          spec: object
		      }
		      response = {
		          error = null or string explaining why result is null
		          result: filtered copied of request.value or null if an error occurred
		      }
		   */

		  filterRuntimeData = module.exports = function(request_) {
		    var acceptInputNamespace, assignValue, constrainInRangeInclusive, constrainInValueSet, constraintDirective, defaulted, element, errors, finalResult, i, inBreakScope, inRange, index, innerResponse, inputData, inputDataUndefined, len, mapPropertyName, mapPropertyValue, mapQueue, mapQueueCache, namespace, newOutputData, opaque, outputData, response, spec, specDescriptor, subnamespaces, typePath, valueJsMoniker;
		    errors = [];
		    response = {
		      error: null,
		      result: null
		    };
		    inBreakScope = false;
		    finalResult = void 0;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      mapQueue = [];
		      innerResponse = TYPES.check.inTypeSet({
		        value: request_,
		        types: 'jsObject'
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		      }
		      if (!innerResponse.result) {
		        errors.unshift(innerResponse.guidance);
		      }
		      if (errors.length) {
		        errors.unshift("Invalid request:");
		        break;
		      }
		      innerResponse = TYPES.check.inTypeSet({
		        value: request_['spec'],
		        types: ['jsObject', 'jsUndefined']
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		      }
		      if (!innerResponse.result) {
		        errors.unshift(innerResponse.guidance);
		      }
		      if (errors.length) {
		        errors.unshift("Invalid request missing 'spec' declaration:");
		        break;
		      }
		      if (innerResponse.result === 'jsUndefined') {
		        finalResult = request_['value'];
		        break;
		      }
		      mapQueue.push({
		        namespace: void 0,
		        path: void 0,
		        spec: request_['spec'],
		        inputData: request_['value'],
		        outputData: finalResult
		      });
		      while (mapQueue.length) {
		        specDescriptor = mapQueue.shift();
		        typePath = (specDescriptor.path != null) && specDescriptor.path || '~';
		        spec = specDescriptor.spec;
		        inputData = specDescriptor.inputData;
		        outputData = specDescriptor.outputData;
		        namespace = specDescriptor.namespace;
		        innerResponse = TYPES.check.inTypeSet({
		          value: spec.____opaque,
		          types: 'jsBoolean'
		        });
		        opaque = innerResponse.result && spec.____opaque;
		        innerResponse = TYPES.check.inTypeSet({
		          value: spec.____defaultValue,
		          types: 'jsUndefined'
		        });
		        defaulted = !innerResponse.result;
		        acceptInputNamespace = false;
		        if (!opaque) {
		          constraintDirective = null;
		          if ((spec.____accept != null) && spec.____accept) {
		            acceptInputNamespace = true;
		            constraintDirective = '____accept';
		          } else {
		            constraintDirective = '____types';
		          }
		          innerResponse = TYPES.check.inTypeSet({
		            value: inputData,
		            types: spec[constraintDirective]
		          });
		          if (innerResponse.error) {
		            errors.unshift(innerResponse.error);
		            break;
		          }
		          if (!innerResponse.result) {
		            inputDataUndefined = TYPES.check.inTypeSet({
		              value: inputData,
		              types: 'jsUndefined'
		            }).result;
		            if (!(inputDataUndefined && defaulted)) {
		              errors.unshift(innerResponse.guidance);
		              break;
		            }
		            innerResponse = TYPES.check.inTypeSet({
		              value: spec.____defaultValue,
		              types: spec[constraintDirective]
		            });
		            if (innerResponse.error) {
		              errors.unshift(innerResponse.error);
		              errors.unshift("BAD DEFAULT VALUE!");
		              break;
		            }
		            if (!innerResponse.result) {
		              errors.unshift(innerResponse.guidance);
		              errors.unshift("BAD DEFAULT VALUE!");
		              break;
		            }
		            inputData = spec.____defaultValue;
		          }
		          valueJsMoniker = innerResponse.result;
		        } else {
		          if (defaulted && !((inputData != null) && inputData)) {
		            innerResponse = TYPES.check.inTypeSet({
		              value: inputData,
		              types: 'jsUndefined'
		            });
		            if (innerResponse.result && defaulted) {
		              inputData = spec.____defaultValue;
		            }
		          }
		        }
		        constrainInValueSet = void 0;
		        constrainInRangeInclusive = void 0;
		        mapQueueCache = [];
		        subnamespaces = 0;
		        for (mapPropertyName in spec) {
		          mapPropertyValue = spec[mapPropertyName];
		          switch (mapPropertyName) {
		            case '____types':
		              break;
		            case '____accept':
		              break;
		            case '____opaque':
		              break;
		            case '____defaultValue':
		              break;
		            case '____inValueSet':
		              constrainInValueSet = mapPropertyValue;
		              break;
		            case '____inRangeInclusive':
		              constrainInRangeInclusive = mapPropertyValue;
		              break;
		            case '____label':
		              break;
		            case '____description':
		              break;
		            default:
		              if (valueJsMoniker === 'jsArray') {
		                index = 0;
		                for (i = 0, len = inputData.length; i < len; i++) {
		                  element = inputData[i];
		                  mapQueueCache.push({
		                    namespace: index,
		                    path: typePath + "." + mapPropertyName + "[" + (index++) + "]",
		                    spec: mapPropertyValue,
		                    inputData: element
		                  });
		                }
		              } else {
		                mapQueueCache.push({
		                  namespace: mapPropertyName,
		                  path: typePath + "." + mapPropertyName,
		                  spec: mapPropertyValue,
		                  inputData: (inputData != null) && inputData && inputData[mapPropertyName] || void 0
		                });
		              }
		          }
		          if (errors.length) {
		            break;
		          }
		        }
		        if (errors.length) {
		          break;
		        }
		        if ((constrainInValueSet != null) && constrainInValueSet && (valueJsMoniker !== 'jsUndefined')) {
		          index = constrainInValueSet.indexOf(inputData);
		          if (index === -1) {
		            errors.unshift("Invalid value '" + inputData + "' not in allowed value set: [" + (constrainInValueSet.join(',')) + "].");
		            break;
		          }
		        }
		        if ((constrainInRangeInclusive != null) && constrainInRangeInclusive && (valueJsMoniker !== 'jsUndefined')) {
		          inRange = true;
		          if (inputData < constrainInRangeInclusive.begin) {
		            errors.unshift("Invalid value '" + inputData + "' below allowed value range '" + constrainInRangeInclusive.begin + "','" + constrainInRangeInclusive.end + "'.");
		            break;
		          }
		          if (inputData > constrainInRangeInclusive.end) {
		            errors.unshift("Invalid value '" + inputData + "' above allowed value range '" + constrainInRangeInclusive.begin + "','" + constrainInRangeInclusive.end + "'.");
		            break;
		          }
		        }
		        if (errors.length) {
		          break;
		        }
		        assignValue = void 0;
		        if (opaque) {
		          assignValue = inputData;
		        } else {
		          switch (valueJsMoniker) {
		            case 'jsObject':
		              assignValue = acceptInputNamespace && inputData || {};
		              break;
		            case 'jsArray':
		              assignValue = acceptInputNamespace && inputData || [];
		              break;
		            default:
		              assignValue = inputData;
		              break;
		          }
		        }
		        if (((namespace != null) && namespace) || (Object.prototype.toString.call(namespace) === '[object Number]')) {
		          newOutputData = outputData[namespace] = assignValue;
		        } else {
		          newOutputData = finalResult = assignValue;
		        }
		        while ((valueJsMoniker !== 'jsUndefined') && mapQueueCache.length) {
		          specDescriptor = mapQueueCache.shift();
		          specDescriptor.outputData = newOutputData;
		          mapQueue.push(specDescriptor);
		        }
		      }
		      if (errors.length) {
		        errors.unshift("Error at path '" + typePath + "':");
		        break;
		      }
		    }
		    if (errors.length) {
		      errors.unshift("Runtime data check failed:");
		      response.error = errors.join(' ');
		    } else {
		      response.result = finalResult;
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 46 */
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

		(function() {
		  var MODULE, MURMUR;

		  MURMUR = __webpack_require__(11);

		  MODULE = module.exports = {};

		  MODULE.fromUTF8 = function(utf8_) {
		    var ascii, utf8;
		    utf8 = new Buffer(utf8_, 'utf-8');
		    ascii = utf8.toString('ascii');
		    return MURMUR(ascii);
		  };

		  MODULE.fromReference = function(ref_) {
		    return MODULE.fromUTF8(JSON.stringify(ref_));
		  };

		}).call(this);


	/***/ },
	/* 47 */
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

		(function() {
		  var MODULE, MURMUR, TYPES, UUID;

		  UUID = __webpack_require__(19);

		  MURMUR = __webpack_require__(11);

		  TYPES = __webpack_require__(5);

		  MODULE = module.exports = {};


		  /*
		      Generate an Internet-Routable Unique Token (IRUT)
		  
		      IRUT's are 22-character, ASCII-encoded, UUID v4, URI and RIS token-friendly string identifiers.
		  
		      Use cases:
		      1. v4 UUID uniqueness semantics: addressed w/node-uuid package
		      2. ASCII: addressed by using base64 encoding of the v4 UUID
		      3. Short as possible: addressed by trimming superfluous '=' padding from base64 encoding
		      4. URI token safe: addressed by replacing '/' characters with '_'
		      5. RIS token safe: addressed by replacing '+' with '-'
		  
		      References:
		      http://tools.ietf.org/html/rfc3986
		      http://en.wikipedia.org/wiki/Base64
		      http://stackoverflow.com/questions/11431886/url-safe-uuids-in-the-smallest-number-of-characters
		      http://stackoverflow.com/questions/6182315/how-to-do-base64-encoding-in-node-js
		      http://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string
		  
		      Note: I've made this funky. If seed_ is undefined, then a v4 UUID is generated and used as the
		      basis of the IRUT. Otherwise, we take a look at whatever was passed to us, convert it to an
		      ASCII string (this operation must be idempotent), divide it into four substrings of roughly
		      equal lengths (again this too must be idempotent), and then the 128-bit basis of the IRUT
		      is 4x32-bit Murmur3 hashes of the four substrings. This feature is used to fingerprint ARC's
		      primarily.
		   */

		  MODULE.fromEther = function() {
		    var pads, r1, r2, r3, r4, r5, tail;
		    r1 = UUID.v4(null, new Uint8Array(16, 0));
		    r2 = (new Buffer(r1)).toString('base64');
		    tail = r2.length;
		    pads = 0;
		    while (r2.charAt(tail - 1) === '=') {
		      tail--;
		    }
		    r3 = r2.slice(0, tail);
		    r4 = r3.replace(/\+/g, "-");
		    r5 = r4.replace(/\//g, "_");
		    return r5;
		  };


		  /*
		      Request/response-style generator returns an IRUT format 128-bit
		      hybrid Murmur3 hash of whatever ref_ refers to (so long as its a string,
		      object, or array). Note that if object or arry, the reference is serialized
		      to JSON dropping any functions or undefined properties from the seed UTF-8
		      string. The seed UTF-8 is converted to ASCII, and then divided into four
		      roughly equal chunks each of which is Murmur3 hashed to produce four 32-bit
		      hash results. The byte representation of this 128-bit composite hash is
		      then converted to base64 and cherry picked (character substitution algoritm)
		      to ensure that it is URI routable. This algorithm is idempotent.
		      Note that given the way that the seed ASCII string is chunked, touching
		      the resource referred to by ref_ will not necessarily destabilize the
		      entire generated IRUT string. Murmur3 IRUTS have for all intents and purposes
		      the same overall unique semantics associated with a 128-bit UUID v4-backed IRUT
		      and should only ever be compared for equality. There is never any recoverable
		      information of value in an IRUT except its uniqueness (and in the case of
		      Murmur3-backed IRUT's idempotence which means we can use the algorithm to
		      verify the correctness of various resources for correctness and integrity at
		      fairly low cost. If anything, this implementation is a bit conservative.
		      Later when I profile we'll see. We might be able to get away with 64-bits here?
		   */

		  MODULE.fromReference = function(ref_) {
		    var checkResponse, chunk, chunkLength, errors, hash, inBreakScope, index, pads, r0, r0Buffer, r1, r2, r2hashes, r3, r4, r5, rangeStart, response;
		    errors = [];
		    response = {
		      error: null,
		      result: null
		    };
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      checkResponse = TYPES.check.isJSON(ref_);
		      if (checkResponse.error) {
		        errors.unshift(checkResponse.error);
		        break;
		      }
		      if (!checkResponse.result) {
		        errors.unshift("Input reference must address top-level data convertible directly to JSON.");
		        break;
		      }
		      r0 = (checkResponse.result === 'jsonString') && ref_ || JSON.stringify(ref_);
		      r0Buffer = new Buffer(r0, 'utf-8');
		      r1 = r0Buffer.toString('ascii');
		      if (!r1.length) {
		        errors.unshift("No data to hash!");
		        break;
		      }
		      if (r1.length < 64) {
		        r1 = Array(Math.ceil((64 / r1.length) + 1)).join(r1);
		      }
		      chunkLength = Math.ceil(r1.length / 4);
		      index = 0;
		      rangeStart = 0;
		      r2hashes = [];
		      while (rangeStart < r1.length) {
		        chunk = r1.substring(rangeStart, rangeStart + chunkLength);
		        hash = MURMUR(chunk);
		        r2hashes[index] = hash & 0xFF;
		        r2hashes[index + 4] = (hash & 0xFF00) >> 8;
		        r2hashes[index + 8] = (hash & 0xFF0000) >> 16;
		        r2hashes[index + 12] = (hash & 0xFF000000) >> 24;
		        rangeStart += chunkLength;
		        index++;
		      }
		      r2 = (new Buffer(r2hashes)).toString('base64');
		      pads = 0;
		      while (r2.charAt(r2.length - pads - 1) === '=') {
		        pads++;
		      }
		      r3 = r2.slice(0, r2.length - pads);
		      r4 = r3.replace(/\+/g, "-");
		      r5 = r4.replace(/\//g, "_");
		      response.result = r5;
		    }
		    if (errors.length) {
		      errors.unshift("jbus common identifier IRUT generation failed:");
		      response.error = errors.join(' ');
		    }
		    return response;
		  };

		  MODULE.isIRUT = function(irut_) {
		    var checkResponse, errors, inBreakScope, match, response;
		    response = {
		      error: null,
		      guidance: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      checkResponse = TYPES.check.inTypeSet({
		        value: irut_,
		        types: 'jsString'
		      });
		      if (checkResponse.error) {
		        errors.unshift(checkResponse.error);
		        break;
		      }
		      if (!checkResponse.result) {
		        response.guidance = checkResponse.guidance;
		        response.result = false;
		        break;
		      }
		      if (irut_.length !== 22) {
		        response.guidance = "Expected 22-character string. Found " + irut_.length + "-character string instead.";
		        response.result = false;
		        break;
		      }
		      match = irut_.match(/^([A-Z]|[a-z]|[0-9]|-|_){22}$/);
		      if (match === null) {
		        response.guidance = "Expected only Base64 characters (substitute: '+' > '-', '/' > '_').";
		        response.result = false;
		        break;
		      }
		      response.result = true;
		    }
		    if (errors.length) {
		      errors.unshift("jbus common IRUT identifier verification failed:");
		      response.error = errors.join(' ');
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		(function() {
		  var FILTERLIB, buildMergedFilterSpecDigraphModel, deduceRuntimeParseDigraphFromAmbiguityColoring, filterlibResponse, generateDiscriminatorFilterRuntime, partitionAndColorMergedModelByAmbiguity;

		  FILTERLIB = __webpack_require__(1);

		  buildMergedFilterSpecDigraphModel = __webpack_require__(50);

		  partitionAndColorMergedModelByAmbiguity = __webpack_require__(49);

		  deduceRuntimeParseDigraphFromAmbiguityColoring = __webpack_require__(52);

		  generateDiscriminatorFilterRuntime = __webpack_require__(51);

		  filterlibResponse = FILTERLIB.create({
		    operationID: "5A8uDJunQUm1w-HcBPQ6Gw",
		    operationName: "Request Discriminator Filter Factory",
		    operationDescription: "Manufactures a new Filter object that routes its request to 1:N registered sub-Filter objects based on analysis of the request signature.",
		    inputFilterSpec: {
		      ____label: "Array of Filters",
		      ____description: "An array Filter objects that define the set of request signatures to be analyzed.",
		      ____types: "jsArray",
		      filter: {
		        ____label: "Sub-Filter Object",
		        ____description: "Pre-constructed Filter object.",
		        ____accept: "jsObject"
		      }
		    },
		    bodyFunction: function(request_) {
		      var ambiguityModel, errors, inBreakScope, innerResponse, mergedModel, response, runtimeFilter, runtimeModel;
		      response = {
		        error: null,
		        result: null
		      };
		      errors = [];
		      inBreakScope = false;
		      while (!inBreakScope) {
		        inBreakScope = true;
		        console.log("STAGE 1: MERGED FILTER SPEC GRAPH BUILDER OUTPUT");
		        innerResponse = buildMergedFilterSpecDigraphModel(request_);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        mergedModel = innerResponse.result;
		        console.log(mergedModel.digraph.toJSON(void 0, 4));
		        console.log("STAGE 2: PARTITION AND COLOR GRAPH BY AMBIGUITY");
		        innerResponse = partitionAndColorMergedModelByAmbiguity(mergedModel.digraph);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          errors.unshift("Internal error analyzing input filter array: ");
		          break;
		        }
		        ambiguityModel = innerResponse.result;
		        console.log(ambiguityModel.digraph.toJSON(void 0, 4));
		        ambiguityModel.ambiguousFilterSpecificationErrors.forEach(function(error_) {
		          return errors.push(error_);
		        });
		        if (errors.length) {
		          break;
		        }
		        innerResponse = deduceRuntimeParseDigraphFromAmbiguityColoring(ambiguityModel);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        runtimeModel = innerResponse.result;
		        innerResponse = generateDiscriminatorFilterRuntime(runtimeParseGraph);
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        runtimeFilter = innerResponse.result;
		        response.result = runtimeFilter;
		        break;
		      }
		      if (errors.length) {
		        response.error = errors.join(" ");
		      }
		      return response;
		    },
		    outputName: "Type Desrimination Filter Output",
		    outputDescriptor: "A generated Type Descriminator Filter.",
		    outputFilterSpec: {
		      ____opaque: true
		    }
		  });

		  if (filterlibResponse.error) {
		    throw new Error(filterlibResponse.error);
		  }

		  module.exports = filterlibResponse.result;

		}).call(this);


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		(function() {
		  var GRAPHLIB, UTILLIB, partitionAndColorGraphByAmbiguity;

		  GRAPHLIB = __webpack_require__(7);

		  UTILLIB = __webpack_require__(9);

		  partitionAndColorGraphByAmbiguity = module.exports = function(mergedModelDigraph_) {
		    var allFilters, ambiguityModelDigraph, ambiguousBlackVertices, bfsVertices, blackFilters, errors, filter_, goldFilters, inBreakScope, index, innerResponse, outEdges, rbfsVertices, response, uprop, vertex;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      bfsVertices = [];
		      rbfsVertices = [];
		      ambiguousBlackVertices = [];
		      innerResponse = GRAPHLIB.directed.create(mergedModelDigraph_.toJSON());
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        break;
		      }
		      ambiguityModelDigraph = innerResponse.result;
		      innerResponse = GRAPHLIB.directed.breadthFirstTraverse({
		        digraph: ambiguityModelDigraph,
		        visitor: {
		          discoverVertex: function(grequest_) {
		            var uprop;
		            uprop = grequest_.g.getVertexProperty(grequest_.u);
		            uprop.filters.sort();
		            if (uprop.filters.length === 1) {
		              uprop.color = "gold";
		            } else {
		              if (grequest_.g.outDegree(grequest_.u)) {
		                uprop.color = "gray";
		              } else {
		                uprop.color = "black";
		                ambiguousBlackVertices.push(grequest_.u);
		              }
		            }
		            grequest_.g.setVertexProperty({
		              u: grequest_.u,
		              p: uprop
		            });
		            bfsVertices.push(grequest_.u);
		            return true;
		          }
		        }
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        errors.unshift("Error during BFS of merged filter specification graph.");
		        break;
		      }
		      if (!innerResponse.result.searchStatus === "completed") {
		        errors.unshift("BFS of merged filter specification graph did not complete as expected.");
		        break;
		      }
		      if (UTILLIB.dictionaryLength(innerResponse.result.undiscoveredMap)) {
		        errors.unshift("BFS of merged filter specification graph did not discover all vertices?");
		        break;
		      }
		      index = 0;
		      while (index < bfsVertices.length) {
		        rbfsVertices[index] = bfsVertices[bfsVertices.length - index - 1];
		        index++;
		      }
		      index = 0;
		      while (index < rbfsVertices.length) {
		        vertex = rbfsVertices[index++];
		        uprop = ambiguityModelDigraph.getVertexProperty(vertex);
		        if (uprop.color !== "gray") {
		          continue;
		        }
		        allFilters = {};
		        blackFilters = {};
		        goldFilters = {};
		        outEdges = ambiguityModelDigraph.outEdges(vertex);
		        outEdges.forEach(function(edge_) {
		          var vprop;
		          vprop = ambiguityModelDigraph.getVertexProperty(edge_.v);
		          return vprop.filters.forEach(function(filter_) {
		            allFilters[filter_] = true;
		            if ((vprop.color === "gold") || (vprop.color === "green")) {
		              return goldFilters[filter_] = true;
		            } else if (vprop.color === "black") {
		              return blackFilters[filter_] = true;
		            } else {
		              return errors.unshift("Unexpected color '" + vprop.color + "' discovered analyzing vertex '" + edge_.v + "'.");
		            }
		          });
		        });
		        uprop.filters.forEach(function(filter_) {
		          if (!((allFilters[filter_] != null) && allFilters[filter_])) {
		            return blackFilters[filter_] = true;
		          }
		        });
		        for (filter_ in blackFilters) {
		          if ((goldFilters[filter_] != null) && goldFilters[filter_]) {
		            delete goldFilters[filter_];
		          }
		        }
		        if (!UTILLIB.dictionaryLength(blackFilters)) {
		          uprop.color = "green";
		        } else {
		          uprop.color = "black";
		          ambiguousBlackVertices.push(vertex);
		        }
		        ambiguityModelDigraph.setVertexProperty({
		          u: vertex,
		          p: uprop
		        });
		      }
		      response.result = {
		        digraph: ambiguityModelDigraph,
		        ambigousBlackVertices: ambiguousBlackVertices,
		        ambiguousFilterSpecificationErrors: []
		      };
		      if (ambiguousBlackVertices.length) {
		        ambiguousBlackVertices.sort();
		        ambiguousBlackVertices.forEach(function(vertex_) {
		          var message, vertexProperty;
		          if (vertex_ === "request") {
		            return;
		          }
		          vertexProperty = ambiguityModelDigraph.getVertexProperty(vertex_);
		          message = "Filters [" + (vertexProperty.filters.join(" and ")) + "] overlap ambiguously at filter spec node '" + vertex_ + "'.";
		          return response.result.ambiguousFilterSpecificationErrors.push(message);
		        });
		      }
		      break;
		    }
		    if (errors.length) {
		      response.error = errors.join(" ");
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		(function() {
		  var FILTERLIB, GRAPHLIB, UTILLIB, addFilterSpecToMergedDigraphModel, buildMergedFilterSpecDigraphModel, rootVertex;

		  UTILLIB = __webpack_require__(9);

		  FILTERLIB = __webpack_require__(1);

		  GRAPHLIB = __webpack_require__(7);

		  rootVertex = "request";

		  buildMergedFilterSpecDigraphModel = module.exports = function(request_) {
		    var errors, filter, filters, i, inBreakScope, innerResponse, len, response, result, uprops;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      result = {
		        digraph: null,
		        filterTable: {}
		      };
		      innerResponse = GRAPHLIB.directed.create({
		        name: "Discriminator Decission Tree Model"
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        break;
		      }
		      result.digraph = innerResponse.result;
		      result.digraph.addVertex({
		        u: rootVertex,
		        p: {
		          color: "white"
		        }
		      });
		      filters = [];
		      for (i = 0, len = request_.length; i < len; i++) {
		        filter = request_[i];
		        innerResponse = addFilterSpecToMergedDigraphModel({
		          graph: result.digraph,
		          filter: filter
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        result.filterTable[filter.filterDescriptor.operationID] = {};
		        filters.push(filter.filterDescriptor.operationID);
		      }
		      if (errors.length) {
		        errors.unshift("Unable to build merged filter specification digraph model.");
		        break;
		      }
		      uprops = result.digraph.getVertexProperty(rootVertex);
		      uprops.filters = filters;
		      result.digraph.setVertexProperty({
		        u: rootVertex,
		        p: uprops
		      });
		      result.digraph.setGraphDescription("Models the combined input filter specifications of Filter ID's: [" + filters.join(", ") + "].");
		      response.result = result;
		      break;
		    }
		    if (errors.length) {
		      response.error = errors.join(" ");
		    }
		    return response;
		  };

		  addFilterSpecToMergedDigraphModel = function(request_) {
		    var considerSubnamespace, considerSubnamespaces, errors, i, inBreakScope, len, mapEntry, mapQueue, operationID, response, subnamespaceName, type, types, vertexId, vertexProperty;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    operationID = request_.filter.filterDescriptor.operationID;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      mapQueue = [];
		      mapQueue.push({
		        parentVertex: rootVertex,
		        parentNamespaceName: "",
		        path: "request",
		        namespaceDescriptor: request_.filter.filterDescriptor.inputFilterSpec
		      });
		      while (mapQueue.length) {
		        mapEntry = mapQueue.shift();
		        types = null;
		        considerSubnamespaces = true;
		        if (!((mapEntry.namespaceDescriptor != null) && mapEntry.namespaceDescriptor)) {
		          mapEntry.namespaceDescriptor = {
		            ____opaque: true
		          };
		        }
		        if ((mapEntry.namespaceDescriptor.____types != null) && mapEntry.namespaceDescriptor.____types) {
		          types = mapEntry.namespaceDescriptor.____types;
		          if (Object.prototype.toString.call(types) === '[object String]') {
		            types = [types];
		          }
		        } else {
		          if ((mapEntry.namespaceDescriptor.____accept != null) && mapEntry.namespaceDescriptor.____accept) {
		            types = mapEntry.namespaceDescriptor.____accept;
		            if (Object.prototype.toString.call(types) === '[object String]') {
		              types = [types];
		            }
		            considerSubnamespaces = false;
		          } else {
		            if ((mapEntry.namespaceDescriptor.____opaque != null) && mapEntry.namespaceDescriptor.____opaque) {
		              types = ['jsUndefined', 'jsNull', 'jsBoolean', 'jsNumber', 'jsObject', 'jsFunction', 'jsString', 'jsArray'];
		              considerSubnamespace = false;
		            }
		          }
		        }
		        if ((mapEntry.namespaceDescriptor.____defaultValue != null) && mapEntry.namespaceDescriptor.____defaultValue) {
		          types.push('jsUndefined');
		        }
		        for (i = 0, len = types.length; i < len; i++) {
		          type = types[i];
		          vertexId = mapEntry.parentVertex + mapEntry.parentNamespaceName + "(" + type + ")";
		          if (!request_.graph.isVertex(vertexId)) {
		            request_.graph.addVertex({
		              u: vertexId,
		              p: {
		                filterSpecPath: mapEntry.path,
		                filters: [operationID],
		                color: "white",
		                typeConstraint: type
		              }
		            });
		          } else {
		            vertexProperty = request_.graph.getVertexProperty(vertexId);
		            vertexProperty.filters.push(operationID);
		            request_.graph.setVertexProperty({
		              u: vertexId,
		              p: vertexProperty
		            });
		          }
		          request_.graph.addEdge({
		            e: {
		              u: mapEntry.parentVertex,
		              v: vertexId
		            }
		          });
		          if ((!considerSubnamespaces) || (type === 'jsUndefined') || (type === 'jsArray')) {
		            continue;
		          }
		          for (subnamespaceName in mapEntry.namespaceDescriptor) {
		            if (subnamespaceName.indexOf('____') !== 0) {
		              mapQueue.push({
		                parentVertex: vertexId,
		                parentNamespaceName: "." + subnamespaceName,
		                path: mapEntry.path + "." + subnamespaceName,
		                namespaceDescriptor: mapEntry.namespaceDescriptor[subnamespaceName]
		              });
		            }
		          }
		        }
		      }
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		(function() {
		  var FILTERLIB, generateDiscriminatorRuntimeFilter;

		  FILTERLIB = __webpack_require__(1);

		  generateDiscriminatorRuntimeFilter = module.exports = function(runtimeContext_) {
		    var errors, inBreakScope, innerResponse, response, runtimeContext;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    runtimeContext = runtimeContext_;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      innerResponse = FILTERLIB.create({
		        operationID: "XY-x390CSVmXTu0oYXlRiw",
		        operationName: "Discrimintor Filter",
		        operationDescription: "Discriminates between N disjunct request signatures.",
		        bodyFunction: function(request_) {
		          response = {
		            error: null,
		            response: null
		          };
		          errors = [];
		          inBreakScope = false;
		          while (!inBreakScope) {
		            inBreakScope = true;
		            console.log("In " + this.operationName + ":" + this.operationID);
		            console.log("runtime context = " + (JSON.stringify(runtimeContext)));
		            break;
		          }
		          if (errors.length) {
		            response.error = errors.join(" ");
		          }
		          return response;
		        }
		      });
		      if (innerResponse.error) {
		        errors.unshift(innerResponse.error);
		        errors.unshift("Unable to generate discriminator filter runtime due to error:");
		        break;
		      }
		      response.result = innerResponse.result;
		      break;
		    }
		    if (errors.length) {
		      response.error = errors.join(" ");
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		(function() {
		  var IDLIB, UTILLIB, analyzeFilterSpecGraphVertex, buildDiscriminatorChoiceSets;

		  UTILLIB = __webpack_require__(9);

		  IDLIB = __webpack_require__(2);

		  buildDiscriminatorChoiceSets = module.exports = function(request_) {
		    var discriminatorScript, errors, inBreakScope, index, innerResponse, response, uprop, vertex;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    index = 0;
		    vertex = null;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      uprop = request_.digraph.getVertexProperty("request");
		      if (uprop.color === "gold") {
		        if (request_.digraph.outDegree("request")) {
		          errors.unshift("Cannot create mutual exclusion set tree for merged filter spec model containing only one filter spec.");
		          break;
		        } else {
		          errors.unshift("Cannot create mutual exclusion set tree for merged filter spec model because it's null.");
		          break;
		        }
		      }
		      discriminatorScript = [];
		      while (index < request_.bfsVertices.length) {
		        vertex = request_.bfsVertices[index];
		        innerResponse = analyzeFilterSpecGraphVertex({
		          digraph: request_.digraph,
		          vertex: vertex
		        });
		        if (innerResponse.error) {
		          errors.unshift(innerResponse.error);
		          break;
		        }
		        discriminatorScript.push(innerResponse.result);
		        index++;
		      }
		      if (errors.length) {
		        break;
		      }
		      response.result = discriminatorScript;
		    }
		    if (errors.length) {
		      response.error = errors.join(" ");
		    }
		    console.log("Choice Sets:");
		    console.log(JSON.stringify(response, void 0, 4) + "\n\n");
		    return response;
		  };

		  analyzeFilterSpecGraphVertex = function(request_) {
		    var choices, errors, inBreakScope, outEdges, response, uprop;
		    response = {
		      error: null,
		      result: null
		    };
		    errors = [];
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      uprop = request_.digraph.getVertexProperty(request_.vertex);
		      switch (uprop.color) {
		        case "gold":
		          response.result = {
		            truth: {
		              filterID: uprop.filters[0],
		              filterSpecPath: uprop.filterSpecPath,
		              typeConstraint: uprop.typeConstraint
		            }
		          };
		          break;
		        case "green":
		          choices = {};
		          outEdges = request_.digraph.outEdges(request_.vertex);
		          outEdges.forEach(function(edge_) {
		            var choiceKey, vprop;
		            vprop = request_.digraph.getVertexProperty(edge_.v);
		            choiceKey = vprop.filters.join(":") + ":" + vprop.filterSpecPath;
		            if (!((choices[choiceKey] != null) && choices[choiceKey])) {
		              choices[choiceKey] = {
		                disambiguate: {
		                  typeConstraints: [],
		                  filterSpecPath: vprop.filterSpecPath
		                }
		              };
		            }
		            return choices[choiceKey].disambiguate.typeConstraints.push(vprop.typeConstraint);
		          });
		          response.result = {
		            disambiguate: choices
		          };
		          break;
		        default:
		          errors.unshift("Unexpected graph coloration '" + uprop.color + "' discovered on vertex '" + request_.vertex + "'.");
		          break;
		      }
		      break;
		    }
		    if (errors.length) {
		      response.error = errors.join(" ");
		    }
		    return response;
		  };

		}).call(this);


	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		
		/*
		----------------------------------------------------------------------
		 
		           +---+---+---+---+
		 chaos --> | J | B | U | S | --> order
		           +---+---+---+---+

		Copyright (C) 2015 Encapsule.io Bellevue, WA USA

		This software is licensed under the terms of the GNU Affero General
		Public License v3.0.

		Please review the included LICENSE file for specific agreement terms.
		See also: https://opensource.org/licenses/AGPL-3.0

		Source code:   https://github.com/encapsule.jbus
		Documentation: https://encapsule.io/projects/jbus/docs/common
		Licensing:     https://encapsule.io/licening

		----------------------------------------------------------------------
		 */

		(function() {
		  var MODULE, typeCodes, typeConvert, typeLUTS;

		  typeCodes = __webpack_require__(8);

		  typeLUTS = __webpack_require__(18);

		  typeConvert = __webpack_require__(17);

		  MODULE = {};


		  /*
		      request = {
		          value: JavaScript reference
		          types: jsCode (number [0,7] or array of jsCode's
		      }
		      response = {
		          error: null or string explaining why result and guidance are null
		          guidance: a string explaining the false result (often used in parameter validation error messages upstream)
		          result: jsMoniker string indicating the type of request.ref iff ref is in request.types. Otherwise, null.
		      }
		  
		      Note: The protocol for using refInJsTypeSet is slightly different than base request/response.
		  
		      if response.error then, as typical, the call failed and produced no response.result. response.error is a string explaining the failure.
		      if !response.error && response.result, then request.ref is in request.types and response.result is set to request.ref's jsMoniker string.
		      if !response.error && !response.result, then response.guidance is a string that explains the type check failure: "found X, expected Y, Z..."
		   */

		  MODULE.inTypeSet = function(request_) {
		    var convertResponse, errors, inBreakScope, response, typeMoniker, valueMoniker;
		    errors = [];
		    response = {
		      error: null,
		      guidance: null,
		      result: null
		    };
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      if (!((request_ != null) && (request_ != null))) {
		        errors.unshift("Missing request object in-parameter.");
		        break;
		      }
		      convertResponse = typeConvert({
		        to: 'jsTypeString',
		        from: 'jsReference',
		        value: request_
		      });
		      if (convertResponse.error) {
		        errors.unshift(convertResponse.error);
		        break;
		      }
		      if (convertResponse.result !== '[object Object]') {
		        errors.unshift("Invalid request: Expected value of type '[object Object]' but found '" + convertResponse.result + "' instead.");
		        break;
		      }
		      convertResponse = typeConvert({
		        to: 'jsMoniker',
		        from: 'jsReference',
		        value: request_.value
		      });
		      if (convertResponse.error) {
		        errors.unshift(convertResponse.error);
		        break;
		      }
		      valueMoniker = convertResponse.result;
		      convertResponse = typeConvert({
		        to: 'jsMoniker',
		        from: 'jsReference',
		        value: request_.types
		      });
		      if (convertResponse.error) {
		        errors.unshift(convertResponse.error);
		        break;
		      }
		      typeMoniker = convertResponse.result;
		      switch (typeMoniker) {
		        case 'jsString':
		          response.result = (request_.types === valueMoniker) && valueMoniker || false;
		          break;
		        case 'jsArray':
		          response.result = ((request_.types.indexOf(valueMoniker)) !== -1) && valueMoniker || false;
		          break;
		        default:
		          errors.unshift("Invalid request.types value type '" + typeMoniker + "'. Expected either '[object String]' (jsMoniker string) or '[object Array]' (of jsMoniker strings).");
		          break;
		      }
		      if (errors.length) {
		        break;
		      }
		      if (!response.result) {
		        response.guidance = "Value of type '" + valueMoniker + "' not in allowed type set [" + request_.types + "].";
		      }
		    }
		    if (errors.length) {
		      errors.unshift("jbus type in set check failed:");
		      response.error = errors.join(' ');
		    }
		    return response;
		  };

		  MODULE.isJSON = function(value_) {
		    var convertResponse, errors, inBreakScope, response;
		    errors = [];
		    response = {
		      error: null,
		      guidance: null,
		      result: null
		    };
		    inBreakScope = false;
		    while (!inBreakScope) {
		      inBreakScope = true;
		      convertResponse = typeConvert({
		        to: 'jsonMoniker',
		        from: 'jsReference',
		        value: value_
		      });
		      if (convertResponse.error) {
		        response.guidance = convertResponse.error;
		        response.result = false;
		        break;
		      }
		      response.result = convertResponse.result;
		    }
		    if (errors.length) {
		      errors.unshift("jbus type JSON check failed:");
		      response.error = errors.join(' ');
		    }
		    return response;
		  };

		  module.exports = MODULE;

		}).call(this);


	/***/ },
	/* 54 */
	/***/ function(module, exports) {

		/**
		 * JS Implementation of MurmurHash2
		 * 
		 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
		 * @see http://github.com/garycourt/murmurhash-js
		 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
		 * @see http://sites.google.com/site/murmurhash/
		 * 
		 * @param {string} str ASCII only
		 * @param {number} seed Positive integer only
		 * @return {number} 32-bit positive integer hash
		 */

		function murmurhash2_32_gc(str, seed) {
		  var
		    l = str.length,
		    h = seed ^ l,
		    i = 0,
		    k;
		  
		  while (l >= 4) {
		  	k = 
		  	  ((str.charCodeAt(i) & 0xff)) |
		  	  ((str.charCodeAt(++i) & 0xff) << 8) |
		  	  ((str.charCodeAt(++i) & 0xff) << 16) |
		  	  ((str.charCodeAt(++i) & 0xff) << 24);
		    
		    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
		    k ^= k >>> 24;
		    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

			h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

		    l -= 4;
		    ++i;
		  }
		  
		  switch (l) {
		  case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
		  case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
		  case 1: h ^= (str.charCodeAt(i) & 0xff);
		          h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
		  }

		  h ^= h >>> 13;
		  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
		  h ^= h >>> 15;

		  return h >>> 0;
		}

		if(typeof module !== undefined) {
		  module.exports = murmurhash2_32_gc
		}


	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
		 * 
		 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
		 * @see http://github.com/garycourt/murmurhash-js
		 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
		 * @see http://sites.google.com/site/murmurhash/
		 * 
		 * @param {string} key ASCII only
		 * @param {number} seed Positive integer only
		 * @return {number} 32-bit positive integer hash 
		 */

		function murmurhash3_32_gc(key, seed) {
			var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
			
			remainder = key.length & 3; // key.length % 4
			bytes = key.length - remainder;
			h1 = seed;
			c1 = 0xcc9e2d51;
			c2 = 0x1b873593;
			i = 0;
			
			while (i < bytes) {
			  	k1 = 
			  	  ((key.charCodeAt(i) & 0xff)) |
			  	  ((key.charCodeAt(++i) & 0xff) << 8) |
			  	  ((key.charCodeAt(++i) & 0xff) << 16) |
			  	  ((key.charCodeAt(++i) & 0xff) << 24);
				++i;
				
				k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
				k1 = (k1 << 15) | (k1 >>> 17);
				k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

				h1 ^= k1;
		        h1 = (h1 << 13) | (h1 >>> 19);
				h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
				h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
			}
			
			k1 = 0;
			
			switch (remainder) {
				case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
				case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
				case 1: k1 ^= (key.charCodeAt(i) & 0xff);
				
				k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
				k1 = (k1 << 15) | (k1 >>> 17);
				k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
				h1 ^= k1;
			}
			
			h1 ^= key.length;

			h1 ^= h1 >>> 16;
			h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
			h1 ^= h1 >>> 13;
			h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
			h1 ^= h1 >>> 16;

			return h1 >>> 0;
		}

		if(true) {
		  module.exports = murmurhash3_32_gc
		}

	/***/ },
	/* 56 */
	/***/ function(module, exports) {

		module.exports = __webpack_require__(27);

	/***/ }
	/******/ ]);

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 13 */
/***/ function(module, exports) {

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


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var escapeStringRegexp = __webpack_require__(71);
	var ansiStyles = __webpack_require__(68);
	var stripAnsi = __webpack_require__(76);
	var hasAnsi = __webpack_require__(73);
	var supportsColor = __webpack_require__(69);
	var defineProps = Object.defineProperties;
	var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

	function Chalk(options) {
		// detect mode if not set manually
		this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
	}

	// use bright blue on Windows as the normal blue color is illegible
	if (isSimpleWindowsTerm) {
		ansiStyles.blue.open = '\u001b[94m';
	}

	var styles = (function () {
		var ret = {};

		Object.keys(ansiStyles).forEach(function (key) {
			ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

			ret[key] = {
				get: function () {
					return build.call(this, this._styles.concat(key));
				}
			};
		});

		return ret;
	})();

	var proto = defineProps(function chalk() {}, styles);

	function build(_styles) {
		var builder = function () {
			return applyStyle.apply(builder, arguments);
		};

		builder._styles = _styles;
		builder.enabled = this.enabled;
		// __proto__ is used because we must return a function, but there is
		// no way to create a function with a different prototype.
		/* eslint-disable no-proto */
		builder.__proto__ = proto;

		return builder;
	}

	function applyStyle() {
		// support varags, but simply cast to string in case there's only one arg
		var args = arguments;
		var argsLen = args.length;
		var str = argsLen !== 0 && String(arguments[0]);

		if (argsLen > 1) {
			// don't slice `arguments`, it prevents v8 optimizations
			for (var a = 1; a < argsLen; a++) {
				str += ' ' + args[a];
			}
		}

		if (!this.enabled || !str) {
			return str;
		}

		var nestedStyles = this._styles;
		var i = nestedStyles.length;

		// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
		// see https://github.com/chalk/chalk/issues/58
		// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
		var originalDim = ansiStyles.dim.open;
		if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
			ansiStyles.dim.open = '';
		}

		while (i--) {
			var code = ansiStyles[nestedStyles[i]];

			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			str = code.open + str.replace(code.closeRe, code.open) + code.close;
		}

		// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
		ansiStyles.dim.open = originalDim;

		return str;
	}

	function init() {
		var ret = {};

		Object.keys(styles).forEach(function (name) {
			ret[name] = {
				get: function () {
					return build.call(this, [name]);
				}
			};
		});

		return ret;
	}

	defineProps(Chalk.prototype, init());

	module.exports = new Chalk();
	module.exports.styles = ansiStyles;
	module.exports.hasColor = hasAnsi;
	module.exports.stripColor = stripAnsi;
	module.exports.supportsColor = supportsColor;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var murmur3 = __webpack_require__(75)
	var murmur2 = __webpack_require__(74)

	module.exports = murmur3
	module.exports.murmur3 = murmur3
	module.exports.murmur2 = murmur2


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	// Inspired by the Boost Graph Library (BGL)
	// http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/index.html
	// http://en.wikipedia.org/wiki/Directed_graph

	var helperFunctions = __webpack_require__(4);
	var digraphParams = __webpack_require__(35);
	var digraphImport = __webpack_require__(34);
	var digraphExport = __webpack_require__(33);

	(function() {
	    var __bind = function(method, scope){ return function(){ return method.apply(scope, arguments); }; };

	    var DirectedGraph = (function() {
	        function DirectedGraph(jsonOrObject_) {

	            // Meta methods
	            this.getGraphName = __bind(this.getGraphName, this);
	            this.setGraphName = __bind(this.setGraphName, this);
	            this.getGraphDescription = __bind(this.getGraphDescription, this);
	            this.setGraphDescription = __bind(this.setGraphDescription, this);

	            // Vertex-scope methods
	            this.isVertex = __bind(this.isVertex, this);
	            this.addVertex = __bind(this.addVertex, this);
	            this.removeVertex = __bind(this.removeVertex, this);
	            this.getVertexProperty = __bind(this.getVertexProperty, this);
	            this.setVertexProperty = __bind(this.setVertexProperty, this);
	            this.hasVertexProperty = __bind(this.hasVertexProperty, this);
	            this.clearVertexProperty = __bind(this.clearVertexProperty, this);
	            this.inDegree = __bind(this.inDegree, this);
	            this.inEdges = __bind(this.inEdges, this);
	            this.outDegree = __bind(this.outDegree, this);
	            this.outEdges = __bind(this.outEdges, this);

	            // Edge-scope methods
	            this.isEdge = __bind(this.isEdge, this);
	            this.addEdge = __bind(this.addEdge, this);
	            this.removeEdge = __bind(this.removeEdge, this);
	            this.getEdgeProperty = __bind(this.getEdgeProperty, this);
	            this.setEdgeProperty = __bind(this.setEdgeProperty, this);
	            this.hasEdgeProperty = __bind(this.hasEdgeProperty, this);
	            this.clearEdgeProperty = __bind(this.clearEdgeProperty, this);

	            // Digraph-scope methods
	            this.verticesCount = __bind(this.verticesCount, this);
	            this.getVertices = __bind(this.getVertices, this);
	            this.edgesCount = __bind(this.edgesCount, this);
	            this.getEdges = __bind(this.getEdges, this);
	            this.rootVerticesCount = __bind(this.rootVerticesCount, this);
	            this.getRootVertices = __bind(this.getRootVertices, this);
	            this.leafVerticesCount = __bind(this.leafVerticesCount, this);
	            this.getLeafVertices = __bind(this.getLeafVertices, this);
	            this.toObject = __bind(this.toObject, this);
	            this.toJSON = __bind(this.toJSON, this);
	            this.fromObject = __bind(this.fromObject, this);
	            this.fromJSON = __bind(this.fromJSON, this);

	            // DirectedGraph container private runtime state.
	            this._private = {
	                name: "",
	                description: "",
	                vertexMap: {},
	                rootMap: {},
	                leafMap: {},
	                edgeCount: 0,
	                constructionError: null
	            };
	            if ((jsonOrObject_ !== null) && jsonOrObject_) {
	                var innerResponse = digraphImport(this, jsonOrObject_);
	                if (innerResponse.error) {
	                    this._private.constructionError = "DirectedGraph constructor failed: " + innerResponse.error;
	                }
	            }
	        }

	        // META METHODS

	        DirectedGraph.prototype.getGraphName = function() {
	            return this._private.name;
	        };

	        DirectedGraph.prototype.setGraphName = function(string_) {
	            var response = { error: null, result: null };
	            if (helperFunctions.JSType(string_) === '[object String]') {
	                this._private.name = string_;
	                response.result = true;
	            } else {
	                response.error = "Invalid graph name specified. Expected '[object String]'.";
	            }
	            return response;
	        };

	        DirectedGraph.prototype.getGraphDescription = function() {
	            return this._private.description;
	        };

	        DirectedGraph.prototype.setGraphDescription = function(string_) {
	            var response = { error: null, result: null };
	            if (helperFunctions.JSType(string_) === '[object String]') {
	                this._private.description = string_;
	                response.result = true;
	            } else {
	                response.error = "Invalid graph name specified. Expected '[object String]'.";
	            }
	            return response;
	        };

	        // VERTEX-SCOPE METHODS

	        DirectedGraph.prototype.isVertex = function (vertexId_) {
	            var innerResponse = digraphParams.verifyVertexReadRequest(vertexId_);
	            if (innerResponse.error) {
	                return false;
	            }
	            var vertex = this._private.vertexMap[vertexId_];
	            return (vertex !== null) && vertex && true || false;
	        };

	        /*
	          request = {
	              u: vertex ID string
	              p: optional property (must be serializable to JSON)
	          }
	          response = {
	              error: null or error string
	              result: vertex ID string or null if error
	          }
	         */
	        DirectedGraph.prototype.addVertex = function (request_) {
	            var response = { error: null, result: null };
	            var errors = [];
	            var inBreakScope = false;
	            while (!inBreakScope) {
	                inBreakScope = true;
	                var innerResponse = digraphParams.verifyVertexWriteRequest(request_);
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                var vertex = this._private.vertexMap[request_.u];
	                if ((vertex === null) || !vertex) {
	                    vertex = this._private.vertexMap[request_.u] = {};
	                    vertex.edges = {};
	                    vertex.edges.in = {};
	                    vertex.edges.out = {};
	                    this._private.rootMap[request_.u] = {};
	                    this._private.leafMap[request_.u] = {};
	                }
	                if (helperFunctions.JSType(request_.p) !== '[object Undefined]') {
	                    vertex.properties = request_.p;
	                }
	                response.result = request_.u;
	            } // end while !inBreakScope
	            if (errors.length) {
	                errors.unshift("DirectedGraph.addVertex failed:");
	                response.error = errors.join(' ');
	            }
	            return response;
	        };

	        DirectedGraph.prototype.removeVertex = function (vertexId_) {
	            var innerResponse = digraphParams.verifyVertexReadRequest(vertexId_);
	            if (innerResponse.error) {
	                return false;
	            }
	            var vertexU = this._private.vertexMap[vertexId_];
	            if ((vertexU === null) || !vertexU) {
	                return false;
	            }
	            var vertexIdX;
	            for (vertexIdX in vertexU.edges.out) {
	                this.removeEdge({ u: vertexId_, v: vertexIdX});
	            }
	            for (vertexIdX in vertexU.edges.in) {
	                this.removeEdge({ u: vertexIdX, v: vertexId_});
	            }
	            delete this._private.vertexMap[vertexId_];
	            delete this._private.rootMap[vertexId_];
	            delete this._private.leafMap[vertexId_];
	            return true;
	        };

	        DirectedGraph.prototype.getVertexProperty = function(vertexId_) {
	            if (!this.isVertex(vertexId_)) {
	                return void 0;
	            }
	            return this._private.vertexMap[vertexId_].properties;
	        };

	        /*
	          request = {
	              u: vertex ID string
	              p: optional property (must be serializable to JSON)
	          }
	          response = {
	              error: null or error string
	              result: vertex ID string or null if error
	          }
	         */
	        DirectedGraph.prototype.setVertexProperty = function(request_) {
	            return this.addVertex(request_);
	        };

	        DirectedGraph.prototype.hasVertexProperty = function(vertexId_) {
	            if (!this.isVertex(vertexId_)) {
	                return false;
	            }
	            if (helperFunctions.JSType(this._private.vertexMap[vertexId_].properties) === '[object Undefined]') {
	                return false;
	            }
	            return true;
	        };

	        DirectedGraph.prototype.clearVertexProperty = function(vertexId_) {
	            if (!this.isVertex(vertexId_)) {
	                return false;
	            }
	            delete this._private.vertexMap[vertexId_].properties;
	            return true;
	        };

	        DirectedGraph.prototype.inDegree = function (vertexId_) {
	            return this.isVertex(vertexId_)?Object.keys(this._private.vertexMap[vertexId_].edges.in).length:-1;
	        };

	        DirectedGraph.prototype.inEdges = function(vertexId_) {
	            var result = [];
	            if (this.isVertex(vertexId_)) {
	                for (var vertexIdV in this._private.vertexMap[vertexId_].edges.in) {
	                    result.push({ u: vertexIdV, v: vertexId_});
	                }
	            }
	            return result;
	        };

	        DirectedGraph.prototype.outDegree = function (vertexId_) {
	            return this.isVertex(vertexId_)?Object.keys(this._private.vertexMap[vertexId_].edges.out).length:-1;
	        };

	        DirectedGraph.prototype.outEdges = function(vertexId_) {
	            var result = [];
	            if (this.isVertex(vertexId_)) {
	                for (var vertexIdV in this._private.vertexMap[vertexId_].edges.out) {
	                    result.push({ u: vertexId_, v: vertexIdV});
	                }
	            }
	            return result;
	        };

	        // EDGE-SCOPE METHODS

	        /*
	          request = {
	              u: string,
	              v: string,
	          }
	          response = Boolean true if edge exists. Otherwise, false.
	          Note that invalid requests are coalesced as negative responses.
	        */
	        DirectedGraph.prototype.isEdge = function(request_) {
	            var response = false;
	            var inBreakScope = false;
	            while (!inBreakScope) {
	                inBreakScope = true;
	                if (digraphParams.verifyEdgeReadRequest(request_).error) {
	                    break;
	                }
	                var vertexU = this._private.vertexMap[request_.u];
	                var vertexV = this._private.vertexMap[request_.v];
	                if (!((vertexU !== null) && vertexU && (vertexV !== null) && vertexV)) {
	                    break;
	                }
	                var edge = vertexU.edges.out[request_.v];
	                response = (edge !== null) && edge && true || false;
	            }
	            return response;
	        };

	        /*
	          request = {
	              e: { u: string, v: string },
	              p: (optional) property serializable to JSON
	          }
	          response = {
	              error: error string or null
	              result: edge descriptor object or null iff error
	          }
	         */
	        DirectedGraph.prototype.addEdge = function (request_) {
	            var response = { error: null, result: null };
	            var errors = [];
	            var inBreakScope = false;
	            while (!inBreakScope) {
	                inBreakScope = true;
	                var innerResponse = digraphParams.verifyEdgeWriteRequest(request_);
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                innerResponse = this.addVertex({ u: request_.e.u });
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                innerResponse = this.addVertex({ u: request_.e.v });
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                var outEdge = this._private.vertexMap[request_.e.u].edges.out[request_.e.v];
	                if ((outEdge === null) || !outEdge) {
	                    outEdge = this._private.vertexMap[request_.e.u].edges.out[request_.e.v] = {};
	                    delete this._private.leafMap[request_.e.u];
	                }
	                var inEdge = this._private.vertexMap[request_.e.v].edges.in[request_.e.u];
	                if ((inEdge === null) || !inEdge) {
	                    inEdge = this._private.vertexMap[request_.e.v].edges.in[request_.e.u] = {};
	                    this._private.edgeCount++;
	                    delete this._private.rootMap[request_.e.v];
	                }
	                if (helperFunctions.JSType(request_.p) !== '[object Undefined]') {
	                    outEdge.properties = request_.p;
	                }
	                response.result = request_.e;
	            } // end while !inBreakScope
	            if (errors.length) {
	                errors.unshift("DirectedGraph.addEdge failed:");
	                response.error = errors.join(' ');
	            }
	            return response;
	        };

	        /*
	          request = {
	              u: string,
	              v: string,
	          }
	          response = {
	              error: null or error string explaining why result is null
	              result: Boolean true if successful. False if edge doesn't exist.
	          }
	        */
	        DirectedGraph.prototype.removeEdge = function(request_) {
	            var response = { error: null, result: null };
	            var errors = [];
	            var inBreakScope = false;
	            while (!inBreakScope) {
	                inBreakScope = true;
	                var innerResponse = digraphParams.verifyEdgeReadRequest(request_);
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                var vertexU = this._private.vertexMap[request_.u];
	                var vertexV = this._private.vertexMap[request_.v];
	                if (!((vertexU !== null) && vertexU && (vertexV !== null) && vertexV)) {
	                    response.result = false;
	                    break;
	                }
	                var outEdgeMap = vertexU.edges.out;
	                var edge = outEdgeMap[request_.v];
	                if (!((edge !== null) && edge)) {
	                    response.result = false;
	                    break;
	                }
	                delete outEdgeMap[request_.v];
	                if (!Object.keys(outEdgeMap).length) {
	                    this._private.leafMap[request_.u] = {};
	                }
	                var inEdgeMap = vertexV.edges.in;
	                delete inEdgeMap[request_.u];
	                if (!Object.keys(inEdgeMap).length) {
	                    this._private.rootMap[request_.v] = {};
	                }
	                if (this._private.edgeCount) {
	                    this._private.edgeCount--;
	                }
	                response.result = true;
	            } // while !inBreakScope
	            if (errors.length) {
	                errors.unshift("DirectedGraph.removeEdge failed:");
	                response.error = errors.join(' ');
	            }
	            return response;
	        };

	        /*
	          request = {
	              u: string,
	              v: string
	          }
	          response = void 0 or whatever property is assigned to the edge
	          Note that build requests are coalesced to void 0 responses.
	         */

	        DirectedGraph.prototype.getEdgeProperty = function(request_) {
	            var response = void 0;
	            var inBreakScope = false;
	            while (!inBreakScope) {
	                inBreakScope = true;
	                if (digraphParams.verifyEdgeReadRequest(request_).error) {
	                    break;
	                }
	                var vertexU = this._private.vertexMap[request_.u];
	                var vertexV = this._private.vertexMap[request_.v];
	                if (!((vertexU !== null) && vertexU && (vertexV !== null) && vertexV)) {
	                    break;
	                }
	                response = vertexU.edges.out[request_.v].properties;
	            }
	            return response;
	        };

	        /*
	          request = {
	              e: { u: string, v: string },
	              p: (optional) property serializable to JSON
	          }
	          response = {
	              error: error string or null
	              result: edge descriptor object or null iff error
	          }
	         */
	        DirectedGraph.prototype.setEdgeProperty = function(request_) {
	            return this.addEdge(request_);
	        };

	        DirectedGraph.prototype.hasEdgeProperty = function(request_) {
	            if (!this.isEdge(request_)) {
	                return false;
	            }
	            if (helperFunctions.JSType(this._private.vertexMap[request_.u].edges.out[request_.v].properties) === '[object Undefined]') {
	                return false;
	            }
	            return true;
	        };

	        DirectedGraph.prototype.clearEdgeProperty = function(request_) {
	            if (!this.isEdge(request_)) {
	                return false;
	            }
	            delete this._private.vertexMap[request_.u].edges.out[request_.v].properties;
	            return true;
	        };

	        // DIGRAPH-SCOPE METHODS

	        DirectedGraph.prototype.verticesCount = function() {
	            return Object.keys(this._private.vertexMap).length;
	        };

	        DirectedGraph.prototype.getVertices = function() {
	            var vertices = [];
	            for (var vertexId in this._private.vertexMap) {
	                vertices.push(vertexId);
	            }
	            return vertices;
	        };

	        DirectedGraph.prototype.edgesCount = function() {
	            return this._private.edgeCount;
	        };

	        DirectedGraph.prototype.getEdges = function() {
	            var edges = [];
	            var vertices = this.getVertices();
	            var processVertexOutEdges = function(outEdges_) {
	                outEdges_.forEach(function(outEdge_) {
	                    edges.push(outEdge_);
	                });
	            };
	            var self = this;
	            vertices.forEach(function(vertexId_) {
	                processVertexOutEdges(self.outEdges(vertexId_));
	            });
	            return edges;
	        };

	        DirectedGraph.prototype.rootVerticesCount = function() {
	            return Object.keys(this._private.rootMap).length;
	        };

	        DirectedGraph.prototype.getRootVertices = function() {
	            var rootVertices = [];
	            for (var vertexId in this._private.rootMap) {
	                rootVertices.push(vertexId);
	            }
	            return rootVertices;
	        };

	        DirectedGraph.prototype.leafVerticesCount = function() {
	            return Object.keys(this._private.leafMap).length;
	        };

	        DirectedGraph.prototype.getLeafVertices = function() {
	            var leafVertices = [];
	            for (var vertexId in this._private.leafMap) {
	                leafVertices.push(vertexId);
	            }
	            return leafVertices;
	        };

	        DirectedGraph.prototype.toObject = function () {
	            return digraphExport.exportObject(this);
	        };

	        DirectedGraph.prototype.toJSON = function(replacer_, space_) {
	            return digraphExport.exportJSON(this, replacer_, space_);
	        };

	        DirectedGraph.prototype.fromObject = function (object_) {
	            return digraphImport(this, object_);
	        };

	        DirectedGraph.prototype.fromJSON = function(json_) {
	            return digraphImport(this, json_);
	        };

	        return DirectedGraph;

	    })();

	    var createDirectedGraph = function (jsonOrObject_) {
	        var response = { error: null, result: null };
	        var digraph = new DirectedGraph(jsonOrObject_);
	        if (digraph._private.constructionError) {
	            response.error = digraph._private.constructionError;
	        } else {
	            response.result = digraph;
	        }
	        return response;
	    };

	    module.exports = {
	        /*
	          createDirectedGraph is a wrapper around JavaScript operator new jsgraph.DirectedGraph(...)
	          that returns an error/result response object. This is the preferred mechanism by which
	          jsgraph-derived client code should construct DirectedGraph container object instance(s).
	        */
	        createDirectedGraph: createDirectedGraph,

	        /*
	          DirectedGraph is constructed with JavaScript operator new but may fail during construction
	          if an error is encountered parsing the constructor's optional JSON/data object in-paramter.
	          After contruction, clients should check DirectedGraph.constructionError === null to ensure
	          that construction was successful. If a construction error occurred, constructionError is the
	          response.error string returned by DirectedGraph's data import subroutine.
	        */
	        DirectedGraph: DirectedGraph

	    };

	}).call(this);


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph-algorithm-common-context.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	var helperFunctions = __webpack_require__(4);
	var colors = __webpack_require__(7);

	module.exports = function (request_) {
	    var response = { error: null, result: null };
	    var errors = [];
	    var traverseContext = { searchStatus: 'pending', colorMap: {}, undiscoveredMap: {} };
	    var initializeColorMapRecord = function (vertexId_) {
	        traverseContext.colorMap[vertexId_] = colors.white;
	        traverseContext.undiscoveredMap[vertexId_] = true;
	    };
	    var inBreakScope = false;
	    while (!inBreakScope) {
	        inBreakScope = true;
	        var objectTS = '[object Object]';
	        // Verify request.
	        var type = helperFunctions.JSType(request_);
	        if (type !== objectTS) {
	            errors.unshift("Expected request to be of type '" + objectTS + "' but found '" + type + "'.");
	            break;
	        }
	        // Verify request.digraph.
	        type = helperFunctions.JSType(request_.digraph);
	        if (type !== objectTS) {
	            errors.unshift("Expected request.digraph to be of type '" + objectTS + "' but found '" + type + "'.");
	            break;
	        }
	        // Initialize the BFS search context object.
	        request_.digraph.getVertices().forEach(initializeColorMapRecord);
	        // Assign the result. Note that it's incumbant upon the first invocation of
	        // traversal algorithm  to check/set the traverseContext.searchStatus flag and
	        // correctly call the visitor.initializeVertex callback on each vertex in the
	        // color map prior to the start of the search. traverseContext.searchStatus should
	        // be 'running' while a search is in progress. 'terminated' if prematurely terminated
	        // by client visitor code. 'complete' when search concludes normally.
	        response.result = traverseContext;
	    }
	    if (errors.length) {
	        errors.unshift("jsgraph.directed.createTraverseContext failed:");
	        response.error = errors.join(' ');
	    }
	    return response;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/arc/digraph-algorithm-common-request.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	var helperFunctions = __webpack_require__(4);
	var TRAVERSE_CONTEXT = __webpack_require__(17);

	/*
	  request = {
	      digraph: reference to jsgraph.DirectedGraph container object (required)
	      visitor: reference to jsgraph BFV visitor object (required)
	      options: {
	          startVector: reference to a vertex ID string, or an array of vertex ID strings (optional)
	              Note: if ommitted, BFT uses the digraph's root vertex set as the start vertex set
	          allowEmptyStartVector: Boolean flag (optional - default is false is omitted)
	          signalStart: Boolean flag (optional - default is true if ommitted)
	              Note: By default, BFT will call startVertex on each search root vertex.
	              In advanced scenarios you may wish to override this behavior.
	          traverseContext: reference to BFT search context object (optional)
	              Note: By default, BFT allocates the traversal context internally and returns it to
	              the caller. In advanced scenarios you may wish to provide a pre-initialized
	              (or potentially pre-colored) traversal context object.
	          }
	      }
	  }

	  response = {
	      error: null or string explaining why result is null
	      result: Traversal context object or null if error
	  }
	*/

	module.exports = function (request_) {

	    var response = { error: null, result: null };
	    var errors = [];
	    var nrequest = null;
	    var inBreakScope = false;

	    var createTraverseContext = function() {
	        var response = TRAVERSE_CONTEXT({ digraph: nrequest.digraph });
	        var result = null;
	        if (response.error) {
	            errors.unshift(response.error);
	        } else {
	            result = response.result;
	        }
	        return result;
	    };

	    var getRootVertices = function() {
	        return nrequest.digraph.getRootVertices();
	    };
	        
	    while (!inBreakScope) {
	        inBreakScope = true;

	        // Verify the outer shape of the request object.
	        var innerResponse = helperFunctions.JSType(request_);
	        if (innerResponse !== '[object Object]') {
	            errors.unshift("Missing request object ~. Found type '" + innerResponse + "'.");
	            break;
	        }
	        nrequest = {};
	        innerResponse = helperFunctions.JSType(request_.digraph);
	        if (innerResponse !== '[object Object]') {
	            errors.unshift("Missing required DirectedGraph reference ~.digraph. Found type '" + innerResponse + "'.");
	            break;
	        }
	        nrequest.digraph = request_.digraph;
	        innerResponse = helperFunctions.JSType(request_.visitor);
	        if (innerResponse !== '[object Object]') {
	            errors.unshift("Missing required visitor object reference ~.visitor. Found type '" + innerResponse + "'.");
	            break;
	        }
	        
	        nrequest.visitor = request_.visitor;
	        innerResponse = helperFunctions.JSType(request_.options);
	        if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Object]')) {
	            errors.unshift("Options object ~.options is the wrong type. Found type '" + innerResponse + "'.");
	            break;
	        }
	        nrequest.options = {};
	        if (innerResponse === '[object Object]') {
	            innerResponse = helperFunctions.JSType(request_.options.startVector);
	            switch (innerResponse) {
	            case '[object Undefined]':
	                break;
	            case '[object String]':
	                nrequest.options.startVector = [ request_.options.startVector ];
	                break;
	            case '[object Array]':
	                nrequest.options.startVector = request_.options.startVector;
	                break;
	            default:
	                errors.unshift("Options object property ~.options.startVector is the wrong type. Expected either '[object String]', '[object Array]', or '[object Undefined]'. Found type '" + innerResponse + "'.");
	                break;
	            } // end switch

	            if (errors.length) {
	                break;
	            }

	            innerResponse = helperFunctions.JSType(request_.options.allowEmptyStartVector);
	            if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Boolean]')) {
	                errors.unshift("Options object property ~.options.allowEmptyStartVector is the wrong type. Expected either '[object Boolean]' or '[object Undefined]. Found type '" + innerResponse + "'.");
	                break;
	            }
	            if (innerResponse == '[object Boolean]') {
	                nrequest.options.allowEmptyStartVector = request_.options.allowEmptyStartVector;
	            }

	            innerResponse = helperFunctions.JSType(request_.options.signalStart);
	            if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Boolean]')) {
	                errors.unshift("Options object property ~.options.signalStart is the wrong type. Expected either '[object Boolean]' or '[object Undefined]'. Found type '" + innerResponse + "'.");
	                break;
	            }
	            if (innerResponse === '[object Boolean]') {
	                nrequest.options.signalStart = request_.options.signalStart;
	            }


	            innerResponse = helperFunctions.JSType(request_.options.traverseContext);
	            if ((innerResponse !== '[object Undefined]') && (innerResponse !== '[object Object]')) {
	                errors.unshift("Options object property ~.options.traverseContext is the wrong type. Expected either '[object Object]' or '[object Undefined']. Found type '" + innerResponse + "'.");
	                break;
	            }
	            if (innerResponse === '[object Object]') {
	                nrequest.options.traverseContext = request_.options.traverseContext;
	            }

	        } // end if options object specified
	        
	        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'startVector', getRootVertices);
	        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'allowEmptyStartVector', false);
	        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'signalStart', true);
	        helperFunctions.setPropertyValueIfUndefined(nrequest.options, 'traverseContext', createTraverseContext);

	        // Ensure that the starting vertex set is not empty (unless allowed).
	        if (!nrequest.options.startVector.length && !nrequest.options.allowEmptyStartVector) {
	            errors.unshift("Traversal aborted because we don't know which vertex to start on. Specify a graph that has at least one root vertex, explicity specify the start vertex (or vertices) via `request.options.startVector` array, or suppress this error by setting `request.options.allowEmptyStartVector` to Boolean true.");
	            break;
	        }

	        response.result = nrequest;

	    }
	    if (errors.length) {
	        response.error = errors.join(' ');
	    } else {
	        response.result = nrequest;
	    }
	    return response;

	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph-algorithm-common-visit.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	// Wraps call to DirectedGraph algorithm visitor function callbacks.

	var helperFunctions = __webpack_require__(4);

	/*
	  request = {
	      visitor: interface object reference
	      algorithm: string name of the algorithm for error messages
	      method: string name of the visitor method to call
	      request: request object to pass to the visitor method
	  },
	  response = {
	      error: null or string explaining by response.error is null
	      result: null (error) or Boolean flag set true to continue search
	  }
	*/

	module.exports = function (request_) {

	    var response = { error: null, result: null };
	    var errors = [];
	    var inBreakScope = false;
	    while (!inBreakScope) {
	        inBreakScope = true;
	        var visitorCallback = request_.visitor[request_.method];
	        var jstype = helperFunctions.JSType(visitorCallback);
	        // If the visitor function is not defined on the visitor object, return true to continue the search.
	        if (jstype !== '[object Function]') {
	            if (jstype !== '[object Undefined]') {
	                errors.unshift(request_.algorithm + " visitor interface method '" + request_.method + "' is type '" + jstype + "' instead of '[object Function]' as expected.");
	                break;
	            }
	            response.result = true;
	            break;
	        }
	        var continueSearch = visitorCallback(request_.request);
	        jstype = helperFunctions.JSType(continueSearch);
	        if (jstype !== '[object Boolean]') {
	            errors.unshift(request_.algorithm + " visitor interface error in callback function '" + request_.method + "'. Function returned type '" + jstype + "' instead of expected '[object Boolean]'.");
	            break;
	        }
	        response.result = continueSearch;
	    }
	    if (errors.length) {
	        response.error = errors.join(' ');
	    }
	    return response;
	};





/***/ },
/* 20 */
/***/ function(module, exports) {

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


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	----------------------------------------------------------------------
	 
	           +---+---+---+---+
	 chaos --> | J | B | U | S | --> order
	           +---+---+---+---+

	Copyright (C) 2015 Encapsule.io Bellevue, WA USA

	This software is licensed under the terms of the GNU Affero General
	Public License v3.0.

	Please review the included LICENSE file for specific agreement terms.
	See also: https://opensource.org/licenses/AGPL-3.0

	Source code:   https://github.com/encapsule.jbus
	Documentation: https://encapsule.io/projects/jbus/docs/common
	Licensing:     https://encapsule.io/licening

	----------------------------------------------------------------------
	 */

	(function() {
	  var convert, typeCodes, typeLUTS;

	  typeCodes = __webpack_require__(9);

	  typeLUTS = __webpack_require__(22);


	  /*
	      request = {
	          to: dimension string used to select the result set
	          from: dimension string used to interpret the reference of value
	          value: JavaScript reference to a value taken as a 'from' to be converted to a 'to'
	      }
	      response = {
	          error: null or string explaining by result is null
	          result: integer in range 0 to 7 inclusive (jsCode) or string (jsStringType, jsMoniker, jsonMoniker) or null to indicate error
	      }
	   */

	  convert = function(request_) {
	    var errors, forwardLookup, inBreakScope, jsCode, lookupResult, request, requestType, response, rewriteRequest, table, valueType;
	    errors = [];
	    response = {
	      error: null,
	      result: null
	    };
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      if (!((request_ != null) && request_)) {
	        errors.unshift("Missing request object.");
	        break;
	      }
	      requestType = Object.prototype.toString.call(request_);
	      if (requestType !== '[object Object]') {
	        errors.unshift("Invalid request value type. Expected reference to '[object Object]'.");
	        break;
	      }
	      request = {};
	      if (!((request_.from != null) && request_.from)) {
	        errors.unshift("Invalid request missing 'from' property.");
	        break;
	      }
	      requestType = Object.prototype.toString.call(request_.from);
	      if (requestType !== '[object String]') {
	        errors.unshift("Invalid request 'from' value type. Expected reference to '[object String]'.");
	        break;
	      }
	      request.from = request_.from;
	      if (!((request_.to != null) && request_.to)) {
	        errors.unshift("Invalid request missing 'to' property.");
	        break;
	      }
	      requestType = Object.prototype.toString.call(request_.to);
	      if (requestType !== '[object String]') {
	        errors.unshift("Invalid request 'to' value type. Expected reference to '[object String]'.");
	        break;
	      }
	      request.to = request_.to;
	      valueType = Object.prototype.toString.call(request_.value);
	      forwardLookup = true;
	      rewriteRequest = void 0;
	      switch (request.from) {
	        case 'jsReference':
	          rewriteRequest = {
	            to: request.to,
	            from: 'jsTypeString',
	            value: Object.prototype.toString.call(request_.value)
	          };
	          forwardLookup = false;
	          break;
	        case 'jsCode':
	          if (valueType !== '[object Number]') {
	            errors.unshift("Invalid request 'value' type. Expected reference to '[object Number]'.");
	            break;
	          }
	          if ((request_.value < 0) || (request_.value >= typeCodes.__GUARD)) {
	            errors.unshift("Invalid request 'value' '" + request_.value + "' is not a valid 'jsCode' value.");
	          }
	          break;
	        case 'jsMoniker' || 'jsonMoniker' || 'jsTypeString':
	          if (valueType !== '[object String]') {
	            errors.unshift("Invalid request 'value' type. Expected reference to '[object String]'.");
	          }
	          forwardLookup = false;
	          break;
	        default:
	          errors.unshift("[" + typeLUTS.dimensions + "].");
	          errors.unshift("Invalid request 'from' value '" + request.from + "' is not a valid dimension string. Valid dimensions:");
	          break;
	      }
	      if (errors.length) {
	        break;
	      }
	      if (!((rewriteRequest != null) && rewriteRequest)) {
	        request.value = request_.value;
	      } else {
	        request = rewriteRequest;
	      }
	      table = typeLUTS[forwardLookup && request.to || request.from];
	      if (!((table != null) && table)) {
	        errors.unshift("[" + typeLUTS.dimensions + "].");
	        errors.unshift("No conversion operator from '" + request.from + "' to '" + request.to + "' available. Valid dimensions:");
	        break;
	      }
	      if (forwardLookup) {
	        lookupResult = table[request.value];
	      } else {
	        lookupResult = table.indexOf(request.value);
	        if (lookupResult === -1) {
	          errors.unshift("[" + typeLUTS.dimensions + "].");
	          errors.unshift("Invalid request 'value' specifies unknown " + request.to + " '" + request.value + "'. Valid dimensions:");
	          break;
	        }
	        if (request.to !== 'jsCode') {
	          table = typeLUTS[request.to];
	          if (!((table != null) && table)) {
	            errors.unshift("Valid dimensions: [" + typeLUTS.dimensions + "].");
	            errors.unshift("No conversion to '" + request.to + "' available.");
	            break;
	          }
	          jsCode = lookupResult;
	          lookupResult = table[jsCode];
	          if (!((lookupResult != null) && lookupResult)) {
	            errors.unshift("No coversion from dimension '" + request.from + "' to '" + request.to + "' for value '" + request.value + "'.");
	            break;
	          }
	        }
	      }
	      response.result = lookupResult;
	    }
	    if (errors.length) {
	      errors.unshift("jbus type conversion failed:");
	      response.error = errors.join(" ");
	    }
	    return response;
	  };

	  module.exports = convert;

	}).call(this);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	----------------------------------------------------------------------
	 
	           +---+---+---+---+
	 chaos --> | J | B | U | S | --> order
	           +---+---+---+---+

	Copyright (C) 2015 Encapsule.io Bellevue, WA USA

	This software is licensed under the terms of the GNU Affero General
	Public License v3.0.

	Please review the included LICENSE file for specific agreement terms.
	See also: https://opensource.org/licenses/AGPL-3.0

	Source code:   https://github.com/encapsule.jbus
	Documentation: https://encapsule.io/projects/jbus/docs/common
	Licensing:     https://encapsule.io/licening

	----------------------------------------------------------------------
	 */

	(function() {
	  'use strict';
	  var MODULE, jstc, typeCodes;

	  typeCodes = __webpack_require__(9);

	  MODULE = {};


	  /*
	  String identifiers used to keep track of conversion source/destination dimension type.
	   */

	  MODULE.dimensions = ['jsReference', 'jsCode', 'jsTypeString', 'jsMoniker', 'jsonMoniker'];


	  /*
	  Lookup expected JavaScript type string from JavaScript Type Code (JSTC) ordinal.
	   */

	  MODULE.jsTypeString = [];

	  MODULE.jsTypeString[typeCodes.__undefined] = '[object Undefined]';

	  MODULE.jsTypeString[typeCodes.__null] = '[object Null]';

	  MODULE.jsTypeString[typeCodes.__boolean] = '[object Boolean]';

	  MODULE.jsTypeString[typeCodes.__string] = '[object String]';

	  MODULE.jsTypeString[typeCodes.__number] = '[object Number]';

	  MODULE.jsTypeString[typeCodes.__object] = '[object Object]';

	  MODULE.jsTypeString[typeCodes.__array] = '[object Array]';

	  MODULE.jsTypeString[typeCodes.__function] = '[object Function]';


	  /*
	  Lookup JavaScript type moniker string from its JavaScript Type Code (JSTC) ordinal.
	   */

	  MODULE.jsMoniker = [];

	  MODULE.jsMoniker[typeCodes.__undefined] = 'jsUndefined';

	  MODULE.jsMoniker[typeCodes.__null] = 'jsNull';

	  MODULE.jsMoniker[typeCodes.__boolean] = 'jsBoolean';

	  MODULE.jsMoniker[typeCodes.__string] = 'jsString';

	  MODULE.jsMoniker[typeCodes.__number] = 'jsNumber';

	  MODULE.jsMoniker[typeCodes.__object] = 'jsObject';

	  MODULE.jsMoniker[typeCodes.__array] = 'jsArray';

	  MODULE.jsMoniker[typeCodes.__function] = 'jsFunction';


	  /*
	  Lookup JSON type moniker string from its offset JavaScript Type Code (JSTC) ordinal.
	   */

	  MODULE.jsonMoniker = [];

	  MODULE.jsonMoniker[typeCodes.__undefined] = null;

	  MODULE.jsonMoniker[typeCodes.__null] = 'jsonNull';

	  MODULE.jsonMoniker[typeCodes.__boolean] = 'jsonBoolean';

	  MODULE.jsonMoniker[typeCodes.__string] = 'jsonString';

	  MODULE.jsonMoniker[typeCodes.__number] = 'jsonNumber';

	  MODULE.jsonMoniker[typeCodes.__object] = 'jsonObject';

	  MODULE.jsonMoniker[typeCodes.__array] = 'jsonArray';

	  MODULE.jsonMoniker[typeCodes.__function] = null;


	  /*
	  Hash table for looking up a JavaScript Type Code (JSTC) given a JavaScript Type Moniker (JSTM).
	   */

	  MODULE.jsCodes = {};

	  jstc = 0;

	  while (jstc < typeCodes.__GUARD) {
	    MODULE.jsCodes[MODULE.jsMoniker[jstc]] = jstc++;
	  }

	  Object.freeze(MODULE);

	  module.exports = MODULE;

	}).call(this);


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = { version: "0.0.4", codename: "stillwater", author: "Encapsule", buildID: "MMsoC7piS_KIBd8sJbZnzg", buildTime: "1450647200"};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var chalk = __webpack_require__(14);
	module.exports = {
	    bannerEnter: chalk.cyan.bold,
	    bannerAuthor: chalk.blue,
	    bannerPackage: chalk.green,
	    bannerToolname: chalk.white,
	    bannerRelease: chalk.yellow,
	    bannerBuild: chalk.yellow,
	    bannerExit: chalk.cyan,

	    dirInput: chalk.green.bold,
	    dirOutput: chalk.red.bold,
	    fileInput: chalk.green,
	    fileOutput: chalk.red,

	    infoHead: chalk.bold.cyan,
	    infoBody: chalk.cyan,
	    processStepHeader: chalk.blue.bold,
	    compilerSummaryHeader: chalk.green.bold,
	    compilerSummaryData: chalk.cyan,
	    errorReportHeader: chalk.magenta.bold,
	    errorReportErrors: chalk.red.bold,
	    exitCode: chalk.bold.magenta
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	/*global window, require, define */
	(function(_window) {
	  'use strict';

	  // Unique ID creation requires a high quality random # generator.  We feature
	  // detect to determine the best RNG source, normalizing to a function that
	  // returns 128-bits of randomness, since that's what's usually required
	  var _rng, _mathRNG, _nodeRNG, _whatwgRNG, _previousRoot;

	  function setupBrowser() {
	    // Allow for MSIE11 msCrypto
	    var _crypto = _window.crypto || _window.msCrypto;

	    if (!_rng && _crypto && _crypto.getRandomValues) {
	      // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	      //
	      // Moderately fast, high quality
	      try {
	        var _rnds8 = new Uint8Array(16);
	        _whatwgRNG = _rng = function whatwgRNG() {
	          _crypto.getRandomValues(_rnds8);
	          return _rnds8;
	        };
	        _rng();
	      } catch(e) {}
	    }

	    if (!_rng) {
	      // Math.random()-based (RNG)
	      //
	      // If all else fails, use Math.random().  It's fast, but is of unspecified
	      // quality.
	      var  _rnds = new Array(16);
	      _mathRNG = _rng = function() {
	        for (var i = 0, r; i < 16; i++) {
	          if ((i & 0x03) === 0) { r = Math.random() * 0x100000000; }
	          _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	        }

	        return _rnds;
	      };
	      if ('undefined' !== typeof console && console.warn) {
	        console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
	      }
	    }
	  }

	  function setupNode() {
	    // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
	    //
	    // Moderately fast, high quality
	    if (true) {
	      try {
	        var _rb = __webpack_require__(27).randomBytes;
	        _nodeRNG = _rng = _rb && function() {return _rb(16);};
	        _rng();
	      } catch(e) {}
	    }
	  }

	  if (_window) {
	    setupBrowser();
	  } else {
	    setupNode();
	  }

	  // Buffer class to use
	  var BufferClass = ('function' === typeof Buffer) ? Buffer : Array;

	  // Maps for number <-> hex string conversion
	  var _byteToHex = [];
	  var _hexToByte = {};
	  for (var i = 0; i < 256; i++) {
	    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	    _hexToByte[_byteToHex[i]] = i;
	  }

	  // **`parse()` - Parse a UUID into it's component bytes**
	  function parse(s, buf, offset) {
	    var i = (buf && offset) || 0, ii = 0;

	    buf = buf || [];
	    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	      if (ii < 16) { // Don't overflow!
	        buf[i + ii++] = _hexToByte[oct];
	      }
	    });

	    // Zero out remaining bytes if string was short
	    while (ii < 16) {
	      buf[i + ii++] = 0;
	    }

	    return buf;
	  }

	  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	  function unparse(buf, offset) {
	    var i = offset || 0, bth = _byteToHex;
	    return  bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]];
	  }

	  // **`v1()` - Generate time-based UUID**
	  //
	  // Inspired by https://github.com/LiosK/UUID.js
	  // and http://docs.python.org/library/uuid.html

	  // random #'s we need to init node and clockseq
	  var _seedBytes = _rng();

	  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	  var _nodeId = [
	    _seedBytes[0] | 0x01,
	    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	  ];

	  // Per 4.2.2, randomize (14 bit) clockseq
	  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	  // Previous uuid creation time
	  var _lastMSecs = 0, _lastNSecs = 0;

	  // See https://github.com/broofa/node-uuid for API details
	  function v1(options, buf, offset) {
	    var i = buf && offset || 0;
	    var b = buf || [];

	    options = options || {};

	    var clockseq = (options.clockseq != null) ? options.clockseq : _clockseq;

	    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	    var msecs = (options.msecs != null) ? options.msecs : new Date().getTime();

	    // Per 4.2.1.2, use count of uuid's generated during the current clock
	    // cycle to simulate higher resolution clock
	    var nsecs = (options.nsecs != null) ? options.nsecs : _lastNSecs + 1;

	    // Time since last uuid creation (in msecs)
	    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	    // Per 4.2.1.2, Bump clockseq on clock regression
	    if (dt < 0 && options.clockseq == null) {
	      clockseq = clockseq + 1 & 0x3fff;
	    }

	    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	    // time interval
	    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
	      nsecs = 0;
	    }

	    // Per 4.2.1.2 Throw error if too many uuids are requested
	    if (nsecs >= 10000) {
	      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	    }

	    _lastMSecs = msecs;
	    _lastNSecs = nsecs;
	    _clockseq = clockseq;

	    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	    msecs += 12219292800000;

	    // `time_low`
	    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	    b[i++] = tl >>> 24 & 0xff;
	    b[i++] = tl >>> 16 & 0xff;
	    b[i++] = tl >>> 8 & 0xff;
	    b[i++] = tl & 0xff;

	    // `time_mid`
	    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	    b[i++] = tmh >>> 8 & 0xff;
	    b[i++] = tmh & 0xff;

	    // `time_high_and_version`
	    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	    b[i++] = tmh >>> 16 & 0xff;

	    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	    b[i++] = clockseq >>> 8 | 0x80;

	    // `clock_seq_low`
	    b[i++] = clockseq & 0xff;

	    // `node`
	    var node = options.node || _nodeId;
	    for (var n = 0; n < 6; n++) {
	      b[i + n] = node[n];
	    }

	    return buf ? buf : unparse(b);
	  }

	  // **`v4()` - Generate random UUID**

	  // See https://github.com/broofa/node-uuid for API details
	  function v4(options, buf, offset) {
	    // Deprecated - 'format' argument, as supported in v1.2
	    var i = buf && offset || 0;

	    if (typeof(options) === 'string') {
	      buf = (options === 'binary') ? new BufferClass(16) : null;
	      options = null;
	    }
	    options = options || {};

	    var rnds = options.random || (options.rng || _rng)();

	    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	    rnds[6] = (rnds[6] & 0x0f) | 0x40;
	    rnds[8] = (rnds[8] & 0x3f) | 0x80;

	    // Copy bytes to buffer, if provided
	    if (buf) {
	      for (var ii = 0; ii < 16; ii++) {
	        buf[i + ii] = rnds[ii];
	      }
	    }

	    return buf || unparse(rnds);
	  }

	  // Export public API
	  var uuid = v4;
	  uuid.v1 = v1;
	  uuid.v4 = v4;
	  uuid.parse = parse;
	  uuid.unparse = unparse;
	  uuid.BufferClass = BufferClass;
	  uuid._rng = _rng;
	  uuid._mathRNG = _mathRNG;
	  uuid._nodeRNG = _nodeRNG;
	  uuid._whatwgRNG = _whatwgRNG;

	  if (('undefined' !== typeof module) && module.exports) {
	    // Publish as node.js module
	    module.exports = uuid;
	  } else if (true) {
	    // Publish as AMD module
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return uuid;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


	  } else {
	    // Publish as global (in browsers)
	    _previousRoot = _window.uuid;

	    // **`noConflict()` - (browser only) to reset global 'uuid' var**
	    uuid.noConflict = function() {
	      _window.uuid = _previousRoot;
	      return uuid;
	    };

	    _window.uuid = uuid;
	  }
	})('undefined' !== typeof window ? window : null);


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = { version: "0.0.4", codename: "stillwater", author: "Encapsule", buildID: "MMsoC7piS_KIBd8sJbZnzg", buildTime: "1450647200"};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	----------------------------------------------------------------------

	           +---+---+---+---+
	 chaos --> | J | B | U | S | --> order
	           +---+---+---+---+

	Copyright (C) 2015 Encapsule.io Bellevue, WA USA

	This software is licensed under the terms of the GNU Affero General
	Public License v3.0.

	Please review the included LICENSE file for specific agreement terms.
	See also: https://opensource.org/licenses/AGPL-3.0

	Source code:   https://github.com/encapsule.jbus
	Documentation: https://encapsule.io/projects/jbus/docs/common
	Licensing:     https://encapsule.io/licening

	----------------------------------------------------------------------
	 */

	(function() {
	  var ARC_BUILD, COMMON;

	  ARC_BUILD = __webpack_require__(28);

	  COMMON = module.exports = {
	    __meta: {
	      name: 'arccore',
	      version: ARC_BUILD.version,
	      codename: ARC_BUILD.codename,
	      author: ARC_BUILD.author,
	      buildID: ARC_BUILD.buildID
	    },
	    __bundle: {
	      murmurhash_js: __webpack_require__(15),
	      nodeuuid: __webpack_require__(26)
	    },
	    discriminator: {
	      create: __webpack_require__(57).request
	    },
	    filter: __webpack_require__(1),
	    filterDAG: __webpack_require__(39),
	    graph: __webpack_require__(8),
	    identifier: __webpack_require__(2),
	    types: __webpack_require__(5),
	    util: __webpack_require__(10)
	  };

	}).call(this);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph-algorithm-bft.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	/*
	  Inspired by the design of the Boost Graph Library (BGL)
	  http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/index.html

	  All visitor callback functions are optional.
	  See also BFS Visitor Concept documentation from the BGL:
	  http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/BFSVisitor.html

	  var breadthFirstVisitorInterface = {
	  initializeVertex: function(vertexId_, digraph_),
	  discoverVertex: function(vertexId_, digraph_),
	  startVertex: function(vertexId_, digraph_),
	  examineVertex: function(vertexId_, digraph_),
	  examineEdge: function(vertexIdU_, vertexIdV_, digraph_),
	  treeEdge: function(vertexIdU_, vertexIdV_, digraph_),
	  nonTreeEdge: function(vertexIdU_, vertexIdV_, digraph_),
	  grayTarget: function(vertexIdU_, vertexIdV_, digraph_),
	  blackTarget: function(vertexIdU_, vertexIdV_, digraph_),
	  finishVertex: function(vertexId_, digraph_)
	  };

	  request = {
	      digraph: reference to jsgraph.DirectedGraph container object (required)
	      visitor: reference to jsgraph BFV visitor object (required)
	      options: {
	          startVector: reference to a vertex ID string, or an array of vertex ID strings (optional)
	              Note: if ommitted, BFT uses the digraph's root vertex set as the start vertex set
	          signalStart: Boolean flag (optional - default is true if ommitted)
	              Note: By default, BFT will call startVertex on each search root vertex.
	              In advanced scenarios you may wish to override this behavior.
	          traverseContext: reference to BFT search context object (optional)
	              Note: By default, BFT allocates the traversal context internally and returns it to
	              the caller. In advanced scenarios you may wish to provide a pre-initialized
	              (or potentially pre-colored) traversal context object.
	          }
	      }
	  }

	  response = {
	      error: null or string explaining why result is null
	      result: BFS search context object
	  }
	*/

	var algorithmName = "BFT"; // constant string used in error messages
	var colors = __webpack_require__(7);
	var visitorCallback = __webpack_require__(19);
	var normalizeRequest = __webpack_require__(18);


	module.exports = function (request_) {

	    var nrequest = null; // normalized request object
	    var response = { error: null, result: null };
	    var errors = [];
	    var continueSearch = true;
	    var inBreakScope = false;
	    var searchQueue = [];

	    while (!inBreakScope) {
	        inBreakScope = true;
	        var index, vertexId;

	        var innerResponse = normalizeRequest(request_);
	        if (innerResponse.error) {
	            errors.unshift(innerResponse.error);
	            break;
	        }
	        nrequest = innerResponse.result;

	        // initializeVertex visitor callback.
	        if (nrequest.options.traverseContext.searchStatus === 'pending') {
	            for (vertexId in nrequest.options.traverseContext.colorMap) {
	                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'initializeVertex', request: { u: vertexId, g: nrequest.digraph }});
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                continueSearch = innerResponse.result;
	                if (!continueSearch) {
	                    break;
	                }
	            }
	        } // if searchStatus 'pending'

	        nrequest.options.traverseContext.searchStatus = 'active';

	        if (errors.length || !continueSearch) {
	            break;
	        }
	        
	        // Initialize the BF visit or search.
	        // Note that all that distinguishes visit from search is the number of starting vertices. One -> visit, N -> search.

	        for (index in nrequest.options.startVector) {
	            var startingVertexId = nrequest.options.startVector[index];
	            // Ensure the starting vertex is in the graph container.
	            if (!nrequest.digraph.isVertex(startingVertexId)) {
	                errors.unshift("BFT request failed. Vertex '" + startingVertexId + "' not found in specfied directed graph container.");
	                break;
	            }
	            // Ensure the vertex is white in the color map.
	            if (nrequest.options.traverseContext.colorMap[startingVertexId] !== colors.white) {
	                errors.unshift("BFT request failed. Vertex '" + startingVertexId + "' color map not initialized to white.");
	                break;
	            }

	            // startVertex visitor callback.
	            if (nrequest.options.signalStart) {
	                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'startVertex', request: { u: startingVertexId, g: nrequest.digraph }});
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                continueSearch = innerResponse.result;
	            }
	            
	            // Conditionally exit the loop if discoverVertex returned false.
	            if (errors.length || !continueSearch) {
	                break;
	            }

	            // discoverVertex visitor callback.
	            innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'discoverVertex', request: { u: startingVertexId, g: nrequest.digraph }});
	            if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                break;
	            }
	            continueSearch = innerResponse.result;

	            // Remove the vertex from the undiscovered vertex map.
	            delete nrequest.options.traverseContext.undiscoveredMap[startingVertexId];

	            // Add the vertex to the search
	            searchQueue.push(startingVertexId);

	            // Color the vertex discovered (gray)
	            nrequest.options.traverseContext.colorMap[startingVertexId] = colors.gray;

	            // Conditionally exit the loop if discoverVertex returned false.
	            if (!continueSearch) {
	                break;
	            }

	        } // for initialize search

	        // Execute the main breadth-first algorithm using the starting vertex set as the initial contents of the searchQueue.
	        while (searchQueue.length && continueSearch && !errors.length) {

	            vertexId = searchQueue.shift();

	            // By convention
	            nrequest.options.traverseContext.colorMap[vertexId] = colors.black;

	            // examineVertex visitor callback.
	            innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'examineVertex', request: { u: vertexId, g: nrequest.digraph }});
	            if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                break;
	            }
	            continueSearch = innerResponse.result;
	            if (!continueSearch) {
	                break;
	            }

	            var outEdges = nrequest.digraph.outEdges(vertexId);

	            for (index in outEdges) {

	                var outEdge = outEdges[index];

	                // examineEdge visitor callback.
	                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'examineEdge', request: { e: outEdge, g: nrequest.digraph }});
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                continueSearch = innerResponse.result;
	                if (!continueSearch) {
	                    break;
	                }

	                var colorV = nrequest.options.traverseContext.colorMap[outEdge.v];
	                switch (colorV) {

	                case colors.white:
	                    // discoverVertex visitor callback.
	                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'discoverVertex', request: { u: outEdge.v, g: nrequest.digraph }});
	                    if (innerResponse.error) {
	                        errors.unshift(innerResponse.error);
	                        break;
	                    }
	                    continueSearch = innerResponse.result;
	                    delete nrequest.options.traverseContext.undiscoveredMap[outEdge.v];
	                    if (!continueSearch) {
	                        break;
	                    }
	                    // treeEdge visitor callback.
	                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'treeEdge', request: { e: outEdge, g: nrequest.digraph }});
	                    if (innerResponse.error) {
	                        errors.unshift(innerResponse.error);
	                        break;
	                    }
	                    continueSearch = innerResponse.result;
	                    searchQueue.push(outEdge.v);
	                    nrequest.options.traverseContext.colorMap[outEdge.v] = colors.gray;
	                    break;

	                case colors.gray:
	                    // nonTreeEdge visitor callback.
	                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'nonTreeEdge', request: { e: outEdge, g: nrequest.digraph }});
	                    if (innerResponse.error) {
	                        errors.unshift(innerResponse.error);
	                        break;
	                    }
	                    continueSearch = innerResponse.result;
	                    if (continueSearch) {
	                        // grayTarget visitor callback.
	                        innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'grayTarget', request: { e: outEdge, g: nrequest.digraph }});
	                        if (innerResponse.error) {
	                            errors.unshift(innerResponse.error);
	                            break;
	                        }
	                        continueSearch = innerResponse.result;
	                    }
	                    break;

	                case colors.black:
	                    // nonTreeEdge visitor callback.
	                    innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'nonTreeEdge', request: { e: outEdge, g: nrequest.digraph }});
	                    if (innerResponse.error) {
	                        errors.unshift(innerResponse.error);
	                        break;
	                    }
	                    continueSearch = innerResponse.result;
	                    if (continueSearch) {
	                        // blackTarget visitor callback.
	                        innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'blackTarget', request: { e: outEdge, g: nrequest.digraph }});
	                        if (innerResponse.error) {
	                            errors.unshift(innerResponse.error);
	                            break;
	                        }
	                        continueSearch = innerResponse.result;
	                    }
	                    break;

	                default:
	                    errors.unshift("BFT failure: An invalid color value was found in the color map for vertex '" + outEdge.v + "'. Please file an issue!");
	                    break;

	                } // switch (colorV)

	                if (errors.length || !continueSearch) {
	                    break;
	                }
	                
	            } // for (outEdge in outEdges)

	            if (errors.length || !continueSearch) {
	                break;
	            }

	            // finishVertex visitor callback.
	            innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'finishVertex', request: { u: vertexId, g: nrequest.digraph }});
	            if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                break;
	            }
	            continueSearch = innerResponse.result;
	            if (!continueSearch) {
	                break;
	            }

	        } // while (searchQueue.length)

	    } // end while (!inBreakScope)

	    if (errors.length) {
	        if (nrequest) {
	            nrequest.options.traverseContext.searchStatus = 'error';
	        }
	        errors.unshift("jsgraph.directed.breadthFirstTraverse algorithm failure:");
	        response.error = errors.join(' ');
	    } else {
	        nrequest.options.traverseContext.searchStatus = continueSearch?'completed':'terminated';
	        response.result = nrequest.options.traverseContext;
	    }
	    return response;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph-algorithm-dft.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	var algorithmName = "DFT"; // used in error messages
	var colors = __webpack_require__(7);
	var visitorCallback = __webpack_require__(19);
	var normalizeRequest = __webpack_require__(18);


	module.exports = function (request_) {

	    var nrequest = null; // normalized request
	    var response = { error: null, result: null };
	    var errors = [];
	    var continueSearch = true;
	    var inBreakScope = false;

	    while (!inBreakScope) {
	        inBreakScope = true;
	        var index, vertexId;
	        var finishedEdges = {};
	        var innerRequest = null;
	        var hash = null;

	        var innerResponse = normalizeRequest(request_);
	        if (innerResponse.error) {
	            errors.unshift(innerResponse.error);
	            break;
	        }
	        nrequest = innerResponse.result;

	        // initializeVertex visitor callback.
	        if (nrequest.options.traverseContext.searchStatus === 'pending') {
	            for (vertexId in nrequest.options.traverseContext.colorMap) {
	                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'initializeVertex', request: { u: vertexId, g: nrequest.digraph }});
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                continueSearch = innerResponse.result;
	                if (!continueSearch) {
	                    break;
	                }
	            } // end for
	        } // if searchStatus 'pending'

	        nrequest.options.traverseContext.searchStatus = 'active';

	        if (errors.length || !continueSearch) {
	            break;
	        }

	        // Outer depth-first search loop iterates over the start vertex set.
	        for (index in nrequest.options.startVector) {

	            vertexId = nrequest.options.startVector[index];
	            
	            // Ensure the starting vertex is actually in the graph.
	            if (!nrequest.digraph.isVertex(vertexId)) {
	                errors.unshift("DFT request failed. Vertex '" + vertexId + "' not found in specified directed graph container.");
	                break;
	            }

	            // Ensure the starting vertex is undicovered (white in the color map).
	            if (nrequest.options.traverseContext.colorMap[vertexId] !== colors.white) {
	                errors.unshift("DFT request failed. Vertex '" + vertexId + "' color map not initialized to white.");
	                break;
	            }

	            // startVertex visitor callback
	            if (nrequest.options.signalStart) {
	                innerResponse = visitorCallback({ algorithm: algorithmName, visitor: nrequest.visitor, method: 'startVertex', request: { u: vertexId, g: nrequest.digraph }});
	                if (innerResponse.error) {
	                    errors.unshift(innerResponse.error);
	                    break;
	                }
	                continueSearch = innerResponse.result;
	            }
	            if (!continueSearch) {
	                break;
	            }

	            // searchStack is a FILO of FIFO's (or stack of queues if you prefer)
	            // initialized with starting vertex set member under-evaluation's ID.
	            var searchStack = [ [ vertexId ] ]; 

	            // Iterate until search stack is empty, a client visitor method returns false, or an error occurs.
	            while (searchStack.length && continueSearch && !errors.length) {

	                // Peek at the identifier of the vertex at the front of the queue atop the search stack.

	                var currentVertexId = (searchStack[searchStack.length - 1])[0];

	                switch (nrequest.options.traverseContext.colorMap[currentVertexId]) {

	                case colors.white:

	                    // Remove the vertex from the undiscovered map.
	                    delete nrequest.options.traverseContext.undiscoveredMap[currentVertexId];

	                    // Change the vertex's state to GRAY to record its discovery.
	                    nrequest.options.traverseContext.colorMap[currentVertexId] = colors.gray;

	                    // discoverVertex visitor callback.
	                    innerResponse = visitorCallback({
	                        algorithm: algorithmName,
	                        visitor: nrequest.visitor,
	                        method: 'discoverVertex',
	                        request: { u: currentVertexId, g: nrequest.digraph }
	                    });
	                    if (innerResponse.error) {
	                        errors.unshift(innerResponse.error);
	                        break;
	                    }
	                    continueSearch = innerResponse.result;
	                    if (!continueSearch) {
	                        break;
	                    }

	                    // treeEdge visitor callback.
	                    if (searchStack.length > 1) {
	                        innerResponse = visitorCallback({
	                            algorithm: algorithmName,
	                            visitor: nrequest.visitor,
	                            method: 'treeEdge',
	                            request: { e: { u: searchStack[searchStack.length - 2][0], v: currentVertexId }, g: nrequest.digraph }
	                        });
	                        if (innerResponse.error) {
	                            errors.unshift(innerResponse.error);
	                            break;
	                        } else {
	                            continueSearch = innerResponse.result;
	                            if (!continueSearch) {
	                                break;
	                            }
	                        }
	                    }

	                    // Examine adjacent vertices
	                    var vertexOutEdges = nrequest.digraph.outEdges(currentVertexId);
	                    var adjacentVertices = [];

	                    while (vertexOutEdges.length && !errors.length && continueSearch) {

	                        var adjacentVertexId = vertexOutEdges.shift().v;

	                        // examineEdge visitor callback.
	                        innerResponse = visitorCallback({
	                            algorithm: algorithmName,
	                            visitor: nrequest.visitor,
	                            method: 'examineEdge',
	                            request: { e: { u: currentVertexId, v: adjacentVertexId }, g: nrequest.digraph }
	                        });
	                        if (innerResponse.error) {
	                            errors.unshift(innerRepsonse.error);
	                            break;
	                        }
	                        continueSearch = innerResponse.result;
	                        if (!continueSearch) {
	                            break;
	                        }

	                        switch (nrequest.options.traverseContext.colorMap[adjacentVertexId]) {

	                        case colors.white:
	                            adjacentVertices.push(adjacentVertexId);
	                            break;
	                        case colors.gray:
	                            // backEdge visitor callback.
	                            innerResponse = visitorCallback({
	                                algorithm: algorithmName,
	                                visitor: nrequest.visitor,
	                                method: 'backEdge',
	                                request: { e: { u: currentVertexId, v: adjacentVertexId }, g: nrequest.digraph }
	                            });
	                            if (innerResponse.error) {
	                                errors.unshift(innerResponse.error);
	                            } else {
	                                continueSearch = innerResponse.result;
	                            }
	                            break;
	                        case colors.black:
	                            // forwardOrCrossEdge visitor callback.
	                            innerResponse = visitorCallback({
	                                algorithm: algorithmName,
	                                visitor: nrequest.visitor,
	                                method: 'forwardOrCrossEdge',
	                                request: { e: { u: currentVertexId, v: adjacentVertexId }, g: nrequest.digraph }
	                            });
	                            if (innerResponse.error) {
	                                errors.unshift(innerResponse.error);
	                            } else {
	                                continueSearch = innerResponse.result;
	                            }
	                            break;
	                        }
	                    }
	                    if (adjacentVertices.length) {
	                        searchStack.push(adjacentVertices);
	                    }                                

	                    break;

	                case colors.gray:
	                    // change the vertex's state to black to indicate search completion.
	                    nrequest.options.traverseContext.colorMap[currentVertexId] = colors.black;
	                    // finishVertex visitor callback.
	                    innerResponse = visitorCallback({
	                        algorithm: algorithmName,
	                        visitor: nrequest.visitor,
	                        method: 'finishVertex',
	                        request: { u: currentVertexId, g: nrequest.digraph }
	                    });
	                    if (innerResponse.error) {
	                        errors.unshift(innerResponse.error);
	                        break;
	                    }
	                    continueSearch = innerResponse.result;
	                    if (!continueSearch) {
	                        break;
	                    }
	                    var inEdgeSet = nrequest.digraph.inEdges(currentVertexId);
	                    while (inEdgeSet.length) {
	                        var inEdge = inEdgeSet.pop();
	                        hash = inEdge.u + inEdge.v;
	                        finishedEdges[hash] = inEdge;
	                    }
	                    searchStack[searchStack.length - 1].shift();
	                    if (!(searchStack[searchStack.length - 1].length)) {
	                        searchStack.pop();
	                    }
	                    break;

	                case colors.black:

	                    // The black sheep. The only way for a vertex to end up in this state
	                    // is for it to be queued after another adjacent vertex that reaches
	                    // it first in the depth-first search tree. By definition it's already
	                    // been 'finished'. 

	                    if (searchStack.length > 1) {
	                        innerRequest = { e: { u: (searchStack[searchStack.length - 2])[0], v: currentVertexId }, g: nrequest.digraph };
	                        innerResponse = visitorCallback({
	                            algorithm: algorithmName,
	                            visitor: nrequest.visitor,
	                            method: 'forwardOrCrossEdge',
	                            request: innerRequest
	                        });
	                        if (innerResponse.error) {
	                            errors.unshift(innerResponse.error);
	                            break;
	                        }
	                        continueSearch = innerResponse.result;
	                        if (!continueSearch) {
	                            break;
	                        }
	                    }
	                    searchStack[searchStack.length - 1].shift();
	                    if (!searchStack[searchStack.length - 1].length) {
	                        searchStack.pop();
	                    }
	                    break;

	                default:
	                    errors.unshift("DFT failure: An invalid color value was found in the color map for vertex '" + currentVertexId + "'.");
	                    break;
	                }
	            } // while search stack is not empty

	            if (errors.length || !continueSearch) {
	                break;
	            }
	            
	        } // end while outer depth-first search loop

	        if (errors.length || !continueSearch) {
	            break;
	        }

	        for (hash in finishedEdges) {
	            innerRequest = { e: finishedEdges[hash], g: nrequest.digraph };
	            innerResponse = visitorCallback({
	                algorithm: algorithmName,
	                visitor: nrequest.visitor,
	                method: 'finishEdge',
	                request: innerRequest
	            });
	            if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                break;
	            }
	            continueSearch = innerResponse.result;
	            if (!continueSearch) {
	                break;
	            }

	        } // end for


	    } // while !inBreakScope

	    if (errors.length) {
	        if (nrequest) {
	            nrequest.options.traverseContext.searchStatus = 'error';
	        }
	        errors.unshift("jsgraph.directed.depthFirstTraverse algorithm failure:");
	        response.error = errors.join(' ');
	    } else {
	        nrequest.options.traverseContext.searchStatus = continueSearch?'completed':'terminated';
	        response.result = nrequest.options.traverseContext;
	    }
	    return response;
	    

	};



/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph-algorithm-transpose.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	// transposeDirectedGraph computes the transpose of input digraph_,
	// returns the the result as a new DirectedGraph instance.
	// More info on directed graph transposition:
	// http://www.boost.org/doc/libs/1_55_0/libs/graph/doc/transpose_graph.html

	var helperFunctions = __webpack_require__(4);
	var DirectedGraph = __webpack_require__(16).DirectedGraph;

	/*
	  request = DirectedGraph reference
	  response = {
	      error: null or string explaining why result is null
	      result: a new DirectedGraph instance with the same vertex set,
	              the edge set transposed (direction reversed), and vertex
	              and edge properties (if any) linked by reference to the
	              source digraph
	  }
	*/

	module.exports = function (digraph_) {
	    var response = { error: null, result: null };
	    var errors = [];
	    var innerResponse;

	    var digraphOut = new DirectedGraph();

	    var jstype = helperFunctions.JSType(digraph_);
	    if (jstype !== '[object Object]') {
	        errors.unshift("Expected reference to DirectedGraph but found type '" + jstype + "'.");
	    } else {
	        
	        digraph_.getVertices().forEach(function(vertexId_) {
	            innerResponse = digraphOut.addVertex({ u: vertexId_, p: digraph_.getVertexProperty(vertexId_) });
	            if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	            }
	        });

	        digraph_.getEdges().forEach(function(edge_) {
	            innerResponse = digraphOut.addEdge({ e: { u: edge_.v, v: edge_.u }, p: digraph_.getEdgeProperty(edge_) });
	            if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	            }
	        });

	    } // end else

	    if (errors.length) {
	        errors.unshift("jsgraph.directed.transpose failed:");
	        response.error = errors.join(' ');
	    } else {
	        response.result = digraphOut;
	    }
	    return response;
	};



/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph-json-export.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	// Export the topology and attached vertex and edge properties
	// of a DirectedGraph container object as a JSON-format UTF8 
	// string. This canonical format can be passed as an optional
	// constructor parameter to restore container state across
	// execution contexts.

	var helperFunctions = __webpack_require__(4);
	var DigraphDataExporter = module.exports = {};

	DigraphDataExporter.exportObject = function (digraph_) {
	    var digraphState = {
	        name: digraph_.getGraphName(),
	        description: digraph_.getGraphDescription(),
	        vlist: [],
	        elist: []
	    };
	    var vertexSerialized = {}; // Keep track of the vertices referenced in the edge list.
	    var edgeList = digraph_.getEdges();
	    var vertexList = digraph_.getVertices();
	    digraph_.getEdges().forEach(function(edge_) {
	        var edgeProperty = digraph_.getEdgeProperty(edge_);
	        digraphState.elist.push({ e: edge_, p: edgeProperty });
	        vertexSerialized[edge_.u] = vertexSerialized[edge_.v] = true;
	    });
	    digraph_.getVertices().forEach(function(vertexId_) {
	        var vertexProperty = digraph_.getVertexProperty(vertexId_);
	        var jstype = helperFunctions.JSType(vertexProperty);
	        // If the vertex has an attached property, serialize it to the vlist.
	        if (jstype !== '[object Undefined]') {
	            digraphState.vlist.push({ u: vertexId_, p: vertexProperty });
	        } else {
	            // If the vertex wasn't mentioned in the elist, we need to serialize, sans property, to the vlist.
	            if (vertexSerialized[vertexId_] !== true) {
	                digraphState.vlist.push({ u: vertexId_ });
	            }
	        }
	    });
	    return digraphState;
	};

	DigraphDataExporter.exportJSON = function (digraph_, replacer_, space_) {
	    return JSON.stringify(DigraphDataExporter.exportObject(digraph_), replacer_, space_);
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	/*
	  Encapsule/jsgraph/src/digraph-json-import.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	module.exports = function (digraph_, jsonOrObject_) {

	    var jsonParse;
	    var getType = function(ref_) { return Object.prototype.toString.call(ref_); };
	    var response = { error: null, result: null };
	    var errors = [];
	    var inBreakScope = false;

	    var processVertex = function(vertexDescriptor_) {
	        type = getType(vertexDescriptor_);
	        if (type !== '[object Object]') {
	            errors.unshift("JSON semantics error: Expected vertex descriptor object in 'vlist' array but found '" + type + "' instead.");
	        } else {
	            type = getType(vertexDescriptor_.u);
	            if (type !== '[object String]') {
	                errors.unshift("JSON semantics error: Expected vertex descriptor property 'u' to be a string but found '" + type + "' instead.");
	            } else {
	                digraph_.addVertex({ u: vertexDescriptor_.u, p: vertexDescriptor_.p});
	            }
	        }
	    };

	    var processEdge = function (edgeDescriptor_) {
	        type = getType(edgeDescriptor_);
	        if (type !== '[object Object]') {
	            errors.unshift("JSON semantics error: Expected edge descriptor object in 'elist' array but found '" + type + "' instead.");
	        } else {
	            type = getType(edgeDescriptor_.e);
	            if (type !== '[object Object]') {
	                errors.unshift("JSON semantics error: Edge record in 'elist' should define edge descriptor object 'e' but but found '" + type + "' instead.");
	            } else {
	                type = getType(edgeDescriptor_.e.u);
	                if (type !== '[object String]') {
	                    errors.unshift("JSON semantics error: Expected edge descriptor property 'e.u' to be a string but found '" + type + "' instead.");
	                } else {
	                    type = getType(edgeDescriptor_.e.v);
	                    if (type !== '[object String]') {
	                        errors.unshift("JSON semantics error: Expected edge descriptor property 'e.v' to be a string but found '" + type + "' instead.");
	                    } else {
	                        digraph_.addEdge({ e: edgeDescriptor_.e, p: edgeDescriptor_.p});
	                    }
	                }
	            }
	        }
	    };

	    while (!inBreakScope) {
	        inBreakScope = true;

	        var type = getType(jsonOrObject_);
	        switch (type) {
	        case '[object String]':
	            try {
	                jsonParse = JSON.parse(jsonOrObject_);
	            } catch (exception_) {
	                errors.unshift("Exception occurred while parsing JSON: " + exception_.message);
	            }
	            break;
	        case '[object Object]':
	            jsonParse = jsonOrObject_;
	            break;
	        default:
	            errors.unshift("Invalid reference to '" + type + "' passed instead of expected JSON (or equivalent object) reference.");
	        }
	        if (errors.length) {
	            break;
	        }

	        type = getType(jsonParse);
	        if (type !== '[object Object]') {
	            errors.unshift("JSON semantics error: Expected top-level object but found '" + type + "'.");
	            break;
	        }

	        type = getType(jsonParse.name);
	        switch (type) {
	        case '[object Undefined]':
	            jsonParse.name = "";
	            break;
	        case '[object String]':
	            break;
	        default:
	            errors.unshift("JSON semantics error: Expected 'name' to be a string but found '" + type + "'.");
	            break;
	        }
	        digraph_.setGraphName(jsonParse.name);
	        
	        type = getType(jsonParse.description);
	        switch (type) {
	        case '[object Undefined]':
	            jsonParse.description = "";
	            break;
	        case '[object String]':
	            break;
	        default:
	            error.unshift("JSON semantics error: Expected 'description' to be a string but found '" + type + "'.");
	            break;
	        }
	        digraph_.setGraphDescription(jsonParse.description);
	            
	        type = getType(jsonParse.vlist);
	        switch (type) {
	        case '[object Undefined]':
	            jsonParse.vlist = []; // default to empty vertex list
	            break;
	        case '[object Array]':
	            // do nothing the array is parsed below
	            break;
	        default:
	            errors.unshift("JSON semantics error: Expected 'vlist' (vertices) to be an array but found '" + type + "'.");
	            break;
	        }
	        if (errors.length) {
	            break;
	        }

	        type = getType(jsonParse.elist);
	        switch (type) {
	        case '[object Undefined]':
	            jsonParse.elist = []; // default to empty edge list
	            break;
	        case '[object Array]':
	            // do nothing
	            break;
	        default:
	            errors.unshift("JSON semantics error: Expected 'elist' (edges) to be an array but found '" + type + "'.");
	        }
	        if (errors.length) {
	            break;
	        }

	        jsonParse.vlist.forEach(processVertex);
	        if (errors.length) {
	            break;
	        }

	        jsonParse.elist.forEach(processEdge);
	        if (errors.length) {
	            break;
	        }

	    } // while !inBreakScope

	    if (errors.length) {
	        response.error = errors.join(' ');
	    } else {
	        response.result = true;
	    }

	    return response;

	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Encapsule/jsgraph/src/digraph-in-parameters.js

	  Copyright (C) 2014-2015 Christopher D. Russell

	  This library is published under the MIT License and is part of the
	  Encapsule Project System in Cloud (SiC) open service architecture.
	  Please follow https://twitter.com/Encapsule for news and updates
	  about jsgraph and other time saving libraries that do amazing things
	  with in-memory data on Node.js and HTML.
	*/

	var helperFunctions = __webpack_require__(4);

	var verifyVertexReadRequest = function(request_) {
	    var response = { error: null, result: false };
	    var jstype = helperFunctions.JSType(request_);
	    if (jstype !== '[object String]') {
	        response.error = "Invalid value type '" + jstype + "' found when expecting vertex read request. Expected '[object String]'.";
	    } else {
	        response.result = true;
	    }
	    return response;
	};

	var verifyVertexWriteRequest = function(request_) {
	    var response = { error: null, result: false };
	    var inBreakScope = false;
	    while (!inBreakScope) {
	        inBreakScope = true;
	        var jstype = helperFunctions.JSType(request_);
	        if (jstype !== '[object Object]') {
	            response.error = "Invalid value type '" + jstype + "' found when expecting a vertex write request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.u);
	        if (jstype !== '[object String]') {
	            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'u' in vertex write request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.p);
	        if (jstype === '[object Function]') {
	            response.error = "Invalid value type '" + jstype + " found while inspecting vertex property 'p' in vertex write request object. Must be serializable to JSON!";
	            break;
	        }
	        response.result = true;
	    }
	    return response;
	};

	var verifyEdgeReadRequest = function(request_) {
	    var response = { error: null, result: false };
	    var inBreakScope = false;
	    while (!inBreakScope) {
	        inBreakScope = true;
	        var jstype = helperFunctions.JSType(request_);
	        if (jstype !== '[object Object]') {
	            response.error = "Invalid value type '" + jstype + "' found when expecting edge read request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.u);
	        if (jstype !== '[object String]') {
	            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'u' in edge read request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.v);
	        if (jstype !== '[object String]') {
	            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'v' in edge read request object.";
	            break;
	        }
	        response.result = true;
	    }
	    return response;
	};

	var verifyEdgeWriteRequest = function(request_) {
	    var response = { error: null, result: false };
	    var inBreakScope = false;
	    while (!inBreakScope) {
	        inBreakScope = true;
	        var jstype = helperFunctions.JSType(request_);
	        if (jstype !== '[object Object]') {
	            response.error = "Invalid value type '" + jstype + "' found when expecting edge write request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.e);
	        if (jstype !== '[object Object]') {
	            response.error = "Invalid value type '" + jstype + "' found looking for edge descriptor object 'e' in edge write request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.e.u);
	        if (jstype !== '[object String]') {
	            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'e.u' in edge write request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.e.v);
	        if (jstype !== '[object String]') {
	            response.error = "Invalid value type '" + jstype + "' found looking for vertex ID string property 'e.v' in edge write request object.";
	            break;
	        }
	        jstype = helperFunctions.JSType(request_.p);
	        if (jstype === '[object Function]') {
	            response.error = "Invalid value type '" + jstype + "' found while insecting edge property 'p' in edge write request object. Must be serializable to JSON!";
	            break;
	        }
	        response.result = true;
	    }
	    return response;
	};

	module.exports = {
	    verifyVertexReadRequest: verifyVertexReadRequest,
	    verifyVertexWriteRequest: verifyVertexWriteRequest,
	    verifyEdgeReadRequest: verifyEdgeReadRequest,
	    verifyEdgeWriteRequest: verifyEdgeWriteRequest
	};


/***/ },
/* 36 */
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

	(function() {
	  'use strict';
	  var Filter, IDENTIFIER, verifyFilterCreateRequest, verifyFilterSpecDeclaration;

	  IDENTIFIER = __webpack_require__(2);

	  verifyFilterCreateRequest = __webpack_require__(37);

	  verifyFilterSpecDeclaration = __webpack_require__(38);

	  Filter = __webpack_require__(53);


	  /*
	      request = {
	  
	           * Describes the function for machine readers.
	          operationID: required IRUT string
	  
	           * Describe the function for human readers.
	          operationName: required string
	          operationDescription: required string
	  
	           * Describe your function's inputs for human readers.
	          inputName: required string
	          inputDescription: required string
	  
	           * Describe your function's inputs for machine readers.
	          inputTypeMap: object
	  
	           * Describe your function's outputs for human readers.
	          outputName: required string
	          outputDescription: required string
	  
	           * Describe your function's outputs for machine readers.
	          
	          outputTypeMap: object
	  
	          bodyFunction: function you wish to wrap in a NormalizedFunction
	  
	      }
	      response = {
	          error: null or string explaining why result is null
	          result: a NormalizedFunction instance or null if an error occurred
	      }
	   */

	  module.exports = function(request_) {
	    var errors, functionDescriptor, inBreakScope, innerResponse, response;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      innerResponse = verifyFilterCreateRequest(request_);
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        break;
	      }
	      functionDescriptor = innerResponse.result;
	      if ((functionDescriptor.inputFilterSpec != null) && functionDescriptor.inputFilterSpec) {
	        innerResponse = verifyFilterSpecDeclaration({
	          path: '~.inputFilterSpec',
	          typemap: functionDescriptor.inputFilterSpec
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	      }
	      if ((functionDescriptor.outputFilterSpec != null) && functionDescriptor.outputFilterSpec) {
	        innerResponse = verifyFilterSpecDeclaration({
	          path: '~.outputFilterSpec',
	          typemap: functionDescriptor.outputFilterSpec
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	      }
	      Object.freeze(functionDescriptor);
	      response.result = new Filter(functionDescriptor);
	    }
	    if (errors.length) {
	      errors.unshift("jbus.common.filter.create request failed:");
	      response.error = errors.join(' ');
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 37 */
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

	(function() {
	  var IDENTIFIER, TYPES, normalizeCompositionRequest;

	  IDENTIFIER = __webpack_require__(2);

	  TYPES = __webpack_require__(5);

	  normalizeCompositionRequest = module.exports = function(request_) {
	    var errors, inBreakScope, innerResponse, localTypeCheck, nrequest, response;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;

	      /*
	          request =
	              ref: reference
	              types: array of jsMoniker strings
	              path: string (path corresponds to whatever ref addresses)
	              suppressError: boolean
	       */
	      localTypeCheck = function(request__) {
	        var innerResponse;
	        innerResponse = TYPES.check.inTypeSet({
	          value: request__.ref,
	          types: request__.types
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          errors.unshift("Internal error while checking property '" + request__.path + "'.");
	          return false;
	        }
	        if (!innerResponse.result) {
	          if (!((request__.suppressError != null) && request__.suppressError)) {
	            errors.unshift(innerResponse.guidance);
	            errors.unshift("Invalid data type specified for property '" + request__.path + "'.");
	          }
	          return false;
	        }
	        return true;
	      };
	      if (!localTypeCheck({
	        ref: request_,
	        path: '~',
	        types: 'jsObject'
	      })) {
	        break;
	      }
	      nrequest = {};
	      if (!localTypeCheck({
	        ref: request_.operationID,
	        path: '~.operationID',
	        types: 'jsString'
	      })) {
	        break;
	      }
	      if (request_.operationID === 'demo') {
	        nrequest.operationID = IDENTIFIER.irut.fromEther();
	      } else {
	        innerResponse = IDENTIFIER.irut.isIRUT(request_.operationID);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          errors.unshift("Internal error checking property '~.operationID'.");
	          break;
	        }
	        if (!innerResponse.result) {
	          errors.unshift(innerResponse.guidance);
	          errors.unshift("Invalid IRUT specified for '~.operationID:");
	          break;
	        }
	        nrequest.operationID = request_.operationID;
	      }
	      if (!localTypeCheck({
	        ref: request_.operationName,
	        path: '~.operationName',
	        types: 'jsString',
	        suppressError: true
	      })) {
	        nrequest.operationName = 'unnamed';
	      } else {
	        nrequest.operationName = request_.operationName;
	      }
	      if (!localTypeCheck({
	        ref: request_.operationDescription,
	        path: '~.operationDescription',
	        types: 'jsString',
	        suppressError: true
	      })) {
	        nrequest.operationDescription = nrequest.operationID + " provides no description.";
	      } else {
	        nrequest.operationDescription = request_.operationDescription;
	      }
	      if (!localTypeCheck({
	        ref: request_.inputName,
	        path: '~.inputName',
	        types: 'jsString',
	        suppressError: true
	      })) {
	        nrequest.inputName = nrequest.operationID + " input";
	      } else {
	        nrequest.inputName = request_.inputName;
	      }
	      if (!localTypeCheck({
	        ref: request_.inputDescription,
	        path: '~.inputDescription',
	        types: 'jsString',
	        suppressError: true
	      })) {
	        nrequest.inputDesription = nrequest.operationID + " input provides no description.";
	      } else {
	        nrequest.inputDescription = request_.inputDescription;
	      }
	      if (!localTypeCheck({
	        ref: request_.inputFilterSpec,
	        path: '~.inputFilterSpec',
	        types: ['jsUndefined', 'jsObject']
	      })) {
	        break;
	      }
	      nrequest.inputFilterSpec = request_.inputFilterSpec;
	      if (!localTypeCheck({
	        ref: request_.outputName,
	        path: '~.outputName',
	        types: 'jsString',
	        suppressError: true
	      })) {
	        nrequest.outputName = nrequest.operationID + " output";
	      } else {
	        nrequest.outputName = request_.outputName;
	      }
	      if (!localTypeCheck({
	        ref: request_.outputDescription,
	        path: '~.outputDescription',
	        types: 'jsString',
	        suppressError: true
	      })) {
	        nrequest.outputDescription = nrequest.operationID + " output provides no description.";
	      } else {
	        nrequest.outputDescription = request_.outputDescription;
	      }
	      if (!localTypeCheck({
	        ref: request_.outputFilterSpec,
	        path: '~.outputFilterSpec',
	        types: ['jsUndefined', 'jsObject']
	      })) {
	        break;
	      }
	      nrequest.outputFilterSpec = request_.outputFilterSpec;
	      if (!localTypeCheck({
	        ref: request_.bodyFunction,
	        path: '~.bodyFunction',
	        types: ['jsFunction', 'jsUndefined']
	      })) {
	        break;
	      }
	      nrequest.bodyFunction = request_.bodyFunction;
	      response.result = nrequest;
	    }
	    if (errors.length) {
	      response.error = errors.join(' ');
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 38 */
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

	(function() {
	  var IDENTIFIER, TYPES, verifyCompositionTypeMapDeclaration, verifyTypeConstraintArgs;

	  IDENTIFIER = __webpack_require__(2);

	  TYPES = __webpack_require__(5);


	  /*
	      request = {
	          path: string
	          typemap: object
	      }
	   */

	  verifyCompositionTypeMapDeclaration = module.exports = function(request_) {
	    var acceptNamespace, constraint, constraintOptions, constraintProp, defaulted, description, errors, inBreakScope, innerResponse, jsMonikers, label, mapPropertyName, mapPropertyValue, mapQueue, newPath, opaqueNamespace, response, subnamespacesDeclared, typemap, typemapDescriptor, typepath, validTypeConstraint;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      innerResponse = TYPES.check.inTypeSet({
	        value: request_,
	        types: 'jsObject'
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        break;
	      }
	      if (!innerResponse.result) {
	        errors.unshift(innerResponse.guidance);
	        errors.unshift("Invalid request:");
	        break;
	      }
	      innerResponse = TYPES.check.inTypeSet({
	        value: request_.path,
	        types: 'jsString'
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        break;
	      }
	      if (!innerResponse.result) {
	        errors.unshift(innerResponse.guidance);
	        errors.unshift("Invalid request:");
	        break;
	      }
	      innerResponse = TYPES.check.inTypeSet({
	        value: request_.typemap,
	        types: 'jsObject'
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        break;
	      }
	      if (!innerResponse.result) {
	        errors.unshift(innerResponse.guidance);
	        errors.unshift("Invalid request:");
	        break;
	      }
	      mapQueue = [];
	      mapQueue.push(request_);
	      while (mapQueue.length) {
	        constraint = "default";
	        constraintOptions = void 0;
	        jsMonikers = void 0;
	        label = void 0;
	        description = void 0;
	        validTypeConstraint = false;
	        acceptNamespace = false;
	        opaqueNamespace = false;
	        defaulted = false;
	        subnamespacesDeclared = false;
	        typemapDescriptor = mapQueue.shift();
	        typepath = (typemapDescriptor.path != null) && typemapDescriptor.path || '~';
	        typemap = typemapDescriptor.typemap;
	        for (mapPropertyName in typemap) {
	          mapPropertyValue = typemap[mapPropertyName];
	          switch (mapPropertyName) {
	            case '____opaque':
	              if (mapPropertyValue) {
	                opaqueNamespace = true;
	              }
	              break;
	            case '____defaultValue':
	              defaulted = true;
	              break;
	            case '____accept':
	              if (validTypeConstraint) {
	                errors.unshift("Redundant type constraint declared on namespace '" + mapPropertyName + "'.");
	                break;
	              }
	              innerResponse = verifyTypeConstraintArgs('____accept', mapPropertyValue);
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                break;
	              }
	              acceptNamespace = true;
	              validTypeConstraint = true;
	              break;
	            case '____types':
	              if (validTypeConstraint) {
	                errors.unshift("Redundant type constraint declared on namespace '" + mapPropertyName + "'.");
	                break;
	              }
	              innerResponse = verifyTypeConstraintArgs('____types', mapPropertyValue);
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                break;
	              }
	              validTypeConstraint = true;
	              break;
	            case '____label':
	              innerResponse = TYPES.check.inTypeSet({
	                value: mapPropertyValue,
	                types: ['jsString']
	              });
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              if (!innerResponse.result) {
	                errors.unshift(innerResponse.guidance);
	                errors.unshift("Error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              label = mapPropertyValue;
	              break;
	            case '____description':
	              innerResponse = TYPES.check.inTypeSet({
	                value: mapPropertyValue,
	                types: ['jsString']
	              });
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              if (!innerResponse.result) {
	                errors.unshift(innerResponse.guidance);
	                errors.unshift("Error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              description = mapPropertyValue;
	              break;
	            case '____inValueSet':
	              innerResponse = TYPES.check.inTypeSet({
	                value: mapPropertyValue,
	                types: ['jsArray']
	              });
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              if (!innerResponse.result) {
	                errors.unshift(innerResponse.guidance);
	                errors.unshift("Error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              constraint = 'inValueSet';
	              constraintOptions = mapPropertyValue;
	              break;
	            case '____inRangeInclusive':
	              innerResponse = TYPES.check.inTypeSet({
	                value: mapPropertyValue,
	                types: ['jsObject']
	              });
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                errors.unshift("Internal error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              if (!innerResponse.result) {
	                errors.unshift(innerResponse.guidance);
	                errors.unshift("Error checking directive '" + mapPropertyName + "':");
	                break;
	              }
	              innerResponse = TYPES.check.inTypeSet({
	                value: mapPropertyValue.begin,
	                types: ['jsNumber', 'jsString']
	              });
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                errors.unshift("Internal error checking directive '" + mapPropertyName + ".begin':");
	                break;
	              }
	              if (!innerResponse.result) {
	                errors.unshift(innerResponse.guidance);
	                errors.unshift("Error checking directive '" + mapPropertyName + ".begin':");
	                break;
	              }
	              innerResponse = TYPES.check.inTypeSet({
	                value: mapPropertyValue.end,
	                types: ['jsNumber', 'jsString']
	              });
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                errors.unshift("Internal error checking directive '" + mapPropertyName + ".end':");
	                break;
	              }
	              if (!innerResponse.result) {
	                errors.unshift(innerResponse.guidance);
	                errors.unshift("Error checking directive '" + mapPropertyName + ".end':");
	                break;
	              }
	              constraint = 'inRangeInclusive';
	              constraintOptions = mapPropertyValue;
	              break;
	            default:
	              if (mapPropertyName.indexOf('____') === 0) {
	                errors.unshift("Unrecognized typemap directive '" + mapPropertyName + "' not allowed in declaration.");
	                break;
	              }
	              innerResponse = TYPES.check.inTypeSet({
	                value: mapPropertyValue,
	                types: ['jsObject']
	              });
	              if (innerResponse.error) {
	                errors.unshift(innerResponse.error);
	                errors.unshift("Internal error queuing typemap object '" + mapPropertyName + "':");
	                break;
	              }
	              if (!innerResponse.result) {
	                errors.unshift(innerResponse.guidance);
	                errors.unshift("Error queuing typemap object '" + mapPropertyName + "':");
	                break;
	              }
	              newPath = typepath + "." + mapPropertyName;
	              mapQueue.push({
	                path: newPath,
	                typemap: mapPropertyValue
	              });
	              subnamespacesDeclared = true;
	              break;
	          }
	          if (acceptNamespace && subnamespacesDeclared) {
	            errors.unshift("You cannot declare subnamespace filter spec(s) of a parent namespace declared using '____accept'.");
	            break;
	          }
	        }
	        if (!errors.length) {
	          inBreakScope = false;
	          while (!inBreakScope) {
	            inBreakScope = true;
	            if (!(validTypeConstraint || opaqueNamespace)) {
	              errors.unshift("Missing required '____accept', '____types', or '_____opaque' type constraint directive.");
	              break;
	            }
	            if (validTypeConstraint && opaqueNamespace) {
	              errors.unshift("You cannot specify '____accept' or '____types' constraints on an '____opaque' namespace.");
	              break;
	            }
	            if (opaqueNamespace && constraintOptions) {
	              errors.unshift("You cannot specify value-based constraints on an '____opaque' namespace.");
	              break;
	            }
	            if (validTypeConstraint && defaulted) {
	              constraintProp = acceptNamespace && '____accept' || '____types';
	              if (-1 !== typemap[constraintProp].indexOf('jsUndefined')) {
	                errors.unshift("You cannot specifiy a default value on an optional namespace.");
	                break;
	              }
	            }
	          }
	        }
	        if (errors.length) {
	          errors.unshift("While examining data namespace '" + typepath + "':");
	          break;
	        }
	      }
	    }
	    if (errors.length) {
	      response.error = errors.join(' ');
	    } else {
	      response.result = request_.typemap;
	    }
	    return response;
	  };

	  verifyTypeConstraintArgs = function(name_, argument_) {
	    var errors2, i, inBreakScope, innerResponse, jsMoniker, len, response, value;
	    response = {
	      error: null,
	      result: null
	    };
	    errors2 = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      innerResponse = TYPES.check.inTypeSet({
	        value: argument_,
	        types: ['jsString', 'jsArray']
	      });
	      if (innerResponse.error) {
	        errors2.unshift(innerResponse.error);
	        errors2.unshift("Internal error checking directive '" + name_ + "':");
	        break;
	      }
	      if (!innerResponse.result) {
	        errors2.unshift(innerResponse.guidance);
	        errors2.unshift("Error checking directive '" + name_ + "':");
	        break;
	      }
	      if (innerResponse.result === 'jsString') {
	        value = [argument_];
	      } else {
	        value = argument_;
	      }
	      if (value.length) {
	        for (i = 0, len = value.length; i < len; i++) {
	          jsMoniker = value[i];
	          innerResponse = TYPES.convert({
	            to: 'jsCode',
	            from: 'jsMoniker',
	            value: jsMoniker
	          });
	          if (innerResponse.error) {
	            errors2.push(innerResponse.error);
	            break;
	          }
	        }
	        if (!errors2.length) {
	          response.result = true;
	        } else {
	          errors2.unshift("Error(s) in '" + name_ + "' directive declaration.");
	        }
	      } else {
	        errors2.unshift("Type specification '" + name_ + "' directive is missing argument(s).");
	      }
	    }
	    if (errors2.length) {
	      response.error = errors2.join(' ');
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 39 */
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

	(function() {
	  var FILTERDAGFACTORY;

	  FILTERDAGFACTORY = __webpack_require__(40);

	  module.exports = {
	    create: FILTERDAGFACTORY.request
	  };

	}).call(this);


/***/ },
/* 40 */
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

	(function() {
	  var DAGGENERATOR, DAGSPECPROCESSOR, FILTERLIB, IDENTIFIERLIB, INPUTFS, OUTPUTFS, filterlibResponse, message;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  INPUTFS = __webpack_require__(3);

	  OUTPUTFS = __webpack_require__(42);

	  DAGSPECPROCESSOR = __webpack_require__(43);

	  DAGGENERATOR = __webpack_require__(41);

	  filterlibResponse = FILTERLIB.create({
	    operationID: "v_R2RUU9TEacuwgxmydxGw",
	    operationName: "FilterDAG Factory",
	    operationDescription: "FilterDAG reactive system host factory function.",
	    inputName: INPUTFS.inputName,
	    inputDescription: INPUTFS.inputDescription,
	    inputFilterSpec: INPUTFS.inputFilterSpec,
	    bodyFunction: function(request_) {
	      var errors, factorySpec, filterDAG, genTag, inBreakScope, innerResponse, response;
	      response = {
	        error: null,
	        response: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        innerResponse = IDENTIFIERLIB.irut.isIRUT(request_.dagID);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        if (!innerResponse.result) {
	          errors.unshift(innerResponse.guidance);
	          errors.unshift("Invalid value `" + request_.dagID + "` specified for `dagID`:");
	          break;
	        }
	        innerResponse = DAGSPECPROCESSOR.request(request_.dagSpecification);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        factorySpec = innerResponse.result;
	        innerResponse = DAGGENERATOR.request(factorySpec);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        filterDAG = innerResponse.result;
	        response.result = {
	          dagID: request_.dagID,
	          dagName: request_.dagName,
	          dagDescription: request_.dagDescription,
	          spec: factorySpec,
	          runtime: filterDAG
	        };
	        genTag = {
	          id: this.operationID,
	          name: this.operationName
	        };
	        innerResponse = IDENTIFIERLIB.irut.fromReference(response.result);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        genTag.hash = innerResponse.result;
	        response.result.generator = genTag;
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    message = [filterlibResponse.error];
	    message.unshift("Unable to load `jbus-common-filter-dag` module due to error:");
	    throw new Error(message.join(" "));
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 41 */
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

	(function() {
	  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  FILTERDAGREQFS = __webpack_require__(3);

	  filterlibResponse = FILTERLIB.create({
	    operationID: '-OOcB4IIRQuMWZJ0zZKPUw',
	    operationName: "FilterDAG Runtime Generator",
	    operationDescription: "Constructs and initializes a FilterDAG reactive system simulation runtime host instance from a FilterDAG Specification Manifest.",
	    bodyFunction: function(request_) {
	      var errors, genTag, inBreakScope, innerResponse, response, result;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        result = {};
	        genTag = {
	          id: this.operationID,
	          name: this.operationName
	        };
	        innerResponse = IDENTIFIERLIB.irut.fromReference(result);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        genTag.hash = innerResponse.result;
	        result.generator = genTag;
	        response.result = result;
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 42 */
/***/ function(module, exports) {

	
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

	(function() {
	  module.exports = {
	    outputName: "FilterDAG Object",
	    outputDescription: "A FilterDAG reactive systems host object generated by the FilterDAG factory.",
	    outputFilterSpec: {
	      ____label: "FilterDAG",
	      ____description: "FilterDAG reactive system host object.",
	      ____types: "jsObject",
	      'fdnFVPtSQy6UR79kQ_AdHA': {
	        ____label: "FilterDAG Object Watermark",
	        ____description: "Unique IRUT assigned to all FilterDAG objects to facilitate runtime identification.",
	        ____accept: "jsBoolean",
	        ____defaultValue: true
	      },
	      dagID: {
	        ____opaque: true
	      },
	      dagIID: {
	        ____opaque: true
	      },
	      dagName: {
	        ____opaque: true
	      },
	      dagDescription: {
	        ____opaque: true
	      },
	      dagSpecification: {
	        ____opaque: true
	      }
	    }
	  };

	}).call(this);


/***/ },
/* 43 */
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

	(function() {
	  var CONSTRAINTPROCESSOR, FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, MODELPROCESSOR, SPECRECONCILER, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  FILTERDAGREQFS = __webpack_require__(3);

	  MODELPROCESSOR = __webpack_require__(48);

	  CONSTRAINTPROCESSOR = __webpack_require__(44);

	  SPECRECONCILER = __webpack_require__(52);

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'loZ5xDoyTO-bUq77KaBk8g',
	    operationName: "FilterDAG Spec Processor",
	    operationDescription: "Parses a FilerDAG specification descriptor and returns an intermediate result object.",
	    inputFilterSpec: FILTERDAGREQFS.dagSpecification,
	    bodyFunction: function(request_) {
	      var errors, filterDAGSpecification, genTag, inBreakScope, innerResponse, response, specificationConstraints, specificationModel;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        innerResponse = MODELPROCESSOR.request(request_.model);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        specificationModel = innerResponse.result;
	        innerResponse = CONSTRAINTPROCESSOR.request(request_.constraints);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        specificationConstraints = innerResponse.result;
	        innerResponse = SPECRECONCILER.request({
	          model: specificationModel,
	          constraints: specificationConstraints
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        filterDAGSpecification = innerResponse.result;
	        genTag = {
	          id: this.operationID,
	          name: this.operationName
	        };
	        innerResponse = IDENTIFIERLIB.irut.fromReference(filterDAGSpecification);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        genTag.hash = innerResponse.result;
	        filterDAGSpecification.generator = genTag;
	        response.result = filterDAGSpecification;
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 44 */
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

	(function() {
	  var CONSTRAINT_FUNCTIONS, CONSTRAINT_RECONCILE, CONSTRAINT_TYPES, FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  FILTERDAGREQFS = __webpack_require__(3);

	  CONSTRAINT_TYPES = __webpack_require__(47);

	  CONSTRAINT_FUNCTIONS = __webpack_require__(45);

	  CONSTRAINT_RECONCILE = __webpack_require__(46);

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'tmhYEUdOR_yk5NRLLk3u1A',
	    operationName: "FilterDAG Constraint Processor",
	    operationDescription: "Parses a FilterDAG constraint specification and returns an intermediate result.",
	    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.contraints,
	    bodyFunction: function(request_) {
	      var constraintFunctions, constraintTypes, errors, filterDAGConstraints, genTag, inBreakScope, innerResponse, response;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        innerResponse = CONSTRAINT_TYPES.request(request_.types);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        constraintTypes = innerResponse.result;
	        innerResponse = CONSTRAINT_FUNCTIONS.request(request_.functions);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        constraintFunctions = innerResponse.result;
	        innerResponse = CONSTRAINT_RECONCILE.request({
	          types: constraintTypes,
	          functions: constraintFunctions
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        filterDAGConstraints = innerResponse.result;
	        genTag = {
	          id: this.operationID,
	          name: this.operationName
	        };
	        innerResponse = IDENTIFIERLIB.irut.fromReference(filterDAGConstraints);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        genTag.hash = innerResponse.result;
	        filterDAGConstraints.generator = genTag;
	        response.result = filterDAGConstraints;
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 45 */
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

	(function() {
	  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  FILTERDAGREQFS = __webpack_require__(3);

	  filterlibResponse = FILTERLIB.create({
	    operationID: '7bqdXoXHSvm90lMvfkOUKQ',
	    operationName: "FilterDAG Function Constraint Processor",
	    operationDescription: "Parses a FilterDAG function constraint specification and returns an intermediate result.",
	    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.constraints.functions,
	    bodyFunction: function(request_) {
	      var errors, filterMap, functionMap, inBreakScope, index, response;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        if (!request_.length) {
	          errors.unshift("You must specifiy at least one function constraint descriptor.");
	          break;
	        }
	        filterMap = {};
	        functionMap = {};
	        index = 0;
	        request_.forEach(function(functionDescriptor_) {
	          var innerResponse, name, value, value1;
	          name = functionDescriptor_.name;
	          value = functionMap[name];
	          if ((value != null) && value) {
	            errors.unshift("Illegal duplicate name value '" + name + "' found examining constraints.functions[" + index + "].");
	          } else {
	            value = functionMap[name] = functionDescriptor_;
	            delete value.name;
	            innerResponse = IDENTIFIERLIB.irut.isIRUT(value.filterBinding.id);
	            if (innerResponse.error) {
	              errors.unshift(innerResponse.error);
	            }
	            if (!innerResponse.result) {
	              errors.unshift(innerResponse.guidance);
	              errors.unshift("Illegal filterBinding.id value '" + value.filterBinding.id + "' found examining constraints.functions[" + index + "]:");
	            }
	            value1 = filterMap[value.filterBinding.id];
	            if (!((value1 != null) && value)) {
	              filterMap[value.filterBinding.id] = null;
	            }
	          }
	          return index++;
	        });
	        if (!errors.length) {
	          response.result = {
	            functions: functionMap,
	            filters: filterMap
	          };
	        }
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 46 */
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

	(function() {
	  var FILTERLIB, IDENTIFIERLIB, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'ABIJoB_lRfeP4keMZgRkzA',
	    operationName: "FilterDAG Constraint Reconciler",
	    operationDescription: "Reconciles a FilterDAG constraint specification and returns an intermediate result.",
	    bodyFunction: function(request_) {
	      var errors, inBreakScope, response, result;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        result = request_;
	        response.result = result;
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 47 */
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

	(function() {
	  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  FILTERDAGREQFS = __webpack_require__(3);

	  filterlibResponse = FILTERLIB.create({
	    operationID: '3mXe4YE_RVG7cqZXz92izw',
	    operationName: "FilterDAG Type Constraint Processor",
	    operationDescription: "Parses a FilterDAG type constraint specification and returns an intermediate result.",
	    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.constraints.types,
	    bodyFunction: function(request_) {
	      var errors, filterSpecMap, inBreakScope, index, response, typeMap;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        if (!request_.length) {
	          errors.unshift("You must specify at least one type constraint descriptor.");
	          break;
	        }
	        filterSpecMap = {};
	        typeMap = {};
	        index = 0;
	        request_.forEach(function(typeDescriptor_) {
	          var innerResponse, value;
	          value = typeMap[typeDescriptor_.name];
	          if ((value != null) && value) {
	            errors.unshift("Illegal duplicate name value '" + typeDescriptor_.name + "' found examining constraints.types[" + index + "].");
	            return;
	          }
	          value = typeMap[typeDescriptor_.name] = typeDescriptor_;
	          delete value.name;
	          innerResponse = FILTERLIB.create({
	            operationID: 'demo',
	            inputFilterSpec: value.filterSpec
	          });
	          if (innerResponse.error) {
	            errors.unshift(innerResponse.error);
	            errors.unshift("Invalid filter specification declared for type constraint name '" + typeDescriptor_.name + "':");
	            return;
	          }
	          innerResponse = IDENTIFIERLIB.irut.fromReference(value.filterSpec);
	          if (innerResponse.error) {
	            errors.unshift(innerResponse.error);
	            return;
	          }
	          value.id = innerResponse.result;
	          filterSpecMap[innerResponse.result] = value.filterSpec;
	          return index++;
	        });
	        if (!errors.length) {
	          response.result = {
	            types: typeMap,
	            filterSpecs: filterSpecMap
	          };
	        }
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 48 */
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

	(function() {
	  var FILTERDAGREQFS, FILTERLIB, IDENTIFIERLIB, MODELIOPROCESS, MODELRECONCILE, MODELXFORMGEN, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  IDENTIFIERLIB = __webpack_require__(2);

	  FILTERDAGREQFS = __webpack_require__(3);

	  MODELXFORMGEN = __webpack_require__(51);

	  MODELIOPROCESS = __webpack_require__(49);

	  MODELRECONCILE = __webpack_require__(50);

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'Xke4-hLKSIChJos77JVOmg',
	    operationName: "FilterDAG Model Processor",
	    operationDescription: "Parses a FilterDAG specification model and returns an intermediate result.",
	    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model,
	    bodyFunction: function(request_) {
	      var errors, filterDAGModel, genTag, inBreakScope, innerResponse, ioModel, response, transformModel;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        innerResponse = MODELXFORMGEN.request(request_.transformations);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        transformModel = innerResponse.result;
	        innerResponse = MODELIOPROCESS.request({
	          transformModel: transformModel,
	          model: {
	            inputs: request_.inputs,
	            outputs: request_.outputs
	          }
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        ioModel = innerResponse.result;
	        innerResponse = MODELRECONCILE.request({
	          transformSpecs: request_.transformations,
	          transformModel: transformModel,
	          ioModel: ioModel
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        filterDAGModel = innerResponse.result;
	        genTag = {
	          id: this.operationID,
	          name: this.operationName
	        };
	        innerResponse = IDENTIFIERLIB.irut.fromReference(filterDAGModel);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        genTag.hash = innerResponse.result;
	        filterDAGModel.generator = genTag;
	        response.result = filterDAGModel;
	        break;
	      }
	      if (errors.length) {
	        errors.unshift("Error(s) in spec model:");
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 49 */
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

	(function() {
	  var FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, INPUTFS, OUTPUTFS, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  FILTERDAGREQFS = __webpack_require__(3);

	  FILTERDAGXFORMFS = __webpack_require__(13);

	  INPUTFS = {
	    ____label: "I/O Model Processor Request",
	    ____types: "jsObject",
	    transformModel: FILTERDAGXFORMFS,
	    model: {
	      ____types: "jsObject",
	      inputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.inputs,
	      outputs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.outputs
	    }
	  };

	  OUTPUTFS = __webpack_require__(20);

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'Lry7jHEARSasslVcxqVHww',
	    operationName: "FilterDAG I/O Model Processor",
	    operationDescription: "Parses input and output value declarations of a FilterDAG specification model and returns an intermediate result.",
	    inputFilterSpec: INPUTFS,
	    bodyFunction: function(request_) {
	      var bad, errors, guidance, inBreakScope, index, ioModelCache, ioModelCacheReport, ioModelErrors, key, response;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        ioModelCache = {
	          inputsMap: {},
	          outputsMap: {},
	          typeConstraints: []
	        };
	        index = 0;
	        request_.model.inputs.forEach(function(inputDescriptor_) {
	          var value;
	          value = ioModelCache.inputsMap[inputDescriptor_.name];
	          if ((value != null) && value) {
	            errors.unshift("Illegal duplicate name value '" + inputDescriptor_.name + "' found examining model.inputs[" + index + "].");
	          } else {
	            ioModelCache.inputsMap[inputDescriptor_.name] = inputDescriptor_;
	            if (ioModelCache.typeConstraints.indexOf(inputDescriptor_.typeContraint) === -1) {
	              ioModelCache.typeConstraints.push(inputDescriptor_.typeConstraint);
	            }
	          }
	          return index++;
	        });
	        index = 0;
	        request_.model.outputs.forEach(function(outputDescriptor_) {
	          var value;
	          value = ioModelCache.outputsMap[outputDescriptor_.name];
	          if ((value != null) && value) {
	            errors.unshift("Illegal duplicate name value '" + outputDescriptor_.name + "' found examining model.outputs[" + index + "].");
	          } else {
	            ioModelCache.outputsMap[outputDescriptor_.name] = outputDescriptor_;
	            if (ioModelCache.typeConstraints.indexOf(outputDescriptor_.typeConstraint) === -1) {
	              ioModelCache.typeConstraints.push(outputDescriptor_.typeConstraint);
	            }
	          }
	          return index++;
	        });
	        if (errors.length) {
	          break;
	        }
	        ioModelCacheReport = {
	          bad: {
	            missingInputs: [],
	            mislabeledInputs: [],
	            missingOutputs: [],
	            mislabeledOutputs: [],
	            superfluousInputs: [],
	            superfluousOutputs: []
	          },
	          good: {
	            inputs: [],
	            outputs: []
	          }
	        };
	        request_.transformModel.dependencies.models.inputs.forEach(function(inputName_) {
	          var value;
	          value = ioModelCache.inputsMap[inputName_];
	          if (!((value != null) && value)) {
	            if (ioModelCacheReport.bad.missingInputs.indexOf(inputName_) === -1) {
	              ioModelCacheReport.bad.missingInputs.push(inputName_);
	              errors.unshift("Transform model relies on undeclared input value model '" + inputName_ + "'.");
	              return;
	            }
	          }
	          value = ioModelCache.outputsMap[inputName_];
	          if ((value != null) && value) {
	            if (ioModelCacheReport.bad.mislabeledOutputs.indexOf(inputName_) === -1) {
	              ioModelCacheReport.bad.mislabeledOutputs.push(inputName_);
	              errors.unshift("Transform model relies on input value model '" + inputName_ + "' that is declared as an output model.");
	              return;
	            }
	          }
	          return ioModelCacheReport.good.inputs.push(inputName_);
	        });
	        request_.transformModel.dependencies.models.outputs.forEach(function(outputName_) {
	          var value;
	          value = ioModelCache.outputsMap[outputName_];
	          if (!((value != null) && value)) {
	            if (ioModelCacheReport.bad.missingOutputs.indexOf(outputName_) === -1) {
	              ioModelCacheReport.bad.missingOutputs.push(outputName_);
	              errors.unshift("Transform model relies on undeclared output value model '" + outputName_ + "'.");
	              return;
	            }
	          }
	          value = ioModelCache.inputsMap[outputName_];
	          if ((value != null) && value) {
	            if (ioModelCacheReport.bad.mislabeledInputs.indexOf(outputName_) === -1) {
	              ioModelCacheReport.bad.mislabeledInputs.push(outputName_);
	              errors.unshift("Transform model relies on output value model '" + outputName_ + "' that is declared as an input model.");
	              return;
	            }
	          }
	          return ioModelCacheReport.good.outputs.push(outputName_);
	        });
	        guidance = [];
	        for (key in ioModelCache.inputsMap) {
	          if (ioModelCacheReport.good.inputs.indexOf(key) === -1) {
	            ioModelCacheReport.bad.superfluousInputs.push(key);
	            guidance.unshift("Input model declares unreferenced model '" + key + "'.");
	          }
	        }
	        for (key in ioModelCache.outputsMap) {
	          if (ioModelCacheReport.good.outputs.indexOf(key) === -1) {
	            ioModelCacheReport.bad.superfluousOutputs.push(key);
	            guidance.unshift("Output model declared unreferenced model '" + key + "'.");
	          }
	        }
	        bad = ioModelCacheReport.bad;
	        ioModelErrors = bad.missingInputs.length + bad.mislabeledInputs.length + bad.missingOutputs.length + bad.mislabeledOutputs.length;
	        if (ioModelErrors) {
	          guidance.forEach(function(string_) {
	            return errors.push(string_);
	          });
	        }
	        if (errors.length) {
	          break;
	        }
	        response.result = {
	          ioCache: ioModelCache,
	          ioCacheReport: ioModelCacheReport
	        };
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    },
	    outputFilterSpec: OUTPUTFS
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 50 */
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

	(function() {
	  var FILTERDAGIOMODEL, FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, INPUTFS, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  FILTERDAGREQFS = __webpack_require__(3);

	  FILTERDAGXFORMFS = __webpack_require__(13);

	  FILTERDAGIOMODEL = __webpack_require__(20);

	  INPUTFS = {
	    ____types: "jsObject",
	    ____label: "FilterDAG Model Reconciler Request",
	    ____description: "FilterDAG model reconciliation request object.",
	    transformSpecs: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.transformations,
	    transformModel: FILTERDAGXFORMFS,
	    ioModel: FILTERDAGIOMODEL
	  };

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'sRz7IX4XRVyzu9pSACki-g',
	    operationName: "FilterDAG Model Reconciler",
	    operationDescription: "Reconciles a FilterDAG specification model and returns an intermediate result.",
	    inputFilterSpec: INPUTFS,
	    bodyFunction: function(request_) {
	      var errors, filterDAGModel, inBreakScope, response, transformSpecsMap;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        filterDAGModel = {
	          transformDigraph: request_.transformModel.digraph,
	          transformModels: {
	            inputs: {},
	            outputs: {},
	            transforms: {}
	          },
	          inducedConstraints: {
	            types: [],
	            functions: []
	          }
	        };
	        request_.transformModel.dependencies.models.inputs.forEach(function(inputName_) {
	          filterDAGModel.transformModels.inputs[inputName_] = request_.ioModel.ioCache.inputsMap[inputName_];
	          return delete filterDAGModel.transformModels.inputs[inputName_].name;
	        });
	        request_.transformModel.dependencies.models.outputs.forEach(function(outputName_) {
	          filterDAGModel.transformModels.outputs[outputName_] = request_.ioModel.ioCache.outputsMap[outputName_];
	          return delete filterDAGModel.transformModels.outputs[outputName_].name;
	        });
	        transformSpecsMap = {};
	        request_.transformSpecs.forEach(function(transformSpec_) {
	          var transformSpec;
	          transformSpec = transformSpecsMap[transformSpec_.name] = transformSpec_;
	          delete transformSpec.name;
	          delete transformSpec.inputModels;
	          return delete transformSpec.outputModel;
	        });
	        request_.transformModel.dependencies.models.transforms.forEach(function(transformName_) {
	          return filterDAGModel.transformModels.transforms[transformName_] = transformSpecsMap[transformName_];
	        });
	        request_.transformModel.dependencies.constraints.functions.forEach(function(functionName_) {
	          return filterDAGModel.inducedConstraints.functions.push(functionName_);
	        });
	        filterDAGModel.inducedConstraints.functions.sort();
	        request_.ioModel.ioCache.typeConstraints.forEach(function(typeName_) {
	          return filterDAGModel.inducedConstraints.types.push(typeName_);
	        });
	        filterDAGModel.inducedConstraints.types.sort();
	        response.result = filterDAGModel;
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 51 */
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

	(function() {
	  var FILTERDAGREQFS, FILTERDAGXFORMFS, FILTERLIB, GRAPHLIB, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  FILTERDAGREQFS = __webpack_require__(3);

	  FILTERDAGXFORMFS = __webpack_require__(13);

	  GRAPHLIB = __webpack_require__(8);

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'h6w300MIQaegK6rK9fDeOw',
	    operationName: "FilterDAG Transformation Digraph Generator",
	    operationDescription: "Creates a digraph model of the functional transformations to be modeled by a FilterDAG reactive system host.",
	    inputFilterSpec: FILTERDAGREQFS.inputFilterSpec.dagSpecification.model.transformations,
	    bodyFunction: function(request_) {
	      var backEdges, cycleDetector, dftResponse, errors, inBreakScope, index, innerResponse, response, startVertices, transformDigraph, transformDigraphDependencies;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        if (!request_.length) {
	          errors.unshift("You must specify at least one transformation descriptor.");
	          break;
	        }
	        innerResponse = GRAPHLIB.directed.create({
	          name: "Model Transformations Digraph",
	          description: "Directed graph model of a FilterDAG reactive data transformation system."
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          errors.unshift("Interal error allocating digraph:");
	          break;
	        }
	        transformDigraph = innerResponse.result;
	        transformDigraphDependencies = {
	          models: {
	            inputs: [],
	            outputs: [],
	            transforms: []
	          },
	          constraints: {
	            functions: []
	          }
	        };
	        index = 0;
	        request_.forEach(function(transformation_) {
	          var edge, vertexProperties;
	          if (transformDigraph.isVertex(transformation_.name)) {
	            errors.unshift("Transformation '" + transformation_.name + "' illegally re-defined.");
	            return;
	          }
	          transformDigraphDependencies.models.transforms.push(transformation_.name);
	          if (!transformation_.inputModels.length) {
	            errors.unshift("Transformation '" + transformation_.name + "' must declare at least one input model.");
	            return;
	          }
	          if (transformDigraph.isVertex(transformation_.outputModel)) {
	            vertexProperties = transformDigraph.getVertexProperty(transformation_.outputModel);
	            if (vertexProperties.type !== "value") {
	              errors.unshift(("Transform '" + transformation_.name + "' specifies an illegal output model ") + ("'" + transformation_.outputModel + "' of type '" + vertexPropertes.type + "'."));
	              return;
	            }
	            if (transformDigraph.inDegree(transformation_.outputModel)) {
	              edge = transformDigraph.inEdges(transformation_.outputModel)[0];
	              errors.unshift(("Transformation '" + transformation_.name + "' specifies output model ") + ("'" + transformation_.outputModel + "' that is already specified as the output of transformation '" + edge.u + "'."));
	              return;
	            }
	          } else {
	            transformDigraph.addVertex({
	              u: transformation_.outputModel,
	              p: {
	                type: "value"
	              }
	            });
	            if (transformDigraphDependencies.models.outputs.indexOf(transformation_.outputModel) === -1) {
	              transformDigraphDependencies.models.outputs.push(transformation_.outputModel);
	            }
	          }
	          transformDigraph.addVertex({
	            u: transformation_.name,
	            p: {
	              type: "transformation"
	            }
	          });
	          if (transformDigraphDependencies.constraints.functions.indexOf(transformation_.functionConstraint) === -1) {
	            transformDigraphDependencies.constraints.functions.push(transformation_.functionConstraint);
	          }
	          transformDigraph.addEdge({
	            e: {
	              u: transformation_.name,
	              v: transformation_.outputModel
	            },
	            p: {
	              type: "output"
	            }
	          });
	          if (transformation_.inputModels.length) {
	            transformation_.inputModels.forEach(function(inputModel_) {
	              if (transformDigraph.isVertex(inputModel_.inputModel)) {
	                if (transformDigraph.getVertexProperty(inputModel_.inputModel).type !== "value") {
	                  errors.unshift("Transform '" + transformation_.name + "' specifies an illegal input model '" + inputModel_.inputModel + "'.");
	                  return;
	                }
	              } else {
	                transformDigraph.addVertex({
	                  u: inputModel_.inputModel,
	                  p: {
	                    type: "value"
	                  }
	                });
	                if (transformDigraphDependencies.models.inputs.indexOf(inputModel_.inputModel)) {
	                  transformDigraphDependencies.models.inputs.push(inputModel_.inputModel);
	                }
	              }
	              return transformDigraph.addEdge({
	                e: {
	                  u: inputModel_.inputModel,
	                  v: transformation_.name
	                },
	                p: {
	                  type: "input",
	                  mapping: inputModel_.requestMapping
	                }
	              });
	            });
	          } else {
	            errors.unshift("transformations[" + index + "] declares no input models.");
	          }
	          return index++;
	        });
	        if (errors.length) {
	          break;
	        }
	        startVertices = transformDigraph.getRootVertices();
	        if (!startVertices.length) {
	          errors.unshift("Illegal DAG model declares no external system input values.");
	          startVertices.push(transformDigraph.getVertices()[0]);
	        }
	        backEdges = [];
	        cycleDetector = {
	          backEdge: function(request_) {
	            backEdges.push(request_.e);
	            return true;
	          }
	        };
	        dftResponse = GRAPHLIB.directed.depthFirstTraverse({
	          digraph: transformDigraph,
	          visitor: cycleDetector,
	          options: {
	            startVertices: startVertices
	          }
	        });
	        if (dftResponse.error) {
	          errors.unshift(dftResponse.error);
	          break;
	        }
	        if (backEdges.length) {
	          errors.unshift("Illegal cycle in DAG model introduced by edge: '" + (JSON.stringify(backEdges)) + "'.");
	          break;
	        }
	        response.result = {
	          digraph: transformDigraph.toObject(),
	          dependencies: transformDigraphDependencies
	        };
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    },
	    outputFilterSpec: FILTERDAGXFORMFS
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 52 */
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

	(function() {
	  var FILTERLIB, filterlibResponse;

	  FILTERLIB = __webpack_require__(1);

	  filterlibResponse = FILTERLIB.create({
	    operationID: 'GLxLYuwnTCyCyr-lKfohUg',
	    operationName: "FilterDAG Specification Reconciler",
	    operationDescription: "Performs static analysis on a FilerDAG model and constraint declarations and returns an intermediate result.",
	    bodyFunction: function(request_) {
	      var errors, filterDAGManifest, inBreakScope, response;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        filterDAGManifest = {};
	        filterDAGManifest.model = {};
	        filterDAGManifest.model.system = request_.model.transformDigraph;
	        filterDAGManifest.model.map = request_.model.transformModels;
	        filterDAGManifest.constraints = {};
	        filterDAGManifest.constraints.types = {};
	        filterDAGManifest.constraints.functions = {};
	        filterDAGManifest.inducedRuntime = {
	          filterSpecs: {},
	          filters: {}
	        };
	        request_.model.inducedConstraints.types.forEach(function(typeName_) {
	          var value, value1;
	          value = request_.constraints.types.types[typeName_];
	          if (!((value != null) && value)) {
	            return errors.push("System model depends on undeclared constraint type '" + typeName_ + "'.");
	          } else {
	            value1 = filterDAGManifest.inducedRuntime.filterSpecs[value.id];
	            if (!((value1 != null) && value1)) {
	              filterDAGManifest.inducedRuntime.filterSpecs[value.id] = value.filterSpec;
	            }
	            delete value.filterSpec;
	            return filterDAGManifest.constraints.types[typeName_] = value;
	          }
	        });
	        request_.model.inducedConstraints.functions.forEach(function(functionName_) {
	          var value, value1;
	          value = request_.constraints.functions.functions[functionName_];
	          if (!((value != null) && value)) {
	            return errors.push("System model depends on undeclared constraint function '" + functionName_ + "'.");
	          } else {
	            value1 = filterDAGManifest.inducedRuntime.filters[value.filterBinding.id];
	            if (!((value1 != null) && value1)) {
	              filterDAGManifest.inducedRuntime.filters[value.filterBinding.id] = null;
	            }
	            value.id = value.filterBinding.id;
	            delete value.filterBinding;
	            return filterDAGManifest.constraints.functions[functionName_] = value;
	          }
	        });
	        response.result = filterDAGManifest;
	        break;
	      }
	      if (errors.length) {
	        errors.unshift("Unable to reconcile FilterDAG model and constraints.");
	        response.error = errors.join(" ");
	      }
	      return response;
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 53 */
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

	(function() {
	  'use strict';
	  var Filter, IDENTIFIER, bodyFunctionResponseFilter, filterRuntimeData,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  IDENTIFIER = __webpack_require__(2);

	  filterRuntimeData = __webpack_require__(54);

	  bodyFunctionResponseFilter = {
	    ____types: 'jsObject',
	    ____label: "NF Response Object",
	    ____description: "Normalized Function (NF) response object.",
	    error: {
	      ____types: ['jsNull', 'jsString'],
	      ____label: "Error",
	      ____description: "A string explaining why response.result is null. Or, null if no error occurred.",
	      ____defaultValue: null
	    },
	    result: {
	      ____opaque: true,
	      ____label: "Result",
	      ____description: "Null if an error occurred. Otherwise, some opaque JavaScript value reference."
	    }
	  };

	  Object.freeze(bodyFunctionResponseFilter);

	  module.exports = Filter = (function() {
	    function Filter(filterDescriptor_) {
	      this.request = bind(this.request, this);
	      this.filterDescriptor = filterDescriptor_;
	    }

	    Filter.prototype.request = function(request_) {
	      var bodyFunctionResponse, dispatchState, errors, inBreakScope, inputFilterResponse, outputFilterResponse, response, returnSignatureCheck;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        dispatchState = "verifying input data";
	        inputFilterResponse = filterRuntimeData({
	          value: request_,
	          spec: this.filterDescriptor.inputFilterSpec
	        });
	        if (inputFilterResponse.error) {
	          errors.unshift(inputFilterResponse.error);
	          break;
	        }
	        if (this.filterDescriptor.bodyFunction) {
	          dispatchState = "executing function body";
	          bodyFunctionResponse = this.filterDescriptor.bodyFunction(inputFilterResponse.result);
	          dispatchState = "analyzing response signature";
	          returnSignatureCheck = filterRuntimeData({
	            value: bodyFunctionResponse,
	            spec: bodyFunctionResponseFilter
	          });
	          if (returnSignatureCheck.error) {
	            errors.unshift(returnSignatureCheck.error);
	            break;
	          }
	          dispatchState = "analyzing response disposition";
	          if (bodyFunctionResponse.error) {
	            errors.unshift(bodyFunctionResponse.error);
	            break;
	          }
	        } else {
	          bodyFunctionResponse = inputFilterResponse;
	        }
	        dispatchState = "verifying response result data";
	        outputFilterResponse = filterRuntimeData({
	          value: bodyFunctionResponse.result,
	          spec: this.filterDescriptor.outputFilterSpec
	        });
	        if (outputFilterResponse.error) {
	          errors.unshift(outputFilterResponse.error);
	          break;
	        }
	        response.result = outputFilterResponse.result;
	      }
	      if (errors.length) {
	        errors.unshift("An error occurred in function [" + this.filterDescriptor.operationName + "::" + this.filterDescriptor.operationID + "] while " + dispatchState + ":");
	        response.error = errors.join(' ');
	      }
	      return response;
	    };

	    return Filter;

	  })();

	}).call(this);


/***/ },
/* 54 */
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

	(function() {
	  var IDENTIFIER, TYPES, filterRuntimeData;

	  IDENTIFIER = __webpack_require__(2);

	  TYPES = __webpack_require__(5);


	  /*
	      request = {
	          value: variant
	          spec: object
	      }
	      response = {
	          error = null or string explaining why result is null
	          result: filtered copied of request.value or null if an error occurred
	      }
	   */

	  filterRuntimeData = module.exports = function(request_) {
	    var acceptInputNamespace, assignValue, constrainInRangeInclusive, constrainInValueSet, constraintDirective, defaulted, element, errors, finalResult, i, inBreakScope, inRange, index, innerResponse, inputData, inputDataUndefined, len, mapPropertyName, mapPropertyValue, mapQueue, mapQueueCache, namespace, newOutputData, opaque, outputData, response, spec, specDescriptor, subnamespaces, typePath, valueJsMoniker;
	    errors = [];
	    response = {
	      error: null,
	      result: null
	    };
	    inBreakScope = false;
	    finalResult = void 0;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      mapQueue = [];
	      innerResponse = TYPES.check.inTypeSet({
	        value: request_,
	        types: 'jsObject'
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	      }
	      if (!innerResponse.result) {
	        errors.unshift(innerResponse.guidance);
	      }
	      if (errors.length) {
	        errors.unshift("Invalid request:");
	        break;
	      }
	      innerResponse = TYPES.check.inTypeSet({
	        value: request_['spec'],
	        types: ['jsObject', 'jsUndefined']
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	      }
	      if (!innerResponse.result) {
	        errors.unshift(innerResponse.guidance);
	      }
	      if (errors.length) {
	        errors.unshift("Invalid request missing 'spec' declaration:");
	        break;
	      }
	      if (innerResponse.result === 'jsUndefined') {
	        finalResult = request_['value'];
	        break;
	      }
	      mapQueue.push({
	        namespace: void 0,
	        path: void 0,
	        spec: request_['spec'],
	        inputData: request_['value'],
	        outputData: finalResult
	      });
	      while (mapQueue.length) {
	        specDescriptor = mapQueue.shift();
	        typePath = (specDescriptor.path != null) && specDescriptor.path || '~';
	        spec = specDescriptor.spec;
	        inputData = specDescriptor.inputData;
	        outputData = specDescriptor.outputData;
	        namespace = specDescriptor.namespace;
	        innerResponse = TYPES.check.inTypeSet({
	          value: spec.____opaque,
	          types: 'jsBoolean'
	        });
	        opaque = innerResponse.result && spec.____opaque;
	        innerResponse = TYPES.check.inTypeSet({
	          value: spec.____defaultValue,
	          types: 'jsUndefined'
	        });
	        defaulted = !innerResponse.result;
	        acceptInputNamespace = false;
	        if (!opaque) {
	          constraintDirective = null;
	          if ((spec.____accept != null) && spec.____accept) {
	            acceptInputNamespace = true;
	            constraintDirective = '____accept';
	          } else {
	            constraintDirective = '____types';
	          }
	          innerResponse = TYPES.check.inTypeSet({
	            value: inputData,
	            types: spec[constraintDirective]
	          });
	          if (innerResponse.error) {
	            errors.unshift(innerResponse.error);
	            break;
	          }
	          if (!innerResponse.result) {
	            inputDataUndefined = TYPES.check.inTypeSet({
	              value: inputData,
	              types: 'jsUndefined'
	            }).result;
	            if (!(inputDataUndefined && defaulted)) {
	              errors.unshift(innerResponse.guidance);
	              break;
	            }
	            innerResponse = TYPES.check.inTypeSet({
	              value: spec.____defaultValue,
	              types: spec[constraintDirective]
	            });
	            if (innerResponse.error) {
	              errors.unshift(innerResponse.error);
	              errors.unshift("BAD DEFAULT VALUE!");
	              break;
	            }
	            if (!innerResponse.result) {
	              errors.unshift(innerResponse.guidance);
	              errors.unshift("BAD DEFAULT VALUE!");
	              break;
	            }
	            inputData = spec.____defaultValue;
	          }
	          valueJsMoniker = innerResponse.result;
	        } else {
	          if (defaulted && !((inputData != null) && inputData)) {
	            innerResponse = TYPES.check.inTypeSet({
	              value: inputData,
	              types: 'jsUndefined'
	            });
	            if (innerResponse.result && defaulted) {
	              inputData = spec.____defaultValue;
	            }
	          }
	        }
	        constrainInValueSet = void 0;
	        constrainInRangeInclusive = void 0;
	        mapQueueCache = [];
	        subnamespaces = 0;
	        for (mapPropertyName in spec) {
	          mapPropertyValue = spec[mapPropertyName];
	          switch (mapPropertyName) {
	            case '____types':
	              break;
	            case '____accept':
	              break;
	            case '____opaque':
	              break;
	            case '____defaultValue':
	              break;
	            case '____inValueSet':
	              constrainInValueSet = mapPropertyValue;
	              break;
	            case '____inRangeInclusive':
	              constrainInRangeInclusive = mapPropertyValue;
	              break;
	            case '____label':
	              break;
	            case '____description':
	              break;
	            default:
	              if (valueJsMoniker === 'jsArray') {
	                index = 0;
	                for (i = 0, len = inputData.length; i < len; i++) {
	                  element = inputData[i];
	                  mapQueueCache.push({
	                    namespace: index,
	                    path: typePath + "." + mapPropertyName + "[" + (index++) + "]",
	                    spec: mapPropertyValue,
	                    inputData: element
	                  });
	                }
	              } else {
	                mapQueueCache.push({
	                  namespace: mapPropertyName,
	                  path: typePath + "." + mapPropertyName,
	                  spec: mapPropertyValue,
	                  inputData: (inputData != null) && inputData && inputData[mapPropertyName] || void 0
	                });
	              }
	          }
	          if (errors.length) {
	            break;
	          }
	        }
	        if (errors.length) {
	          break;
	        }
	        if ((constrainInValueSet != null) && constrainInValueSet && (valueJsMoniker !== 'jsUndefined')) {
	          index = constrainInValueSet.indexOf(inputData);
	          if (index === -1) {
	            errors.unshift("Invalid value '" + inputData + "' not in allowed value set: [" + (constrainInValueSet.join(',')) + "].");
	            break;
	          }
	        }
	        if ((constrainInRangeInclusive != null) && constrainInRangeInclusive && (valueJsMoniker !== 'jsUndefined')) {
	          inRange = true;
	          if (inputData < constrainInRangeInclusive.begin) {
	            errors.unshift("Invalid value '" + inputData + "' below allowed value range '" + constrainInRangeInclusive.begin + "','" + constrainInRangeInclusive.end + "'.");
	            break;
	          }
	          if (inputData > constrainInRangeInclusive.end) {
	            errors.unshift("Invalid value '" + inputData + "' above allowed value range '" + constrainInRangeInclusive.begin + "','" + constrainInRangeInclusive.end + "'.");
	            break;
	          }
	        }
	        if (errors.length) {
	          break;
	        }
	        assignValue = void 0;
	        if (opaque) {
	          assignValue = inputData;
	        } else {
	          switch (valueJsMoniker) {
	            case 'jsObject':
	              assignValue = acceptInputNamespace && inputData || {};
	              break;
	            case 'jsArray':
	              assignValue = acceptInputNamespace && inputData || [];
	              break;
	            default:
	              assignValue = inputData;
	              break;
	          }
	        }
	        if (((namespace != null) && namespace) || (Object.prototype.toString.call(namespace) === '[object Number]')) {
	          newOutputData = outputData[namespace] = assignValue;
	        } else {
	          newOutputData = finalResult = assignValue;
	        }
	        while ((valueJsMoniker !== 'jsUndefined') && mapQueueCache.length) {
	          specDescriptor = mapQueueCache.shift();
	          specDescriptor.outputData = newOutputData;
	          mapQueue.push(specDescriptor);
	        }
	      }
	      if (errors.length) {
	        errors.unshift("Error at path '" + typePath + "':");
	        break;
	      }
	    }
	    if (errors.length) {
	      errors.unshift("Runtime data check failed:");
	      response.error = errors.join(' ');
	    } else {
	      response.result = finalResult;
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 55 */
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

	(function() {
	  var MODULE, MURMUR;

	  MURMUR = __webpack_require__(15);

	  MODULE = module.exports = {};

	  MODULE.fromUTF8 = function(utf8_) {
	    var ascii, utf8;
	    utf8 = new Buffer(utf8_, 'utf-8');
	    ascii = utf8.toString('ascii');
	    return MURMUR(ascii);
	  };

	  MODULE.fromReference = function(ref_) {
	    return MODULE.fromUTF8(JSON.stringify(ref_));
	  };

	}).call(this);


/***/ },
/* 56 */
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

	(function() {
	  var MODULE, MURMUR, TYPES, UUID;

	  UUID = __webpack_require__(26);

	  MURMUR = __webpack_require__(15);

	  TYPES = __webpack_require__(5);

	  MODULE = module.exports = {};


	  /*
	      Generate an Internet-Routable Unique Token (IRUT)
	  
	      IRUT's are 22-character, ASCII-encoded, UUID v4, URI and RIS token-friendly string identifiers.
	  
	      Use cases:
	      1. v4 UUID uniqueness semantics: addressed w/node-uuid package
	      2. ASCII: addressed by using base64 encoding of the v4 UUID
	      3. Short as possible: addressed by trimming superfluous '=' padding from base64 encoding
	      4. URI token safe: addressed by replacing '/' characters with '_'
	      5. RIS token safe: addressed by replacing '+' with '-'
	  
	      References:
	      http://tools.ietf.org/html/rfc3986
	      http://en.wikipedia.org/wiki/Base64
	      http://stackoverflow.com/questions/11431886/url-safe-uuids-in-the-smallest-number-of-characters
	      http://stackoverflow.com/questions/6182315/how-to-do-base64-encoding-in-node-js
	      http://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string
	  
	      Note: I've made this funky. If seed_ is undefined, then a v4 UUID is generated and used as the
	      basis of the IRUT. Otherwise, we take a look at whatever was passed to us, convert it to an
	      ASCII string (this operation must be idempotent), divide it into four substrings of roughly
	      equal lengths (again this too must be idempotent), and then the 128-bit basis of the IRUT
	      is 4x32-bit Murmur3 hashes of the four substrings. This feature is used to fingerprint ARC's
	      primarily.
	   */

	  MODULE.fromEther = function() {
	    var pads, r1, r2, r3, r4, r5, tail;
	    r1 = UUID.v4(null, new Uint8Array(16, 0));
	    r2 = (new Buffer(r1)).toString('base64');
	    tail = r2.length;
	    pads = 0;
	    while (r2.charAt(tail - 1) === '=') {
	      tail--;
	    }
	    r3 = r2.slice(0, tail);
	    r4 = r3.replace(/\+/g, "-");
	    r5 = r4.replace(/\//g, "_");
	    return r5;
	  };


	  /*
	      Request/response-style generator returns an IRUT format 128-bit
	      hybrid Murmur3 hash of whatever ref_ refers to (so long as its a string,
	      object, or array). Note that if object or arry, the reference is serialized
	      to JSON dropping any functions or undefined properties from the seed UTF-8
	      string. The seed UTF-8 is converted to ASCII, and then divided into four
	      roughly equal chunks each of which is Murmur3 hashed to produce four 32-bit
	      hash results. The byte representation of this 128-bit composite hash is
	      then converted to base64 and cherry picked (character substitution algoritm)
	      to ensure that it is URI routable. This algorithm is idempotent.
	      Note that given the way that the seed ASCII string is chunked, touching
	      the resource referred to by ref_ will not necessarily destabilize the
	      entire generated IRUT string. Murmur3 IRUTS have for all intents and purposes
	      the same overall unique semantics associated with a 128-bit UUID v4-backed IRUT
	      and should only ever be compared for equality. There is never any recoverable
	      information of value in an IRUT except its uniqueness (and in the case of
	      Murmur3-backed IRUT's idempotence which means we can use the algorithm to
	      verify the correctness of various resources for correctness and integrity at
	      fairly low cost. If anything, this implementation is a bit conservative.
	      Later when I profile we'll see. We might be able to get away with 64-bits here?
	   */

	  MODULE.fromReference = function(ref_) {
	    var checkResponse, chunk, chunkLength, errors, hash, inBreakScope, index, pads, r0, r0Buffer, r1, r2, r2hashes, r3, r4, r5, rangeStart, response;
	    errors = [];
	    response = {
	      error: null,
	      result: null
	    };
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      checkResponse = TYPES.check.isJSON(ref_);
	      if (checkResponse.error) {
	        errors.unshift(checkResponse.error);
	        break;
	      }
	      if (!checkResponse.result) {
	        errors.unshift("Input reference must address top-level data convertible directly to JSON.");
	        break;
	      }
	      r0 = (checkResponse.result === 'jsonString') && ref_ || JSON.stringify(ref_);
	      r0Buffer = new Buffer(r0, 'utf-8');
	      r1 = r0Buffer.toString('ascii');
	      if (!r1.length) {
	        errors.unshift("No data to hash!");
	        break;
	      }
	      if (r1.length < 64) {
	        r1 = Array(Math.ceil((64 / r1.length) + 1)).join(r1);
	      }
	      chunkLength = Math.ceil(r1.length / 4);
	      index = 0;
	      rangeStart = 0;
	      r2hashes = [];
	      while (rangeStart < r1.length) {
	        chunk = r1.substring(rangeStart, rangeStart + chunkLength);
	        hash = MURMUR(chunk);
	        r2hashes[index] = hash & 0xFF;
	        r2hashes[index + 4] = (hash & 0xFF00) >> 8;
	        r2hashes[index + 8] = (hash & 0xFF0000) >> 16;
	        r2hashes[index + 12] = (hash & 0xFF000000) >> 24;
	        rangeStart += chunkLength;
	        index++;
	      }
	      r2 = (new Buffer(r2hashes)).toString('base64');
	      pads = 0;
	      while (r2.charAt(r2.length - pads - 1) === '=') {
	        pads++;
	      }
	      r3 = r2.slice(0, r2.length - pads);
	      r4 = r3.replace(/\+/g, "-");
	      r5 = r4.replace(/\//g, "_");
	      response.result = r5;
	    }
	    if (errors.length) {
	      errors.unshift("jbus common identifier IRUT generation failed:");
	      response.error = errors.join(' ');
	    }
	    return response;
	  };

	  MODULE.isIRUT = function(irut_) {
	    var checkResponse, errors, inBreakScope, match, response;
	    response = {
	      error: null,
	      guidance: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      checkResponse = TYPES.check.inTypeSet({
	        value: irut_,
	        types: 'jsString'
	      });
	      if (checkResponse.error) {
	        errors.unshift(checkResponse.error);
	        break;
	      }
	      if (!checkResponse.result) {
	        response.guidance = checkResponse.guidance;
	        response.result = false;
	        break;
	      }
	      if (irut_.length !== 22) {
	        response.guidance = "Expected 22-character string. Found " + irut_.length + "-character string instead.";
	        response.result = false;
	        break;
	      }
	      match = irut_.match(/^([A-Z]|[a-z]|[0-9]|-|_){22}$/);
	      if (match === null) {
	        response.guidance = "Expected only Base64 characters (substitute: '+' > '-', '/' > '_').";
	        response.result = false;
	        break;
	      }
	      response.result = true;
	    }
	    if (errors.length) {
	      errors.unshift("jbus common IRUT identifier verification failed:");
	      response.error = errors.join(' ');
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var FILTERLIB, buildMergedFilterSpecDigraphModel, deduceRuntimeParseDigraphFromAmbiguityColoring, filterlibResponse, generateDiscriminatorFilterRuntime, partitionAndColorMergedModelByAmbiguity;

	  FILTERLIB = __webpack_require__(1);

	  buildMergedFilterSpecDigraphModel = __webpack_require__(59);

	  partitionAndColorMergedModelByAmbiguity = __webpack_require__(58);

	  deduceRuntimeParseDigraphFromAmbiguityColoring = __webpack_require__(61);

	  generateDiscriminatorFilterRuntime = __webpack_require__(60);

	  filterlibResponse = FILTERLIB.create({
	    operationID: "5A8uDJunQUm1w-HcBPQ6Gw",
	    operationName: "Request Discriminator Filter Factory",
	    operationDescription: "Manufactures a new Filter object that routes its request to 1:N registered sub-Filter objects based on analysis of the request signature.",
	    inputFilterSpec: {
	      ____label: "Array of Filters",
	      ____description: "An array Filter objects that define the set of request signatures to be analyzed.",
	      ____types: "jsArray",
	      filter: {
	        ____label: "Sub-Filter Object",
	        ____description: "Pre-constructed Filter object.",
	        ____accept: "jsObject"
	      }
	    },
	    bodyFunction: function(request_) {
	      var ambiguityModel, errors, inBreakScope, innerResponse, mergedModel, response, runtimeFilter, runtimeModel;
	      response = {
	        error: null,
	        result: null
	      };
	      errors = [];
	      inBreakScope = false;
	      while (!inBreakScope) {
	        inBreakScope = true;
	        console.log("STAGE 1: MERGED FILTER SPEC GRAPH BUILDER OUTPUT");
	        innerResponse = buildMergedFilterSpecDigraphModel(request_);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        mergedModel = innerResponse.result;
	        console.log(mergedModel.digraph.toJSON(void 0, 4));
	        console.log("STAGE 2: PARTITION AND COLOR GRAPH BY AMBIGUITY");
	        innerResponse = partitionAndColorMergedModelByAmbiguity(mergedModel.digraph);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          errors.unshift("Internal error analyzing input filter array: ");
	          break;
	        }
	        ambiguityModel = innerResponse.result;
	        console.log(ambiguityModel.digraph.toJSON(void 0, 4));
	        ambiguityModel.ambiguousFilterSpecificationErrors.forEach(function(error_) {
	          return errors.push(error_);
	        });
	        if (errors.length) {
	          break;
	        }
	        innerResponse = deduceRuntimeParseDigraphFromAmbiguityColoring(ambiguityModel);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        runtimeModel = innerResponse.result;
	        innerResponse = generateDiscriminatorFilterRuntime(runtimeParseGraph);
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        runtimeFilter = innerResponse.result;
	        response.result = runtimeFilter;
	        break;
	      }
	      if (errors.length) {
	        response.error = errors.join(" ");
	      }
	      return response;
	    },
	    outputName: "Type Desrimination Filter Output",
	    outputDescriptor: "A generated Type Descriminator Filter.",
	    outputFilterSpec: {
	      ____opaque: true
	    }
	  });

	  if (filterlibResponse.error) {
	    throw new Error(filterlibResponse.error);
	  }

	  module.exports = filterlibResponse.result;

	}).call(this);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var GRAPHLIB, UTILLIB, partitionAndColorGraphByAmbiguity;

	  GRAPHLIB = __webpack_require__(8);

	  UTILLIB = __webpack_require__(10);

	  partitionAndColorGraphByAmbiguity = module.exports = function(mergedModelDigraph_) {
	    var allFilters, ambiguityModelDigraph, ambiguousBlackVertices, bfsVertices, blackFilters, errors, filter_, goldFilters, inBreakScope, index, innerResponse, outEdges, rbfsVertices, response, uprop, vertex;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      bfsVertices = [];
	      rbfsVertices = [];
	      ambiguousBlackVertices = [];
	      innerResponse = GRAPHLIB.directed.create(mergedModelDigraph_.toJSON());
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        break;
	      }
	      ambiguityModelDigraph = innerResponse.result;
	      innerResponse = GRAPHLIB.directed.breadthFirstTraverse({
	        digraph: ambiguityModelDigraph,
	        visitor: {
	          discoverVertex: function(grequest_) {
	            var uprop;
	            uprop = grequest_.g.getVertexProperty(grequest_.u);
	            uprop.filters.sort();
	            if (uprop.filters.length === 1) {
	              uprop.color = "gold";
	            } else {
	              if (grequest_.g.outDegree(grequest_.u)) {
	                uprop.color = "gray";
	              } else {
	                uprop.color = "black";
	                ambiguousBlackVertices.push(grequest_.u);
	              }
	            }
	            grequest_.g.setVertexProperty({
	              u: grequest_.u,
	              p: uprop
	            });
	            bfsVertices.push(grequest_.u);
	            return true;
	          }
	        }
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        errors.unshift("Error during BFS of merged filter specification graph.");
	        break;
	      }
	      if (!innerResponse.result.searchStatus === "completed") {
	        errors.unshift("BFS of merged filter specification graph did not complete as expected.");
	        break;
	      }
	      if (UTILLIB.dictionaryLength(innerResponse.result.undiscoveredMap)) {
	        errors.unshift("BFS of merged filter specification graph did not discover all vertices?");
	        break;
	      }
	      index = 0;
	      while (index < bfsVertices.length) {
	        rbfsVertices[index] = bfsVertices[bfsVertices.length - index - 1];
	        index++;
	      }
	      index = 0;
	      while (index < rbfsVertices.length) {
	        vertex = rbfsVertices[index++];
	        uprop = ambiguityModelDigraph.getVertexProperty(vertex);
	        if (uprop.color !== "gray") {
	          continue;
	        }
	        allFilters = {};
	        blackFilters = {};
	        goldFilters = {};
	        outEdges = ambiguityModelDigraph.outEdges(vertex);
	        outEdges.forEach(function(edge_) {
	          var vprop;
	          vprop = ambiguityModelDigraph.getVertexProperty(edge_.v);
	          return vprop.filters.forEach(function(filter_) {
	            allFilters[filter_] = true;
	            if ((vprop.color === "gold") || (vprop.color === "green")) {
	              return goldFilters[filter_] = true;
	            } else if (vprop.color === "black") {
	              return blackFilters[filter_] = true;
	            } else {
	              return errors.unshift("Unexpected color '" + vprop.color + "' discovered analyzing vertex '" + edge_.v + "'.");
	            }
	          });
	        });
	        uprop.filters.forEach(function(filter_) {
	          if (!((allFilters[filter_] != null) && allFilters[filter_])) {
	            return blackFilters[filter_] = true;
	          }
	        });
	        for (filter_ in blackFilters) {
	          if ((goldFilters[filter_] != null) && goldFilters[filter_]) {
	            delete goldFilters[filter_];
	          }
	        }
	        if (!UTILLIB.dictionaryLength(blackFilters)) {
	          uprop.color = "green";
	        } else {
	          uprop.color = "black";
	          ambiguousBlackVertices.push(vertex);
	        }
	        ambiguityModelDigraph.setVertexProperty({
	          u: vertex,
	          p: uprop
	        });
	      }
	      response.result = {
	        digraph: ambiguityModelDigraph,
	        ambigousBlackVertices: ambiguousBlackVertices,
	        ambiguousFilterSpecificationErrors: []
	      };
	      if (ambiguousBlackVertices.length) {
	        ambiguousBlackVertices.sort();
	        ambiguousBlackVertices.forEach(function(vertex_) {
	          var message, vertexProperty;
	          if (vertex_ === "request") {
	            return;
	          }
	          vertexProperty = ambiguityModelDigraph.getVertexProperty(vertex_);
	          message = "Filters [" + (vertexProperty.filters.join(" and ")) + "] overlap ambiguously at filter spec node '" + vertex_ + "'.";
	          return response.result.ambiguousFilterSpecificationErrors.push(message);
	        });
	      }
	      break;
	    }
	    if (errors.length) {
	      response.error = errors.join(" ");
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var FILTERLIB, GRAPHLIB, UTILLIB, addFilterSpecToMergedDigraphModel, buildMergedFilterSpecDigraphModel, rootVertex;

	  UTILLIB = __webpack_require__(10);

	  FILTERLIB = __webpack_require__(1);

	  GRAPHLIB = __webpack_require__(8);

	  rootVertex = "request";

	  buildMergedFilterSpecDigraphModel = module.exports = function(request_) {
	    var errors, filter, filters, i, inBreakScope, innerResponse, len, response, result, uprops;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      result = {
	        digraph: null,
	        filterTable: {}
	      };
	      innerResponse = GRAPHLIB.directed.create({
	        name: "Discriminator Decission Tree Model"
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        break;
	      }
	      result.digraph = innerResponse.result;
	      result.digraph.addVertex({
	        u: rootVertex,
	        p: {
	          color: "white"
	        }
	      });
	      filters = [];
	      for (i = 0, len = request_.length; i < len; i++) {
	        filter = request_[i];
	        innerResponse = addFilterSpecToMergedDigraphModel({
	          graph: result.digraph,
	          filter: filter
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        result.filterTable[filter.filterDescriptor.operationID] = {};
	        filters.push(filter.filterDescriptor.operationID);
	      }
	      if (errors.length) {
	        errors.unshift("Unable to build merged filter specification digraph model.");
	        break;
	      }
	      uprops = result.digraph.getVertexProperty(rootVertex);
	      uprops.filters = filters;
	      result.digraph.setVertexProperty({
	        u: rootVertex,
	        p: uprops
	      });
	      result.digraph.setGraphDescription("Models the combined input filter specifications of Filter ID's: [" + filters.join(", ") + "].");
	      response.result = result;
	      break;
	    }
	    if (errors.length) {
	      response.error = errors.join(" ");
	    }
	    return response;
	  };

	  addFilterSpecToMergedDigraphModel = function(request_) {
	    var considerSubnamespace, considerSubnamespaces, errors, i, inBreakScope, len, mapEntry, mapQueue, operationID, response, subnamespaceName, type, types, vertexId, vertexProperty;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    operationID = request_.filter.filterDescriptor.operationID;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      mapQueue = [];
	      mapQueue.push({
	        parentVertex: rootVertex,
	        parentNamespaceName: "",
	        path: "request",
	        namespaceDescriptor: request_.filter.filterDescriptor.inputFilterSpec
	      });
	      while (mapQueue.length) {
	        mapEntry = mapQueue.shift();
	        types = null;
	        considerSubnamespaces = true;
	        if (!((mapEntry.namespaceDescriptor != null) && mapEntry.namespaceDescriptor)) {
	          mapEntry.namespaceDescriptor = {
	            ____opaque: true
	          };
	        }
	        if ((mapEntry.namespaceDescriptor.____types != null) && mapEntry.namespaceDescriptor.____types) {
	          types = mapEntry.namespaceDescriptor.____types;
	          if (Object.prototype.toString.call(types) === '[object String]') {
	            types = [types];
	          }
	        } else {
	          if ((mapEntry.namespaceDescriptor.____accept != null) && mapEntry.namespaceDescriptor.____accept) {
	            types = mapEntry.namespaceDescriptor.____accept;
	            if (Object.prototype.toString.call(types) === '[object String]') {
	              types = [types];
	            }
	            considerSubnamespaces = false;
	          } else {
	            if ((mapEntry.namespaceDescriptor.____opaque != null) && mapEntry.namespaceDescriptor.____opaque) {
	              types = ['jsUndefined', 'jsNull', 'jsBoolean', 'jsNumber', 'jsObject', 'jsFunction', 'jsString', 'jsArray'];
	              considerSubnamespace = false;
	            }
	          }
	        }
	        if ((mapEntry.namespaceDescriptor.____defaultValue != null) && mapEntry.namespaceDescriptor.____defaultValue) {
	          types.push('jsUndefined');
	        }
	        for (i = 0, len = types.length; i < len; i++) {
	          type = types[i];
	          vertexId = mapEntry.parentVertex + mapEntry.parentNamespaceName + "(" + type + ")";
	          if (!request_.graph.isVertex(vertexId)) {
	            request_.graph.addVertex({
	              u: vertexId,
	              p: {
	                filterSpecPath: mapEntry.path,
	                filters: [operationID],
	                color: "white",
	                typeConstraint: type
	              }
	            });
	          } else {
	            vertexProperty = request_.graph.getVertexProperty(vertexId);
	            vertexProperty.filters.push(operationID);
	            request_.graph.setVertexProperty({
	              u: vertexId,
	              p: vertexProperty
	            });
	          }
	          request_.graph.addEdge({
	            e: {
	              u: mapEntry.parentVertex,
	              v: vertexId
	            }
	          });
	          if ((!considerSubnamespaces) || (type === 'jsUndefined') || (type === 'jsArray')) {
	            continue;
	          }
	          for (subnamespaceName in mapEntry.namespaceDescriptor) {
	            if (subnamespaceName.indexOf('____') !== 0) {
	              mapQueue.push({
	                parentVertex: vertexId,
	                parentNamespaceName: "." + subnamespaceName,
	                path: mapEntry.path + "." + subnamespaceName,
	                namespaceDescriptor: mapEntry.namespaceDescriptor[subnamespaceName]
	              });
	            }
	          }
	        }
	      }
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var FILTERLIB, generateDiscriminatorRuntimeFilter;

	  FILTERLIB = __webpack_require__(1);

	  generateDiscriminatorRuntimeFilter = module.exports = function(runtimeContext_) {
	    var errors, inBreakScope, innerResponse, response, runtimeContext;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    runtimeContext = runtimeContext_;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      innerResponse = FILTERLIB.create({
	        operationID: "XY-x390CSVmXTu0oYXlRiw",
	        operationName: "Discrimintor Filter",
	        operationDescription: "Discriminates between N disjunct request signatures.",
	        bodyFunction: function(request_) {
	          response = {
	            error: null,
	            response: null
	          };
	          errors = [];
	          inBreakScope = false;
	          while (!inBreakScope) {
	            inBreakScope = true;
	            console.log("In " + this.operationName + ":" + this.operationID);
	            console.log("runtime context = " + (JSON.stringify(runtimeContext)));
	            break;
	          }
	          if (errors.length) {
	            response.error = errors.join(" ");
	          }
	          return response;
	        }
	      });
	      if (innerResponse.error) {
	        errors.unshift(innerResponse.error);
	        errors.unshift("Unable to generate discriminator filter runtime due to error:");
	        break;
	      }
	      response.result = innerResponse.result;
	      break;
	    }
	    if (errors.length) {
	      response.error = errors.join(" ");
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var IDLIB, UTILLIB, analyzeFilterSpecGraphVertex, buildDiscriminatorChoiceSets;

	  UTILLIB = __webpack_require__(10);

	  IDLIB = __webpack_require__(2);

	  buildDiscriminatorChoiceSets = module.exports = function(request_) {
	    var discriminatorScript, errors, inBreakScope, index, innerResponse, response, uprop, vertex;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    index = 0;
	    vertex = null;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      uprop = request_.digraph.getVertexProperty("request");
	      if (uprop.color === "gold") {
	        if (request_.digraph.outDegree("request")) {
	          errors.unshift("Cannot create mutual exclusion set tree for merged filter spec model containing only one filter spec.");
	          break;
	        } else {
	          errors.unshift("Cannot create mutual exclusion set tree for merged filter spec model because it's null.");
	          break;
	        }
	      }
	      discriminatorScript = [];
	      while (index < request_.bfsVertices.length) {
	        vertex = request_.bfsVertices[index];
	        innerResponse = analyzeFilterSpecGraphVertex({
	          digraph: request_.digraph,
	          vertex: vertex
	        });
	        if (innerResponse.error) {
	          errors.unshift(innerResponse.error);
	          break;
	        }
	        discriminatorScript.push(innerResponse.result);
	        index++;
	      }
	      if (errors.length) {
	        break;
	      }
	      response.result = discriminatorScript;
	    }
	    if (errors.length) {
	      response.error = errors.join(" ");
	    }
	    console.log("Choice Sets:");
	    console.log(JSON.stringify(response, void 0, 4) + "\n\n");
	    return response;
	  };

	  analyzeFilterSpecGraphVertex = function(request_) {
	    var choices, errors, inBreakScope, outEdges, response, uprop;
	    response = {
	      error: null,
	      result: null
	    };
	    errors = [];
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      uprop = request_.digraph.getVertexProperty(request_.vertex);
	      switch (uprop.color) {
	        case "gold":
	          response.result = {
	            truth: {
	              filterID: uprop.filters[0],
	              filterSpecPath: uprop.filterSpecPath,
	              typeConstraint: uprop.typeConstraint
	            }
	          };
	          break;
	        case "green":
	          choices = {};
	          outEdges = request_.digraph.outEdges(request_.vertex);
	          outEdges.forEach(function(edge_) {
	            var choiceKey, vprop;
	            vprop = request_.digraph.getVertexProperty(edge_.v);
	            choiceKey = vprop.filters.join(":") + ":" + vprop.filterSpecPath;
	            if (!((choices[choiceKey] != null) && choices[choiceKey])) {
	              choices[choiceKey] = {
	                disambiguate: {
	                  typeConstraints: [],
	                  filterSpecPath: vprop.filterSpecPath
	                }
	              };
	            }
	            return choices[choiceKey].disambiguate.typeConstraints.push(vprop.typeConstraint);
	          });
	          response.result = {
	            disambiguate: choices
	          };
	          break;
	        default:
	          errors.unshift("Unexpected graph coloration '" + uprop.color + "' discovered on vertex '" + request_.vertex + "'.");
	          break;
	      }
	      break;
	    }
	    if (errors.length) {
	      response.error = errors.join(" ");
	    }
	    return response;
	  };

	}).call(this);


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	----------------------------------------------------------------------
	 
	           +---+---+---+---+
	 chaos --> | J | B | U | S | --> order
	           +---+---+---+---+

	Copyright (C) 2015 Encapsule.io Bellevue, WA USA

	This software is licensed under the terms of the GNU Affero General
	Public License v3.0.

	Please review the included LICENSE file for specific agreement terms.
	See also: https://opensource.org/licenses/AGPL-3.0

	Source code:   https://github.com/encapsule.jbus
	Documentation: https://encapsule.io/projects/jbus/docs/common
	Licensing:     https://encapsule.io/licening

	----------------------------------------------------------------------
	 */

	(function() {
	  var MODULE, typeCodes, typeConvert, typeLUTS;

	  typeCodes = __webpack_require__(9);

	  typeLUTS = __webpack_require__(22);

	  typeConvert = __webpack_require__(21);

	  MODULE = {};


	  /*
	      request = {
	          value: JavaScript reference
	          types: jsCode (number [0,7] or array of jsCode's
	      }
	      response = {
	          error: null or string explaining why result and guidance are null
	          guidance: a string explaining the false result (often used in parameter validation error messages upstream)
	          result: jsMoniker string indicating the type of request.ref iff ref is in request.types. Otherwise, null.
	      }
	  
	      Note: The protocol for using refInJsTypeSet is slightly different than base request/response.
	  
	      if response.error then, as typical, the call failed and produced no response.result. response.error is a string explaining the failure.
	      if !response.error && response.result, then request.ref is in request.types and response.result is set to request.ref's jsMoniker string.
	      if !response.error && !response.result, then response.guidance is a string that explains the type check failure: "found X, expected Y, Z..."
	   */

	  MODULE.inTypeSet = function(request_) {
	    var convertResponse, errors, inBreakScope, response, typeMoniker, valueMoniker;
	    errors = [];
	    response = {
	      error: null,
	      guidance: null,
	      result: null
	    };
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      if (!((request_ != null) && (request_ != null))) {
	        errors.unshift("Missing request object in-parameter.");
	        break;
	      }
	      convertResponse = typeConvert({
	        to: 'jsTypeString',
	        from: 'jsReference',
	        value: request_
	      });
	      if (convertResponse.error) {
	        errors.unshift(convertResponse.error);
	        break;
	      }
	      if (convertResponse.result !== '[object Object]') {
	        errors.unshift("Invalid request: Expected value of type '[object Object]' but found '" + convertResponse.result + "' instead.");
	        break;
	      }
	      convertResponse = typeConvert({
	        to: 'jsMoniker',
	        from: 'jsReference',
	        value: request_.value
	      });
	      if (convertResponse.error) {
	        errors.unshift(convertResponse.error);
	        break;
	      }
	      valueMoniker = convertResponse.result;
	      convertResponse = typeConvert({
	        to: 'jsMoniker',
	        from: 'jsReference',
	        value: request_.types
	      });
	      if (convertResponse.error) {
	        errors.unshift(convertResponse.error);
	        break;
	      }
	      typeMoniker = convertResponse.result;
	      switch (typeMoniker) {
	        case 'jsString':
	          response.result = (request_.types === valueMoniker) && valueMoniker || false;
	          break;
	        case 'jsArray':
	          response.result = ((request_.types.indexOf(valueMoniker)) !== -1) && valueMoniker || false;
	          break;
	        default:
	          errors.unshift("Invalid request.types value type '" + typeMoniker + "'. Expected either '[object String]' (jsMoniker string) or '[object Array]' (of jsMoniker strings).");
	          break;
	      }
	      if (errors.length) {
	        break;
	      }
	      if (!response.result) {
	        response.guidance = "Value of type '" + valueMoniker + "' not in allowed type set [" + request_.types + "].";
	      }
	    }
	    if (errors.length) {
	      errors.unshift("jbus type in set check failed:");
	      response.error = errors.join(' ');
	    }
	    return response;
	  };

	  MODULE.isJSON = function(value_) {
	    var convertResponse, errors, inBreakScope, response;
	    errors = [];
	    response = {
	      error: null,
	      guidance: null,
	      result: null
	    };
	    inBreakScope = false;
	    while (!inBreakScope) {
	      inBreakScope = true;
	      convertResponse = typeConvert({
	        to: 'jsonMoniker',
	        from: 'jsReference',
	        value: value_
	      });
	      if (convertResponse.error) {
	        response.guidance = convertResponse.error;
	        response.result = false;
	        break;
	      }
	      response.result = convertResponse.result;
	    }
	    if (errors.length) {
	      errors.unshift("jbus type JSON check failed:");
	      response.error = errors.join(' ');
	    }
	    return response;
	  };

	  module.exports = MODULE;

	}).call(this);


/***/ },
/* 63 */
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

	var FS = __webpack_require__(6);
	var PATH = __webpack_require__(12);
	var ARC_CORE = __webpack_require__(11);

	var response = ARC_CORE.filter.create({

	    operationID: "eftlEdnnQW2SXkDtcCHdig",
	    operationName: "Synchronous File & Directory Enumerator",
	    operationDescription: "Synchronous lookup of subdirectory and file paths of the indicated directory (or current working directory if none is specified).",

	    inputFilterSpec: {
	        ____label: "Enumerate Subdirectory Request",
	        ____description: "Enumerate subdirectory and files request object.",
	        ____types: "jsObject",
	        ____defaultValue: {},
	        parentDirectory: {
	            ____label: "Input Directory Path",
	            ____description: "Input directory path string or undefined to use the current working directory for the search.",
	            ____accept: [ "jsUndefined", "jsString" ]
	        },
	        fileCallback: {
	            ____label: "File Callback",
	            ____description: "Optional callback for determining if a file path should be included in the search results. Return true to include, false to exclude.",
	            ____accept: [ "jsUndefined", "jsFunction" ]
	        }
	    },

	    bodyFunction: function (request_) {
	        var response = { error: null, result: null };
	        var errors = []
	        var inBreakScope = false;
	        while (!inBreakScope) {
	            inBreakScope = true;
	            result = {
	                parentDirectory: null,
	                subDirectories: [],
	                files: []
	            };
	            if (request_.parentDirectory) {
	                if (!FS.existsSync(request_.parentDirectory)) {
	                    errors.unshift("The indicated path '" + request_.parentDirectory + "' does not exist.");
	                    break;
	                }
	                if (!FS.statSync(request_.parentDirectory).isDirectory()) {
	                    errors.unshift("The indicated path '" + request_.parentDirectory + "' is not a directory.");
	                    break;
	                }
	                var baseDirectory = request_.parentDirectory;
	                if (!PATH.isAbsolute(baseDirectory)) {
	                    baseDirectory = PATH.join(process.cwd(), baseDirectory);
	                }
	                result.parentDirectory = PATH.normalize(baseDirectory);
	            } else {
	                result.parentDirectory = process.cwd();
	            }
	            directoryStack = [ result.parentDirectory ];
	            while (directoryStack.length) {
	                directory = directoryStack.shift()
	                filenames = FS.readdirSync(directory) || [];
	                filenames.forEach(function(filename_) {
	                    var filePath = PATH.join(directory, filename_);
	                    if (FS.statSync(filePath).isDirectory()) {
	                        result.subDirectories.push(filePath);
	                        directoryStack.push(filePath);
	                    } else {
	                        if (request_.fileCallback) {
	                            var include = request_.fileCallback(filePath);
	                            if (include === true) {
	                                result.files.push(filePath);
	                            }
	                        }
	                    }
	                });
	            }
	            response.result = result;
	            break;
	        }
	        if (errors.length) {
	            response.error = errors.join(" ");
	        }
	        return response;
	    },

	    outputFilterSpec: {
	        ____label: "Subdirectory Paths",
	        ____description: "An array of subdirectory paths associated with the indicated parent directory path.",
	        ____types: "jsObject",
	        parentDirectory: {
	            ____label: "Parent Directory",
	            ____description: "The directory the search was performed from.",
	            ____accept: "jsString"
	        },
	        subDirectories: {
	            ____label: "Subdirectory Array",
	            ____description: "An array of subdirectory paths discovered within the parent directory.",
	            ____types: "jsArray",
	            path: {
	                ____label: "Subdirectory Path",
	                ____description: "A subdirectory path string.",
	                ____accept: "jsString"
	            }
	        },
	        files: {
	            ____label: "Files Array",
	            ____description: "An array of file paths accepted by your optional file handler callback.",
	            ____types: "jsArray",
	            path: {
	                ____label: "Subdirectory Path",
	                ____description: "A subdirectory path string.",
	                ____accept: "jsString"
	            }
	        }
	    }
	});

	if (response.error) {
	    throw new Error(response.error);
	}

	module.exports = response.result;


/***/ },
/* 64 */
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

	var ARC_CORE = __webpack_require__(11);

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


/***/ },
/* 65 */
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

	var FS = __webpack_require__(6);
	var PATH = __webpack_require__(12);
	var ARC_CORE = __webpack_require__(11);

	var response = ARC_CORE.filter.create({

	    operationID: "PTKIgSxMRJ6C-3Tb53SF9w",
	    operationName: "JavaScript Resource Loader",
	    operationDescription: "Loads an external JavaScript or JSON file and returns a JavaScript reference.",

	    inputFilterSpec: {
	        ____label: "Filesystem Resource Path",
	        ____description: "Local filesystem path to the JavaScript file resource to load.",
	        ____accept: "jsString"
	    },

	    bodyFunction: function(request_) {
	        var response = { error: null, result: null };
	        var errors = [];
	        var inBreakScope = false;
	        while (!inBreakScope) {
	            inBreakScope = true;
	            var resource = undefined;
	            var npath = request_
	            if (!FS.existsSync(npath)) {
	                errors.unshift("The indicated path '" + npath + "' does not exist.");
	                break;
	            }
	            if (!FS.statSync(npath).isFile()) {
	                errors.unshift("The indicated path '" + npath + "' is not a file.");
	                break;
	            }
	            if (!PATH.isAbsolute(npath)) {
	                npath = PATH.join(process.cwd(), npath);
	            }
	            npath = PATH.normalize(npath);
	            var fileContents = FS.readFileSync(npath);
	            try {
	                eval('resource = ' + fileContents);
	            } catch (error_) {
	                errors.unshift(error_.toString());
	                errors.unshift("Fatal exception executing JavaScript eval operator on filesystem path ` '" + npath + "':");
	            }
	            if (errors.length) {
	                break;
	            }
	            response.result = {
	                origin: npath,
	                resource: resource
	            };
	            break;
	        }
	        if (errors.length) {
	            response.error = errors.join(" ");
	        }
	        return response;
	    },

	    outputFilterSpec: {
	        ____label: "In-Memory JavaScript Resource",
	        ____description: "An in-memory JavaScript resource loaded dynamically from a local file resource.",
	        ____types: "jsObject",
	        origin: {
	            ____label: "Resource Path",
	            ____description: "The local filesystem path from which the resource was loaded.",
	            ____accept: "jsString"
	        },
	        resource: {
	            ____label: "Resource",
	            ____description: "In-memory JavaScript resource reference (variant type).",
	            ____opaque: true
	        }
	    }

	});

	if (response.error) {
	    throw new Error(response.error);
	}

	module.exports = response.result;


/***/ },
/* 66 */
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

	var FS = __webpack_require__(6);
	var PATH = __webpack_require__(12);
	var ARC_CORE = __webpack_require__(11);

	var response = ARC_CORE.filter.create({

	    operationID: "h3PzBZmHTCWs7os5SQsXxg",
	    operationName: "Resource Writer",
	    operationDescription: "Writes a string to the specified file on local filesystem.",

	    inputFilterSpec: {
	        ____label: "Resource Writer Request",
	        ____description: "Resource writer request object.",
	        ____types: "jsObject",
	        resource: {
	            ____label: "Resource String",
	            ____description: "Resource string to write to file.",
	            ____accept: "jsString"
	        },
	        path: {
	            ____label: "Filesystem Resource Path",
	            ____description: "Local filesystem path to the JavaScript file resource to load.",
	            ____accept: "jsString"
	        }
	    },

	    bodyFunction: function(request_) {
	        var response = { error: null, result: null };
	        var errors = [];
	        var inBreakScope = false;
	        while (!inBreakScope) {
	            inBreakScope = true;
	            var resource = undefined;
	            var npath = request_.path
	            if (!PATH.isAbsolute(npath)) {
	                npath = PATH.join(process.cwd(), npath);
	            }
	            npath = PATH.normalize(npath);

	            try {
	                FS.writeFileSync(npath, request_.resource);
	            } catch (error_) {
	                errors.unshift(error_.toString());
	            }

	            if (errors.length) {
	                break;
	            } else {
	                response.result = {
	                    origin: npath,
	                    resource: resource
	                };
	            }
	            break;
	        }
	        if (errors.length) {
	            response.error = errors.join(" ");
	        }
	        return response;
	    }


	});

	if (response.error) {
	    throw new Error(response.error);
	}

	module.exports = response.result;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	
	var chalk = __webpack_require__(14);
	var clistyle = __webpack_require__(24);
	var ARCBUILD = __webpack_require__(23);

	module.exports = function(toolName_) {

	    var banner =
		clistyle.bannerEnter(
		    "**** " +
			clistyle.bannerAuthor("Encapsule") + "/" +
			clistyle.bannerPackage("arctools") + "::" +
			clistyle.bannerToolname(toolName_) +
			" v" + ARCBUILD.version +
			" release \"" + clistyle.bannerRelease(ARCBUILD.codename) + "\"" +
			" build \"" + clistyle.bannerBuild(ARCBUILD.buildID) + "\" ****"
		);

	    return banner;

	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	function assembleStyles () {
		var styles = {
			modifiers: {
				reset: [0, 0],
				bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			colors: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				gray: [90, 39]
			},
			bgColors: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49]
			}
		};

		// fix humans
		styles.colors.grey = styles.colors.gray;

		Object.keys(styles).forEach(function (groupName) {
			var group = styles[groupName];

			Object.keys(group).forEach(function (styleName) {
				var style = group[styleName];

				styles[styleName] = group[styleName] = {
					open: '\u001b[' + style[0] + 'm',
					close: '\u001b[' + style[1] + 'm'
				};
			});

			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});
		});

		return styles;
	}

	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)(module)))

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	var argv = process.argv;

	var terminator = argv.indexOf('--');
	var hasFlag = function (flag) {
		flag = '--' + flag;
		var pos = argv.indexOf(flag);
		return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
	};

	module.exports = (function () {
		if ('FORCE_COLOR' in process.env) {
			return true;
		}

		if (hasFlag('no-color') ||
			hasFlag('no-colors') ||
			hasFlag('color=false')) {
			return false;
		}

		if (hasFlag('color') ||
			hasFlag('colors') ||
			hasFlag('color=true') ||
			hasFlag('color=always')) {
			return true;
		}

		if (process.stdout && !process.stdout.isTTY) {
			return false;
		}

		if (process.platform === 'win32') {
			return true;
		}

		if ('COLORTERM' in process.env) {
			return true;
		}

		if (process.env.TERM === 'dumb') {
			return false;
		}

		if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
			return true;
		}

		return false;
	})();


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var EventEmitter = __webpack_require__(79).EventEmitter;
	var spawn = __webpack_require__(78).spawn;
	var readlink = __webpack_require__(72).readlinkSync;
	var path = __webpack_require__(12);
	var dirname = path.dirname;
	var basename = path.basename;
	var fs = __webpack_require__(6);

	/**
	 * Expose the root command.
	 */

	exports = module.exports = new Command();

	/**
	 * Expose `Command`.
	 */

	exports.Command = Command;

	/**
	 * Expose `Option`.
	 */

	exports.Option = Option;

	/**
	 * Initialize a new `Option` with the given `flags` and `description`.
	 *
	 * @param {String} flags
	 * @param {String} description
	 * @api public
	 */

	function Option(flags, description) {
	  this.flags = flags;
	  this.required = ~flags.indexOf('<');
	  this.optional = ~flags.indexOf('[');
	  this.bool = !~flags.indexOf('-no-');
	  flags = flags.split(/[ ,|]+/);
	  if (flags.length > 1 && !/^[[<]/.test(flags[1])) this.short = flags.shift();
	  this.long = flags.shift();
	  this.description = description || '';
	}

	/**
	 * Return option name.
	 *
	 * @return {String}
	 * @api private
	 */

	Option.prototype.name = function() {
	  return this.long
	    .replace('--', '')
	    .replace('no-', '');
	};

	/**
	 * Check if `arg` matches the short or long flag.
	 *
	 * @param {String} arg
	 * @return {Boolean}
	 * @api private
	 */

	Option.prototype.is = function(arg) {
	  return arg == this.short || arg == this.long;
	};

	/**
	 * Initialize a new `Command`.
	 *
	 * @param {String} name
	 * @api public
	 */

	function Command(name) {
	  this.commands = [];
	  this.options = [];
	  this._execs = {};
	  this._allowUnknownOption = false;
	  this._args = [];
	  this._name = name || '';
	}

	/**
	 * Inherit from `EventEmitter.prototype`.
	 */

	Command.prototype.__proto__ = EventEmitter.prototype;

	/**
	 * Add command `name`.
	 *
	 * The `.action()` callback is invoked when the
	 * command `name` is specified via __ARGV__,
	 * and the remaining arguments are applied to the
	 * function for access.
	 *
	 * When the `name` is "*" an un-matched command
	 * will be passed as the first arg, followed by
	 * the rest of __ARGV__ remaining.
	 *
	 * Examples:
	 *
	 *      program
	 *        .version('0.0.1')
	 *        .option('-C, --chdir <path>', 'change the working directory')
	 *        .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
	 *        .option('-T, --no-tests', 'ignore test hook')
	 *
	 *      program
	 *        .command('setup')
	 *        .description('run remote setup commands')
	 *        .action(function() {
	 *          console.log('setup');
	 *        });
	 *
	 *      program
	 *        .command('exec <cmd>')
	 *        .description('run the given remote command')
	 *        .action(function(cmd) {
	 *          console.log('exec "%s"', cmd);
	 *        });
	 *
	 *      program
	 *        .command('teardown <dir> [otherDirs...]')
	 *        .description('run teardown commands')
	 *        .action(function(dir, otherDirs) {
	 *          console.log('dir "%s"', dir);
	 *          if (otherDirs) {
	 *            otherDirs.forEach(function (oDir) {
	 *              console.log('dir "%s"', oDir);
	 *            });
	 *          }
	 *        });
	 *
	 *      program
	 *        .command('*')
	 *        .description('deploy the given env')
	 *        .action(function(env) {
	 *          console.log('deploying "%s"', env);
	 *        });
	 *
	 *      program.parse(process.argv);
	  *
	 * @param {String} name
	 * @param {String} [desc] for git-style sub-commands
	 * @return {Command} the new command
	 * @api public
	 */

	Command.prototype.command = function(name, desc, opts) {
	  opts = opts || {};
	  var args = name.split(/ +/);
	  var cmd = new Command(args.shift());

	  if (desc) {
	    cmd.description(desc);
	    this.executables = true;
	    this._execs[cmd._name] = true;
	    if (opts.isDefault) this.defaultExecutable = cmd._name;
	  }

	  cmd._noHelp = !!opts.noHelp;
	  this.commands.push(cmd);
	  cmd.parseExpectedArgs(args);
	  cmd.parent = this;

	  if (desc) return this;
	  return cmd;
	};

	/**
	 * Define argument syntax for the top-level command.
	 *
	 * @api public
	 */

	Command.prototype.arguments = function (desc) {
	  return this.parseExpectedArgs(desc.split(/ +/));
	};

	/**
	 * Add an implicit `help [cmd]` subcommand
	 * which invokes `--help` for the given command.
	 *
	 * @api private
	 */

	Command.prototype.addImplicitHelpCommand = function() {
	  this.command('help [cmd]', 'display help for [cmd]');
	};

	/**
	 * Parse expected `args`.
	 *
	 * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
	 *
	 * @param {Array} args
	 * @return {Command} for chaining
	 * @api public
	 */

	Command.prototype.parseExpectedArgs = function(args) {
	  if (!args.length) return;
	  var self = this;
	  args.forEach(function(arg) {
	    var argDetails = {
	      required: false,
	      name: '',
	      variadic: false
	    };

	    switch (arg[0]) {
	      case '<':
	        argDetails.required = true;
	        argDetails.name = arg.slice(1, -1);
	        break;
	      case '[':
	        argDetails.name = arg.slice(1, -1);
	        break;
	    }

	    if (argDetails.name.length > 3 && argDetails.name.slice(-3) === '...') {
	      argDetails.variadic = true;
	      argDetails.name = argDetails.name.slice(0, -3);
	    }
	    if (argDetails.name) {
	      self._args.push(argDetails);
	    }
	  });
	  return this;
	};

	/**
	 * Register callback `fn` for the command.
	 *
	 * Examples:
	 *
	 *      program
	 *        .command('help')
	 *        .description('display verbose help')
	 *        .action(function() {
	 *           // output help here
	 *        });
	 *
	 * @param {Function} fn
	 * @return {Command} for chaining
	 * @api public
	 */

	Command.prototype.action = function(fn) {
	  var self = this;
	  var listener = function(args, unknown) {
	    // Parse any so-far unknown options
	    args = args || [];
	    unknown = unknown || [];

	    var parsed = self.parseOptions(unknown);

	    // Output help if necessary
	    outputHelpIfNecessary(self, parsed.unknown);

	    // If there are still any unknown options, then we simply
	    // die, unless someone asked for help, in which case we give it
	    // to them, and then we die.
	    if (parsed.unknown.length > 0) {
	      self.unknownOption(parsed.unknown[0]);
	    }

	    // Leftover arguments need to be pushed back. Fixes issue #56
	    if (parsed.args.length) args = parsed.args.concat(args);

	    self._args.forEach(function(arg, i) {
	      if (arg.required && null == args[i]) {
	        self.missingArgument(arg.name);
	      } else if (arg.variadic) {
	        if (i !== self._args.length - 1) {
	          self.variadicArgNotLast(arg.name);
	        }

	        args[i] = args.splice(i);
	      }
	    });

	    // Always append ourselves to the end of the arguments,
	    // to make sure we match the number of arguments the user
	    // expects
	    if (self._args.length) {
	      args[self._args.length] = self;
	    } else {
	      args.push(self);
	    }

	    fn.apply(self, args);
	  };
	  var parent = this.parent || this;
	  var name = parent === this ? '*' : this._name;
	  parent.on(name, listener);
	  if (this._alias) parent.on(this._alias, listener);
	  return this;
	};

	/**
	 * Define option with `flags`, `description` and optional
	 * coercion `fn`.
	 *
	 * The `flags` string should contain both the short and long flags,
	 * separated by comma, a pipe or space. The following are all valid
	 * all will output this way when `--help` is used.
	 *
	 *    "-p, --pepper"
	 *    "-p|--pepper"
	 *    "-p --pepper"
	 *
	 * Examples:
	 *
	 *     // simple boolean defaulting to false
	 *     program.option('-p, --pepper', 'add pepper');
	 *
	 *     --pepper
	 *     program.pepper
	 *     // => Boolean
	 *
	 *     // simple boolean defaulting to true
	 *     program.option('-C, --no-cheese', 'remove cheese');
	 *
	 *     program.cheese
	 *     // => true
	 *
	 *     --no-cheese
	 *     program.cheese
	 *     // => false
	 *
	 *     // required argument
	 *     program.option('-C, --chdir <path>', 'change the working directory');
	 *
	 *     --chdir /tmp
	 *     program.chdir
	 *     // => "/tmp"
	 *
	 *     // optional argument
	 *     program.option('-c, --cheese [type]', 'add cheese [marble]');
	 *
	 * @param {String} flags
	 * @param {String} description
	 * @param {Function|Mixed} fn or default
	 * @param {Mixed} defaultValue
	 * @return {Command} for chaining
	 * @api public
	 */

	Command.prototype.option = function(flags, description, fn, defaultValue) {
	  var self = this
	    , option = new Option(flags, description)
	    , oname = option.name()
	    , name = camelcase(oname);

	  // default as 3rd arg
	  if (typeof fn != 'function') {
	    if (fn instanceof RegExp) {
	      var regex = fn;
	      fn = function(val, def) {
	        var m = regex.exec(val);
	        return m ? m[0] : def;
	      }
	    }
	    else {
	      defaultValue = fn;
	      fn = null;
	    }
	  }

	  // preassign default value only for --no-*, [optional], or <required>
	  if (false == option.bool || option.optional || option.required) {
	    // when --no-* we make sure default is true
	    if (false == option.bool) defaultValue = true;
	    // preassign only if we have a default
	    if (undefined !== defaultValue) self[name] = defaultValue;
	  }

	  // register the option
	  this.options.push(option);

	  // when it's passed assign the value
	  // and conditionally invoke the callback
	  this.on(oname, function(val) {
	    // coercion
	    if (null !== val && fn) val = fn(val, undefined === self[name]
	      ? defaultValue
	      : self[name]);

	    // unassigned or bool
	    if ('boolean' == typeof self[name] || 'undefined' == typeof self[name]) {
	      // if no value, bool true, and we have a default, then use it!
	      if (null == val) {
	        self[name] = option.bool
	          ? defaultValue || true
	          : false;
	      } else {
	        self[name] = val;
	      }
	    } else if (null !== val) {
	      // reassign
	      self[name] = val;
	    }
	  });

	  return this;
	};

	/**
	 * Allow unknown options on the command line.
	 *
	 * @param {Boolean} arg if `true` or omitted, no error will be thrown
	 * for unknown options.
	 * @api public
	 */
	Command.prototype.allowUnknownOption = function(arg) {
	    this._allowUnknownOption = arguments.length === 0 || arg;
	    return this;
	};

	/**
	 * Parse `argv`, settings options and invoking commands when defined.
	 *
	 * @param {Array} argv
	 * @return {Command} for chaining
	 * @api public
	 */

	Command.prototype.parse = function(argv) {
	  // implicit help
	  if (this.executables) this.addImplicitHelpCommand();

	  // store raw args
	  this.rawArgs = argv;

	  // guess name
	  this._name = this._name || basename(argv[1], '.js');

	  // github-style sub-commands with no sub-command
	  if (this.executables && argv.length < 3 && !this.defaultExecutable) {
	    // this user needs help
	    argv.push('--help');
	  }

	  // process argv
	  var parsed = this.parseOptions(this.normalize(argv.slice(2)));
	  var args = this.args = parsed.args;

	  var result = this.parseArgs(this.args, parsed.unknown);

	  // executable sub-commands
	  var name = result.args[0];
	  if (this._execs[name] && typeof this._execs[name] != "function") {
	    return this.executeSubCommand(argv, args, parsed.unknown);
	  } else if (this.defaultExecutable) {
	    // use the default subcommand
	    args.unshift(name = this.defaultExecutable);
	    return this.executeSubCommand(argv, args, parsed.unknown);
	  }

	  return result;
	};

	/**
	 * Execute a sub-command executable.
	 *
	 * @param {Array} argv
	 * @param {Array} args
	 * @param {Array} unknown
	 * @api private
	 */

	Command.prototype.executeSubCommand = function(argv, args, unknown) {
	  args = args.concat(unknown);

	  if (!args.length) this.help();
	  if ('help' == args[0] && 1 == args.length) this.help();

	  // <cmd> --help
	  if ('help' == args[0]) {
	    args[0] = args[1];
	    args[1] = '--help';
	  }

	  // executable
	  var f = argv[1];
	  // name of the subcommand, link `pm-install`
	  var bin = basename(f, '.js') + '-' + args[0];


	  // In case of globally installed, get the base dir where executable
	  //  subcommand file should be located at
	  var baseDir
	    , link = readlink(f);

	  // when symbolink is relative path
	  if (link !== f && link.charAt(0) !== '/') {
	    link = path.join(dirname(f), link)
	  }
	  baseDir = dirname(link);

	  // prefer local `./<bin>` to bin in the $PATH
	  var localBin = path.join(baseDir, bin);

	  // whether bin file is a js script with explicit `.js` extension
	  var isExplicitJS = false;
	  if (exists(localBin + '.js')) {
	    bin = localBin + '.js';
	    isExplicitJS = true;
	  } else if (exists(localBin)) {
	    bin = localBin;
	  }

	  args = args.slice(1);

	  var proc;
	  if (process.platform !== 'win32') {
	    if (isExplicitJS) {
	      args.unshift(localBin);
	      // add executable arguments to spawn
	      args = (process.execArgv || []).concat(args);

	      proc = spawn('node', args, { stdio: 'inherit', customFds: [0, 1, 2] });
	    } else {
	      proc = spawn(bin, args, { stdio: 'inherit', customFds: [0, 1, 2] });
	    }
	  } else {
	    args.unshift(localBin);
	    proc = spawn(process.execPath, args, { stdio: 'inherit'});
	  }

	  proc.on('close', process.exit.bind(process));
	  proc.on('error', function(err) {
	    if (err.code == "ENOENT") {
	      console.error('\n  %s(1) does not exist, try --help\n', bin);
	    } else if (err.code == "EACCES") {
	      console.error('\n  %s(1) not executable. try chmod or run with root\n', bin);
	    }
	    process.exit(1);
	  });

	  // Store the reference to the child process
	  this.runningCommand = proc;
	};

	/**
	 * Normalize `args`, splitting joined short flags. For example
	 * the arg "-abc" is equivalent to "-a -b -c".
	 * This also normalizes equal sign and splits "--abc=def" into "--abc def".
	 *
	 * @param {Array} args
	 * @return {Array}
	 * @api private
	 */

	Command.prototype.normalize = function(args) {
	  var ret = []
	    , arg
	    , lastOpt
	    , index;

	  for (var i = 0, len = args.length; i < len; ++i) {
	    arg = args[i];
	    if (i > 0) {
	      lastOpt = this.optionFor(args[i-1]);
	    }

	    if (arg === '--') {
	      // Honor option terminator
	      ret = ret.concat(args.slice(i));
	      break;
	    } else if (lastOpt && lastOpt.required) {
	      ret.push(arg);
	    } else if (arg.length > 1 && '-' == arg[0] && '-' != arg[1]) {
	      arg.slice(1).split('').forEach(function(c) {
	        ret.push('-' + c);
	      });
	    } else if (/^--/.test(arg) && ~(index = arg.indexOf('='))) {
	      ret.push(arg.slice(0, index), arg.slice(index + 1));
	    } else {
	      ret.push(arg);
	    }
	  }

	  return ret;
	};

	/**
	 * Parse command `args`.
	 *
	 * When listener(s) are available those
	 * callbacks are invoked, otherwise the "*"
	 * event is emitted and those actions are invoked.
	 *
	 * @param {Array} args
	 * @return {Command} for chaining
	 * @api private
	 */

	Command.prototype.parseArgs = function(args, unknown) {
	  var name;

	  if (args.length) {
	    name = args[0];
	    if (this.listeners(name).length) {
	      this.emit(args.shift(), args, unknown);
	    } else {
	      this.emit('*', args);
	    }
	  } else {
	    outputHelpIfNecessary(this, unknown);

	    // If there were no args and we have unknown options,
	    // then they are extraneous and we need to error.
	    if (unknown.length > 0) {
	      this.unknownOption(unknown[0]);
	    }
	  }

	  return this;
	};

	/**
	 * Return an option matching `arg` if any.
	 *
	 * @param {String} arg
	 * @return {Option}
	 * @api private
	 */

	Command.prototype.optionFor = function(arg) {
	  for (var i = 0, len = this.options.length; i < len; ++i) {
	    if (this.options[i].is(arg)) {
	      return this.options[i];
	    }
	  }
	};

	/**
	 * Parse options from `argv` returning `argv`
	 * void of these options.
	 *
	 * @param {Array} argv
	 * @return {Array}
	 * @api public
	 */

	Command.prototype.parseOptions = function(argv) {
	  var args = []
	    , len = argv.length
	    , literal
	    , option
	    , arg;

	  var unknownOptions = [];

	  // parse options
	  for (var i = 0; i < len; ++i) {
	    arg = argv[i];

	    // literal args after --
	    if ('--' == arg) {
	      literal = true;
	      continue;
	    }

	    if (literal) {
	      args.push(arg);
	      continue;
	    }

	    // find matching Option
	    option = this.optionFor(arg);

	    // option is defined
	    if (option) {
	      // requires arg
	      if (option.required) {
	        arg = argv[++i];
	        if (null == arg) return this.optionMissingArgument(option);
	        this.emit(option.name(), arg);
	      // optional arg
	      } else if (option.optional) {
	        arg = argv[i+1];
	        if (null == arg || ('-' == arg[0] && '-' != arg)) {
	          arg = null;
	        } else {
	          ++i;
	        }
	        this.emit(option.name(), arg);
	      // bool
	      } else {
	        this.emit(option.name());
	      }
	      continue;
	    }

	    // looks like an option
	    if (arg.length > 1 && '-' == arg[0]) {
	      unknownOptions.push(arg);

	      // If the next argument looks like it might be
	      // an argument for this option, we pass it on.
	      // If it isn't, then it'll simply be ignored
	      if (argv[i+1] && '-' != argv[i+1][0]) {
	        unknownOptions.push(argv[++i]);
	      }
	      continue;
	    }

	    // arg
	    args.push(arg);
	  }

	  return { args: args, unknown: unknownOptions };
	};

	/**
	 * Return an object containing options as key-value pairs
	 *
	 * @return {Object}
	 * @api public
	 */
	Command.prototype.opts = function() {
	  var result = {}
	    , len = this.options.length;

	  for (var i = 0 ; i < len; i++) {
	    var key = camelcase(this.options[i].name());
	    result[key] = key === 'version' ? this._version : this[key];
	  }
	  return result;
	};

	/**
	 * Argument `name` is missing.
	 *
	 * @param {String} name
	 * @api private
	 */

	Command.prototype.missingArgument = function(name) {
	  console.error();
	  console.error("  error: missing required argument `%s'", name);
	  console.error();
	  process.exit(1);
	};

	/**
	 * `Option` is missing an argument, but received `flag` or nothing.
	 *
	 * @param {String} option
	 * @param {String} flag
	 * @api private
	 */

	Command.prototype.optionMissingArgument = function(option, flag) {
	  console.error();
	  if (flag) {
	    console.error("  error: option `%s' argument missing, got `%s'", option.flags, flag);
	  } else {
	    console.error("  error: option `%s' argument missing", option.flags);
	  }
	  console.error();
	  process.exit(1);
	};

	/**
	 * Unknown option `flag`.
	 *
	 * @param {String} flag
	 * @api private
	 */

	Command.prototype.unknownOption = function(flag) {
	  if (this._allowUnknownOption) return;
	  console.error();
	  console.error("  error: unknown option `%s'", flag);
	  console.error();
	  process.exit(1);
	};

	/**
	 * Variadic argument with `name` is not the last argument as required.
	 *
	 * @param {String} name
	 * @api private
	 */

	Command.prototype.variadicArgNotLast = function(name) {
	  console.error();
	  console.error("  error: variadic arguments must be last `%s'", name);
	  console.error();
	  process.exit(1);
	};

	/**
	 * Set the program version to `str`.
	 *
	 * This method auto-registers the "-V, --version" flag
	 * which will print the version number when passed.
	 *
	 * @param {String} str
	 * @param {String} flags
	 * @return {Command} for chaining
	 * @api public
	 */

	Command.prototype.version = function(str, flags) {
	  if (0 == arguments.length) return this._version;
	  this._version = str;
	  flags = flags || '-V, --version';
	  this.option(flags, 'output the version number');
	  this.on('version', function() {
	    process.stdout.write(str + '\n');
	    process.exit(0);
	  });
	  return this;
	};

	/**
	 * Set the description to `str`.
	 *
	 * @param {String} str
	 * @return {String|Command}
	 * @api public
	 */

	Command.prototype.description = function(str) {
	  if (0 === arguments.length) return this._description;
	  this._description = str;
	  return this;
	};

	/**
	 * Set an alias for the command
	 *
	 * @param {String} alias
	 * @return {String|Command}
	 * @api public
	 */

	Command.prototype.alias = function(alias) {
	  if (0 == arguments.length) return this._alias;
	  this._alias = alias;
	  return this;
	};

	/**
	 * Set / get the command usage `str`.
	 *
	 * @param {String} str
	 * @return {String|Command}
	 * @api public
	 */

	Command.prototype.usage = function(str) {
	  var args = this._args.map(function(arg) {
	    return humanReadableArgName(arg);
	  });

	  var usage = '[options]'
	    + (this.commands.length ? ' [command]' : '')
	    + (this._args.length ? ' ' + args.join(' ') : '');

	  if (0 == arguments.length) return this._usage || usage;
	  this._usage = str;

	  return this;
	};

	/**
	 * Get the name of the command
	 *
	 * @param {String} name
	 * @return {String|Command}
	 * @api public
	 */

	Command.prototype.name = function() {
	  return this._name;
	};

	/**
	 * Return the largest option length.
	 *
	 * @return {Number}
	 * @api private
	 */

	Command.prototype.largestOptionLength = function() {
	  return this.options.reduce(function(max, option) {
	    return Math.max(max, option.flags.length);
	  }, 0);
	};

	/**
	 * Return help for options.
	 *
	 * @return {String}
	 * @api private
	 */

	Command.prototype.optionHelp = function() {
	  var width = this.largestOptionLength();

	  // Prepend the help information
	  return [pad('-h, --help', width) + '  ' + 'output usage information']
	      .concat(this.options.map(function(option) {
	        return pad(option.flags, width) + '  ' + option.description;
	      }))
	      .join('\n');
	};

	/**
	 * Return command help documentation.
	 *
	 * @return {String}
	 * @api private
	 */

	Command.prototype.commandHelp = function() {
	  if (!this.commands.length) return '';

	  var commands = this.commands.filter(function(cmd) {
	    return !cmd._noHelp;
	  }).map(function(cmd) {
	    var args = cmd._args.map(function(arg) {
	      return humanReadableArgName(arg);
	    }).join(' ');

	    return [
	      cmd._name
	        + (cmd._alias ? '|' + cmd._alias : '')
	        + (cmd.options.length ? ' [options]' : '')
	        + ' ' + args
	      , cmd.description()
	    ];
	  });

	  var width = commands.reduce(function(max, command) {
	    return Math.max(max, command[0].length);
	  }, 0);

	  return [
	    ''
	    , '  Commands:'
	    , ''
	    , commands.map(function(cmd) {
	      var desc = cmd[1] ? '  ' + cmd[1] : '';
	      return pad(cmd[0], width) + desc;
	    }).join('\n').replace(/^/gm, '    ')
	    , ''
	  ].join('\n');
	};

	/**
	 * Return program help documentation.
	 *
	 * @return {String}
	 * @api private
	 */

	Command.prototype.helpInformation = function() {
	  var desc = [];
	  if (this._description) {
	    desc = [
	      '  ' + this._description
	      , ''
	    ];
	  }

	  var cmdName = this._name;
	  if (this._alias) {
	    cmdName = cmdName + '|' + this._alias;
	  }
	  var usage = [
	    ''
	    ,'  Usage: ' + cmdName + ' ' + this.usage()
	    , ''
	  ];

	  var cmds = [];
	  var commandHelp = this.commandHelp();
	  if (commandHelp) cmds = [commandHelp];

	  var options = [
	    '  Options:'
	    , ''
	    , '' + this.optionHelp().replace(/^/gm, '    ')
	    , ''
	    , ''
	  ];

	  return usage
	    .concat(cmds)
	    .concat(desc)
	    .concat(options)
	    .join('\n');
	};

	/**
	 * Output help information for this command
	 *
	 * @api public
	 */

	Command.prototype.outputHelp = function(cb) {
	  if (!cb) {
	    cb = function(passthru) {
	      return passthru;
	    }
	  }
	  process.stdout.write(cb(this.helpInformation()));
	  this.emit('--help');
	};

	/**
	 * Output help information and exit.
	 *
	 * @api public
	 */

	Command.prototype.help = function(cb) {
	  this.outputHelp(cb);
	  process.exit();
	};

	/**
	 * Camel-case the given `flag`
	 *
	 * @param {String} flag
	 * @return {String}
	 * @api private
	 */

	function camelcase(flag) {
	  return flag.split('-').reduce(function(str, word) {
	    return str + word[0].toUpperCase() + word.slice(1);
	  });
	}

	/**
	 * Pad `str` to `width`.
	 *
	 * @param {String} str
	 * @param {Number} width
	 * @return {String}
	 * @api private
	 */

	function pad(str, width) {
	  var len = Math.max(0, width - str.length);
	  return str + Array(len + 1).join(' ');
	}

	/**
	 * Output help information if necessary
	 *
	 * @param {Command} command to output help for
	 * @param {Array} array of options to search for -h or --help
	 * @api private
	 */

	function outputHelpIfNecessary(cmd, options) {
	  options = options || [];
	  for (var i = 0; i < options.length; i++) {
	    if (options[i] == '--help' || options[i] == '-h') {
	      cmd.outputHelp();
	      process.exit(0);
	    }
	  }
	}

	/**
	 * Takes an argument an returns its human readable equivalent for help usage.
	 *
	 * @param {Object} arg
	 * @return {String}
	 * @api private
	 */

	function humanReadableArgName(arg) {
	  var nameOutput = arg.name + (arg.variadic === true ? '...' : '');

	  return arg.required
	    ? '<' + nameOutput + '>'
	    : '[' + nameOutput + ']'
	}

	// for versions before node v0.8 when there weren't `fs.existsSync`
	function exists(file) {
	  try {
	    if (fs.statSync(file).isFile()) {
	      return true;
	    }
	  } catch (e) {
	    return false;
	  }
	}



/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		return str.replace(matchOperatorsRe,  '\\$&');
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(6)
	  , lstat = fs.lstatSync;

	exports.readlinkSync = function (p) {
	  if (lstat(p).isSymbolicLink()) {
	    return fs.readlinkSync(p);
	  } else {
	    return p;
	  }
	};




/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(25);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * JS Implementation of MurmurHash2
	 * 
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/murmurhash-js
	 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	 * @see http://sites.google.com/site/murmurhash/
	 * 
	 * @param {string} str ASCII only
	 * @param {number} seed Positive integer only
	 * @return {number} 32-bit positive integer hash
	 */

	function murmurhash2_32_gc(str, seed) {
	  var
	    l = str.length,
	    h = seed ^ l,
	    i = 0,
	    k;
	  
	  while (l >= 4) {
	  	k = 
	  	  ((str.charCodeAt(i) & 0xff)) |
	  	  ((str.charCodeAt(++i) & 0xff) << 8) |
	  	  ((str.charCodeAt(++i) & 0xff) << 16) |
	  	  ((str.charCodeAt(++i) & 0xff) << 24);
	    
	    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));
	    k ^= k >>> 24;
	    k = (((k & 0xffff) * 0x5bd1e995) + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16));

		h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k;

	    l -= 4;
	    ++i;
	  }
	  
	  switch (l) {
	  case 3: h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	  case 2: h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	  case 1: h ^= (str.charCodeAt(i) & 0xff);
	          h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
	  }

	  h ^= h >>> 13;
	  h = (((h & 0xffff) * 0x5bd1e995) + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16));
	  h ^= h >>> 15;

	  return h >>> 0;
	}

	if(typeof module !== undefined) {
	  module.exports = murmurhash2_32_gc
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
	 * 
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/murmurhash-js
	 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	 * @see http://sites.google.com/site/murmurhash/
	 * 
	 * @param {string} key ASCII only
	 * @param {number} seed Positive integer only
	 * @return {number} 32-bit positive integer hash 
	 */

	function murmurhash3_32_gc(key, seed) {
		var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
		
		remainder = key.length & 3; // key.length % 4
		bytes = key.length - remainder;
		h1 = seed;
		c1 = 0xcc9e2d51;
		c2 = 0x1b873593;
		i = 0;
		
		while (i < bytes) {
		  	k1 = 
		  	  ((key.charCodeAt(i) & 0xff)) |
		  	  ((key.charCodeAt(++i) & 0xff) << 8) |
		  	  ((key.charCodeAt(++i) & 0xff) << 16) |
		  	  ((key.charCodeAt(++i) & 0xff) << 24);
			++i;
			
			k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
			k1 = (k1 << 15) | (k1 >>> 17);
			k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

			h1 ^= k1;
	        h1 = (h1 << 13) | (h1 >>> 19);
			h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
			h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
		}
		
		k1 = 0;
		
		switch (remainder) {
			case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
			case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
			case 1: k1 ^= (key.charCodeAt(i) & 0xff);
			
			k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
			k1 = (k1 << 15) | (k1 >>> 17);
			k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
			h1 ^= k1;
		}
		
		h1 ^= key.length;

		h1 ^= h1 >>> 16;
		h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= h1 >>> 13;
		h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
		h1 ^= h1 >>> 16;

		return h1 >>> 0;
	}

	if(true) {
	  module.exports = murmurhash3_32_gc
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(25)();

	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ }
/******/ ]);