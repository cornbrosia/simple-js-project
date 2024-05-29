
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
        button.addEventListener("click", () => { showModal(pokemon); });
        return button
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            // pass pokemon.imageUrl to showModal()

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
    $('#pokemonModalName').text(`Name: ${item.name} `);
    $('#pokemonModalImage').attr('src', item.imgURL).addClass('modal-image img-fluid');
    $('#pokemonModalTypes').text(`Types: ${item.types} `);
    $('#pokemonModalHeight').text(`Height: ${item.height} m`);
}
