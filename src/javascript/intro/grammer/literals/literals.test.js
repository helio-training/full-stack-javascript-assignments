import Test from 'ava';
import * as Assignment from './';

Test('object literal is a person', t => {
  t.is(typeof(Assignment.person), 'object');
  t.is(Assignment.person.name, 'Bob');
  t.is(Assignment.person.age, 42);
});

Test('string literal', t => {
  t.is(typeof(Assignment.song), 'string');
  t.is(Assignment.song, 'Twinkle, Twinkle, little star');
});

Test('number literal', t => {
  t.is(typeof(Assignment.meaningOfLife), 'number');
  t.is(Assignment.meaningOfLife, 42);
});


