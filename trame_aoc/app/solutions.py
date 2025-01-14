import heapq
import hashlib
from trame.widgets import vuetify3, html


class SolutionProvider:

    def __init__(self):
        pass

    def getSolutionByDay(self, day_xmas, input):
        if (day_xmas == 1):
            part1 = int(
                LocationComputer(rows=3,cols=4500)
                .insertNotes(input)
            )
            part2 = int(
                LocationComputer(rows=3,cols=4500)
                .insertCountMinSketch(input)
            )
            return part1, part2
        elif (day_xmas == 2):
            part1 = UnusualReports().readReports(
                input)
            part2 = UnusualReports().tolerateReports(
                input)
            return part1, part2

class LocationComputer:
    def __init__(self, rows, cols):
        # Initialize heaps and matrix for Count-Min Sketch
        self.selectionHeaps = [[], []]
        self.rows = rows
        self.cols = cols
        self.countMatrix = [[0] * cols for _ in range(rows)]
        self.hashFunctions = [hashlib.md5, hashlib.sha1, hashlib.sha256]
        self.total = 0

    def insertNotes(self, input):
        """Insert notes into heaps based on input."""
        for line in input['content'].splitlines():
            numbers = [int(digit) for digit in line.split()]
            heapq.heappush(self.selectionHeaps[0], numbers[0])
            heapq.heappush(self.selectionHeaps[1], numbers[1])
        return self.findTotalDistances()


    def insertCountMinSketch(self, input):
        """Insert data into Count-Min Sketch matrix."""
        for line in input['content'].splitlines():
            numbers = [int(digit) for digit in line.split()]
            for i, hashFunc in enumerate(self.hashFunctions):
                hashVal = int(hashFunc(str(numbers[1]).encode()).hexdigest(), 16)
                bucketIdx = hashVal % self.cols
                self.countMatrix[i][bucketIdx] += 1
        return self.findTotalSimilarity(input)

    def estimateSimilarity(self, elem):
        """Estimate the frequency of an element using the Count-Min Sketch matrix."""
        minCount = float('inf')
        for i, hashFunc in enumerate(self.hashFunctions):
            hashVal = int(hashFunc(str(elem).encode()).hexdigest(), 16)
            bucketIdx = hashVal % self.cols
            minCount = min(minCount, self.countMatrix[i][bucketIdx])
        return minCount

    def computeMinPairDist(self):
        """Compute the minimum pair distance from the heaps."""
        if not self.selectionHeaps[0] or not self.selectionHeaps[1]:
            raise ValueError("Heaps are empty; cannot compute distance.")
        aNum = heapq.heappop(self.selectionHeaps[0])
        bNum = heapq.heappop(self.selectionHeaps[1])
        return abs(aNum - bNum)

    def findTotalDistances(self):
        """Find the total distance by processing all pairs in the heaps."""
        self.total = 0
        while self.selectionHeaps[0]:
            self.total += self.computeMinPairDist()
        tot = self.total
        return tot

    def findTotalSimilarity(self, input):
        """Calculate total similarity based on the Count-Min Sketch."""
        self.total = 0
        for line in input['content'].splitlines():
            numbers = [int(digit) for digit in line.split()]
            freq = self.estimateSimilarity(numbers[0])
            self.total += freq * numbers[0]
        return self.total


class UnusualReports():
    def __init__(self):
        self.safeCount = 0

    def readReports(self, input):
        for line in input['content'].splitlines():
            if self.isSafeBidirectional(line.strip().split()):
                self.safeCount+=1
            else:
                continue
        return self.safeCount
    
    def tolerateReports(self, input):
        for line in input['content'].splitlines():
            if self.isSafeBidirectional(line.strip().split()):
                self.safeCount+=1
            else:
                for i in range(len(line.strip().split())):                        
                    tolerateReport = line.strip().split()[:i] + line.strip().split()[i+ 1:]
                    if self.isSafeBidirectional(tolerateReport):
                        self.safeCount+=1
                        break
        return self.safeCount
                    
    def isSafeSlidingWindow(self, report):
        inc, dec = True, True

        for i in range(1,len(report)):
            diff = int(report[i]) - int(report[i-1])

            if not (1<= abs(diff) <=3):
                return False

            if diff>0:
                dec = False
            elif diff < 0:
                inc = False

        return inc or dec

    def isSafeReports(self, report, idx=1, inc=True, dec=True):

        if idx == len(report):
            return inc or dec
        
        diff = int(report[idx]) - int(report[idx-1])

        if not (1 <= abs(diff) <= 3):
            return False

        if diff > 0:
            dec = False
        elif diff < 0:
            inc = False

        return self.isSafeReports(report, idx+1, inc, dec)
            

        

    def isSafeBidirectional(self, report):
        inc, dec = True, True
        n = len(report)

        for i in range(n//2):
            diff_front = int(report[i+1])-int(report[i])
            diff_back = int(report[-(i+1)])-int(report[-(i+2)])

            if not (1<= abs(diff_front) <=3) or not (1<= abs(diff_back) <=3):
                return False

            if diff_front > 0 or diff_back > 0:
                dec = False
            if diff_front < 0 or diff_back < 0:
                inc = False

        return inc or dec

                
        