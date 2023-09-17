import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { urlValidator } from './url.validator';
import { dateValidator } from './date.validator';
import { Store } from '@ngrx/store';
import { loadInCustomPosts } from 'src/app/redux/actions/core.action';
import { CustomPost } from 'src/app/youtube/models/customPost.model';

type FormControlType =  { [key in keyof CustomPost]: AbstractControl };
type FormGroupType = FormGroup  & { value: CustomPost, controls: FormControlType };

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  adminForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    img: new FormControl('', [Validators.required, urlValidator()]),
    link: new FormControl('', [Validators.required, urlValidator()]),
    date: new FormControl('', [Validators.required, dateValidator()]),
  } as FormControlType) as FormGroupType;

  constructor(private router: Router, private store: Store) {}

  onSubmit() {
    const formData = { ...this.adminForm.value };
    this.store.dispatch(loadInCustomPosts({ data: formData }));
    alert('Created');
    this.router.navigate(['youtube']);
  }
}
