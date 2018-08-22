# React FullStack

## info
  a complete projet for react procution grade project with :
  1. react, redux , redux sagas
  2. eslint
  3. customizable build config
  4. jest and enzyme test framework
  5. babel and eslint config to support es2017
  6. react hot module replacement
  7. code spliting
  8. code organisation based on "Feature first approach"
  9. expressJs as a web server for serving static files. 
  10. a simple starter kit for express nodejs app with proxy, lint, and configuration based on ENV variables.
  11. webpack 4.

**this project requires** 

  1. `NodeJS`
  2. `npm`.
  3. `python 2.7` which may change in future

## How to set up?
React full stack has 2 main applications. 
  1. Client 
  2. Server

### Client
  Client is where all front end code will live. in most of the cases it will be a single page application 
  build with react,redux,sagas, and build by webpack.

### Server
  Server is a simple HTTP static web server which is going to server front end application when running in production. it will mainly be used to return static files and do simple authentication to prevent first render

### Install
  to install and run this project you need to 
  1. download and run client applicarion 
  2. download and run server application

   `cd client` and hit `npm install`
   `cd server` and hit `npm install`

### start
  after installing all modules hit `npm start` in both `client` and `server` folders
  this will run both the applications in `watch` mode. meaning any file change will be reacted and updated 
  in the browser.

### build
  to build for deployment.
  1. go to server folder and hit `npm run build`
  2. wait for server build to finish 
  3. go to client folder and hit `npm run build`

  doing this will create a `dist` folder in the application root which will contain a full stack build
  'nodejs` application redy to deploy.

**important**
  to run build application it needs following environment variables
  1. `NODE_ENV`='production'
  2. `NODE_ENV_PORT`='3000' or any available port

## under the hood
 - [Node.js](https://nodejs.org/en/)
 - [Express](https://github.com/expressjs/express)
 - [React](https://github.com/facebook/react)
 - [Redux](https://github.com/reactjs/redux)
 - [Sagas](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
 - [React Router v4](https://github.com/reactjs/react-router)
 - [Axios](https://github.com/axios/axios) 
 - [AntD with scss](https://ant.design/) 
 - [Webpack 4](https://github.com/webpack/webpack) with code splitting
 - [React Hot Loader](https://github.com/gaearon/react-hot-loader)
 - [Jest](https://jestjs.io/)
 - [Enzyme](https://airbnb.io/enzyme/)
 - [ESLint](https://eslint.org/)


## recommendations
  its best to use vs code with the following plugins installed.
  1. EditorConfig for VS Code
  2. EsLint
  3. Prettier - code formatter

## folder structure
  **root folder**
  ```
    .
    ├── /client/                     # This folder contains all the front end code
    ├── /dist/                       # Trnaspiled code server and client together as one expressjs application
    ├── /server/                     # This folder contains server side code like routing managing proxies serving static etc
    ├── /.editorconfig               # file contains editor configuration that makes the code uniform
    ├── /.gitignore                  # gitignore files and folder
    ├── /README.md                   # contains readme
```
  **client folder**
   ```
    .
    ├── /mocks/                    # This folder contains some mocks for jest like api,css modules etc
    ├── /build-config/             # webpack config divided into types of env is placed here
    ├── /coverage/                 # contains a small application wich shows coverage generated by jest
    ├── /node_module/              # contains all dependencies modules
    ├── /src/                      # contains the actual source code
    ├── /.babelrc/                 # babel configuration and env specific plugins are kept here
    ├── /.editorconfig/            # commom configuration to code editor
    ├── /.eslintignore/            # some rules to ignore for eslint
    ├── /.eslintrc/                # eslint rules and configuration
    ├── /.gitignore/               # ignore files to git
    ├── /.package.json/            # dependencies for client app
    ├── /.package-lock.json/       # dependencies lock
    ├── /.webpack.config.js/       # root config for webpack which will import all other configurations.
```    
   **server folder**
 ```
    .
    ├── /coverage/                 # contains a small application wich shows coverage generated by jest
    ├── /node_module/              # contains all dependencies modules
    ├── /src/                      # contains the actual source code
    ├── /.babelrc/                 # babel configuration and env specific plugins are kept here
    ├── /.editorconfig/            # commom configuration to code editor
    ├── /.eslintignore/            # some rules to ignore for eslint
    ├── /.eslintrc/                # eslint rules and configuration
    ├── /.gitignore/               # ignore files to git
    ├── /.build.js/                # contains small build config written in js executed by nodejs
    ├── /.package.json/            # dependencies for client app
    ├── /.package-lock.json/       # dependencies lock
```    

