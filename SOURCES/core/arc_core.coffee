
ARC_BUILD = require './arc_build'

COMMON = module.exports =

    __meta:
        name:          'arccore'
        version:       ARC_BUILD.version
        codename:      ARC_BUILD.codename
        author:        ARC_BUILD.author
        contributors:  ARC_BUILD.contributors
        buildID:       ARC_BUILD.buildID
        buildTime:     ARC_BUILD.buildTime
        ARC_master:    ARC_BUILD.ARC_master

    __bundle:
        murmurhash_js: require 'murmurhash-js'
        uuid:          require 'uuid'

    discriminator:     { create: require('./arc_core_type_discriminator_factory').request }
    filter:            require './arc_core_filter'
    # filterDAG:       require './arc_core_filter_dag'
    graph:             require './arc_core_graph'
    identifier:        require './arc_core_identifier'
    types:             require './arc_core_types'
    util:              require './arc_core_util'
