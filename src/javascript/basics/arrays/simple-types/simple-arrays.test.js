import Test from 'ava';

import * as Assignment from './';

Test('Numbers: Prime numbers are correct', t => {
  t.is(Assignment.Primes.length, 25);
});

Test('Strings: English Vowels', t => {
  t.is(Assignment.Vowels.length, 5);
});

Test('Objects: US Presidents', t => {
  t.is(Assignment.Presidents.length, 44);
});

