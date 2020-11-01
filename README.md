# Tandem Trivia Challenge

_Created by Celia Macrae_

Tech Stack:
`node.js`
`express`
`sequelize`
`react`
`redux`
`mocha`
`chai`
(refer to package.json to see all dependencies)

Check out the deployed version here
[Tandem Trivia App][trivia-linm]

[trivia-link]: https://tandem-trivia-challenge.herokuapp.com/game

## Setup

To use this as trivia app, you'll need to take the following steps:

* Fork & clone this repo to your local machine.
* run `npm install` command to install dependencies
* Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):

```
export MY_APP_NAME=trivia
createdb $trivia
createdb $trivia-test
```

* By default, running `npm test` will use `trivia-test`, while
  regular development uses `trivia`
* Running `npm run start-dev` will make great things happen!

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

From there, just follow your bliss.

## Features of this Application

* [x] User login is required to keep track of max score and rounds played
* [x] A leaderboard component lists top performers by nickname
* [x] User can play a round of trivia, consisting of 10 questions
* [x] For each round of trivia, questions are randomized
* [x] For each question, answers will be displayed in random order
* [x] After each question, user will be notifyed whether or not they got the question correct and score will update in live time
* [x] At the end of a round, user will be given their final score and user will be prompted to checkout how they compare to others by viewing scoreboard
* [x] Code features several unit tests on front-end and back-end

## Future Goals

* [ ] Improve Design -- with very limited time to create this project I focused on functionality over appearence.
* [ ] Add more unit tests -- again, with limited time I was not able to implement as many unit tests as I would have liked to but I did try to implement a variety of tests to show proficiency.
