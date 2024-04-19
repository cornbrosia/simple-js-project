
// let bulbasaur = {
//     name: 'Bulbasaur',
//     height: .7,
//     type: ['grass']
// };
// let charmander = {
//     name: 'Charmander',
//     height: .6,
//     type: ['fire']
// };
// let squirtle = {
//     name: 'Squirtle',
//     height: .5,
//     type: ['water']
// };
// let jigglypuff = {
//     name: 'Jigglypuff',
//     height: .5,
//     type: ['fairy', 'normal']
// };
// let pokemonList = [bulbasaur, charmander, squirtle, jigglypuff];
let pokemonRepository = (function () {
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
    return {
        add: function (pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function () {
            return pokemonList;
        }
    };
})();


//for loop iterating through my array, printing names and checking height
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + ' height:' + pokemonList[i].height); if (pokemonList[i].height >= .6) {
//         document.write(' - Wow, thats a big feller!');

//     }
//     document.write('<br>');
// }


function iterate(pokemonRepository) {

    document.write(pokemonRepository.getAll.name + ' height:' + pokemonRepository.getAll.height); if (pokemonRepository.getAll.height >= .6) {
        document.write(' - Wow, thats a big feller!');

    }
    document.write('<br>');
}
pokemonRepository.forEach(iterate);