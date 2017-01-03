import Test from 'ava';
import * as Assignment from './';

Test('name has getter', t => {
  const person = new Assignment.Person('Tyler');
  t.is(person.name, 'Tyler');
});

Test('negative age results in 0', t => {
  const person = new Assignment.Person('Tyler');
  person.age = -1;
  t.is(person.age, 0);
});

Test('age above 120 is set to 12', t => {
  const person = new Assignment.Person('Tyler');
  person.age = 130;
  t.is(person.age, 120);
});

Test('age is normal within 0 - 120', t => {
  const person = new Assignment.Person('Tyler');
  const age = 34;
  person.age = age;
  t.is(person.age, age);
});