var packageMeta = require('./package.json');

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var mocha = require('gulp-mocha');
 
var fs = require('fs');
var path = require('path');

var genPackageManifest = require('./PROJECT/generate_dist_package_manifest');

gulp.task('tagbuild', [ "coffee" ], function() {
    console.log("tagbuild...");
    var identifier = require('./BUILD/arccore/arc_core_identifier');
    var util = require('./BUILD/arccore/arc_core_util');
    var buildtag = {
	version: packageMeta.version,
        buildID: identifier.irut.fromEther(),
        buildTime: util.getEpochTime()
    };
    buildtagJSON = JSON.stringify(buildtag);
    fs.writeFileSync(
	path.join(process.cwd(), './BUILD/arccore/arc_build.json'),
	buildtagJSON
    );
    var arccoreManifest = genPackageManifest({
        name: 'arccore',
        version: buildtag.version,
        buildID: buildtag.buildID
    });
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arccore/package.json'),
        arccoreManifest
    );
    fs.writeFileSync(
        path.join(process.cwd(), './BUILD/arctools/arc_build.json'),
        buildtagJSON
    );
    var arctoolsManifest = genPackageManifest({
        name: 'arctools',
        version: buildtag.version,
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

gulp.task('default', [ 'baseBuild', "test" ], function() {
    console.log("default...");
});
