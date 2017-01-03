import Test from 'ava';
import * as Assignment from './';


Test(`Mixed array with numbers and strings`, t => {
  t.is(Assignment.NumbersAndStrings.length, 3);
  t.is(Assignment.NumbersAndStrings[2], 42);
});

Test(`Array has functions and strings`, t => {
  t.is(Assignment.FunctionsAndStrings.length, 3)
  t.is(typeof(Assignment.FunctionsAndStrings[0]), 'function');
  t.is(typeof(Assignment.FunctionsAndStrings[1]), 'function');
  t.is(typeof(Assignment.FunctionsAndStrings[2]), 'string');

  t.is(Assignment.FunctionsAndStrings[0]() + Assignment.FunctionsAndStrings[1](), 'Hello World');
});

