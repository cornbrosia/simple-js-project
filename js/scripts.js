
let pokemonRepository = (function () {
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    var pokemonList = [];
    // let imageUrl = loadDetails(pokemon).imgUrl;
    function addListItem(pokemon) {
        let listGroup = document.querySelector('.list-group');
        let listItem = document.createElement('li');
        listItem.classList.add("list-group-item")
        let button = document.createElement('button');
        button.innerHTML = pokemon.name;
        button.classList.add('btn-primary');
        button.setAttribute("data-target", ".modal")
        button.setAttribute("data-toggle", "modal")
        listItem.appendChild(button);
        listGroup.appendChild(listItem);
        document.body.appendChild(listGroup)
        return button
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            // pass pokemon.imageUrl to showModal()
            showModal(pokemon);
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
        showDetails: showDetails,

    };
})();

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

function showModal(item) {


    // Set the modal elements
    $('#pokemonModalTitle').text(capitalizeFirstLetter(item.name));
    $('#pokemonModalImage').attr('src', item.imgURL).addClass('modal-image img-fluid');
    $('#pokemonModalTypes').text(`Types: ${item.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ')}`);
    $('#pokemonModalHeight').text(`Height: ${item.height} m`).addClass('pt-3');
}