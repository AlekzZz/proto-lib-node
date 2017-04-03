process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

const config = {
  files: [
    'lib/**/*.js',
    '!lib/**/*spec.js',
    '!lib/test-helpers.js'
  ],
  tests: [
    'lib/test-helpers.js',
    'lib/**/*spec.js'
  ]
};

gulp.task('test:coverage', (done) => {
  gulp.src(config.files)
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src(config.tests, { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .pipe(istanbul.writeReports({
          reporters: ['text-summary']
        }))
        .on('end', done);
    });
});

gulp.task('test:mocha', () => {
  return gulp.src(config.tests)
    .pipe(mocha({ reporter: 'spec' }));
});

/**
 * Main test task
 */
gulp.task('test', ['test:coverage'], () => {
  gulp.watch(config.files, ['test:coverage']);
  gulp.watch(config.tests, ['test:coverage']);
});

// Watch task
gulp.task('mocha', ['test:mocha'], () => {
  gulp.watch(config.files, ['test:mocha']);
  gulp.watch(config.tests, ['test:mocha']);
});
