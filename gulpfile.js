'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function() {
    return gulp.src('./src/assets/styles/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/styles/css'));
});

gulp.task('css', async function() {
    gulp.src('./src/assets/styles/css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./src/assets/styles/minCss/'));
});

gulp.task('run', gulp.series(['sass'], ['css']));

gulp.task('watch', function() {
    gulp.watch('./src/assets/styles/scss/*.scss', gulp.series(['sass']));
    gulp.watch('./src/assets/styles/css/*.css', gulp.series(['css']));
});

gulp.task('default', gulp.series(['run'], ['watch']));