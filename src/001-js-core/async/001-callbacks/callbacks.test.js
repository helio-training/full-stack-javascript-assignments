import Test from 'ava';
import Assignment from './';

Test(`#add function adds numbers correctly`, t => {
  Assignment.add(1, 2, (err, result) => {
    t.falsy(err);
    t.is(result, 3);
  });
});

