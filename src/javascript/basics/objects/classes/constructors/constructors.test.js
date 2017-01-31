import Test from 'ava';
import * as Assignment from './';

Test(`Vehicle is exported properly`, t => {
  t.truthy(Assignment.Vehicle);
});

Test(`Truck is exported properly`, t => {
  t.truthy(Assignment.Truck);
});

Test(`Car is exported properly`, t => {
  t.truthy(Assignment.Car);
});

Test(`F150 is setup properly`, t => {
  t.is(Assignment.F150.make, 'Ford');
  t.is(Assignment.F150.engineType, 'V8');
  t.is(Assignment.F150.numberOfDoors, 2);
});

Test(`Prius is setup properly`, t => {
  t.is(Assignment.Prius.make, 'Toyota');
  t.is(Assignment.Prius.engineType, 'V4');
  t.is(Assignment.Prius.numberOfDoors, 4);
});
