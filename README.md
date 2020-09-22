# Top news app

Application for displaying top news

## Table of Contents

  - [Functionalities](#functionalities)
  - [Technologies used](#technologies-used)
  - [Project structure](#project-structure)
  - [Starting Storybook ](#starting-storybook )
  - [Visual regression testing with Storybook](#visual-regression-testing-with-storybook)
  - [Create React App](#create-react-app)

# Functionalities

App displays the latest top news from United States and Great Britain. User can read news intro all whole article.
User can also preview 5 top news from 6 categories (Entertainment, General, Health, Science, Sport, Technology) or
read all news from chosen category.
If user is intrested in a specific topic application gives option to search all news by given term.

App has following pages:

Top News -to preview all latest news for chosen country
Categories - for 6 categories top 5 news can be previewed. Categories can be expanded or collapsed. By clicking on 
             category name it displays all news for given category.
Search -enables search of news for selected country

It can be used for various size devices as it is responsive.

# Technologies used

Application is implemented using following technologies:

[React](https://reactjs.org/)
[Sass](https://sass-lang.com/install)
[Context] as centralized state management(https://reactjs.org/docs/context.html)
Unit testing with [Jest](https://jestjs.io/docs/en/tutorial-react) and [and Enzyme]
[Storybook](https://storybook.js.org/)
[Visual regression tests with Storybook](https://storybook.js.org/docs/react/workflows/visual-testing)

# Project structure

Project is structured in a way that each component/page has its own folder with implementation, styling, tests, stories,
and snapshots.
In stories folder are image snapshots located in __image_snapshots__ folder
Folder __tests__ have only test for utility functions.
Mockes are in __mocks__ folder.

# Starting Storybook 
   
To start storybook use following command:

### `npm test storybook`

On offial site are more details how else storybook can be started. Please check: https://storybook.js.org/

## Visual regression testing with Storybook

To start visual regression testing you first have to have Storybook running, and then use following command 
to start visual regression tests only:

### `npm test storybook.test.js`

If some of component have changed you will be notifed and can preview differences. If that is wanted change just 
hit u for update. If not, then you will have to check what needs to be fixed...:)

## Create React App

Following are instruction how to build and run application. As well how to start tests and information related implementing
React app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
