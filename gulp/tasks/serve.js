/* globals gulp */
/* globals fontCyanBold */
/* globals config */
/* globals exec */

gulp.task('build:dev', (callback) => {

  const serveCommand = 'polymer serve --port ' + config.port;

  exec(serveCommand);

  return callback();
});
