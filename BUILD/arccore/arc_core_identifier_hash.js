
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

  MURMUR = require('murmurhash-js');

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
