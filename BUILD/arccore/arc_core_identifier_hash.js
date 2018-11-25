(function() {
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

  MODULE.toIRUT = function(hash_) {
    var buffer, pads, r1, r2, r3, r4;
    buffer = new Buffer(4);
    buffer.writeUInt32LE(hash_, 0);
    r1 = buffer.toString('base64');
    pads = 0;
    while (r1.charAt(r1.length - pads - 1) === '=') {
      pads++;
    }
    r2 = r1.slice(0, r1.length - pads);
    r3 = r2.replace(/\+/g, "-");
    r4 = r3.replace(/\//g, "_");
    return r4;
  };

}).call(this);
