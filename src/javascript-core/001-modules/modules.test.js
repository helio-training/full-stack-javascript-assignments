import Test from 'ava';
import Imports, {me} from './imports';

Test('Imports uses meaning of life', t => {
  t.is(Imports, 42);
});

Test('Exports me', t => {
  t.truthy(me['name']);
  t.truthy(me['age']);
  t.truthy(me['isTeacher']);
});