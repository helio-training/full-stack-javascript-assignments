import Test from 'ava';
import * as Assignment from './';

Test('greeting is proper', t => {
  t.is(Assignment.greeting, 'Yo!');
});

Test('message is proper', t => {
  t.is(Assignment.message, 'hello');
});

Test('saying is proper', t => {
  t.is(Assignment.saying, 'What up');
});