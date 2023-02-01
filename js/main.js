

const elPokeList = document.querySelector(".js-poke-list");
const pokeFragment = new DocumentFragment();

const elPokeTemplate = document.querySelector(".js-poke-temp").content;

console.log(elPokeTemplate);

console.log(kinolar);

kinolar.forEach(function(poke){
    const clonePokeTemplate = elPokeTemplate.cloneNode(true);
    
    const newPokeItem = clonePokeTemplate.querySelector(".js-poke-item");
    clonePokeTemplate.querySelector(".js-poke-title").textContent = poke.title;
    clonePokeTemplate.querySelector(".js-poke-num").textContent = poke.year;
    clonePokeTemplate.querySelector(".js-poke-type").textContent = poke.cast;
    clonePokeTemplate.querySelector(".js-poke-time").textContent = poke.genres;
    pokeFragment.appendChild(newPokeItem);
});

elPokeList.appendChild(pokeFragment);


