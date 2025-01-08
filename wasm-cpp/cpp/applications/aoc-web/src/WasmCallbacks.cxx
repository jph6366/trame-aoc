#include "WasmCallbacks.h"

int WasmCallbacks::has_implementation_for_day(int day)
{
    return AOC::Y2024::PuzzleFactory::has_implementation_for_day(static_cast<std::uint8_t>(day)) ? 1 : 0;
}

