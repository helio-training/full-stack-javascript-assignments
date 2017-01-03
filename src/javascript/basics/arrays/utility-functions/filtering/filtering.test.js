import Test from 'ava';
import * as Assignment from './';

Test('Republican Senators', t => {
  t.is(Assignment.RepublicanSenators.length, 54);
});

Test(`Republican Senator's States`, t => {
  t.is(Assignment.RupublicanSenatorStates.length, 34);
});

Test('Democratic Senators', t => {
  t.is(Assignment.DemocraticSenators.length, 44);
});

Test(`Democratic Senator's States`, t => {
  t.is(Assignment.DemocraticSenatorStates.length, 29);
});

Test('Independent Senators', t => {
  t.is(Assignment.IndependentSenators.length, 2);
});

Test(`Independent Senator's States`, t => {
  t.is(Assignment.IndependentSenatorStates.length, 2);
});

Test(`States`, t => {
  t.is(Assignment.States.length, 50);
});

Test(`Utah Senator`, t => {
  const { person } = Assignment.SenatorInUtah;
  t.is(person.name, 'Sen. Mike Lee [R-UT]');
});

Test(`Utah has republican senator?`, t => {
  t.truthy(Assignment.UtahHasRepublicanSenator);
});

Test(`Has independent senators?`, t => {
  t.truthy(Assignment.HasIndependentSenators);
});
