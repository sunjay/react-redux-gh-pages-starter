# react-redux-gh-pages-starter

This project builds off of a related project of mine: [gh-pages-es6-starter](https://github.com/sunjay/gh-pages-es6-starter)
As such, this project contains all of the features of that project including ES6/React
transpilation, webpack intergration with hot reloading, easy commands for publishing
to GitHub and more.

This starter is much more opinionated than that previous project. It contains a
complete setup of React/Redux including a basic store setup. Since this project
actually contains and specifically supports React, we can make several improvements
to the previous "fairly vanilla" set of inclusions.

One unique feature of this starter is that the Redux code contains a lot of
"idiot-proof" utilities designed to take away some of the unnecessary boilerplate
of Redux. These additional features are optional and can be deleted or left unused
if you like, but they are convenient because they abstract away a lot of the common
patterns in React/Redux in a way that makes it harder for new people on a project
to mess things up. Some of these utilities are also included to make dealing with
some of the quirks of immutable records easier. See the features list below for
a complete list of these improvements.

## Features inherited from gh-pages-es6-starter

- Webpack Dev Server + Hot Reloading
- ES6 (Babel Stage 1) + React transpilation
- SCSS + autoprefixer
- [CSS modules (CSS embedded in your JavaScript bundle) + usage with :local()](https://github.com/webpack/css-loader#local-scope)
- Easy commands to build and deploy to GitHub pages on a `gh-pages` branch

## New Features added in this starter

- *React* Hot Reloading (using `react-hot` instead of the built-in webpack hot reloading)
- Linting
- Immutable Records
- Router setup with separate routes configuration (`react-router`)
- Testing including React support
- Redux devtools integration
- Redux logger
- Redux thunk
- Compass reset
- JSDoc Generation

## Redux Utilities

These extra utilities are included to avoid some of the boilerplate typically
encountered when working with redux reducers and immutable records. Most of these
are by design very small utility functions that you could easily do yourself
in code. The reason they have been abstracted is because they do subtle things
that are often forgotten when you come back to code after a while.

Many of these utilites are from the Reducing Boilerplate section of the Redux documentation.

See the definitions and docstrings of each of these methods for more information
about their usage.

- `createRecord` - For creating an immutable Record class with static properties
    that you can optionally use to initialize the default properties of your immutable
    record. Immutable requires that record initial values are preserved.
- Global action registery - registers action names and action creators so they
    can't accidentally be repeated. Flexible enough so you can explicitly repeat
    these if you for whatever reason need to. You define an action name and some
    fields to be included in the payload. The register functions generate an action
    creator that will automatically construct the action.
- `createReducer` - For automatically dispatching on the action type given a object
    that maps action type to a reducer function. Avoids the huge switch statements
    often found in reducers. Automatically returns the initial state and the given
    state as appropriate.
- `page` reducer - manages page/route-specific redux state based on your routes
    configuration.
- `requests` reducer - Manages typical request lifecycle and cancels previous
    requests when another request supercedes a previous one.

## Starter Kit Usage & Setup
Using this starter kit is easy and just takes a few steps.

1. Clone this repo

    If in an existing folder:

        git clone https://github.com/sunjay/react-redux-gh-pages-starter.git .

    For a new folder:

        mkdir myproj
        git clone https://github.com/sunjay/react-redux-gh-pages-starter.git myproj

2. Delete the existing git repository by running

        cd myproj # if you are not in the folder yet
        rm -rf .git

3. Initialize a new git repository with

        git init
        git add .
        git commit -m "Initial commit"

4. Go through the fields in the package.json file and put in
your own information. Change the license if necessary to whatever suits your
project.

5. Run `npm install` to install the dependencies.

6. Run `npm start` to run the development server. This will automatically hot reload your code when it changes (with some limitations).

6. Go to `http://localhost:4242` to see the app running.

You can run `npm start` and go to that address anytime now to see your code.

## Building & Deploying
1. Run `npm run build` to compile all necessary files in a `dist` folder.

2. Run `npm run deploy` to checkout `gh-pages` (created if not already there), merge master, build the code, commit and push the generated bundle.

Deploy will use `git subtree push` as described in the article [*Deploying a subfolder to GitHub pages*](https://gist.github.com/cobyism/4730490).

## More information
This starter kit assumes that your application entry point is a file
called `src/index.jsx`. If this is not the case, change that value in the
webpack configuration.

The bundle name is `dist/bundle.js`. That can also be adjusted in the
webpack configuration file.

**Note:** Changing any of these folders or file names may break other commands that have been implemented. Do so at your own risk.

When just running the development server. The bundle and other `dist/` files are kept in memory. Use the build command to explicitly put them there. This will be done for you when you deploy so you don't need to ever really do that unless you want to see the built result.
