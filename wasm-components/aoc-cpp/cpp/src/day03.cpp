#include "ipuzzle.hpp"
#include "puzzle_common.hpp"
#include "utils.hpp"
#include "ctre.hpp"

#include <algorithm>
#include <array>
#include <memory>
#include <numeric>
#include <ranges>
#include <string_view>
#include <utility>
#include <vector>

namespace AOC::Y2024
{

namespace {
    using Operand = uint32_t;
    enum Instruction {mul, do_, dont,};
    struct Operation {
        Instruction instruction;
        std::pair<Operand, Operand> operands{};
    };
    using Parsed = std::vector<Operation>;

     auto parse_input(std::string_view input_string_view)
    {
        Parsed parsed;
        const auto matches = ctre::multiline_search_all<R"((?:mul\((\d+),(\d+)\))|(do\(\)|don't\(\)))">(input_string_view);
        for (const auto& match : matches)
        {
            if (match.get<0>() == "do()")
            {
                parsed.emplace_back(Operation{.instruction = Instruction::do_});
            }
            else if (match.get<0>() == "don't()")
            {
                parsed.emplace_back(Operation{.instruction = Instruction::dont});
            }
            else
            {
                parsed.emplace_back(Operation{.instruction = Instruction::mul, .operands{ parse_number<Operand>(match.get<1>()), parse_number<Operand>(match.get<2>())}});
            }
        }
        return parsed;
    }

     auto part_1(const Parsed &parsed)
    {
        return std::accumulate(
            parsed.begin(), parsed.end(), 0u, [](const auto &acc, const auto &operation){
                return (operation.instruction == Instruction::mul)
                  ? (acc + (operation.operands.first * operation.operands.second))
                  : acc;
            });   
    }

     auto part_2(const auto &parsed)
    {
        return std::accumulate(
            parsed.begin(), parsed.end(), 0u, [enabled = true] (const auto &acc, const auto &operation) mutable {
                switch(operation.instruction) {
                    using enum Instruction;
                    case do_:
                        enabled = true;
                        return acc;
                    case dont:
                        enabled = false;
                        return acc;
                    default:
                        return acc + (enabled ? (operation.operands.first * operation.operands.second): 0u);
                }
            });
    }
}

class PuzzleDay03Impl final {
public:
     PuzzleDay03Impl(Parsed &&parsed) : parsed(parsed) {}
    Parsed parsed;
};

AOC_Y2024_PUZZLE_CLASS_DECLARATION(03)

PuzzleDay03::PuzzleDay03(const std::string_view input)
    : pImpl(std::make_unique<PuzzleDay03Impl>(parse_input(input)))
{
}

PuzzleDay03::~PuzzleDay03() = default;

[[nodiscard]] IPuzzle::Solution_t PuzzleDay03::Part1()
{
    if (!pImpl || (pImpl->parsed.size() < 1))
    {
        return std::monostate{};
    }
    return part_1(pImpl->parsed);
}

[[nodiscard]] IPuzzle::Solution_t PuzzleDay03::Part2()
{
    if (!pImpl || (pImpl->parsed.size() < 1))
    {
        return std::monostate{};
    }
    return part_2(pImpl->parsed);
}


} // namespace AOC::Y2024