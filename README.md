This is an example on how to use Expo-router to retrieve remote content in a React-Native app.

    - clone the project

- yarn install
- start the server with `yarn workspace server start`
- start the app with `yarn workspace mobileapp ios`

If you make changes to the `packages/greetings/index.js` file ( the one that's served remotely) you will need to run ` yarn prepare_server` to compile it in a form ReactNative is able to load it.
