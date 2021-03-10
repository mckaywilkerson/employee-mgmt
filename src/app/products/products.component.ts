import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  pageName = 'Product List:';
  subText = 'Add products into your cart and checkout!';

  productList: IProduct[] = [];

  isLoggedIn = true;

  today: Date = new Date();

  randomText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

  constructor( private productService: ProductService ) {       // 1. Connect to the service using dependency injection
    console.log('INSIDE CONSTRUCTOR');
  }

  // lifecycle hook
  ngOnInit(): void {
    // will be automatically called after constructor
    // whenever this component is coming into the view -- ngOnInit will be called
    // ideal place for us to send ajax calls
    console.log('INSIDE noOnInit');

    // 2. Send the req to the service
    // 3. Get the res from the service

    // DEMO FOR ASSIGNMENT 1
    // this.productList = this.productService.getProducts();


    // DEMO FOR ASSIGNMENT 2
    this.productService.getProductList()
      .subscribe( (res: any) => {
        console.log(res);
        this.productList = res;
      });

  }

  // event binding
  addToCartHandler(event: any, product: any): void {
    console.log(product);
    event.target.innerText = 'Added';
    alert('Added to cart');
  }

}
