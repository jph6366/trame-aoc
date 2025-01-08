import SolutionProvider from "./SolutionProviderModel";

export function setupSolution(trame) {
  // trame.state.watch(["active_car"], (idx) => {
  if (trame.state.get("puzzle_input")) {
    const sp = new SolutionProvider();
    const reader = new FileReader();
    // Define the callback for when the file is read
    // Define the callback for when the file is read
    reader.onload = function (event) {
      const fileContent = event.target.result;

      // Now you can update the innerHTML once the file is read
      const active_car = trame.state.get("active_car") + 1;
      const { part1, part2 } = sp.getSolutionByDay(active_car);
      document.querySelector("#solution").innerHTML = `
          <p>Part 1:</p>
          <pre>${part1(fileContent)}</pre>
          <p>Part 2:</p>
          <pre>${part2(fileContent)}</pre>
        `;
    };

    reader.readAsText(trame.state.get("puzzle_input"));
  } else {
    document.querySelector("#solution").innerHTML = `
      <p>\nyou forgot the file input ya cotton-headed ninny muggin!\n</p>
    `;
  }
  // });
}
