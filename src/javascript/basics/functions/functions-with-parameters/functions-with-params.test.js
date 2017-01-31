import Test from 'ava';
import * as Assignemnt from './';

Test(`#pluck(object, param, defaultValue) finds a valid parameter`, t =>
  t.is(Assignemnt.pluck({ name: 'Tyler' }, 'name'), 'Tyler'));

Test(`#pluck(object, param, defaultValue) is undefined when it can't find a value`, t =>
  t.falsy(Assignemnt.pluck({ name: 'Tyler' }, 'age')));

Test(`#pluck(object, param, defaultValue) is assigned a default when undefined and a default value is assigned`, t =>
  t.is(Assignemnt.pluck({ name: 'Tyler' }, 'age', 35), 35));


