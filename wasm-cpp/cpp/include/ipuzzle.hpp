#if !defined(AOC_Y2024_IPUZZLE_HPP)
#define AOC_Y2024_IPUZZLE_HPP (1)

#include "types.hpp"

#include <cstdint>
#include <string>
#include <variant>

namespace AOC::Y2024
{

class IPuzzle
{
  public:
    enum class Part
    {
      one, two,
    };
    using Solution_t = std::variant<std::monostate, std::int64_t, std::string>;

  public:
    virtual ~IPuzzle() = default;

    [[nodiscard]] Solution_t virtual Part1() = 0;
    [[nodiscard]] Solution_t virtual Part2() = 0;

  protected:
    IPuzzle() = default;
    IPuzzle(const IPuzzle &) = default;
    IPuzzle(IPuzzle &&) = default;
    IPuzzle &operator=(const IPuzzle &) = default;
    IPuzzle &operator=(IPuzzle &&) = default;
};

} // namespace AOC::Y2024

#endif // !defined(AOC_Y2024_IPUZZLE_HPP)