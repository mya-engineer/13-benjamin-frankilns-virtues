# 13-Benjamin-Franklins-Virtues

This project dedicates to 13 Benjamin Franklin's virtues which should improve self-discipline and develop personality.

## Installation
1. [Install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) Node.js and npm (if they aren't installed)
2. Install Firebase CLI and login to your Google account
```sh
npm install -g firebase-tools
```
```sh
firebase login
```
3. Install yarn *(Recommended)*
```sh
npm install --global yarn
```
```sh
yarn --version
```
4. Clone this repo
```sh
git clone git@github.com:mya-engineer/13-benjamin-frankilns-virtues.git
```
5. Enter the directory and install packages (node_modules folder will be created)
```sh
cd 13-benjamin-frankilns-virtues/
```
```sh
yarn install
```
or
```sh
npm install
```
6. Create new Firebase project through [**Firebase Console**](https://console.firebase.google.com/)
7. Click icon to add Web app (it is on the main blue screen of your project)
8. Choose name for app an disable **Firebase Hosting**
9. Copy data by names (without quotes) from ***firebaseConfig*** to .env file in repo's directory. Database url will be inserted later. Create a new app
10. Go to **Realtime Database** in Firebase Console and create a new database (rules set to default)
11. Copy database's link from the header to .env file
12. Go to **Rules** tab of database and past next rules (don't worry about security alert, this database won't store confidential data)
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
13. Build application in repo's directory
```sh
yarn build
```
or
```sh
npm run build
```
14. Init Firebase in repo
```sh
firebase init
```
Choose "Hosting" (spacebar to focus and enter) -> "Use an existing project" -> Choose project created earlier -> Choose "build" as your public direcory -> Configure as a single-page app -> Disable automatic deploys from GitHub -> Don't rewrite index.html
15. Deploy application!
```sh
firebase deploy
```

## Contributors

- [mya-engineer](https://github.com/mya-engineer)

## License & copyright

© [mya-engineer](https://github.com/mya-engineer)

Licensed under the [MIT License](LICENSE).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
