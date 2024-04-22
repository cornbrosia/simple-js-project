
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
    function addListItem(pokemon) {
        let pokeVar = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');

        let button = document.createElement('button');
        button.innerHTML = pokemon.name;
        button.classList.add('poke-Button');
        listItem.appendChild(button);
        pokeVar.appendChild(listItem);
        document.body.appendChild(pokeVar)

        let button2 = document.querySelector('button');
        button2.addEventListener('click', showDetails(pokemon));
    }
    function showDetails(pokemon) {
        console.log(pokemon);
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


function iterate(pokemon) {
    {

        //document.write(pokemon.name + ' height:' + pokemon.height); if (pokemon.height >= .6) {
        //  document.write(' - Wow, thats a big feller!');
        // let pokeVar = document.querySelector('pokemon-list');
        // let listItem = document.createElement('li');

        // let button = document.createElement('button');
        // button.innerHTML = pokemon.name;
        // button.classList.add('poke-Button');
        // document.body.appendChild(button);
        // document.body.appendChild(listItem);
    }
    //document.write('<br>');
}
pokemonRepository.getAll().forEach(pokemonRepository.addListItem);