
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
