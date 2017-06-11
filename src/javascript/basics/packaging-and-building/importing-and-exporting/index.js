// Members
/*
    when importing, use 'Member Notation'...
    which is the  { FACTIONS, Robot }
    Multiple named exports within 1 file
*/
export let FACTIONS = {Autobots: 'Autobots', Decepticons: 'Decepticons'};
export class Robot {
    constructor(name, faction){
        this.name = name;
        this.faction = faction;
        this.power = 1000;
    }

    greet(){
        return `Hi, I'm ${this.name}`;
    }  
};

// Default export
/*
    Only single default export within 1 file.
*/
export default {
    optimusPrime: new Robot('Optimus Prime', FACTIONS.Autobots),
    megatron: new Robot('Megatron', FACTIONS.Decepticons)
}

