import Test from 'ava';
import Assignment from './';

Test('catch the error with a try/catch', t => {
  const result = Assignment();
  t.truthy(result);
});