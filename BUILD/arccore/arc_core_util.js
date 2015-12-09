
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
  var JBUS_COMMON_UTIL;

  JBUS_COMMON_UTIL = {};

  JBUS_COMMON_UTIL.deepCopy = function(reference_) {
    var flags, instance, key;
    if ((typeof ref_ === "undefined" || ref_ === null) || typeof ref_ !== 'object') {
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
      instance[key] = COMMON.UTIL.clone(ref_[key]);
    }
    return instance;
  };

  JBUS_COMMON_UTIL.clone = function(reference_) {
    return JBUS_COMMON_UTIL.deepCopy(reference_);
  };

  JBUS_COMMON_UTIL.dictionaryLength = function(reference_) {
    return Object.keys(reference_).length;
  };

  JBUS_COMMON_UTIL.getEpochTime = function() {
    return Math.round(new Date().getTime() / 1000.0);
  };

  module.exports = JBUS_COMMON_UTIL;

}).call(this);
