// Show Alert based on Input
function welcomealert() {
  var username = document.querySelector("#username").value;
  var usernumberofpokemons = document.querySelector(
    "#usernumberofpokemons"
  ).value;
  if (usernumberofpokemons > 0) {
    alert(
      "Kudos on collecting " +
        usernumberofpokemons +
        " Pokemons, " +
        username +
        "!!"
    );
  } else {
    alert("Boo! Better Luck Next Time!");
  }
}

// Play Sound Button
function playsound() {
  var audio = new Audio("assets/pokemonsound.m4r");
  audio.play();
}

// Show individual Pokemons
function showcharizard() {
  var imgshow = document.querySelector("#charizard");
  var btntext = document.querySelector("#charizardbtn");
  if (imgshow.style.visibility == "hidden") {
    imgshow.style.visibility = "visible";
    btntext.innerHTML = "Hide Charizard";
  } else {
    imgshow.style.visibility = "hidden";
    btntext.innerHTML = "Show Charizard";
  }
}

function showwigglytuff() {
  var imgshow = document.querySelector("#wigglytuff");
  var btntext = document.querySelector("#wigglytuffbtn");
  if (imgshow.style.visibility == "hidden") {
    imgshow.style.visibility = "visible";
    btntext.innerHTML = "Hide Wigglytuff";
  } else {
    imgshow.style.visibility = "hidden";
    btntext.innerHTML = "Show Wigglytuff";
  }
}

function showvenusaur() {
  var imgshow = document.querySelector("#venusaur");
  var btntext = document.querySelector("#venusaurbtn");
  if (imgshow.style.visibility == "hidden") {
    imgshow.style.visibility = "visible";
    btntext.innerHTML = "Hide Venusaur";
  } else {
    imgshow.style.visibility = "hidden";
    btntext.innerHTML = "Show Venusaur";
  }
}

// Show group of Pokemons
function showc() {
  var imgshow = document.querySelectorAll(".cpokemon");
  var btntext = document.querySelector("#cpokemonbtn");
  for (let i = 0; i < imgshow.length; i++) {
    if (imgshow[i].style.visibility == "hidden") {
      imgshow[i].style.visibility = "visible";
      btntext.innerHTML = "Hide Pokemons";
    } else {
      imgshow[i].style.visibility = "hidden";
      btntext.innerHTML = `Show 3 Pokemons starting with "C"`;
    }
  }
}

// Flashcard Page Variables
var defshow = document.querySelector("#flashcard-definition");
var termshow = document.querySelector("#flashcard-term");

// Flascard Content
let flashcards = {
  Bulbasaur:
    "Bulbasaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.",
  Charmander:
    "Charmander is a Fire type Pokémon introduced in Generation 1. It is known as the Lizard Pokémon.",
  Charizard:
    "Charizard is a Fire/Flying type Pokémon introduced in Generation 1. It is known as the Flame Pokémon. Charizard has two Mega Evolutions, available from X & Y onwards.",
  Wartortle:
    "Wartortle is a Water type Pokémon introduced in Generation 1. It is known as the Turtle Pokémon.",
  Metapod:
    "Metapod is a Bug type Pokémon introduced in Generation 1. It is known as the Cocoon Pokémon.",
  Butterfree:
    "Butterfree is a Bug/Flying type Pokémon introduced in Generation 1. It is known as the Butterfly Pokémon.",
  Beedrill:
    "Beedrill is a Bug/Poison type Pokémon introduced in Generation 1. It is known as the Poison Bee Pokémon. Beedrill has a Mega Evolution, available from Omega Ruby & Alpha Sapphire onwards.",
  Pidgeot:
    "Pidgeot is a Normal/Flying type Pokémon introduced in Generation 1. It is known as the Bird Pokémon. Pidgeot has a Mega Evolution, available from Omega Ruby & Alpha Sapphire onwards.",
  Rattata:
    "Rattata is a Normal type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon. Rattata has a new Alolan form introduced in Pokémon Sun/Moon.",
  Spearow:
    "Spearow is a Normal/Flying type Pokémon introduced in Generation 1. It is known as the Tiny Bird Pokémon.",
};

data = Object.entries(flashcards);

function getRandom() {
  let randomterm = data[Math.floor(Math.random() * data.length)];
  termshow.innerHTML = `<h2>${randomterm[0]}</h2>`;
  defshow.innerHTML = `<p>${randomterm[1]}</p>`;
}

// Show and Hide Flashcard Definition
function showdef() {
  var flashdefbtn = document.querySelector("#flash-def-btn");
  if (defshow.style.visibility == "hidden") {
    defshow.style.visibility = "visible";
    flashdefbtn.innerHTML = `Hide Definition`;
  } else {
    defshow.style.visibility = "hidden";
    flashdefbtn.innerHTML = `Show Definition`;
  }
}
