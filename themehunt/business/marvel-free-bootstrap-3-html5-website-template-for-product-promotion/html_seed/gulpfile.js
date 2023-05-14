/**
 * Marvel - HTML Template for Product Promotion
 * Copyright 2016 © rustheme
 * Gulp automated tasks
 */

'use strict';

// Dependencies
var config = require('./config');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', '*'],
	replaceString: /\bgulp[\-.]/
});
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var fs = require('fs');
var pkg = require('./package.json');
var minifyAssets = true;


/**
 * Copy vendor files to dist/ folder
 */
gulp.task('vendor', function() {
	return gulp.src(config.paths.src + 'vendor/**/*')
		.pipe(gulp.dest(config.distPaths.vendor))
});

/**
 *	Copy template images to dist/ folder
 */
gulp.task('images', function() {
	return gulp.src(config.srcPaths.images + '**/*')
		.pipe(plugins.changed(config.distPaths.images))
		.pipe(plugins.imagemin({
			progressive: true,
		}))
		.pipe(gulp.dest(config.distPaths.images));
});

/**
 * Process json files (for demo purposes)
 */
var combinedFileName = 'combined'; // used for file name of combined data

// Combine multiple json files
gulp.task('json', function() {
	return gulp.src(config.srcPaths.scripts + 'json/**/!(' + combinedFileName + ')*.json')
		.pipe(plugins.jsoncombine(combinedFileName + '.json', function(data) {
			return new Buffer(JSON.stringify(data));
		}))
		.pipe(gulp.dest(config.srcPaths.scripts + 'json/'));
});

// Read combined json file
function readJson(file) {
	var parsed;
	try {
		parsed = JSON.parse(
			fs.readFileSync((config.srcPaths.scripts + 'json/' + combinedFileName + '.json'))
		);
		return parsed;
	} catch (e) {
		return e;
	}
};

/**
 * Process JS
 */
gulp.task('scripts', function() {
	gulp.src([
		config.srcPaths.scripts + '**/*.js'
	])
	.pipe(plugins.changed(config.distPaths.scripts))
	.pipe(plugins.uglify())
	.pipe(gulp.dest(config.distPaths.scripts));
});

/**
 * Process SCSS
 */
gulp.task('styles', function() {
	if (minifyAssets) {
		var processors = [autoprefixer, cssnano()];
	} else {
		var processors = [autoprefixer];
	};
	gulp.src(config.srcPaths.styles + '**/*.scss' )
	.pipe(plugins.changed(config.distPaths.styles))
	.pipe(plugins.sourcemaps.init() )
	.pipe(plugins.sass({
		outputStyle: 'expanded',
		sourceComments: false,
		indentType: 'tab',
		indentWidth: 1,
	}).on('error', plugins.sass.logError))
	.pipe(plugins.postcss(processors))
	.pipe(plugins.sourcemaps.write('maps'))
	.pipe(gulp.dest(config.distPaths.styles));
});

/**
 * Process Nunjucks template files
 */
gulp.task('nunjucks', ['json'], function() {
	return gulp.src([
			config.paths.src + '**/*.html',
			'!' + config.paths.src + '_layouts/**',
		]) 
		//.pipe(plugins.changed(config.paths.dist))
		.pipe(plugins.data(readJson))
		.pipe(plugins.nunjucksApi({
			autoescape: false,
			data: {
				path: '',
				css_path: config.distPaths.styles.replace(config.paths.dist, ''),
				js_path: config.distPaths.scripts.replace(config.paths.dist, ''),
				img_path: config.distPaths.images.replace(config.paths.dist, ''),
			},
			src: config.paths.src,
			fs: fs
		}))
		.pipe(plugins.prettify({
			indent_char: ' ',
			indent_size: 2,
		}))
		.pipe(gulp.dest(config.paths.dist));
});

/**
 * Watch for changes in source files
 * Reruns task when file is changed
 */
gulp.task('default', ['scripts', 'vendor', 'styles', 'images', 'nunjucks'], function() {
	gulp.watch(config.srcPaths.scripts + '**/*.js', ['scripts']);
	gulp.watch(config.srcPaths.styles + '**/*.scss', ['styles']);
	gulp.watch(config.srcPaths.scripts + 'json/**/*.json', ['nunjucks']);
	gulp.watch(config.paths.src + '**/*.html', ['nunjucks']);
});
