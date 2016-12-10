import Test from 'ava';
import * as Assignment from './';

Test(`Mammal can't greet`, t => {
  t.falsy(Assignment.Mammal.greet);
});

Test(`Mammal has a name`, t => {
  const name = 'shaggy';
  const mammal = new Assignment.Mammal(name);
  t.is(mammal.name, name);
});

Test(`Dog has a name and can greet with woof`, t => {
  const name = 'shaggy';
  const animal = new Assignment.Dog(name);
  t.is(animal.name, name);
  t.is(animal.greet(), 'Woof');
});

Test(`Cat has a name and can greet with meow`, t => {
  const name = 'cali';
  const animal = new Assignment.Cat(name);
  t.is(animal.name, name);
  t.is(animal.greet(), 'Meow');
});