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
function addListItem(pokemon) {
    let pokeVar = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerHTML = pokemon.name;
    button.classList.add('poke-Button');
    listItem.appendChild(button);
    pokeVar.appendChild(listItem);
    document.body.appendChild(pokeVar)

    return button
}
function showDetails(pokemon) {
    console.log(pokemon.name);
}
return {
    add: function (pokemon) {
        pokemonList.push(pokemon);
    },
    getAll: function () {
        return pokemonList;
    },
    addListItem: function (pokemon) {
        return addListItem(pokemon);
    },
    showDetails: function (pokemon) {
        return showDetails(pokemon)
    }
};