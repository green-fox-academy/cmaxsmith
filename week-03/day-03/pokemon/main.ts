'use strict'
export{}

import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

pokemonOfAsh.forEach(pokem => {
    if (pokem.effectiveAgainst === wildPokemon.type) {
        console.log('I choose you, ' + pokem.name + '!')
    }
})




// console.log('I choose you, ' + bestChoice);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

// function choosePoke (a: any []) {
//     for (let i = 0; i < a.length; i++) {
//    if (a[i].effectiveAgainst === "leaf") {
//     console.log(a[i].name + " I choose you!");
//    }
//     }
//    }
   
//    choosePoke(pokemonOfAsh);
