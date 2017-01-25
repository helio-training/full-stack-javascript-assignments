import Test from 'ava';
import * as Assignment from './';

Test('greeting is set to `Hello World`', t => {
  t.is(Assignment.greeting, 'Hello World');
});

Test(`characterAt is 'o'`, t => {
  t.is(Assignment.characterAt, 'o');
});

Test(`greetingArray is an array`, t => {
  t.is(Assignment.greetingArray.length, 11);
});

Test('begins works properly', t => {
  t.truthy(Assignment.begins('Hello', 'H'));
});

Test('begins works properly', t => {
  t.falsy(Assignment.begins('Hello', 'D'));
});

Test('beginsInsensitive works properly', t => {
  t.truthy(Assignment.beginsInsensitive('Hello', 'h'));
});

Test('beginsInsensitive works properly', t => {
  t.truthy(Assignment.beginsInsensitive('Hello', 'H'));
});

Test('beginsInsensitive works properly', t => {
  t.falsy(Assignment.beginsInsensitive('Hello', 'b'));
});
