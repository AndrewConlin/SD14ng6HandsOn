import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  newProd: Product = new Product();

  title = '';

  getNumberOfProducts = function() {
    return this.products.length;
  };

  log = function(message) {
    console.log(message);
  };

  onSubmit = function(form: NgForm) {
    const prod = new Product(form.value.name, form.value.price, form.value.imgUrl, form.value.rating);

    this.productService.create(prod);
    this.products = this.productService.index();

    form.reset();
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.index();
  }

}
