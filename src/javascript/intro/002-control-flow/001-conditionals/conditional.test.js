import Test from 'ava';
import * as Assignment from './';

Test('#greet() when age is over 18', t => {
  t.is(Assignment.greeting(21), 'Hello!');
});

Test('#greet() when age is under 18', t => {
  t.is(Assignment.greeting(1), 'Yo!');
});

Test(`#isTacoTuesday() when it's tuesday`, t => {
  t.truthy(Assignment.isTacoTuesday('tuesday'));
});

Test(`#isTacoTuesday() when it's wednesday`, t => {
  t.falsy(Assignment.isTacoTuesday('wednesday'));
});