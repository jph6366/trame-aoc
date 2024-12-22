import * as day1 from "./day1";
import * as day2 from "./day2";

class SolutionProvider {
  getSolutionByDay(dayXmas) {
    if (dayXmas == 0) {
      const part1 = (input) => {
        return "generate solution using Js";
      };

      const part2 = (input) => {
        return "encapsulated using Vue3";
      };

      return { part1, part2 };
    } else if (dayXmas == 1) {
      return day1.main();
    } else if (dayXmas == 2) {
      return day2.main();
    }

    throw new Error("Invalid day provided.");
  }
}

export default SolutionProvider;
