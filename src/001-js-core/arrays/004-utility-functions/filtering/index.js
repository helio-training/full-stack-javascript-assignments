import Senators from '../../datasets/senators';

const PARTIES = {
  REPUBLICAN: 'Republican',
  DEMOCRAT: 'Democrat',
  INDEPENDENT: 'Independent',
};

export const RepublicanSenators = Senators.filter(s => s.party === PARTIES.REPUBLICAN);
export const DemocraticSenators = Senators.filter(s => s.party === PARTIES.DEMOCRAT);
export const IndependentSenators = Senators.filter(s => s.party === PARTIES.INDEPENDENT);

export const RupublicanSenatorStates = [...new Set(RepublicanSenators.map(s => s.state))].sort();
export const DemocraticSenatorStates = [...new Set(DemocraticSenators.map(s => s.state))].sort();
export const IndependentSenatorStates = [...new Set(IndependentSenators.map(s => s.state))].sort();

export const States = [... new Set(RupublicanSenatorStates.concat(DemocraticSenatorStates))];

export const SenatorInUtah = Senators.find(s => s.state === 'UT');

export const UtahHasRepublicanSenator = RupublicanSenatorStates.includes('UT');

export const HasIndependentSenators = Senators.some(s => s.party === PARTIES.INDEPENDENT);