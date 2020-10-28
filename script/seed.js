'use strict'

const db = require('../server/db')
const {User, Question} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({nickname: 'Cody', email: 'cody@email.com', password: '123'}),
    User.create({
      nickname: 'Murphy',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  console.log(`seeded ${users.length} users`)

  const questions = await Promise.all([
    Question.create({
      q: 'What was Tandem previous name?',
      correct: 'Devmynd',
      incorrect1: 'Tandem',
      incorrect2: 'Burger Shack',
      incorrect3: 'Extraordinary Humans'
    }),
    Question.create({
      q: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
      correct: 'Et tu, Brute?',
      incorrect1: 'Iacta alea est!',
      incorrect2: 'Vidi, vini, vici',
      incorrect3: 'Aegri somnia vana'
    }),
    Question.create({
      q: 'A group of tigers are referred to as:',
      correct: 'Ambush',
      incorrect1: 'Chowder',
      incorrect2: 'Pride',
      incorrect3: 'Destruction'
    }),
    Question.create({
      q: 'What is the top speed an average cat can travel?',
      correct: '31 mph',
      incorrect1: '42 mph',
      incorrect2: '13 mph',
      incorrect3: '9 mph'
    }),
    Question.create({
      q: 'A cat can jump to _____ times its own height:',
      correct: '5',
      incorrect1: '3',
      incorrect2: '9',
      incorrect3: '7'
    }),
    Question.create({
      q: "What is the only letter that doesn't appear in a US state name?",
      correct: 'Q',
      incorrect1: 'M',
      incorrect2: 'Z',
      incorrect3: 'X'
    }),
    Question.create({
      q: 'What is the name for a cow-bison hybrid?',
      correct: 'Beefalo',
      incorrect1: 'Cowson',
      incorrect2: 'Bicow',
      incorrect3: 'Mooson'
    }),
    Question.create({
      q: 'What is the largest freshwater lake in the world?',
      correct: 'Lake Superior',
      incorrect1: 'Lake Baikal',
      incorrect2: 'Lake Michigan',
      incorrect3: 'Lake Victoria'
    }),
    Question.create({
      q:
        'In a game of bingo, what number is represented by the name two little ducks?',
      correct: '22',
      incorrect1: '20',
      incorrect2: '55',
      incorrect3: '77'
    }),
    Question.create({
      q: 'According to Greek mythology, who was the first woman on Earth?',
      correct: 'Pandora',
      incorrect1: 'Lilith',
      incorrect2: 'Eve',
      incorrect3: 'Hera'
    }),
    Question.create({
      q: 'In which European city would you find Orly airport?',
      correct: 'Paris',
      incorrect1: 'London',
      incorrect2: 'Belgium',
      incorrect3: 'Munich'
    }),
    Question.create({
      q: 'Where would you find the Sea of Tranquility?',
      correct: 'The Moon',
      incorrect1: 'California',
      incorrect2: 'Siberia',
      incorrect3: 'China'
    }),
    Question.create({
      q: "Which artist painted 'Girl with a Pearl Earrin'?",
      correct: 'Vermeer',
      incorrect1: 'Van Gogh',
      incorrect2: 'Picasso',
      incorrect3: 'Da Vinci'
    }),
    Question.create({
      q: "What is the official name for the 'hashtag' symbol?",
      correct: 'Octothorpe',
      incorrect1: 'Number sign',
      incorrect2: 'Hash Sign',
      incorrect3: 'Pound'
    }),
    Question.create({
      q: 'Not American at all, where is apple pie from?',
      correct: 'England',
      incorrect1: 'Japan',
      incorrect2: 'Ethiopia',
      incorrect3: 'Canada'
    }),
    Question.create({
      q: 'What is the national animal of Scotland?',
      correct: 'Unicorn',
      incorrect1: 'Bear',
      incorrect2: 'Rabbit',
      incorrect3: 'Seal'
    }),
    Question.create({
      q: 'Where in the world is the only place where Canada is *due south*',
      correct: 'Detroit',
      incorrect1: 'Alaska',
      incorrect2: 'Russia',
      incorrect3: 'Washington'
    }),
    Question.create({
      q: 'Approximately how many grapes go into a bottle of wine?',
      correct: '700',
      incorrect1: '500',
      incorrect2: '200',
      incorrect3: '1000'
    }),
    Question.create({
      q: 'How much does a US One Dollar Bill cost to make?',
      correct: '$0.05',
      incorrect1: '$0.25',
      incorrect2: '$1',
      incorrect3: '$5'
    }),
    Question.create({
      q:
        'The Vatican bank has the only ATM in the world that allows users to do what?',
      correct: 'Perform transactions in Latin',
      incorrect1: 'Receive withdrawls in rosary beads',
      incorrect2: 'Vote for the Pope',
      incorrect3: 'Purchase indulgences'
    }),
    Question.create({
      q: 'In a website address bar, what does WWW stand for?',
      correct: 'World Wide Web',
      incorrect1: 'Wild Wild West',
      incorrect2: 'War World Web',
      incorrect3: 'Wide World Web'
    })
  ])

  console.log(`seeded ${questions.length} questions`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
