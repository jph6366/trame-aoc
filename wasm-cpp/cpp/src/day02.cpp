#include "ipuzzle.hpp"
#include "puzzle_common.hpp"
#include "utils.hpp"

#include <algorithm>
#include <memory>
#include <numeric>
#include <ranges>
#include <string_view>
#include <utility>
#include <vector>

namespace AOC::Y2024
{

namespace {
    using Row = std::vector<unsigned int>;
    using Parsed = std::vector<Row>;

     auto parse_input(std::string_view input_string_view)
    {
        Parsed parsed;
        for(const auto &line : LinesView{input_string_view})
        {
            if(line.empty())
            {
                continue;
            }
            parsed.emplace_back(parse_to_vector_of_numbers<unsigned int, ' '>(line));
        }
        return parsed;
    }

     auto is_safe(const Row &row)
    {
        const auto numberOfLevels = row.size();
        bool increasing = true;
        bool decreasing = true;
        for(size_t idx = 0u; idx != (numberOfLevels - 1ul); ++idx)
        {
            const auto level = row[idx];
            const auto nextLevel = row[idx + 1u];
            increasing = increasing && level < nextLevel;
            decreasing = decreasing && level > nextLevel;
            if(!(decreasing || increasing))
            {
                return false;
            }
            const auto distance = (level > nextLevel) ? (level - nextLevel) : (nextLevel - level);
            if((distance < 1u) || (distance > 3))
            {
                return false;
            }
        }
        return true;
    }

    auto part_1(const auto &parsedInput)
    {
        return std::count_if(parsedInput.begin(), parsedInput.end(), is_safe);
    }

    auto part_2(const auto &parsedInput)
    {   
        const auto is_safe_with_dampener = [](const Row &row) {
            const auto numberOfLevels = row.size();
            if(numberOfLevels < 1u)
            {
                return false;
            }
            if(is_safe(row))
            {
                return true;
            }
            for(size_t drop = 0u; drop != numberOfLevels; ++drop)
            {
                Row rowWithOneElementDropped{row};
                rowWithOneElementDropped.erase(rowWithOneElementDropped.begin() + static_cast<int>(drop));
                if(is_safe(rowWithOneElementDropped))
                {
                    return true;
                }
            }
            return false;
        };
        return std::count_if(parsedInput.begin(), parsedInput.end(), is_safe_with_dampener);
    }
}

class PuzzleDay02Impl final {
public:
     PuzzleDay02Impl(Parsed &&parsed) : parsed(parsed) {}
    Parsed parsed;
};

AOC_Y2024_PUZZLE_CLASS_DECLARATION(02)

PuzzleDay02::PuzzleDay02(const std::string_view input)
    : pImpl(std::make_unique<PuzzleDay02Impl>(parse_input(input)))
{
}

PuzzleDay02::~PuzzleDay02() = default;

[[nodiscard]] IPuzzle::Solution_t PuzzleDay02::Part1()
{
    if (!pImpl || (pImpl->parsed.size() < 1))
    {
        return std::monostate{};
    }
    return part_1(pImpl->parsed);
}

[[nodiscard]] IPuzzle::Solution_t PuzzleDay02::Part2()
{
    if (!pImpl || (pImpl->parsed.size() < 1))
    {
        return std::monostate{};
    }
    return part_2(pImpl->parsed);
}


} // namespace AOC::Y2024