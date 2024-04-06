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
  'plastic',
  'catgirl'
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
  'cuties',
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
let lewd = false
// if true, only lewd parts are used
let lewdOnly = false

// Returns a random element from an array
const sample = function (array) {
  return array[Math.floor(Math.random() * array.length)]
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

  if (lewdOnly) {
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
  let newDeath = sample(possibleDeaths)
  while (newDeath === lastDeath) {
    newDeath = sample(possibleDeaths)
  }
  lastDeath = newDeath

  let newDestroyer = sample(possibleDestroyers)
  while (newDestroyer === lastDestroyer) {
    newDestroyer = sample(possibleDestroyers)
  }
  lastDestroyer = newDestroyer

  let newWorld = sample(possibleWorlds)

  // Don't use last used world
  while (newWorld === lastWorld) {
    newWorld = sample(possibleWorlds)
  }
  lastWorld = newWorld

  return `I am become ${newDeath}, ${newDestroyer} of ${newWorld}`
}

/* Generate a share link for the user's Mastodon domain */
function MastodonShare (text) {
  // Make text safe to be in a url
  text = encodeURIComponent(text)

  // Get the Mastodon domain
  const domain = window.prompt('Enter your Mastodon domain', 'mastodon.social')

  if (domain === '' || domain === null) { return }

  // Build the URL
  const url = `https://${domain}/share?text=${text}`

  // Open a window on the share page
  window.open(url, '_blank')
}

// on load
window.addEventListener('load', function () {
  // Add functionality to lewd toggle
  document.getElementById('lewd-toggle').addEventListener('change', () => {
    // Invert lewd
    lewd = !lewd
    // Make a new thing
    changeText(gen())
  })

  // Add functionality to lewd only toggle
  document.getElementById('lewd-only-toggle').addEventListener('change', () => {
    // Invert lewd_only
    lewdOnly = !lewdOnly

    if (lewdOnly) {
      // if lewd_only, must be lewd
      lewd = true
      document.getElementById('lewd-toggle').checked = true
    }

    // Make a new quote
    changeText(gen())
  })

  // Add functionality to mastodon share button
  this.document.getElementById('share').addEventListener('click', () => {
    const shareText = `${document.getElementById('answer').textContent}\n\nhttps://childishgiant.github.io/iambecome`

    MastodonShare(shareText)
  })

  // Add onclick for quote
  document.getElementById('answer').addEventListener('click', () => {
    changeText(gen())
  })

  // Make sure the inputs are in-step with the values
  document.getElementById('lewd-toggle').checked = lewd
  document.getElementById('lewd-only-toggle').checked = lewdOnly

  // Generate one on load
  changeText(gen())
})
