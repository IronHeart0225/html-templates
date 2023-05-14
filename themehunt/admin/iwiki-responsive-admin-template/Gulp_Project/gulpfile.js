'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    compass = require('compass-importer');


gulp.task('html', function() {
  gulp.src(['./src/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@root'
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('js', function() {
  gulp.src(['./src/js/**/*.js'])
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('img', function() {
  gulp.src(['./src/img/**/*.*'])
    .pipe(gulp.dest('./build/img/'));
});

gulp.task('scss', function () {
  gulp.src(['./src/sass/**/*.scss', './src/sass/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded', importer: compass}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["./build/css/*.css", "./build/*.html", "./build/js/*.js"],{
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task("watch", function() {
  gulp.watch("./src/**/*.html",["html"]);
  gulp.watch('./src/sass/**/*.scss', ['scss']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/img/**/*.*', ['img']);
})



gulp.task('default', ['scss', 'html', 'js', 'img', 'watch', 'browser-sync']);




