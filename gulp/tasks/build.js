require('../utils/requires.js');

/* globals gulp */
/* globals runSequence */
/* globals waitFor */
/* globals fontYellowBold */
/* globals config */
/* globals del */
/* globals exec */

let buildLabel;

const buildDone = function(err) {
  if (!err) {
    return log(fontYellowBold('Finished building (' + buildLabel + ')'));
  }
};

gulp.task('default', function(cb) {

  buildLabel = 'Development';

  log(fontYellowBold('Building (' + buildLabel + ')'));

  runSequence(
    'build:app',
    'watch',
    'build:dev',
    buildDone
  );
});

gulp.task('build', function(callback) {

  buildLabel = 'Production';
  log(fontYellowBold('Building (' + buildLabel + ')'));

  runSequence(
    'build:app',
    'polybuild',
    buildDone
  );
});

gulp.task('build:app', function(cb) {

  runSequence(
    'app:clean',
    'sass:dev',
    'svg:icons',
    'lint',
    'images',
    cb
  );
});

// Empty gulp task when we don't want to run a specific task in development
// mode.
gulp.task('noop', function(cb) {
  cb();
});

// Okay, so first thing we do is clear the build directory
gulp.task('app:clean', function(callback) {

  let dirs = [
    config.path.srcElements + '/**/*-styles.html',
    config.path.destCustomIcons,
    config.path.buildDirectory,
    config.path.destImages
  ];

  // do not clean up dev builds
  return del(dirs, { dot: true });
});
