#include "aoc_y2024.hpp"
#include <cstdint>
#include <cstdlib>
#include <string>
#include <string_view>
#include <variant>
#include <iostream>


class WasmCallbacks
{
    public:
         int solve_puzzle(const int day, const char * const input, const int inputLength);
         int has_implementation_for_day(int day);
};