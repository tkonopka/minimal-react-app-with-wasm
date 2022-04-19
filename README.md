# minimal-react-app-with-wasm

This repository is a minimal example of a React App that uses C++ code via WebAssembly. 

 - The repository includes C++ code, compilation scripts, and compiled WebAssembly output.
 - The app was bootstrapped using `npx create-react-app`.
 - The app uses React v18.
 - The app has minimal dependencies; it does not use any packages other than those loaded by `npx create-react-app`.


## File structure

Most of the repository is structured like a standard React App.

 - `public/` - directory with static assets used by the app at runtime
 - `src/` - directory with javascript, html, css code for the app
 - `package.json` - app configuration

In addition, there are files and directories related to C++ and WebAssembly components.

 - `cpp/` - directory with C++ code
 - `build.sh` - script to compile C++ code into WebAssembly
 - `src/wasm/` - directory for compiled WebAssembly outputs


## Quick-launch

To quick-launch the app, clone the repository, then install the required packages and run the start script.

```
npm install
npm run start
```

As the app starts up, it loads WebAssembly components from the `src/wasm/` directory. As these components are included in the repository, the app should launch straight away. 

The app is a single web page with some input boxes and buttons. Clicking on the buttons launches some WebAssembly functions that originate from C++ code.


## Development

Developing WebAssembly components entails compiling code from some programming language (e.g. C++) to wasm modules (file extension `.wasm`). 

Compiling the C++ code in this repository requires [emscripten](https://emscripten.org/docs/getting_started/index.html). To ensure that you have emscripten available, check the compiler version 

```
emcc --version
```

To compile the source code in the `cpp/` directory, execute the build script

```
./build.sh
# or
npm run emcc
```

The bulk of the `build.sh` script consists of a call to the `emcc` compiler. The script also includes a post-compilation step that is needed to make the compiled output compatible with the app's `npm run start` and `npm run build` commands. Check out the contents of the `build.sh` script and the `cpp/` directory for details. 


