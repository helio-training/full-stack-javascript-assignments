import Test from 'ava';
import Assignment from './';

Test('determine typings', t => {
  console.log(typeof(Assignment.greet));
  
  console.log(Assignment.greet);
  
  console.log(Object);
  
  
  if(null) {
    t.truthy(false);
  }
});
