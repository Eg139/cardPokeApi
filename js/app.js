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
var particulas ={
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

document.addEventListener('DOMContentLoaded', ()=> {
    const random = getRandomInt(1,387)
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
        particulas.particles.color.value = "#ff0000"
        break;
        case "ice":
        clone.querySelector('.card-header').setAttribute('src', ice)
        particulas.particles.color.value = "#9FF9EF"
        break;
        case "grass":
        clone.querySelector('.card-header').setAttribute('src', grass)
        particulas.particles.color.value = "#00FB17"
        break;
        case "flying":
        clone.querySelector('.card-header').setAttribute('src', flying)
        particulas.particles.color.value = "#DFFAF6"
        break;
        case "steel":
        clone.querySelector('.card-header').setAttribute('src', steel)
        particulas.particles.color.value = "#9A9A9A"
        break;
        case "water":
        clone.querySelector('.card-header').setAttribute('src', water)
        particulas.particles.color.value = "#010C4C"
        break;
        case "electric":
        clone.querySelector('.card-header').setAttribute('src', electric)
        particulas.particles.color.value = "#F7FF00"
        break;
        case "ghost":
        clone.querySelector('.card-header').setAttribute('src', ghost)
        particulas.particles.color.value = "#360679"
        break;
        case "fighting":
        clone.querySelector('.card-header').setAttribute('src', fight)
        particulas.particles.color.value = "#540406"
        break;
        case "psychic":
        clone.querySelector('.card-header').setAttribute('src', psychic)
        particulas.particles.color.value = "#D800FF"
        break;
        case "rock":
        clone.querySelector('.card-header').setAttribute('src', rock)
        particulas.particles.color.value = "#744617"
        break;
        case "dark":
        clone.querySelector('.card-header').setAttribute('src', dark)
        particulas.particles.color.value = "#0F0F0F"
        particulas.particles.shape.stroke.width = 2
        particulas.particles.shape.stroke.color = "#ffffff"
        break;
        case "ground":
        clone.querySelector('.card-header').setAttribute('src', ground)
        particulas.particles.color.value = "#A67B0B"
        break;
        case "bug":
        clone.querySelector('.card-header').setAttribute('src', bug)
        particulas.particles.color.value = "#BCCB07"
        break;
        case "dragon":
        clone.querySelector('.card-header').setAttribute('src', dragon)
        particulas.particles.color.value= "#0004F7"
        break;

                default:
                    break;
            }
    particlesJS(particulas);

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}