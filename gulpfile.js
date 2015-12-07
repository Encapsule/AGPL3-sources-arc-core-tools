var packageMeta = require('./package.json');

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
 
var fs = require('fs');
var path = require('path');

gulp.task('tagbuild', [ "coffee" ], function() {
    console.log("tagbuild...");
    var identifier = require('./BUILD/ARC_core/arc_core_identifier');
    var util = require('./BUILD/ARC_core/arc_core_util');
    var buildtag = JSON.stringify({
	version: packageMeta.version,
        buildID: identifier.irut.fromEther(),
        buildTime: util.getEpochTime()
    });
    fs.writeFileSync(
	path.join(process.cwd(), './BUILD/ARC_core/arc_build.json'),
	buildtag
    );
});

gulp.task('coffee', function() {
    console.log("coffee...");
    gulp.src('./SOURCES/core/*.coffee')
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/ARC_core/'));
    gulp.src('./SOURCES/core/util/*.coffee')
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/ARC_core/'));
    gulp.src('./SOURCES/core/types/*.coffee')
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/ARC_core/'))
    gulp.src('./SOURCES/core/identifier/*.coffee')
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/ARC_core/'))
    gulp.src('./SOURCES/core/filter/*.coffee')
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/ARC_core/'))
    gulp.src('./SOURCES/core/filter-dag/*.coffee')
	.pipe(coffee().on('error', gutil.log))
	.pipe(gulp.dest('./BUILD/ARC_core/'))
});

gulp.task('copyjs', function() {
    console.log("copyjs...");
    gulp.src('./SOURCES/core/graph/*.js')
	.pipe(gulp.dest('./BUILD/ARC_core/'));
});

gulp.task("baseBuild", [ "copyjs", "coffee", "tagbuild" ], function() {
    console.log("baseBuild...");

});

gulp.task('default', [ 'baseBuild' ], function() {
    console.log("default...");
});
