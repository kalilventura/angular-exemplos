import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/models/product.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  // Referencia a minha tabela do componente
  @ViewChild(MatTable) dataTable: MatTable<any>;

  private products: Product[];
  // Colunas que vão aparecer na tela
  prodColumns: string[] = ['Code', 'Name', 'Price', 'Description', 'Department'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // Toda vez que um produto for adicionado a tabela vai ser recarregada
    this.productService.onNewProduct.subscribe((p) => {
      this.dataTable.renderRows();
    });
  }

}
