# daenen-next [![Build Status](https://travis-ci.org/luhmann/daenen-next.svg?branch=master)](https://travis-ci.org/luhmann/daenen-next)

The react-powered webpage of [daenen4.de](http://www.daenen4.de) powered by [next.js](https://github.com/zeit/next.js/)

## Usage
1. Make sure you have nvm installed. http://nvm.sh
2. Switch to correct node version: `$ nvm install`
3. Install dependencies: `$ npm install`
4. Start development server `$ npm run dev`
5. Open in local browser: `$ open http://localhost:3000`

You now have a fully working local development server. All your changes are hot reloaded instantly.

## Additional NPM-Commands

* `npm run build` - will create a startable distribution of the project. Usually not needed in itself but the basis for turning the app into a static version with `npm run export`
* `npm run export` - will turn the page into static html-pages
* `npm start` - start command for the distribution created by `next build` - not needed
* `npm test` - run the e2e-tests in your local browsers. Development-Server must be running for this to work
* `npm run test:ci` - run the e2e-tests as if on the CI-system in headless chrome. Project must have been exported before.

## Updating Data
All data is held in the `json`-files in the `data`-directory. Take note how the existing data is structured and use it as template for the changes you wish to make.

## Deployment
An updated version is automatically deployed into production whenever you commit into `master`.
Tests are run and will stop you if you break any fundamental functionality, but make sure that things look good. Cloudfront-Caches are automatically purged when you deploy, which after a while costs money, so bundle your commits
