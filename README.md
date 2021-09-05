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
    1. Choose "Hosting" (spacebar to focus and enter) 
    2. "Use an existing project"
    3. Choose project created earlier
    4. Choose "build" as your public direcory
    5. Configure as a single-page app
    6. Disable automatic deploys from GitHub
    7. Don't rewrite index.html
15. Deploy application! Enjoy!
```sh
firebase deploy
```

## Contributors

- [mya-engineer](https://github.com/mya-engineer)

## License & copyright

© [mya-engineer](https://github.com/mya-engineer)

Licensed under the [MIT License](LICENSE).
