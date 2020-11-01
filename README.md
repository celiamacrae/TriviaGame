# Tandem Trivia Challenge

_Created by Celia Macrae_

Dependencies:
`express`
`sequelize`
`react`
`redux`

Check out the deployed version here
[Boilermaker Guided Tour][boilermaker-yt]

[boilermaker-yt]: https://www.youtube.com/playlist?list=PLx0iOsdUOUmn7D5XL4mRUftn8hvAJGs8H

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

## Future Goals

* [] CSS Design
