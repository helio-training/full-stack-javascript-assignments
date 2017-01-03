import Test from 'ava';
import * as Assignment from './';

Test('names has just strings in it', t => {
  t.is(Assignment.names.length, 44);
  t.is(Assignment.names[0], 'George Washington');
});

Test('Has James in it', t => {
  t.is(Assignment.hasJamesInName.length, 5);
});

Test('President Madison', t => {
  t.is(Assignment.PresidentMadison.party, 'Democratic-Republican');
});
