export class Product {
  name: string;
  price: number;
  imgUrl: string;
  rating: number;

  constructor(name?: string, price?: number, imgUrl?: string, rating?: number) {
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
    this.rating = rating;
  }
}
