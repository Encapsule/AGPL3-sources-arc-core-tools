(function() {
  var IDENTIFIER, TYPES, filterRuntimeData;

  IDENTIFIER = require('./arc_core_identifier');

  TYPES = require('./arc_core_types');


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
    var acceptInputNamespace, asMap, assignValue, constrainInRangeInclusive, constrainInValueSet, constraintDirective, defaulted, element, errors, finalResult, i, inBreakScope, inRange, index, innerResponse, inputData, inputDataUndefined, key, len, mapPropertyName, mapPropertyValue, mapQueue, mapQueueCache, namespace, newOutputData, opaque, outputData, response, spec, specDescriptor, subnamespaces, typePath, valueJsMoniker;
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
        innerResponse = TYPES.check.inTypeSet({
          value: spec.____asMap,
          types: 'jsBoolean'
        });
        asMap = innerResponse.result && spec.____asMap;
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
            case '____asMap':
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
                    path: typePath + "[" + (index++) + "]",
                    spec: mapPropertyValue,
                    inputData: element
                  });
                }
              } else if ((valueJsMoniker === 'jsObject') && asMap) {
                for (key in inputData) {
                  element = inputData[key];
                  mapQueueCache.push({
                    namespace: key,
                    path: typePath + "." + key,
                    spec: mapPropertyValue,
                    inputData: element
                  });
                }
              } else {
                mapQueueCache.push({
                  namespace: mapPropertyName,
                  path: typePath + "." + mapPropertyName,
                  spec: mapPropertyValue,
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
      response.error = errors.join(' ');
    } else {
      response.result = finalResult;
    }
    return response;
  };

}).call(this);
