import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { sampleFormValidators } from './sample-form.validators';
import { PasswordValidators } from '../change-password/password.validators';

@Component({
  selector: 'sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent {

  constructor(private _sampleFormValidators: sampleFormValidators) {

  }

  @Input() name: string;
  @Output() eventHandler = new EventEmitter();

  usernameText: string = "";
  sampleName: string = "ff";

  levels = [{no: 1}, {no:2}, {no:3}];

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, sampleFormValidators.cannotContainSpace], [this.isUsernameTaken.bind(this)]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, { validators: [sampleFormValidators.passwordIsnotConfirmed ]});

  isUsernameTaken(control: AbstractControl) {
    let res =  this._sampleFormValidators.isUsernameTaken(control.value).then(d => { return d === true ? { isUsernameTaken: true } : null });
    return res;
  }

  onClick() {
    this.eventHandler.emit(this.usernameText);
  }

  get username() {
    return this.form.get('username');
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get password() {
    return this.form.get('username');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
