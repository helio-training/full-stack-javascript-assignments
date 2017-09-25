import Test from 'ava';
import Robots, { FACTIONS, Robot } from './';

Test('Optimus Prime', t => {
  const { optimusPrime } = Robots;
  
  t.is(optimusPrime.name, 'Optimus Prime');
  t.is(optimusPrime.faction, FACTIONS.Autobots);
  t.is(optimusPrime.greet(), `Hi, I'm Optimus Prime`);
});

Test('Megatron', t => {
  const { megatron } = Robots;
  
  t.is(megatron.name, 'Megatron');
  t.is(megatron.faction, FACTIONS.Decepticons);
  t.is(megatron.greet(), `Hi, I'm Megatron`);
});

Test('Can create bumblebee from Robot', t => {
  const name = 'BumbleBee';
  const faction = FACTIONS.Autobots;
  const POWER = 1000;
  
  const bumblebee = new Robot(name, faction);
  
  
  t.is(bumblebee.name, name);
  t.is(bumblebee.faction, FACTIONS.Autobots);
  t.is(bumblebee.greet(), `Hi, I'm ${name}`);
  t.is(bumblebee.power, POWER);
});