import Test from 'ava';
import * as Assignment from './';

//Test('ssn sanitizes properly', t => {
//  const ssn = Assignment.ssn('123-12-1231');
//  t.is(ssn.sanitize(), '123121231');
//});

Test('ssn is valid works', t => {
  const ssn = Assignment.ssn('123-12-1231');
  t.truthy(ssn.isValid());
});


Test('ssn is valid works', t => {
  const ssn = Assignment.ssn('123456789');
  t.is(ssn.toString(), '123-45-6789');
});

Test(`result is 3`, t => t.is(Assignment.result, 3));


