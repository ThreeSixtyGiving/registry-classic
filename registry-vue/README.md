# registry-vue2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Registry, Flask, Vue and You

At present the vue application is set to build into the flask application at the default folders, without cleaning them before hand (i.e. `npm run build` has a `--no-clean` flag associated with it).
You can run the vue application for development as above (i.e. `npm run serve`), but you can also do a production build into the flask application and run it through flask as per the root `README.md`.
