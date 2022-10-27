import {Strategy} from './Strategy';
import {InsertionSort} from './InsertionSort';
import {Product} from './Product';

class Context {
   
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    //sorting function
    public arrange(data:Product[], item: String): Product[] {

        let products: number[];
        products = Array.from(data).map(x => x.getItem(item));
        let sorted: number[] = products;

        //sort data
        this.strategy.sort(sorted);
        products = Array.from(data).map(x => x.getItem(item));
        var result;
        result = Array.from(sorted).map(x => data.at(products.indexOf(x)));
        result.reverse()
        console.log(result);
        return result;
    }
}


//Main programm
let p1 = new Product('product1', 12, 14);
let p2 = new Product('product2', 1, 2);
let p3 = new Product('product3', 34, 3);
let p4 = new Product('product4', 17, 0);

let data: Product[] = [p1,p2,p3,p4];

//Insertion sort for price and quality
const context = new Context(new InsertionSort());

console.log('Insertion sort for price: \n');
context.arrange(data, 'price')

console.log('Insertion sort for quality: \n');
context.arrange(data, 'quality')

//Bubble sort for price and quality
console.log('Bubble sort for price: \n');
context.arrange(data, 'price')

console.log('Bubble sort for quality: \n');
context.arrange(data, 'quality')
