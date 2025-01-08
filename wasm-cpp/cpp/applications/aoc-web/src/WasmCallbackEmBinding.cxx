#include <emscripten/emscripten.h>
#include <emscripten/bind.h>
#include <string>

#include "WasmCallbacks.h"

namespace
{

WasmCallbacks Command;

using namespace emscripten;


int hasImplementationForDay(int day)
{
    if ((day < 1) || (day > 25))
    {
        return false;
    }
    return Command.has_implementation_for_day(day);
}

std::string solvePuzzle(const int day, const std::string& input)
{
    const std::string_view input_view{input.c_str(), static_cast<std::size_t>(input.size())};
    auto pPuzzle = AOC::Y2024::PuzzleFactory::CreatePuzzle(static_cast<std::uint8_t>(day), input_view);
    const auto solvePart = [day](const auto &result, int part) -> std::string {
        std::string resultString;
        if (std::holds_alternative<std::int64_t>(result))
        {
            resultString = std::to_string(std::get<std::int64_t>(result));
        }
        else if (std::holds_alternative<std::string>(result))
        {
            resultString = std::move(std::get<std::string>(result));
        }
        if (resultString.size() < 1)
        {
            return resultString;
        }
        return resultString;
    };

    std::string part1Result = solvePart(pPuzzle->Part1(), 1);
    std::string part2Result = solvePart(pPuzzle->Part2(), 2);
    std::string combinedResultWithDelimiter = "Part1: " + part1Result + "\n" + "Part1: " + part2Result;


    return combinedResultWithDelimiter;
}

} // namespace

EMSCRIPTEN_BINDINGS(WasmCallbacks) 
{
    function("hasImplementationForDay", ::hasImplementationForDay);
    function("solvePuzzle", ::solvePuzzle);
}


int main()
{
  return 0;
}