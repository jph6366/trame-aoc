#if !defined(AOC_Y2024_GAME_FACTORY_HPP)
#define AOC_Y2024_GAME_FACTORY_HPP (1)

#include "ipuzzle.hpp"
#include "types.hpp"

#include <cstdint>
#include <memory>
#include <string_view>

namespace AOC::Y2024
{
AOC_Y2024_API
class PuzzleFactory final
{
    public:
    [[nodiscard]] static std::unique_ptr<IPuzzle> CreatePuzzle(std::uint8_t game, std::string_view input);
    [[nodiscard]] static bool has_implementation_for_day(std::uint8_t day);
};

} // namespace AOC::Y2024

#endif // !defined(AOC_Y2024_GAME_FACTORY_HPP)