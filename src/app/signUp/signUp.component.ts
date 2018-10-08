import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './shared/CustomValidator';



@Component({
  selector: 'app-signq',
  templateUrl: './signUp.component.html'
//   styleUrls: ['./signIn.component.css']
})
export class SignUpComponent implements OnInit{
//     ngOnInit(): void {
//  console.log('g');    }
//   ti.ltle = 'my-app';
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
            // lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }

}
