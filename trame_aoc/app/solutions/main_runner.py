import argparse
from .day1 import LocationComputer
from .day2 import UnusualReports

class SolutionProvider:

    def __init__(self):
        pass

    def getSolutionByDay(self, day_xmas):
        if (day_xmas == 1):
            part1 = lambda input: int(
                LocationComputer(rows=3,cols=4500)
                .insertNotes(input)
                .findTotalDistances()
            )
            part2 = lambda input: int(
                LocationComputer(rows=3,cols=4500)
                .insertCountMinSketch(input)
                .findTotalSimilarity(input)
            )
            return part1, part2
        elif (day_xmas == 2):
            part1 = lambda input: UnusualReports().readReports(
                input).safeCount
            part2 = lambda input: UnusualReports().tolerateReports(
                input).safeCount
            return part1, part2
        
def main(input=None, num_day=1,**kwargs):
    parser = argparse.ArgumentParser(description="Process input for SolutionProvider.")
    parser.add_argument(
        "--input", type=str, help="The input to be processed", required=False
    )
    args = parser.parse_args()

    # Use the provided argument if no input is passed to the function
    input_to_use = input if input is not None else args.input

    if input_to_use is None:
        raise ValueError("No input provided. Please provide input through the function or command line.")

    sp = SolutionProvider()
    f,g = sp.getSolutionByDay(num_day)
    return f"What is the total distance between your lists? \n {f(input_to_use)} \n What is their similarity score? \n {g(input_to_use)}"
    

if __name__ == "__main__":
    result = main()