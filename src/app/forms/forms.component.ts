import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   no1 : number =10;
   no2:number = 20;
   result : number;
  Add(refForm : any)
  {
     this.no1=10;
    console.log("Form is submitted");
    console.log(refForm.controls);
    console.log(refForm.value);
    this.no1 = refForm.controls.txtNo1.value;
    this.no2 = refForm.controls.txtNo2.value;
    console.log(this.no1);
    console.log(this.no2);
    this.result = this.no1 + this.no2;

    console.log("Submitted");
  }
}
