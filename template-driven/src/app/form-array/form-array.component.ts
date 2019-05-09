import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    phones: this.fb.array(['']),
    children: this.fb.array([])
  });

  // Para retornar um AbstractControl que será transformado em FormArray
  phones = this.clientForm.get('phones') as FormArray;
  children = this.clientForm.get('children') as FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submit() {
    console.log(this.clientForm.value);
  }

  addPhone() {
    // Retorna tudo que tem dentro do array e adiciona um form control
    this.phones.push(this.fb.control(''));
  }

  addChildren() {
    this.children.push(
      this.fb.group({
        name: [''],
        age: ['']
      })
    );
  }
}
