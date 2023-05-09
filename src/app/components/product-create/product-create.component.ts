import {Component, Input, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {Config} from "tailwindcss";
import {ConfigService} from "../../config/config.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {

  form = new FormGroup({
  title: new FormControl<string>('',[
    Validators.required,
    Validators.minLength(6)
  ]),
   description: new FormControl<string>('',[
     Validators.required,
     Validators.minLength(30)
   ]),
    category: new FormControl<string>('',[
      Validators.required,
    ]),
    image:new FormControl<string>('',[
      Validators.required,
    ]),
    price: new FormControl<number>(10,[
      Validators.required,
    ]),
})
  constructor(public configService:ConfigService) {

  }
  ngOnInit(): void {
  }
  get title() {
      return this.form.controls.title as FormControl;
  }
  get description() {
    return this.form.controls.description as FormControl
  }
submit() {
   /* this.configService.createProduct({
      title: this.form.controls.title,
      description:this.form.controls.description,
      category: this.form.controls.category
    })*/
  console.log(this.form.value)
  }

}
