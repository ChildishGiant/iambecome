// Arrays of possible parts
const DEATHS = [
  'death',
  'life',
  'sugar',
  'ur mom',
  'ur dad',
  'rusty ford fiesta',
  'capitalism',
  'queer',
  'pasta',
  'carbs',
  'facebook',
  'cheese',
  'plastic'
]

const LEWD_DEATHS = [
  'twink',
  'cock',
  'tentacle dildo'
]

const DESTROYERS = [
  'destroyer',
  'hugger',
  'kisser',
  'puncher',
  'crusher',
  'consumer',
  'frequenter',
  'taker',
  'licker'
]

const LEWD_DESTROYERS = [
  'fucker',
  'fister'
]

const WORLDS = [
  'worlds',
  'women',
  'men',
  'metabolisms',
  'will to live',
  'ur mom',
  'ur dad',
  'hope',
  'microwave meals',
  'cheese'
]

const LEWD_WORLDS = [
  'asses',
  'cocks',
  'twinks',
  'drugs',
  'brothels'
]

// if true, lewd results can be generated
let lewd = true
// if true, only lewd parts are used
let lewd_only = false

// Returns a random element from an array
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)]
}

function changeText (text) {
  document.getElementById('answer').textContent = text
}

let lastDeath = '' // Used to store the last chosen death so we don't immediately repeat it
let lastDestroyer = ''
let lastWorld = ''

function gen () {
  let possibleDeaths = DEATHS
  let possibleDestroyers = DESTROYERS
  let possibleWorlds = WORLDS

  if (lewd_only) {
    possibleDeaths = LEWD_DEATHS
    possibleDestroyers = LEWD_DESTROYERS
    possibleWorlds = LEWD_WORLDS
  } else

  if (lewd) {
    possibleDeaths = DEATHS.concat(LEWD_DEATHS)
    possibleDestroyers = DESTROYERS.concat(LEWD_DESTROYERS)
    possibleWorlds = WORLDS.concat(LEWD_WORLDS)
  }

  // Select random parts for each but keep choosing new ones
  // till it's not the same as the last used
  let newDeath = possibleDeaths.sample()
  while (newDeath === lastDeath) {
    newDeath = possibleDeaths.sample()
  }
  lastDeath = newDeath

  let newDestroyer = possibleDestroyers.sample()
  while (newDestroyer === lastDestroyer) {
    newDestroyer = possibleDestroyers.sample()
  }
  lastDestroyer = newDestroyer

  let newWorld = possibleWorlds.sample()
  // Don't use last used world or current death (no mum destroyer of mum, sorry)
  while (newWorld === lastWorld || newWorld === newDeath || newWorld === newDeath.substring(0,newDeath.length - 1)) {
    newWorld = possibleWorlds.sample()
  }
  lastWorld = newWorld

  return `I am become ${newDeath}, ${newDestroyer} of ${newWorld}`
}

// on load
window.addEventListener('load', function () {

  // Add functionality to lewd toggle
  document.getElementById('lewd-toggle').addEventListener('change', () => {
    // Invert lewd
    lewd=!lewd;
    // Make a new thing
    changeText(gen())
  })

  // Add functionality to lewd only toggle
  document.getElementById('lewd-only-toggle').addEventListener('change', () => {
    // Invert lewd_only
    lewd_only=!lewd_only;

    if (lewd_only) {
      // if lewd_only, must be lewd
      lewd = true
      document.getElementById('lewd-toggle').checked = true
    }
    
    // Make a new quote
    changeText(gen())
  })

  // Add onclick for quote
  document.getElementById('answer').addEventListener('click', () => {
    changeText(gen())
  })

  // Make sure the inputs are in-step with the values
  document.getElementById('lewd-toggle').checked = lewd
  document.getElementById('lewd-only-toggle').checked = lewd_only


  // Generate one on load
  changeText(gen())
})
