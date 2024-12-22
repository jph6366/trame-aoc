#include <iostream>
#include <algorithm>
#include <iterator>
#include <map>
#include <unordered_map>
#include <emscripten.h>

#include "./input_source.hpp"
#include "./tools/str_number.hpp"
#include "./tools/back_insert_sort_iterator.hpp"

template <typename T = std::vector<int>>
using insertion_type = std::back_insert_iterator<T>;
//using insertion_type = back_insert_sort_iterator<T>;

extern "C"
{
    EMSCRIPTEN_KEEPALIVE int first_part_1(std::istream& input_source) {
        std::vector<int> left, right;
        left.reserve(100);
        right.reserve(100);
        std::for_each(std::istream_iterator<std::string>(input_source), std::istream_iterator<std::string>(), [next_cont = insertion_type<>(left), prev_cont = insertion_type<>(right)] (std::string str) mutable {
            str_number<int> n1(str);
            *next_cont = n1.get_number();
            std::swap(next_cont, prev_cont);
        });

        if constexpr (std::is_same_v<insertion_type<>, std::back_insert_iterator<std::vector<int>>>) {
            std::sort(left.begin(), left.end());
            std::sort(right.begin(), right.end());
        }

        // Ensure the sizes of left and right match for zipping
        size_t size = std::min(left.size(), right.size());

        // Compute the sum of absolute differences
        uint64_t sum = 0;
        for (size_t i = 0; i < size; ++i) {
            sum += std::abs(left[i] - right[i]);
        }
        
        return EXIT_SUCCESS;
    }

    EMSCRIPTEN_KEEPALIVE int second_part_1(std::istream& input_source) {
        std::unordered_map<int, uint32_t> left, right;
        std::for_each(std::istream_iterator<std::string>(input_source), std::istream_iterator<std::string>(), [next_cont = &left, prev_cont = &right] (std::string str) mutable {
            str_number<int> n1(str);
            ++(*next_cont)[n1.get_number()];
            std::swap(next_cont, prev_cont);
        });

        size_t score = 0;
        for (auto [n, times] : left) {
            score += n * times * (right.contains(n) ? right[n] : 0);
        }

        std::cout << score << std::endl;

        return EXIT_SUCCESS;
    }
}
