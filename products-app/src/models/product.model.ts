import { Department } from './department.model';

export class Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  department: Department;
}
