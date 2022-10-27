export class Product{
    private _name: String;
    private _price: number;
    private _quality: number;

    constructor(name: String, price:number, quality: number){
        this._name = name;
        this._price = price;
        this._quality = quality;
    }

    //getters
    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
    get quality(){
        return this._quality;
    }

    public getItem(item: any): number{
        var map = {
            price: this.price,
            quality: this.quality
        };
        return map[item];
    }

}