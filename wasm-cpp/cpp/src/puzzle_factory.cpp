#include "puzzle_factory.hpp"
#include "puzzle_common.hpp"
#include "utils.hpp"

#define AOC_Y2024_SUPPORTED_PUZZLES_LIST(xMacro)                   \
    xMacro(01)                                                     \
    xMacro(02)                                                     \
    xMacro(03)                                                     \


namespace AOC::Y2024
{

AOC_Y2024_SUPPORTED_PUZZLES_LIST(AOC_Y2024_PUZZLE_CLASS_DECLARATION)

[[nodiscard]] std::unique_ptr<IPuzzle> PuzzleFactory::CreatePuzzle(const std::uint8_t game, const std::string_view input)
{
    switch (game)
    {

    default:
        return nullptr;

#define AOC_Y2024_PUZZLE_CASE(day)                                                                                     \
    case parse_number<std::uint8_t>(#day): /* avoid that leading zeroes are interpreted as octal */                    \
        return std::make_unique<PuzzleDay##day>(input);

        AOC_Y2024_SUPPORTED_PUZZLES_LIST(AOC_Y2024_PUZZLE_CASE)

#undef AOC_Y2024_PUZZLE_CASE
    }
}

[[nodiscard]] bool PuzzleFactory::has_implementation_for_day(const std::uint8_t day)
{
    switch (day)
    {
    #define AOC_Y2024_IS_DAY_SUPPORTED_ENTRY(day)  case parse_number<std::uint8_t>(#day):
    AOC_Y2024_SUPPORTED_PUZZLES_LIST(AOC_Y2024_IS_DAY_SUPPORTED_ENTRY)
    #undef AOC_Y2024_IS_DAY_SUPPORTED_ENTRY
            return true;
        default:
            return false;
    }
}

} // namespace AOC::Y2024