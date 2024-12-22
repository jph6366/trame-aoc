import heapq
import hashlib

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
        return self


    def insertCountMinSketch(self, input):
        """Insert data into Count-Min Sketch matrix."""
        for line in input['content'].splitlines():
            numbers = [int(digit) for digit in line.split()]
            for i, hashFunc in enumerate(self.hashFunctions):
                hashVal = int(hashFunc(str(numbers[1]).encode()).hexdigest(), 16)
                bucketIdx = hashVal % self.cols
                self.countMatrix[i][bucketIdx] += 1
        return self

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
