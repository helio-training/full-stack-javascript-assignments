module.exports = wallaby => ({
  files: [
    'src/**/*',
    '!src/**/*.test.js'
  ],
  
  tests: [
    'src/**/*.test.js'
  ],
  
  env: {
    type: 'node',
    runner: 'node'
  },
  
  setup: () => require('babel-polyfill'),
  
  testFramework: 'ava',
  
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  
//  debug: true
});
