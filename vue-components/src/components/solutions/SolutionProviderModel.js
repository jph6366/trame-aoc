import * as day1 from "./day1";
import * as day2 from "./day2";

class SolutionProvider {
  getSolutionByDay(dayXmas) {
    if (dayXmas == 1) {
      return day1.main();
    } else if (dayXmas == 2) {
      return day2.main();
    }

    throw new Error("Invalid day provided.");
  }
}

export default SolutionProvider;
