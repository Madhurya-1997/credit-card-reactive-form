import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CardNumberControl } from '../form-validation-classes/card-number-control';
import { ExpirationDateControl } from '../form-validation-classes/expiration-date-control';
import { SecurityCodeControl } from '../form-validation-classes/security-code-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    cardNumber: new CardNumberControl('', [
      Validators.required,
      Validators.minLength(19),
      Validators.maxLength(19)
    ]),
    expiration: new ExpirationDateControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new SecurityCodeControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(x) {
    console.log(x.value);
    alert(`Name: ${x.value.name}\n
    Card Number: ${x.value.cardNumber}\n
    Expiration Date: ${x.value.expiration}`)
    this.onReset()
  }
  onReset() {
    this.cardForm.reset();
  }
}
