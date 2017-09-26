<!--

## todo
https://github.com/alicoding/react-webpack-babel/commit/03405455e6b2b228914703e9f6dcdb2995616b58
https://github.com/alicoding/react-webpack-babel/commit/b40f1f6dbe737d82151c952450238e3ed18333ef


https://github.com/alicoding/react-webpack-babel

http://lollyrock.com/articles/nodejs-encryption/
https://forum.serverless.com/t/storing-database-credentials-securely/1370/9
https://github.com/robinmoisson/staticrypt

-->





## Development

### What's in it?
* Simple src/index.jsx and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* CSS module loading, so you can include your css by ```import styles from './path/to.css';```.
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/logrinto/IAD2017.students.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer

### To build the production package

```
npm run build
```

### Eslint
There is a `.eslint.yaml` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```
