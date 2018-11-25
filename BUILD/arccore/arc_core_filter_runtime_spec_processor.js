(function() {

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
  var IDENTIFIER, TYPES, filterRuntimeData;

  IDENTIFIER = require('./arc_core_identifier');

  TYPES = require('./arc_core_types');

  filterRuntimeData = module.exports = function(request_) {
    var acceptInputNamespace, asMap, assignValue, constrainInRangeInclusive, constrainInValueSet, constraintDirective, defaulted, element, errors, finalResult, i, inBreakScope, inRange, index, innerResponse, inputData, inputDataUndefined, key, len, mapPropertyName, mapPropertyValue, mapQueue, mapQueueCache, namespace, newOutputData, opaque, outputData, response, spec, specDescriptor, subnamespaces, typePath, valueJsMoniker;
    errors = [];
    response = {
      error: null,
      result: null
    };
    inBreakScope = false;
    finalResult = void 0; // If no error, this value is returned via response.result
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
      // If no type map was specified, simply return the request as the response result.
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
        // console.log "Filter path #{typePath}: #{JSON.stringify(specDescriptor, undefined, 4)}\n\n"

        // Detect opaque namespace.
        innerResponse = TYPES.check.inTypeSet({
          value: spec.____opaque,
          types: 'jsBoolean'
        });
        opaque = innerResponse.result && spec.____opaque;
        // Detect namespace with declared default value.
        innerResponse = TYPES.check.inTypeSet({
          value: spec.____defaultValue,
          types: 'jsUndefined'
        });
        defaulted = !innerResponse.result;
        // Detect namespace with the 'as map' flag set.
        innerResponse = TYPES.check.inTypeSet({
          value: spec.____asMap,
          types: 'jsBoolean'
        });
        asMap = innerResponse.result && spec.____asMap;
        acceptInputNamespace = false;
        if (!opaque) {
          // Verify the type of the inputData reference against the typemap's type constraint set.
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
            // inputData failed type check.
            inputDataUndefined = TYPES.check.inTypeSet({
              value: inputData,
              types: 'jsUndefined'
            }).result;
            if (!(inputDataUndefined && defaulted)) {
              // Okay. Report the the type check failure as an error.
              errors.unshift(innerResponse.guidance);
              break;
            }
            // We failed the type check but the input data value is undefined AND the the type map
            // declares a default value. In this failing case, we take the default value allowing
            // the caller of the function to omit a required value in the input data and pick the
            // default automatically.

            // Confirm that that value specified by the ____defaultValue directive is valid.
            // Effectively we're retrying the initial test here using the static declared data in place of the input.
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
            // And the type map check is legit so take the declared default value as the new input data stream.
            inputData = spec.____defaultValue;
          }
          // At this point inputData is set and has passed type checking.
          valueJsMoniker = innerResponse.result;
        } else {
          // Is opaque
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
              // Ignore ____types as we have already evaluated the constraint.
              break;
            case '____accept':
              // Ignore ____accept as we have already evaluated the constraint.
              break;
            case '____opaque':
              // Ignore ____opaque as we have already evaluated the constraint.
              break;
            case '____asMap':
              // Ignore ____asMap as we have already evaluated the constant.
              break;
            case '____defaultValue':
              break;
            case '____inValueSet':
              // Cache the constraint for later evaluation.
              constrainInValueSet = mapPropertyValue;
              break;
            case '____inRangeInclusive':
              // Cache the constraint for later evaluation.
              constrainInRangeInclusive = mapPropertyValue;
              break;
            case '____label':
              // Ignore ____label metadata that is not used at runtime.
              break;
            case '____description':
              // Ignore ____description metadata that is not used at runtime.
              break;
            case '____appdsl':
              // Ignore ____appdsl metadata that is optionally provided by developers for their own purposes and is not of relevance here
              break;
            default:
              // By typemap convention, a namespace property that is not one of typemap's
              // reserved properties is taken as the declaration of subnamespace entity.
              if (valueJsMoniker === 'jsArray') {
                index = 0;
                for (i = 0, len = inputData.length; i < len; i++) {
                  element = inputData[i];
                  mapQueueCache.push({
                    namespace: index,
                    path: `${typePath}[${index++}]`,
                    spec: mapPropertyValue,
                    inputData: element
                  });
                }
              } else if ((valueJsMoniker === 'jsObject') && asMap) {
                for (key in inputData) {
                  element = inputData[key];
                  mapQueueCache.push({
                    namespace: key,
                    path: `${typePath}.${key}`,
                    spec: mapPropertyValue,
                    inputData: element
                  });
                }
              } else {
                mapQueueCache.push({
                  namespace: mapPropertyName,
                  path: `${typePath}.${mapPropertyName}`,
                  spec: mapPropertyValue,
                  // inputData: inputData? and inputData and inputData[mapPropertyName] or undefined
                  inputData: (inputData != null) && inputData && inputData[mapPropertyName]
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
            errors.unshift(`Invalid value '${inputData}' not in allowed value set: [${constrainInValueSet.join(',')}].`);
            break;
          }
        }
        if ((constrainInRangeInclusive != null) && constrainInRangeInclusive && (valueJsMoniker !== 'jsUndefined')) {
          inRange = true;
          if (inputData < constrainInRangeInclusive.begin) {
            errors.unshift(`Invalid value '${inputData}' below allowed value range '${constrainInRangeInclusive.begin}','${constrainInRangeInclusive.end}'.`);
            break;
          }
          if (inputData > constrainInRangeInclusive.end) {
            errors.unshift(`Invalid value '${inputData}' above allowed value range '${constrainInRangeInclusive.begin}','${constrainInRangeInclusive.end}'.`);
            break;
          }
        }
        // Break out of the queue processing loop on error
        if (errors.length) {
          break;
        }
        // Now that all constraints have been processed for this namespace, reflect to finalResult
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
        // Now add the mapQueueCache entries to the tail of the mapQueue
        while ((valueJsMoniker !== 'jsUndefined') && mapQueueCache.length) {
          specDescriptor = mapQueueCache.shift();
          specDescriptor.outputData = newOutputData;
          mapQueue.push(specDescriptor);
        }
      }
      if (errors.length) {
        errors.unshift(`Error at path '${typePath}':`);
        break;
      }
    }
    if (errors.length) {
      response.error = errors.join(' ');
    } else {
      response.result = finalResult;
    }
    return response;
  };

}).call(this);
