module.exports = function(config) {
  config.set({
    captureConsole: true,
    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'browserify'],

    files: [
      // test dependencies
      'node_modules/babel-polyfill/browser.js',
      'node_modules/jquery/dist/jquery.js',
      'dist/js/templates.js',

      // tests
      'lib/**/*.js'
    ],

    exclude: [],

    preprocessors: {
      'app/**/*.js': ['browserify'],
      'lib/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      paths: ['./node_modules', './'],
      transform: [
        'babelify',
        ['browserify-istanbul', {
          instrumenterConfig: { embedSource: true }
        }]
      ]
    },

    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'text-summary' }
      ]
    },

    reporters: ['mocha', 'coverage'],
    browsers: ['PhantomJS'],

    colors: true,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};
