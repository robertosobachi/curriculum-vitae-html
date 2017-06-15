// Config and utils
// global.packageJson = require('../../package.json');
// global.isDevBuild = require('./isDevBuild.js');
global.waitFor = require('./waitFor.js');
global.config = require('../../config.js');
// global.polymerProject = require('./polymerProject.js');
global.util = require('gulp-util');

// Gulp and other npm packages
global.gulp = require('gulp');
// global.$ = require('gulp-load-plugins')();
global.fontYellowBold = util.colors.yellow.bold;
global.fontCyanBold = util.colors.cyan.bold;
global.fontBlueBold = util.colors.blue.bold;
global.log = util.log;
global.runSequence = require('run-sequence');
global.del = require('del');
global.mergeStream = require('merge-stream');
// global.polymerBuild = require('polymer-build');
global.gulpif = require('gulp-if');
global.modified = require('gulp-modified');
global.autoprefixer = require('gulp-autoprefixer');
global.sass = require('gulp-sass');
global.scssLint = require('gulp-scss-lint');
global.rename = require('gulp-rename');
// global.buffer = require('vinyl-buffer');
global.tap = require('gulp-tap');
global.path = require('path');
global.browserSync = require('browser-sync');
global.imagemin = require('gulp-imagemin');
global.webp = require('gulp-webp');
global.exec = require('child_process').exec;

// global.uglify = require('gulp-uglify');
// global.cssSlam = require('css-slam').gulp;
// global.htmlMinifier = require('gulp-html-minifier');
// global.babel = require('gulp-babel');

