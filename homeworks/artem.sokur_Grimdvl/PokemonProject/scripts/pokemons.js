const pokemons = [
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/bulbasaur',
        weight: 15.2,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0001',
        height: 28.0,
        collectibles_slug: 'bulbasaur',
        featured: 'true',
        slug: 'bulbasaur',
        name: 'Bulbasaur',
        ThumbnailAltText: 'Bulbasaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        id: 1,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/ivysaur',
        weight: 28.7,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0002',
        height: 39.0,
        collectibles_slug: 'ivysaur',
        featured: 'true',
        slug: 'ivysaur',
        name: 'Ivysaur',
        ThumbnailAltText: 'Ivysaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        id: 2,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/venusaur',
        weight: 9999.0,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0003',
        height: 945.0,
        collectibles_slug: 'venusaur',
        featured: 'true',
        slug: 'venusaur',
        name: 'Venusaur',
        ThumbnailAltText: 'Venusaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        id: 3,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Thick Fat',
        ],
        detailPageURL: '/us/pokedex/venusaur',
        weight: 342.8,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0003',
        height: 94.0,
        collectibles_slug: 'venusaur',
        featured: 'true',
        slug: 'venusaur',
        name: 'Venusaur',
        ThumbnailAltText: 'Venusaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        id: 3,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Overgrow',
        ],
        detailPageURL: '/us/pokedex/venusaur',
        weight: 220.5,
        weakness: [
            'Fire',
            'Psychic',
            'Flying',
            'Ice',
        ],
        number: '0003',
        height: 79.0,
        collectibles_slug: 'venusaur',
        featured: 'true',
        slug: 'venusaur',
        name: 'Venusaur',
        ThumbnailAltText: 'Venusaur',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        id: 3,
        type: [
            'grass',
            'poison',
        ],
    },
    {
        abilities: [
            'Blaze',
        ],
        detailPageURL: '/us/pokedex/charmander',
        weight: 18.7,
        weakness: [
            'Water',
            'Ground',
            'Rock',
        ],
        number: '0004',
        height: 24.0,
        collectibles_slug: 'charmander',
        featured: 'true',
        slug: 'charmander',
        name: 'Charmander',
        ThumbnailAltText: 'Charmander',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
        id: 4,
        type: [
            'fire',
        ],
    },
    {
        abilities: [
            'Blaze',
        ],
        detailPageURL: '/us/pokedex/charmeleon',
        weight: 41.9,
        weakness: [
            'Water',
            'Ground',
            'Rock',
        ],
        number: '0005',
        height: 43.0,
        collectibles_slug: 'charmeleon',
        featured: 'true',
        slug: 'charmeleon',
        name: 'Charmeleon',
        ThumbnailAltText: 'Charmeleon',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
        id: 5,
        type: [
            'fire',
        ],
    },
    {
        abilities: [
            'Blaze',
        ],
        detailPageURL: '/us/pokedex/charizard',
        weight: 9999.0,
        weakness: [
            'Water',
            'Electric',
            'Rock',
        ],
        number: '0006',
        height: 1102.0,
        collectibles_slug: 'charizard',
        featured: 'true',
        slug: 'charizard',
        name: 'Charizard',
        ThumbnailAltText: 'Charizard',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        id: 6,
        type: [
            'fire',
            'flying',
        ],
    },
    {
        abilities: [
            'Drought',
        ],
        detailPageURL: '/us/pokedex/charizard',
        weight: 221.6,
        weakness: [
            'Water',
            'Electric',
            'Rock',
        ],
        number: '0006',
        height: 67.0,
        collectibles_slug: 'charizard',
        featured: 'true',
        slug: 'charizard',
        name: 'Charizard',
        ThumbnailAltText: 'Charizard',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        id: 6,
        type: [
            'fire',
            'flying',
        ],
    },
    {
        abilities: [
            'Tough Claws',
        ],
        detailPageURL: '/us/pokedex/charizard',
        weight: 243.6,
        weakness: [
            'Ground',
            'Rock',
            'Dragon',
        ],
        number: '0006',
        height: 67.0,
        collectibles_slug: 'charizard',
        featured: 'true',
        slug: 'charizard',
        name: 'Charizard',
        ThumbnailAltText: 'Charizard',
        ThumbnailImage: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
        id: 6,
        type: [
            'fire',
            'dragon',
            'flying',
        ],
    },
];

function createPokemonCard(pokemon) {
    const {
        name,
        ThumbnailImage,
        ThumbnailAltText,
        height,
        weight,
        number,
        type,
        weakness,
    } = pokemon;

    const cardHTML = `
        <div class="pokemons__cards-item">
            <div class="card__pokemon">
                <img class="card__pokemon-img" src="${ThumbnailImage}" alt="${ThumbnailAltText}">
                <h3 class="card__pokemon-name">
                    <strong>${name}</strong>
                </h3>
            </div>

            <div class="card__characteristics">
                <div class="card__characteristics-height">
                    <strong>Height:</strong>
                    <span>${height}"</span>
                </div>
                <div class="card__characteristics-weight">
                    <strong>Weight:</strong>
                    <span>${weight} lbs</span>
                </div>
                <div class="card__characteristics-number">
                    <strong>Number:</strong>
                    <span>${number}</span>
                </div>
                <div class="card__characteristics-type">
                    <strong>Type:</strong>
                    ${type.map((t) => `<span>${t}</span>`).join('')}
                </div>
                <div class="card__characteristics-weaknesses">
                    <strong>Weaknesses:</strong>
                    ${weakness.map((w) => `<span>${w}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    return cardHTML;
}

function renderCards(container, pokemon) {
    const cardsContainer = document.querySelector(container);
    if (!cardsContainer) return;

    pokemon.forEach((item) => {
        const cardHTML = createPokemonCard(item);
        cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

const container = '.pokemons__cards';
renderCards(container, pokemons);

// function createCardElement(pokemonData) {
//     const pokemonsTemplate = document.querySelector(
// '.pokemons__cards-item[data-type="card-template"]'
// ;
//     if (!pokemonsTemplate) return null;

//     const cardTemplate = pokemonsTemplate.content.cloneNode(true);

//     const img = cardTemplate.querySelector('.card__pokemon-img');
//     img.src = pokemonData.ThumbnailImage;
//     img.alt = pokemonData.ThumbnailAltText;

//     const name = cardTemplate.querySelector('.card__pokemon-name strong');
//     name.textContent = pokemonData.name;

//     const height = cardTemplate.querySelector('.card__characteristics-height span');
//     height.textContent = pokemonData.height + '"';

//     const weight = cardTemplate.querySelector('.card__characteristics-weight span');
//     weight.textContent = pokemonData.weight + ' lbs';

//     const number = cardTemplate.querySelector('.card__characteristics-number span');
//     number.textContent = pokemonData.number;

//     const typeSpans = cardTemplate.querySelectorAll('.card__characteristics-type span');
//     typeSpans.forEach((type, i) => {
//         if (i < pokemonData.type.length) {
//             type.textContent = pokemonData.type[i];
//         } else {
//             type.remove();
//         }
//     });

//     if (pokemonData.type.length > typeSpans.length) {
//         const typeContainer = cardTemplate.querySelector('.card__characteristics-type');
//         for (let i = typeSpans.length; i < pokemonData.type.length; i++) {
//             const span = document.createElement('span');
//             span.textContent = pokemonData.type[i];
//             typeContainer.appendChild(span);
//         }
//     }

//     const wrapper = document.createElement('div');
//     wrapper.classList.add('pokemons__cards-item');
//     wrapper.appendChild(cardTemplate);

//     return wrapper;
// }

// function renderCards(container, pokemons) {
//     const cardsContainer = document.querySelector(container);
//     if (!cardsContainer) return;

//     pokemons.forEach(pokemon => {
//         const cardHTML = createPokemonCard(pokemon);
//         cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
//     });
// }

// const container = '.pokemons__cards';
// renderCards(container, pokemons);
