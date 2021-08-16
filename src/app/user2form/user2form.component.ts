import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, FormControl , Validators}  from '@angular/forms';
import { ageRangeValidator } from '../CustomValidator';
@Component({
  selector: 'app-user2form',
  templateUrl: './user2form.component.html',
  styleUrls: ['./user2form.component.css']
})
export class User2formComponent implements OnInit {

  signUp : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.signUp=  formBuilder.group(
      {
        firstName : new FormControl("" , [Validators.required, Validators.minLength(10),Validators.pattern("^[a-zA-Z]+$")]),
        lastName : new FormControl("", Validators.required),
        email : new FormControl("", [Validators.required,Validators.email]),
        password : new FormControl("", Validators.required ),
        marks : new FormControl("0" , Validators.min(50)),
        age : new FormControl("0" , ageRangeValidator)
      });
   }

  ngOnInit(): void {
  }
  PostData(signUp)
  {
    console.log(signUp.controls);
  }
}
