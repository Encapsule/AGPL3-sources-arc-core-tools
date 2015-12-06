var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
 
gulp.task('coffee', function() {
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
    gulp.src('./SOURCES/core/graph/*.js')
	.pipe(gulp.dest('./BUILD/ARC_core/'));
});

gulp.task('default', [ 'coffee', 'copyjs' ], function() {
    console.log("What is up, man?");
});
