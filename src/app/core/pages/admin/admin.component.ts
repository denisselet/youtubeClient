import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { urlValidator } from './url.validator';
import { dateValidator } from './date.validator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  adminForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.maxLength(255)]),
    img: new FormControl('', [Validators.required, urlValidator()] ),
    link: new FormControl('', [Validators.required, urlValidator()] ),
    date: new FormControl('', [Validators.required, dateValidator()])

  });

  constructor(private router: Router) {}

  onSubmit() {
    const formData = { ...this.adminForm.value };
    console.log(formData);
  }

}
