#include "WasmCallbacks.h"

int WasmCallbacks::has_implementation_for_day(int day)
{
    if ((day < 1) || (day > 25))
    {
        return false;
    }
    return AOC::Y2024::PuzzleFactory::has_implementation_for_day(static_cast<std::uint8_t>(day)) ? 1 : 0;
}

int WasmCallbacks::solve_puzzle(const int day, const char * const input, const int inputLength)
{
    std::cout << __FILE__ << ':' << __LINE__ << std::endl;
    if ((day < 1) || (day > 25) || (input == nullptr) || (inputLength < 1))
    {
    std::cout << __FILE__ << ':' << __LINE__ << std::endl;
        return EXIT_FAILURE;
    std::cout << __FILE__ << ':' << __LINE__ << std::endl;
    }

    std::cout << __FILE__ << ':' << __LINE__ << std::endl;
    const std::string_view input_view{input, static_cast<std::size_t>(inputLength)};
    auto pPuzzle = AOC::Y2024::PuzzleFactory::CreatePuzzle(static_cast<std::uint8_t>(day), input_view);
    std::cout << __FILE__ << ':' << __LINE__ << std::endl;
    if (pPuzzle == nullptr)
    {
        return EXIT_FAILURE;
    }

    const auto solvePart = [day](const auto &result, int part) -> bool {
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
            return false;
        }
        return true;
    };
    bool success = solvePart(pPuzzle->Part1(), 1);
    success = solvePart(pPuzzle->Part2(), 2) && success;
    if (!success)
    {
        return EXIT_FAILURE;
    }
    return EXIT_SUCCESS;
}