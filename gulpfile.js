'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass   = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        browser: "google chrome",
        notify: false
    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);;
    gulp.watch("./js/*.js").on('change', browserSync.reload);
    gulp.watch("./*.js").on('change', browserSync.reload);

});

gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', swallowError)
        .pipe(autoprefixer({
            browsers: ['last 4 versions','ie 10','ie 11','ie 12'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());;


});


function swallowError (error) {

    // If you want details of the error in the console
    console.log(error.toString())

    this.emit('end')
}

gulp.task('default', ['serve']);



