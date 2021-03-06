// See https://npmjs.org/package/grunt-contrib-testem for more config options
module.exports = {
  basic: {
    options: {
      parallel: 2,
      framework: 'qunit',
      port: (parseInt(process.env.PORT || 7358, 10) + 1),
      test_page: 'tmp/result/tests/index.html',
      routes: {
        '/tests/tests.js': 'tmp/result/tests/tests.js',
        '/assets/app.js': 'tmp/result/assets/app.js',
        '/assets/templates.js': 'tmp/result/assets/templates.js',
        '/assets/app.css': 'tmp/result/assets/app.css'
      },
      src_files: [
        'tmp/result/**/*.js'
      ],
      launch_in_dev: ['PhantomJS', 'Chrome'],
      launch_in_ci: ['bs_chrome', 'bs_ipad', 'bs_iphone'],

      on_start: {
        command: 'browserstack tunnel --timeout 120 --user $BROWSERSTACK_USERNAME:$BROWSERSTACK_PASSWORD --key $BROWSERSTACK_KEY localhost:' + (parseInt(process.env.PORT || 7358, 10) + 1).toString(),
        wait_for_text: 'Tunnel is running'
      },

      launchers: {
        bs_chrome: {
          command: 'browserstack launch --timeout 120 --user $BROWSERSTACK_USERNAME:$BROWSERSTACK_PASSWORD --attach chrome localhost:' + (parseInt(process.env.PORT || 7358, 10) + 1).toString(),
          protocol: 'browser'
        },
        bs_ipad: {
          command: 'browserstack launch --timeout 120 --user $BROWSERSTACK_USERNAME:$BROWSERSTACK_PASSWORD --attach "iPad 2 (5.0)" localhost:' + (parseInt(process.env.PORT || 7358, 10) + 1).toString(),
          protocol: 'browser'
        },
        bs_iphone: {
          command: 'browserstack launch --timeout 120 --user $BROWSERSTACK_USERNAME:$BROWSERSTACK_PASSWORD --attach "iPhone 5S" localhost:' + (parseInt(process.env.PORT || 7358, 10) + 1).toString(),
          protocol: 'browser'
        }
      }      
    }
  },
  browsers: {
    options: {
      parallel: 8,
      framework: 'qunit',
      port: (parseInt(process.env.PORT || 7358, 10) + 1),
      test_page: 'tmp/result/tests/index.html',
      routes: {
        '/tests/tests.js': 'tmp/result/tests/tests.js',
        '/assets/app.js': 'tmp/result/assets/app.js',
        '/assets/templates.js': 'tmp/result/assets/templates.js',
        '/assets/app.css': 'tmp/result/assets/app.css'
      },
      src_files: [
        'tmp/result/**/*.js'
      ],
      launch_in_dev: ['PhantomJS',
                     'Chrome',
                     'ChromeCanary',
                     'Firefox',
                     'Safari',
                     'IE7',
                     'IE8',
                     'IE9'],
      launch_in_ci: ['PhantomJS',
                     'Chrome',
                     'ChromeCanary',
                     'Firefox',
                     'Safari',
                     'IE7',
                     'IE8',
                     'IE9'],
    }
  }
};
