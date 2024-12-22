export function main() {
  const part1 = (input) =>
    input
      .split("\n")[0]
      .split(" ")
      .filter((word) => word !== "")
      .map(Number);

  const part2 = (input) => input;
  return { part1, part2 };
}
