import Test from 'ava';
import Assignment from './';

Test('number typings', t => {
  t.is(Assignment.myNum, 1)
  t.not(Assignment.myNum, new Number(1))
  t.falsy(Assignment.myNum instanceof Number)
  t.truthy(new Number(Assignment.myNum) instanceof Number)

  t.is(typeof Assignment.myNum, 'number')
  t.is(typeof Assignment.myDecimal, 'number')
  t.is(Assignment.myDecimal + Assignment.myDecimal, 0.04)
  t.is(Assignment.myFloat, 0.1)
  t.is(Assignment.myFloat2, 0.2)
  t.is(Assignment.myFloat + Assignment.myFloat2, 0.30000000000000004)
});

Test('string typings', t => {
  t.is(Assignment.myString.toString(), 'Hello world', 'should be a string')
  t.is(Assignment.stringObj.toString(), 'Hello world', 'should be a string')
  t.is(Assignment.myString instanceof String, false)
  t.is(Assignment.stringObj instanceof String, true)

  // What will this output?
  // t.is(Assignment.myString, Assignment.stringObj)
});

Test('object typings', t => {
  t.truthy(Assignment.myObj)
  t.is(Assignment.myObj instanceof Object, true)
  t.is(typeof Assignment.myObj, 'object')
});

// Does anything below surprise you? Did you have to change anything to make these tests pass? If so, why?
Test('Fluffy the Cat typings', t => {
  t.truthy(Assignment.Cat)
  t.is(Assignment.Cat instanceof Object, true)
  t.is(Assignment.Cat, Assignment.Fluffy)
});

