var build = require('../arc_build');
build.name = "arctools";

module.exports = {
    meta: build,
    commander: require('commander'),
    chalk: require('chalk'),
    handlebars: require('handlebars'),
    arccore: require('../arccore/arc_core'),
    filterDocGenerate: require('./arc_tools_lib_filter_doc_gen'),
    fileDirEnumSync: require('./arc_tools_lib_file_dir_enum_sync'),
    jsrcFileLoaderSync: require('./arc_tools_lib_jsrc_file_loader_sync'),
    stringToFileSync: require('./arc_tools_lib_string_to_file_sync'),
    filterdagSpecLoader: require('./arc_tools_lib_filterdag_spec_loader'),
    createToolBanner: require('./arc_tools_lib_tool_banner'),
    clistyles: require('./arc_tools_lib_cli_styles'),
    paths: require('./arc_tools_lib_paths')
};
