import { Injectable, EventEmitter } from '@angular/core';
import { Product } from 'src/models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Laptop Description'},
    {id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Shirt Descrption'},
    {id: 3, name: 'Polo', department_id: 1, price: 50, description: 'Polo Descrption'},
    {id: 4, name: 'Mouse', department_id: 3, price: 40, description: 'Mouse Descrption'}
  ];

  private products: Array<Product> = [];
  private nextId: number;

  // Event Emitter para avisar para a tabela que dados foram inseridos
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  // Injeção do serviço de departamento no produto
  constructor(private departmentService: DepartmentService) {
    for (let p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: departmentService.getDepartmentById(p.department_id)
      });
      this.nextId = p.id + 1;
    }
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  addProduct(product: Product) {
    let prod: Product = {id: this.nextId , ...product};
    this.products.push(prod);
    console.log(this.products);
    this.onNewProduct.emit(prod);
  }
}
