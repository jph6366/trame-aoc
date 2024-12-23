#ifndef ADVENT_OF_CODE_TIME_EXTENSIONS_H
#define ADVENT_OF_CODE_TIME_EXTENSIONS_H

#include <chrono>

void pretty_time_print(auto start_time, auto stop_time) {
    auto dur = stop_time - start_time;
    auto h = std::chrono::duration_cast<std::chrono::hours>(dur);
    auto m = std::chrono::duration_cast<std::chrono::minutes>(dur -= h);
    auto s = std::chrono::duration_cast<std::chrono::seconds>(dur -= m);
    auto milli = std::chrono::duration_cast<std::chrono::milliseconds>(dur -= s);
    auto micro = std::chrono::duration_cast<std::chrono::microseconds>(dur -= milli);
    auto nano = std::chrono::duration_cast<std::chrono::nanoseconds>(dur -= micro);
    std::cout << h.count() << " hours, "
              << m.count() << " minutes, "
              << s.count() << " seconds, "
              << milli.count() << " milliseconds, "
              << micro.count() << " microseconds, "
              << nano.count() << " nanoseconds\n";
}

#endif