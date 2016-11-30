import Test from 'ava';
import { OptimusPrime, Megatron, FACTIONS } from './';


Test('Optimus Prime is correct', t => {
  const { name, faction, power, greet } = OptimusPrime;
  
  t.is(name, 'Optimus Prime');
  t.is(faction, FACTIONS.Autobots);
  t.is(power, 1000);
  
  t.is(typeof(greet), 'function');
});


Test('Megatron is correct', t => {
  const { name, faction, power, greet } = Megatron;
  
  t.is(name, 'Megatron');
  t.is(faction, FACTIONS.Decepticons);
  t.is(power, 1000);
  
  t.is(typeof(greet), 'function');
});


Test('FACTIONS is definied', t => {
  t.is(FACTIONS.Decepticons, 'decepticons');
  t.is(FACTIONS.Autobots, 'autobots');
});