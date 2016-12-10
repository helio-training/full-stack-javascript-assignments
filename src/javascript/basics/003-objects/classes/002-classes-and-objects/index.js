export const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};

export class Robot {
  
  constructor(name, faction) {
    this._name = name;
    this._faction = faction;
    this._power = 1000;
  }
  
  get name() {
    return this._name;
  }
  
  // set name(value) {
  //   this._name = value;
  // }
  
  get faction() {
    return this._faction;
  }
  
  get power() {
    return this._power;
  }
  
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

export class OptimusPrime extends Robot {
  
  constructor() {
    super('Optimus Prime', FACTIONS.Autobots);
  }
}

export class Megatron extends Robot {
  
  constructor() {
    super('Megatron', FACTIONS.Decepticons);
  }
}


export default {
  megatron: new Megatron(),
  optimusPrime: new OptimusPrime()
}