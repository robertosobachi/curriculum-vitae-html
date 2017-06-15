/* globals gulp */
/* globals fontCyanBold */
/* globals config */
/* globals exec */

gulp.task('build:dev', (callback) => {

  const serveCommand = 'polymer serve --port ' + config.port;

  const serveMessage = 'Application running under the following URLs: http://127.0.0.1:' + config.port;

  exec(serveCommand);

  log(fontCyanBold(serveMessage));
  return callback();
});
