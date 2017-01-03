import Test from 'ava';
import * as Assignment from './';

Test(`Matrix is setup properly`, t => {
  t.is(Assignment.Matrix[0][0], 1);
  t.is(Assignment.Matrix[2][2], 9);
});


Test(`Jagged is setup properly`, t => {
  t.is(Assignment.Jagged[0][0], 1);
  t.is(Assignment.Jagged[2][0], 9);
  t.is(Assignment.Jagged[1][2], 6);
});

Test(`Matrix traversal is setup properly`, t => {
  t.is(Assignment.matrixTraversal());
});


Test(`Jagged traversal is setup properly`, t => {
  t.is(Assignment.jaggedTraversal());
});
