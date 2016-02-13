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
      if (ref_.global != null) {
        flags += 'g';
      }
      if (ref_.ignoreCase != null) {
        flags += 'i';
      }
      if (ref_.multiline != null) {
        flags += 'm';
      }
      if (ref_.sticky != null) {
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
