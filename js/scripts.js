
let pokemonRepository = (function () {
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    var pokemonList = [];

    function addListItem(pokemon) {
        let pokeVar = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');

        let button = document.createElement('button');
        button.innerHTML = pokemon.name;
        button.classList.add('poke-Button');
        listItem.appendChild(button);
        pokeVar.appendChild(listItem);
        document.body.appendChild(pokeVar)
        button.addEventListener('click', () => showDetails(pokemon));

        return button
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList
    }
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
        add: add,
        addListItem: addListItem,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
//for loop iterating through my array, printing names and checking height
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + ' height:' + pokemonList[i].height); if (pokemonList[i].height >= .6) {
//         document.write(' - Wow, thats a big feller!');

//     }
//     document.write('<br>');
// }


// function iterate(pokemon) {
//     {
//         let button = pokemonRepository.addListItem(pokemon)
//         button.addEventListener('click', () => pokemonRepository.showDetails(pokemon));

//document.write(pokemon.name + ' height:' + pokemon.height); if (pokemon.height >= .6) {
//  document.write(' - Wow, thats a big feller!');
// let pokeVar = document.querySelector('pokemon-list');
// let listItem = document.createElement('li');

// let button = document.createElement('button');
// button.innerHTML = pokemon.name;
// button.classList.add('poke-Button');
// document.body.appendChild(button);
// document.body.appendChild(listItem);
// }
//document.write('<br>');
// }
// pokemonRepository.getAll().forEach(iterate);