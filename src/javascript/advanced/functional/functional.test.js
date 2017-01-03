import Test from 'ava';
import * as Assignment from './';
import Bills from '../../../_datasets/bills-passed';

Test(`Retrieves current bills`, t => {
  const result = Assignment.isCurrentAndBill(Bills);
  console.log(result.length);

  const sponsors = Assignment.sponsor(Bills);
  console.log(sponsors.length);
});