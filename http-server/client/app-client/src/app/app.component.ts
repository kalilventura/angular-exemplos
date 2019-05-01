import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Observer, Observable } from 'rxjs';
import { Product } from './product.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private snackBar: MatSnackBar
  ) {}
  productsErrorHandling: Product[];
  productsLoading: Product[];
  productsId: Product[];
  bLoading: boolean = false;
  simpleProductsObserver: Observable<Product[]>;

  ngOnInit() {}

  getSimpleHttpRequest() {
    this.simpleProductsObserver = this.productService.getProducts();
  }

  getProductsWithErrorHandling() {
    this.productService.getProductsError().subscribe(
      prods => {
        this.productsErrorHandling = prods;
      },
      err => {
        console.log(err);
        console.log('Message: ', err.error.msg);
        console.log('Status: ', err.status);
        const config = new MatSnackBarConfig();
        config.duration = 2000;
        config.panelClass = ['snack_error'];
        if (err.status === 0) {
          this.snackBar.open('Could not connect to the server', '', config);
        } else {
          this.snackBar.open(err.error.msg, '', config);
        }
      }
    );
  }

  getProductsWithErrorHandlingOk() {
    this.productService.getProductsDelay().subscribe(
      prods => {
        this.productsErrorHandling = prods;
        const config = new MatSnackBarConfig();
        config.duration = 2000;
        config.panelClass = ['snack_ok'];
        this.snackBar.open('Product Success', '', config);
      },
      err => {
        console.log(err);
      }
    );
  }

  getProductsLoading() {
    this.bLoading = true;
    this.productService.getProductsDelay().subscribe(
      prods => {
        this.productsLoading = prods;
        this.bLoading = false;
      },
      err => {
        this.bLoading = false;
        console.log(err);
      }
    );
  }

  getProductsId() {
    this.productService.getProductsId().subscribe(ids => {
      this.productsId = ids.map(id => ({
        _id: id,
        name: '',
        department: '',
        price: 0
      }));
    });
  }

  loadName(id: string) {
    this.productService.getProductName(id)
    .subscribe(name => {
      const index = this.productsId.findIndex(p => p.id === id);
      if (index >= 0) {
        this.productsId[index].name = name;
      }
    });
  }
}
