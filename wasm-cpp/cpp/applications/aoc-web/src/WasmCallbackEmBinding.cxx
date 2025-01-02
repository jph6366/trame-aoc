#include <emscripten/emscripten.h>
#include <emscripten/bind.h>

#include "WasmCallbacks.h"

WasmCallbacks Command;

using namespace emscripten;

int HasImplementationForDay(int day)
{
    return Command.has_implementation_for_day(day);
}

int SolvePuzzle(const int day, const char * const input, const int inputLength)
{
    return Command.solve_puzzle(day, input, inputLength);
}


EMSCRIPTEN_BINDINGS(WasmCallbacks) {
    emscripten::class_<WasmCallbacks>("WasmCallbacks")
        .constructor<>()
        .function("hasImplementationForDay", &WasmCallbacks::has_implementation_for_day)
        .function("solvePuzzle", &WasmCallbacks::solve_puzzle, emscripten::allow_raw_pointers());
}


int main()
{
  return 0;
}
