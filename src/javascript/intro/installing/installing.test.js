import Test from 'ava';
import * as Assignment from './';

Test('name is exported properly', t => {
  t.truthy(Assignment.name);
});

Test('email is exported properly', t => {
  t.truthy(Assignment.email);
});
