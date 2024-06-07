let pokemonRepository=(function(){let apiUrl='https://pokeapi.co/api/v2/pokemon/?limit=150';var pokemonList=[];function addListItem(pokemon){let listGroup=document.querySelector('.list-group');let listItem=document.createElement('li');listItem.classList.add("list-group-item")
let button=document.createElement('button');button.innerHTML=pokemon.name;button.classList.add('btn-primary');button.setAttribute("data-target",".modal")
button.setAttribute("data-toggle","modal")
listItem.appendChild(button);listGroup.appendChild(listItem);document.body.appendChild(listGroup)
button.addEventListener("click",()=>{showModal(pokemon)});return button}
function showDetails(pokemon){loadDetails(pokemon).then(function(){})}
function add(pokemon){pokemonList.push(pokemon)}
function getAll(){return pokemonList}
function loadList(){return fetch(apiUrl).then(function(response){return response.json()}).then(function(json){json.results.forEach(function(item){let pokemon={name:item.name,detailsUrl:item.url};add(pokemon)})}).catch(function(e){console.error(e)})}
function loadDetails(item){let url=item.detailsUrl;return fetch(url).then(function(response){return response.json()}).then(function(details){item.imageUrl=details.sprites.front_default;item.height=details.height;item.types=details.types.map((types)=>types.type.name)}).catch(function(e){console.error(e)})}
return{add:add,addListItem:addListItem,getAll:getAll,loadList:loadList,loadDetails:loadDetails,showDetails:showDetails,}})();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(pokemon){pokemonRepository.addListItem(pokemon)})});function showModal(item){pokemonRepository.loadDetails(item).then(function(){$('#pokemonModalName').text(`Name: ${item.name} `);$("#pokemonModalImage").attr("src",item.imageUrl);$('#pokemonModalImage').prepend($('<img>',{id:'theImg',src:item.imageUrl}))
var meters=item.height/10;$('#pokemonModalHeight').text(`Height: ${meters} m`);let jsonStr=JSON.stringify(item.types);$('#pokemonModalTypes').text(`Types: ${jsonStr} `)})}