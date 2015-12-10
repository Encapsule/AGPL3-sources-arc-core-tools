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

gulp.task('tagbuild', [ "coffee" ], function() {
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
    var arccoreManifest = genPackageManifest({
        name: 'arccore',
        author: buildtag.author,
        version: buildtag.version,
        codename: buildtag.codename,
        buildID: buildtag.buildID
    });
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arccore/package.json'),
        arccoreManifest
    );
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arctools/arc_build.js'),
        buildtagJavaScript
    );
    var arctoolsManifest = genPackageManifest({
        name: 'arctools',
        author: buildtag.author,
        version: buildtag.version,
        codename: buildtag.codename,
        buildID: buildtag.buildID
    });
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arctools/package.json'),
        arctoolsManifest
    );
    
});

gulp.task('coffee', function() {
    console.log("coffee...");
    gulp.src('./SOURCES/core/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
    gulp.src('./SOURCES/core/util/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'));
    gulp.src('./SOURCES/core/types/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'))
    gulp.src('./SOURCES/core/identifier/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'))
    gulp.src('./SOURCES/core/filter/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'))
    gulp.src('./SOURCES/core/filter-dag/*.coffee')
        .pipe(coffeelint()).pipe(coffeelint.reporter())
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/arccore/'))
});

gulp.task('copyjs', function() {
    console.log("copyjs...");
    gulp.src('./SOURCES/core/graph/*.js')
	.pipe(gulp.dest('./BUILD/arccore/'));
    gulp.src('./SOURCES/tools/*.js')
        .pipe(gulp.dest('./BUILD/arctools/'));
});

gulp.task("baseBuild", [ "copyjs", "tagbuild", "coffee" ], function() {
    console.log("baseBuild...");

});

gulp.task("test", function() {
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

gulp.task("webpack_arccore", [ "test" ], function(callback_) {
    wpcc_arccore.run(function(err, stats) {
	if(err) throw new gutil.PluginError("webpack:build-dev", err);
	gutil.log("[webpack:build-dev]", stats.toString({
	    colors: true
	}));
        callback_();
    });
});

gulp.task("webpack_arctools", [ "test" ], function(callback_) {
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
        .pipe(gulp.dest('./DISTS/arccore/'));
});

gulp.task("compress_arctools", [ "compress_arccore" ], function() {
    gulp.src('./BUILD/arctools/lib.js')
        .pipe(uglify())
        .pipe(rename('arc_tools_lib.js'))
        .pipe(gulp.dest('./DISTS/arctools/'));
});

gulp.task("compress", [ "compress_arctools" ], function() {
});



gulp.task("dist", [ "compress" ], function() {
    gulp.src('package.json', { cwd: './BUILD/arccore' })
        .pipe(gulp.dest('./DISTS/arccore'));
    gulp.src('package.json', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./DISTS/arctools'));
    gulp.src('arc_tools_filterdag_compiler.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./DISTS/arctools'));
    gulp.src('arc_tools_filterdag_factory.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./DISTS/arctools'));
    gulp.src('arc_tools_id_unique.js', { cwd: './BUILD/arctools' })
        .pipe(gulp.dest('./DISTS/arctools'));
});

           
gulp.task('default', [ 'baseBuild', "test", "dist" ], function() {
    console.log("default...");
});
