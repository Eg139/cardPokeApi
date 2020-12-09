const fire = "images/fuego.jpg";
const ice = "images/nieve.jpg";
const grass = "images/planta.jpg";
const flying = "images/aire.jpg";
const steel = "images/acero.png";
const water = "images/agua.jpg";
const bug = "images/bicho.jpg";
const dragon = "images/dragon.jpg";
const electric = "images/electrico.jpg";
const ghost = "images/fantasma.jpg";
const fight = "images/lucha.jpg";
const psychic = "images/psiquico.jpg";
const rock = "images/roca.jpg";
const dark = "images/siniestro.jpg";
const ground = "images/tierra.jpg";

document.addEventListener('DOMContentLoaded', ()=> {
    const random = getRandomInt(252,387)
    fetchData(random)
})

const getRandomInt = (min,max) => {
    return Math.floor(Math.random()*(max -min))+min;
}


const fetchData = async (id)=>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        console.log(data)
        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            index: data.game_indices[0].game_index,
            ataque:data.stats[1].base_stat,
            defensa:data.stats[2].base_stat,
            especial:data.stats[3].base_stat,
            tipo:data.types[0].type.name
        }
        pintarCard(pokemon)
    }catch(error){
        console.log(error);
    }
}

const pintarCard = (pokemon) => {
    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp} hp</span>`
    clone.querySelector('.card-body-text').textContent = 'Pokemon #'+ pokemon.index
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa
    switch (pokemon.tipo) {
        case "fire":
        clone.querySelector('.card-header').setAttribute('src', fire)
        break;
        case "ice":
        clone.querySelector('.card-header').setAttribute('src', ice)
        break;
        case "grass":
        clone.querySelector('.card-header').setAttribute('src', grass)
        break;
        case "flying":
        clone.querySelector('.card-header').setAttribute('src', flying)
        break;
        case "steel":
        clone.querySelector('.card-header').setAttribute('src', steel)
        break;
        case "water":
        clone.querySelector('.card-header').setAttribute('src', water)
        break;
        case "electric":
        clone.querySelector('.card-header').setAttribute('src', electric)
        break;
        case "ghost":
        clone.querySelector('.card-header').setAttribute('src', ghost)
        break;
        case "fighting":
        clone.querySelector('.card-header').setAttribute('src', fight)
        break;
        case "psychic":
        clone.querySelector('.card-header').setAttribute('src', psychic)
        break;
        case "rock":
        clone.querySelector('.card-header').setAttribute('src', rock)
        break;
        case "dark":
        clone.querySelector('.card-header').setAttribute('src', dark)
        break;
        case "ground":
        clone.querySelector('.card-header').setAttribute('src', ground)
        break;
        case "bug":
        clone.querySelector('.card-header').setAttribute('src', bug)
        break;
        case "dragon":
        clone.querySelector('.card-header').setAttribute('src', dragon)
        break;

                default:
                    break;
            }

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}