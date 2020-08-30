export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;

    // tslint:disable-next-line:typedef
    constructor(id, name, description, price, imgUrl){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;

    }
}
