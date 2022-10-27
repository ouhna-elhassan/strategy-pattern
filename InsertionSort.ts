import {Strategy} from './Strategy';

export class InsertionSort implements Strategy {

    public sort(array: number[]): number[] {
        IndexIterator:
        for (let i = 1; i < array.length; i++) {
    
            const valueToSort = array[i]; 
            InsertionIterator:
            for (let j = i - 1; j >= 0; j--) {
                if (valueToSort >= array[j]) {
                    array[j + 1] = valueToSort;
                    continue IndexIterator;
                } else {
                    array[j + 1] = array[j];
                    array[j] = valueToSort;
                    continue InsertionIterator;
                }
            }
        }
        return array;
    }
}