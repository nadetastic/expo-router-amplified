# Expo Amplified

This application uses [Expo Router](https://expo.github.io/router/docs/) and implements Auth, Storage, and API (Rest & GraphQL) from the Amplify library.

> WORK IN PROGRESS

Before building:
1. Update Sentry config in `app.json` as well as `Sentry.init` in `index.js`
2. remove `aws-exports.js` from `.gitignore` or make a copy and import into `Amplify.configure()`