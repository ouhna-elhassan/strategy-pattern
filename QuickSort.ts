import {Strategy} from './Strategy';

export class QuickSort implements Strategy {

    public sort(array: number[]): number[]{
        return this.startSorting(array, 0, array.length);
    }

    public startSorting(arr: Array<number>,start: number = 0,end: number): Array<number> {
        if (start < end) {
        let p = this.partition(arr, start, end);
        this.startSorting(arr, start, p - 1);
        this.startSorting(arr, p + 1, end);
        }
        return arr;
    }
      
    public partition(arr: Array<number>, start: number = 0, end: number = arr.length): number {
        let pivot: number = arr[start];
        let swapIndex: number = start;
        for (let i = start + 1; i < end; i++) {
          if (arr[i] < pivot) {
            swapIndex++;
            this.swap(arr, i, swapIndex);
          }
        }
        this.swap(arr, start, swapIndex);
        return swapIndex;
    }
      
    public swap(arr: Array<number>, i: number, j: number):void {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}