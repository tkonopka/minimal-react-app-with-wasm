#!/bin/bash

# define location for output files
dest_dir=src/wasm

# compile C++ to wasm (and js glue code)
emcc -lembind \
     cpp/utils.cpp \
     -o ${dest_dir}/utils.js \
     -O3 \
     -s WASM=1 \
     -s ENVIRONMENT=web \
     -s MODULARIZE=1 \
     -s EXPORT_NAME=loadUtils \
     -s EXPORT_ES6=1

# modify the generated js code to disable linting
cat cpp/opening.txt ${dest_dir}/utils.js cpp/closing.txt > ${dest_dir}/tmp.js
mv ${dest_dir}/tmp.js ${dest_dir}/utils.js
