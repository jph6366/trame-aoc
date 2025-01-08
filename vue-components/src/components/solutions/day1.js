import CryptoJS from "crypto-js";
import { MinHeap } from "@datastructures-js/heap";

export class LocationComputer {
  constructor(rows, cols) {
    // Initialize heaps and matrix for Count-Min Sketch
    this.selectionHeaps = [new MinHeap(), new MinHeap()];
    this.rows = rows;
    this.cols = cols;
    this.countMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    this.hashFunctions = [CryptoJS.MD5, CryptoJS.SHA1, CryptoJS.SHA256];
    this.total = 0;
  }

  insertNotes(input) {
    // Insert notes into heaps based on input
    input.split("\n").forEach((line) => {
      const numbers = line.split(" ").map(Number);
      if (numbers.length != 1) {
        this.selectionHeaps[0].insert(numbers[0]);
        this.selectionHeaps[1].insert(numbers[3]);
      }
    });
  }

  insertCountMinSketch(input) {
    // Insert data into Count-Min Sketch matrix
    input.split("\n").forEach((line) => {
      const numbers = line.split(" ").map(Number);
      if (numbers.length != 1) {
        this.hashFunctions.forEach((hashFunc, i) => {
          const hashVal = parseInt(
            hashFunc(String(numbers[3])).toString(CryptoJS.enc.Hex),
            16
          );
          const bucketIdx = hashVal % this.cols;
          this.countMatrix[i][bucketIdx] += 1;
        });
      }
    });
    return this;
  }

  estimateSimilarity(elem) {
    // Estimate the frequency of an element using the Count-Min Sketch matrix
    let minCount = Infinity;
    this.hashFunctions.forEach((hashFunc, i) => {
      const hashVal = parseInt(
        hashFunc(String(elem)).toString(CryptoJS.enc.Hex),
        16
      );
      const bucketIdx = hashVal % this.cols;
      minCount = Math.min(minCount, this.countMatrix[i][bucketIdx]);
    });
    return minCount;
  }

  computeMinPairDist() {
    const aNum = this.selectionHeaps[0].extractRoot();
    const bNum = this.selectionHeaps[1].extractRoot();

    return Math.abs(aNum - bNum);
  }

  findTotalDistances() {
    // Find the total distance by processing all pairs in the heaps
    while (!this.selectionHeaps[0].isEmpty()) {
      this.total += this.computeMinPairDist();
    }
    return this.total;
  }

  findTotalSimilarity(input) {
    // Calculate total similarity based on the Count-Min Sketch
    this.total = 0;
    input.split("\n").forEach((line) => {
      const numbers = line.split(" ").map(Number);
      const freq = this.estimateSimilarity(numbers[0]);
      this.total += freq * numbers[0];
    });
    return this.total;
  }
}

export function main() {
  const part1 = (input) => {
    const lc = new LocationComputer(3, 4500);
    lc.insertNotes(input);
    return lc.findTotalDistances();
  };

  const part2 = (input) =>
    Number(
      new LocationComputer(3, 4500)
        .insertCountMinSketch(input)
        .findTotalSimilarity(input)
    );
  return { part1, part2 };
}
