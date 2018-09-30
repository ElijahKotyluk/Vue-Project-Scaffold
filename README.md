# vue-project-scaffold

This is a project scaffold/template using Vue.js as the front end framework and Express for the backend.

## file structure

```
vue-project-scaffold/
  ├── *node_modules/
  ├── src/
  |   ├── js/
  |   |   ├── components/
  |   |   |   └── App.vue
  |   |   ├── router/
  |   |   |   └── index.js
  |   |   |   
  |   |   ├── store/
  |   |   |   └── store.js
  |   |   ├── app.js
  |   |   ├── entry-client.js
  |   |   └── entry-server.js
  |   └── styles/
  |       ├── _reset.scss
  |       ├── _variables.scss
  |       └── main.scss
  ├── .gitignore
  ├── *main.bundle.js
  ├── *main.bundle.css
  ├── index.html
  ├── Makefile
  ├── package.json
  ├── README.md
  ├── webpack.config.js
  └── *yarn.lock

```

Filenames denoted with an asterisk `*` are auto generated and should not be modified.

## file explanation

- `node_modules/` : Downloaded dependencies.
- `src/` : Source folder for Javascript and SCSS.
  - `js/` : Javascript folder.
    - `components/` : Vue components.
      - `App.vue` : Main application component.
    - `router/` : Vue Router folder.
      - `index.js` : Entrypoint for Vue-Router.
    - `store/` : Vuex data state store folder.
      - `store.js` : Entrypoint for Vuex store.
    - `app.js` : Main application entry point for Javascript.
    - `entry-client.js` : Client side entry point.
    - `entry-server.js` : Server side entry point.
  - `styles/` : Styles folder.
    - `_reset.scss` : Global style reset partial.
    - `_variables.scss` : SCSS variables partial.
    - `main.scss` : Main application entry point for SCSS.
- `.gitignore` : Tells git what files not to check in.
- `index.html` : Main project page.
- `Makefile` : Project Makefile. Configures project build using `make`.
- `package.json` : Project metadata and dependencies.
- `README.md` : Project README.
- `webpack.config.js` : Webpack config. Configures bundling of frontend assets.

## getting started

1. Check out this repo: `git clone https://github.com/ElijahKotyluk/Vue-Project-Scaffold`
2. Locate and open `vue-project-scaffold` file directory in the command line/terminal.
3. Run `make` in the command line/terminal. (If you haven't installed yarn globally, you will be instructed to do so when you run `make` command.
