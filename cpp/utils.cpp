#include <emscripten/bind.h>
using namespace std;


float square(float x) {
    return x*x;
}

string greet(string x, string prefix="Hello") {
  return prefix + " " + x + "!";
}


EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("square", &square);
    emscripten::function("greet", &greet);
}
