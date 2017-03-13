import path from 'path';
import gulp from 'gulp';
import notify from 'gulp-notify';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import sequence from 'run-sequence';
import del from 'del';
import { Server } from 'karma';

// configuration for gulp
const source_path = './lib';
const dist_path = './dist';
const config = {
  js: {
    source: source_path,
    dist: `${dist_path}`,
    filename: 'index.js'
  }
};

function handleErrors() {
  let args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

/**
 * CLEAN
 */
gulp.task('clean', () => {
  return del([`${dist_path}/*`], { dot: true });
});

/**
 * JS Compiler/Watcher
 */
function buildJS(watch) {
  let options = {
    entries: `${config.js.source}/index.js`,
    extensions: ['.js'],
    paths: ['./node_modules', './'],
    transform: [babelify],
    debug: (watch ? true : false),
    cache: {},
    packageCache: {},
    fullPaths: true
  };

  // initialize whatchify
  let bundler = watchify(browserify(options));

  function rebundle() {
    if (watch) {
      console.time('Rebundle');
    }

    let stream = bundler.bundle();

    stream
      .on('error', handleErrors)
      .pipe(source(config.js.filename))
      .pipe(() => {
        
      })
      .pipe(gulp.dest(config.js.dist));

    if (watch) {
      console.timeEnd('Rebundle');
    }

    return stream;
  }

  if (watch) {
    // listen for an update and run rebundle
    bundler.on('update', rebundle);
  }

  // run it once the first time buildMecApp is called
  return rebundle();
}

gulp.task('js:dev', () => {
  return buildJS(true);
});

gulp.task('js:dev:single', () => {
  return buildJS();
});

gulp.task('js:prod', ['js:dev:single'], (done) => {
  sequence('clean', 'js:dev:single');
  return gulp.src(`${config.js.dist}/${config.js.filename}`)
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dist));
});

/**
 * TEST
 */
gulp.task('test', (done) => {
  return new Server({
    configFile: path.resolve(__dirname, './karma.config.js'),
    singleRun: false,
    captureConsole: true
  }).start();
});

gulp.task('test:ci', (done) => {
  new Server({
    configFile: path.resolve(__dirname, './karma.config.js'),
    singleRun: true
  }).start();
});

/**
 * DEV task
 */
gulp.task('dev', () => {
  sequence('clean', 'js:dev');
});

/**
 * Build task
 */
gulp.task('build', () => {
  sequence('clean', 'js:prod', 'test:ci');
});
