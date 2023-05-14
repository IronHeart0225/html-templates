/**
 * Marvel - HTML Template for Product Promotion
 * Copyright 2016 © rustheme
 * This file contains the variables used in gulp.js file
 * These variables can help you configure
 * your project's folders in the way you like
 */

/**
 * The core paths of your project
 */
exports.paths = {
	src: 'src/', // contains files for development
	dist: 'dist/', // contains files for production
};

/**
 * Source paths of your project
 */
exports.srcPaths = {
	styles: exports.paths.src + 'styles/',
	images: exports.paths.src + 'images/',
	scripts: exports.paths.src + 'scripts/',
	vendor: 'bower_components/',
};

/**
 * Production-ready paths of your project
 */
exports.distPaths = {
	styles: exports.paths.dist + 'styles/',
	images: exports.paths.dist + 'images/',
	scripts: exports.paths.dist + 'scripts/',
	vendor: exports.paths.dist + 'vendor/',
};
