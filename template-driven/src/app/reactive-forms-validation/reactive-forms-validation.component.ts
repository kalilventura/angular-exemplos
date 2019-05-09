import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.css']
})
export class ReactiveFormsValidationComponent implements OnInit {
  clientForm = this.fb.group({
    firstName:
    ['',
      [
        Validators.required,
        Validators.minLength(5)
      ]
    ],
    lastName: ['', [Validators.required]],
    birth: [new Date(), [Validators.required]],
    age:
    [0,
      [
        Validators.required,
        Validators.max(150),
        Validators.min(0)
      ]
    ],
    email:
    ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    street:
    ['',
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.minLength(2)
      ]
    ],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    phone1: ['', [Validators.required]],
    phone2: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
