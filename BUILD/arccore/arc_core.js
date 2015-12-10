
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

  ARC_BUILD = require('./arc_build');

  COMMON = module.exports = {
    __meta: {
      name: 'arccore',
      version: ARC_BUILD.version,
      codename: ARC_BUILD.codename,
      author: ARC_BUILD.author,
      buildID: ARC_BUILD.buildID
    },
    __bundle: {
      murmurhash_js: require('murmurhash-js'),
      nodeuuid: require('node-uuid')
    },
    util: require('./arc_core_util'),
    graph: require('./arc_core_graph'),
    types: require('./arc_core_types'),
    identifier: require('./arc_core_identifier'),
    filter: require('./arc_core_filter'),
    filterDAG: require('./arc_core_filter_dag')
  };

}).call(this);