import Test from 'ava';
import * as Assignemnt from './';

Test(`greet(name, message) formats the greeting appropriately`, t => {
  const result = Assignemnt.greet('Tyler', 'Yo');
  t.is(result, 'Yo, Tyler');
});

Test(`add(x, y) adds numbers`, t => t.is(Assignemnt.add(1, 1), 2));

Test(`add(x, y) defaults to 0`, t => t.is(Assignemnt.add(), 0));

Test(`add(x, y) adds strings`, t => t.is(Assignemnt.add('Hello', 'World'), 'HelloWorld'));


