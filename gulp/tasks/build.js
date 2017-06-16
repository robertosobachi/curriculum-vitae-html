require('../utils/requires.js');

/* globals gulp */
/* globals runSequence */
/* globals fontYellowBold */
/* globals config */
/* globals del */
/* globals buildDirectory */
/* globals isDevBuild */

let buildLabel;

const buildDone = function(err) {
  if (!err) {

    log(fontYellowBold('Finished building (' + getIsDevBuild() + ')'));

    if (isDevBuild) {
      const serveMessage = 'Application running under the following URLs: http://127.0.0.1:' + config.port;

      log(fontCyanBold(serveMessage));
    }

    return;
  }
};

const getIsDevBuild = () => {
  return (isDevBuild) ? 'Development' : 'Production';
};

gulp.task('default', function(cb) {

  isDevBuild = true;
  log(fontYellowBold('Building (' + getIsDevBuild() + ')'));

  runSequence(
    'build:app',
    'watch',
    'build:dev',
    buildDone
  );
});

gulp.task('build', function(callback) {

  isDevBuild = false;
  log(fontYellowBold('Building (' + getIsDevBuild() + ')'));

  runSequence(
    'build:app',
    'polybuild',
    buildDone
  );
});

gulp.task('build:app', function(cb) {

  runSequence(
    'app:clean',
    'sass:elements',
    'sass:styles',
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
    // The generated syles.
    config.path.srcElements + '/**/*-styles.html',
    // The custom icons.
    config.path.srcElements + '/' + config.customIconsName,
    // The build directory.
    buildDirectory,
    // The optimised images.
    config.path.destImages,
    // The global styles directory.
    config.path.destGlobalCss
  ];

  return del(dirs, { dot: true });
});
