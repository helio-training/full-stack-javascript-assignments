import Test from 'ava';
import Assignment from './';

Test(`#add function adds numbers correctly`, t => {
  Assignment.add(1, 2, (err, result) => {
    t.falsy(err);
    t.is(result, 3);
  });
});

Test(`#producesError sends an error with the callback`, t => {
  Assignment.producesError(err => {
    t.truthy(err);
    t.is(err.message, 'This is my error');
  });
});

Test(`#addAndMultiply returns multiple results`, t => {
  Assignment.addAndMultiply(2, 3, (err, add, multiply) => {
    t.is(add, 5);
    t.is(multiply, 6);
  })
});

