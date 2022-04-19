# src/wasm/

This directory is intended for WebAssembly files (`.wasm`) and associated javascript glue code (`.js`). 

The `.js` and `.wasm` files are direct products of compilation from other source code (e.g. from C++). The compiled files can also be non-negligible in size. For these reasons, they should typically not be included in a git repository. 

Files in this particular repository are included as a way of exception 
for didactic reasons

 - to allow launching the app right after cloning with minimal effort, and
 - to show the expected file structure and the expected file contents.

