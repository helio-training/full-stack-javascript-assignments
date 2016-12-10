import Test from 'ava';
import * as Assignment from './';

Test('people are initially empty', t => {
  t.is(Assignment.people.length, 3);
});

Test('#getDevelopersWithSlice() returns the developer', t => {
  const people = Assignment.getDevelopersWithSlice();
  t.is(people.length, 1);
  t.is(people[0].name, 'Tyler');
});

Test('#getConstructionWorkersWithSlice() returns bob', t => {
  const people = Assignment.getConstructionWorkersWithSlice();
  t.is(people.length, 1);
  t.is(people[0].name, 'Bob the Builder');
});

Test('#getActorsWithSlice() returns chris farley', t => {
  const people = Assignment.getActorsWithSlice();
  t.is(people.length, 1);
  t.is(people[0].name, 'Chris Farley');
});

Test('#getDeveloperWithShift() returns chris farley', t => {
  const person = Assignment.getDeveloperWithShift();
  t.is(person.name, 'Tyler');
});

Test('#getDeveloperWithShift() returns chris farley', t => {
  const person = Assignment.getActorWithPop();
  t.is(person.name, 'Chris Farley');
});

Test('numbers returns [1,2,3]', t => {
  t.is(Assignment.numbers.length, 3);
  t.is(Assignment.numbers[0], 1);
});

Test('numbers returns 1,2,3', t => {
  t.is(Assignment.numbersAsString, '1,2,3');
});

Test('countdown returns 3,2,1', t => {
  t.is(Assignment.countdown.length, 3);
  t.is(Assignment.countdown[0], 3);
});

Test('names as an array of strings', t => {
  t.is(Assignment.names.length, 3);
  t.is(Assignment.names[0], 'Tyler');
});

Test('peopleWithGender is original array with gender added', t => {
  t.is(Assignment.peopleWithGender.length, 3);
  t.is(Assignment.peopleWithGender[0].gender, 'male');
  t.is(Assignment.peopleWithGender[0].name, 'Tyler');
});