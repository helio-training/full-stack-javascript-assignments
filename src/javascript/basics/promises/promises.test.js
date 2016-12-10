import Test from 'ava';
import Assignment from './';

Test(`#add returns a promise`, t => {
  t.truthy(Assignment.add(1, 2).then);
  
  return Assignment.add(1, 2)
                   .then(result => {
                     t.is(result, 3);
                   })
});

Test(`#divide returns a promise`, t => {
  return Assignment.divide(4, 2)
                   .then(result => {
                     t.is(result, 2);
                   })
});

Test(`#divide by zero is erroneous`, t => {
  return Assignment.divide(4, 0)
                   .then(result => t.falsy(result))
                   .catch(err => t.truthy(err.message));
});

Test(`#addAndDivide works`, t => {
  return Assignment.addAndDivide(4, 2)
                   .then(result => {
                     t.is(result[0], 6);
                     t.is(result[1], 2);
                   })
});