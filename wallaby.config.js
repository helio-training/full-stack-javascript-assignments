module.exports = wallaby => ({
  files: [
    'src/_datasets/*.js',
    'src/javascript/basics/packaging-and-building/importing-and-exporting/*.js',
    '!src/**/*.test.js'
  ],
  
  tests: [
    'src/javascript/basics/packaging-and-building/importing-and-exporting/*.test.js',
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
