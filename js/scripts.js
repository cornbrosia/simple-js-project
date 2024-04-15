
let bulbasaur = {
    name: 'Bulbasaur',
    height: .7,
    type: ['grass']
};
let charmander = {
    name: 'Charmander',
    height: .6,
    type: ['fire']
};
let squirtle = {
    name: 'Squirtle',
    height: .5,
    type: ['water']
};
let jigglypuff = {
    name: 'Jigglypuff',
    height: .5,
    type: ['fairy', 'normal']
};
let pokemonList = [bulbasaur, charmander, squirtle, jigglypuff];
//for loop iterating through my array, printing names and checking height
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' height:' + pokemonList[i].height); if (pokemonList[i].height >= .6) {
        document.write(' - Wow, thats a big feller!');

    }
    document.write('<br>');
}