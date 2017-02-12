(function() {
  var IDENTIFIER, TYPES, verifyCompositionTypeMapDeclaration, verifyTypeConstraintArgs;

  IDENTIFIER = require('./arc_core_identifier');

  TYPES = require('./arc_core_types');


  /*
      request = {
          path: string
          typemap: object
      }
   */

  verifyCompositionTypeMapDeclaration = module.exports = function(request_) {
    var acceptNamespace, asMapNamespace, constraint, constraintOptions, constraintProp, defaulted, description, errors, inBreakScope, innerResponse, jsMonikers, label, mapPropertyName, mapPropertyValue, mapQueue, newPath, opaqueNamespace, response, subnamespacesDeclared, typemap, typemapDescriptor, typepath, validTypeConstraint;
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
        asMapNamespace = false;
        defaulted = false;
        subnamespacesDeclared = 0;
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
            case '____asMap':
              if (mapPropertyValue) {
                asMapNamespace = true;
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
            case '____appdsl':
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
              subnamespacesDeclared++;
              break;
          }
        }
        if (!errors.length) {
          inBreakScope = false;
          while (!inBreakScope) {
            inBreakScope = true;
            if (acceptNamespace && subnamespacesDeclared) {
              errors.unshift("You cannot declare subnamespace filter spec(s) of a parent namespace declared using '____accept'.");
              break;
            }
            if (asMapNamespace && (subnamespacesDeclared !== 1)) {
              errors.unshift("Namespaces declared using '____asMap' set true must declare a single subnamespace declaration.");
              break;
            }
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
