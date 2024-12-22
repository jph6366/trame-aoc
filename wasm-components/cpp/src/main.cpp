#include "main_definitions_helper.hpp"

#include <sys/resource.h>
#include <emscripten.h>

#include <iostream>
#include <vector>
#include <chrono>
#include <execution>
#include <fstream>
#include <string>


#define DAY 1  // Set the current day to 1 (or any other day as needed)
// #define PART first
#define PART second
#define USE_TEST_CASE false
#define TEST_RUN true
#if TEST_RUN
    #if USE_TEST_CASE
        #define FILE_NAME test_run_
    #else
        #define FILE_NAME real_run_
    #endif

    #define INPUT_SOURCE_FILE_NAME STRINGIFY(CAT_2(../input_files/FILE_NAME, DAY)) ".txt"

    #define INPUT_SOURCE std::ifstream(INPUT_SOURCE_FILE_NAME)
#else
    #define INPUT_SOURCE std::cin
#endif
#include INCLUDE_FILE(DAY)
#include "tools/time_extensions.hpp"
#include <unistd.h>

int main() {
    std::istream* input_stream = nullptr;
#if TEST_RUN
    // Open file input if TEST_RUN is enabled
    std::ifstream file_stream(INPUT_SOURCE_FILE_NAME);
    if (file_stream.is_open()) {
        input_stream = &file_stream;
    } else {
        std::cerr << "Error: Unable to open file " << INPUT_SOURCE_FILE_NAME << std::endl;
        return 1;
    }
#else
    // Use std::cin if not in TEST_RUN mode
    input_stream = &std::cin;
#endif


    auto start_time = std::chrono::high_resolution_clock::now();
    CALL_DESIRED_FUNCTION(PART, DAY, *input_stream);  // Pass the input stream here
    auto stop_time = std::chrono::high_resolution_clock::now();
    std::cout << "Computation time: ";
    pretty_time_print(start_time, stop_time);
    std::cout << std::endl;
    return 0;
}
