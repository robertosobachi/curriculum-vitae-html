// Config and utils
global.polymer = require('../../polymer.json');
global.config = require('../../config.js');
global.util = require('gulp-util');

// Gulp and other npm packages
global.gulp = require('gulp');
global.fontYellowBold = util.colors.yellow.bold;
global.fontCyanBold = util.colors.cyan.bold;
global.fontBlueBold = util.colors.blue.bold;
global.log = util.log;
global.runSequence = require('run-sequence');
global.del = require('del');
global.mergeStream = require('merge-stream');
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

global.svgSprite = require('gulp-svg-sprite');
global.replace = require('gulp-replace');

