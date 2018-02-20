var packageMeta = require('./package.json');

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('webpack');

var fs = require('fs');
var path = require('path');

var genPackageManifest = require('./PROJECT/generate_dist_package_manifest');
var genPackageREADME = require('./PROJECT/generate_dist_package_README');

gulp.task('tagbuild', [ "copyjs" ], function(callback_) {
    console.log("tagbuild...");
    var identifier = require('./BUILD/arccore/arc_core_identifier');
    var util = require('./BUILD/arccore/arc_core_util');
    var buildtag = {
	version: packageMeta.version,
        codename: packageMeta.codename,
        author: packageMeta.author,
        buildID: identifier.irut.fromEther(),
        buildTime: util.getEpochTime()
    };
    buildtagJavaScript = 'module.exports = { version: "' + buildtag.version +
        '", codename: "' + buildtag.codename +
        '", author: "' + buildtag.author +
        '", buildID: "' + buildtag.buildID +
        '", buildTime: "' + buildtag.buildTime +
        '"};'

    fs.writeFileSync(
	path.join(process.cwd(), './BUILD/arccore/arc_build.js'),
	buildtagJavaScript
    );
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arctools/arc_build.js'),
        buildtagJavaScript
    );
    var arccoreDescriptor = util.clone(buildtag);
    arccoreDescriptor.name = 'arccore';
    var arccoreManifest = genPackageManifest(arccoreDescriptor);
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arccore/package.json'),
        arccoreManifest
    );
    fs.writeFileSync(
	path.join(process.cwd(), './BUILD/arccore/README.md'),
	genPackageREADME(arccoreDescriptor)
    );

    var arctoolsDescriptor = util.clone(buildtag);
    arctoolsDescriptor.name = 'arctools';
    var arctoolsManifest = genPackageManifest(arctoolsDescriptor);
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arctools/package.json'),
        arctoolsManifest
    );
    fs.writeFileSync(
	path.join(process.cwd(), './BUILD/arctools/README.md'),
	genPackageREADME(arctoolsDescriptor)
    );
    callback_();
});

gulp.task('coffee', [ 'coffee.base', 'coffee.discriminator', 'coffee.filter', 'coffee.filter-dag', 'coffee.identifier', 'coffee.types', 'coffee.util' ], function() {
    console.log("coffee...");
});

gulp.task('coffee.base', function() {
    return gulp.src('./SOURCES/core/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
});

gulp.task('coffee.discriminator', function() {
    return gulp.src('./SOURCES/core/discriminator/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
});

gulp.task('coffee.filter', function() {
    return gulp.src('./SOURCES/core/filter/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
});
gulp.task('coffee.filter-dag', function() {
    return gulp.src('./SOURCES/core/filter-dag/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
});
gulp.task('coffee.identifier', function() {
    return gulp.src('./SOURCES/core/identifier/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
});
gulp.task('coffee.types', function() {
    return gulp.src('./SOURCES/core/types/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
});
gulp.task('coffee.util', function() {
    return gulp.src('./SOURCES/core/util/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
});


gulp.task('copyjs', [ "copyjs_graph", "copyjs_tools", "copyjs_tools_templates" ], function(callback_) {
    console.log("copyjs...");
    callback_();
});

gulp.task('copyjs_graph', function() {
    console.log("copyjs_graph");
    return gulp.src('./SOURCES/core/graph/*.js').pipe(gulp.dest('./BUILD/arccore/'));
});

gulp.task('copyjs_tools', function() {
    console.log("copyjs_tools");
    return gulp.src('./SOURCES/tools/*.js').pipe(gulp.dest('./BUILD/arctools/'));
});

gulp.task('copyjs_tools_templates', function() {
    console.log("copyjs_tools");
    return gulp.src('./SOURCES/tools/templates/*.hbs').pipe(gulp.dest('./BUILD/arctools/templates'));
});

gulp.task("baseBuild", [ "copyjs", "coffee" ], function() {
    console.log("baseBuild...");
});

gulp.task("test", [ "baseBuild" ], function() {
    return gulp.src('TESTS/test_arc.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

var wpconfig = require('./webpack.config')
var wpconfig_arccore = Object.create(wpconfig.arccore);
wpconfig_arccore.debug = true;
var wpconfig_arctools = Object.create(wpconfig.arctools);
wpconfig_arctools.debug = true;

var wpcc_arccore = webpack(wpconfig_arccore);
var wpcc_arctools = webpack(wpconfig_arctools);

gulp.task("webpack_arccore", [ "coffee", "test" ], function(callback_) {
    wpcc_arccore.run(function(err, stats) {
	if(err) throw new gutil.PluginError("webpack:build-dev", err);
	gutil.log("[webpack:build-dev]", stats.toString({
	    colors: true
	}));
        callback_();
    });
});

gulp.task("webpack_arctools", [ "webpack_arccore" ], function(callback_) {
    wpcc_arctools.run(function(err, stats) {
	if(err) throw new gutil.PluginError("webpack:build-dev", err);
	gutil.log("[webpack:build-dev]", stats.toString({
	    colors: true
	}));
        callback_();
    });
});

gulp.task("webpack", [ "webpack_arccore", "webpack_arctools" ], function() {
});


gulp.task("compress_arccore", [ "webpack" ], function() {
    gulp.src('./BUILD/arccore/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('./STAGE/arccore/'));
});

gulp.task("compress_arctools", [ "compress_arccore" ], function() {
    gulp.src('./BUILD/arctools/lib.js')
        .pipe(uglify())
        .pipe(rename('arc_tools_lib.js'))
        .pipe(gulp.dest('./STAGE/arctools/'));
});

gulp.task("compress", [ "compress_arctools" ], function() {
});



gulp.task("stage", [ "compress" ], function(callback_) {
    // arccore
    gulp.src('package.json', { cwd: './BUILD/arccore' })
        .pipe(gulp.dest('./STAGE/arccore'));
    gulp.src('README.md', { cwd: './BUILD/arccore' })
	.pipe(gulp.dest('./STAGE/arccore'));

    // arctools
    gulp.src('package.json', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('README.md', { cwd: './BUILD/arctools' })
	.pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('arc_tools_filterdag_compiler.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('arc_tools_filterdag_factory.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('arc_tools_id_unique.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('arc_tools_project.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('arc_tools_project_construct.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('arc_tools_project_parse.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('arc_tools_docgen_filter.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('simple-doc-test.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools'));

    gulp.src('./templates/*.hbs', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./STAGE/arctools/templates'));

    callback_();
});

gulp.task("publish", [ 'publish_ARCcore', 'publish_ARCtools'], function() {
});
gulp.task("publish_ARCcore", function() {
    gulp.src('./STAGE/arccore/**')
        .pipe(gulp.dest('./DISTS/ARCcore/'));
});
gulp.task("publish_ARCtools", function() {
    gulp.src('./STAGE/arctools/**')
        .pipe(gulp.dest('./DISTS/ARCtools/'));
});

gulp.task('default', [ 'baseBuild', "test", "stage" ], function() {
    console.log("default...");
});
