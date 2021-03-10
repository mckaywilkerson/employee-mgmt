import { Injectable } from '@angular/core';
import { IProduct } from '../products';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }


  // DEMO FOR ASSIGNMENT 1
  getProducts(): IProduct[] {       // 1. Get the req from the component
    console.log('INSIDE Product Service');

    const products: IProduct[] = [{
      id: 1,
      name: 'Apple',
      category: 'Fruits',
      price: '$2.76'
    }, {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }, {
      id: 3,
      name: 'Orange',
      category: 'Fruits',
      price: '$4.85'
    }, {
      id: 4,
      name: 'Tomato',
      category: 'Vegetables',
      price: '$5.01'
    }, {
      id: 5,
      name: 'Table Cloth',
      category: 'Kitchen Essentials',
      price: '$6.13'
    }, {
      id: 6,
      name: 'Cranberries - Frozen',
      category: 'Fruits',
      price: '$7.08'
    }];

    return products;

    // Doesn't deal with REST API in this one


    // 2. Send the req to the REST API
    // 3. Get the res from the REST API
    // 4. Send the res back to the component
  }


  // DEMO FOR ASSIGNMENT 2
  getProductList(): Observable<any> {                // 1. Get the req from the component
    console.log('INSIDE getProductList');

    // 2. send the req to the REST API
    // 2.1 what is the REST API URL? http://jsonplaceholder.typicode.com/users
    // 2.2 what is the http method? GET
    // 2.3 what is the REST API Client? HttpClient (built in Angular)

    return this.http.get('http://localhost:3000/products')
      .pipe( map( (res: any) => {         // 3. get the res from the REST API
        console.log(res);
        // sort, filter, removing, adding
        return res;                       // 4. send the res to the component
      }));

  }

}
