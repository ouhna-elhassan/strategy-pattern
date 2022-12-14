import {Strategy} from './Strategy';

export class MergeSort implements Strategy{

    public sort(array: number[]): number[]{
        return this.divide(array);
    }
    
    public divide(items: number[]): number[] {
        var halfLength = Math.ceil(items.length / 2);
        var low = items.slice(0, halfLength);
        var high = items.slice(halfLength);
        if (halfLength > 1) {
            low = this.divide(low);
            high = this.divide(high);
        }
        return this.combine(low, high);
    }
    
    public combine(low: number[], high: number[]): number[] {
        var indexLow = 0;
        var indexHigh = 0;
        var lengthLow = low.length;
        var lengthHigh = high.length;
        let combined: number[] = [];
        while (indexLow < lengthLow || indexHigh < lengthHigh) {
            var lowItem = low[indexLow];
            var highItem = high[indexHigh];
            if (lowItem !== undefined) {
                if (highItem === undefined) {
                    combined.push(lowItem);
                    indexLow++;
                } else {
                    if (lowItem <= highItem) {
                        combined.push(lowItem);
                        indexLow++;
                    } else {
                        combined.push(highItem);
                        indexHigh++;
                    }
                }
            } else {
                if (highItem !== undefined) {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        }
        return combined;
    }
}