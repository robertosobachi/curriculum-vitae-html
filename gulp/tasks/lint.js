require('../utils/requires.js');

/* globals gulp */
/* globals runSequence */
/* globals config */
/* globals scssLint */

const ELEMENTS_SASS = config.path.srcElements + '/**/*.scss';

gulp.task('lint', (cb) => {
  runSequence(
    'sass:lint',
    cb
  );
});

gulp.task('sass:lint', () => {
 gulp.src(ELEMENTS_SASS)
     .pipe(modified('sass:lint'))
     .pipe(scssLint({'config': '.scsslintrc.yml'}));
});

