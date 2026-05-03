import { mergeSort } from "./mergeSort";

test("Empty array", () => {
    expect(mergeSort([])).toEqual([]);
})

test("Single element array", () => {
    expect(mergeSort([73])).toEqual([73]);
})

test("Sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
})

test("Unsorted long array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})

test("Unsorted array with big numbers", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
})