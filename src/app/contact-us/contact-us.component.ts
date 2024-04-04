import { Component,OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{

  @ViewChild('myForms') myForms!: NgForm;
  myForm!: FormGroup;
  constructor(private builder: FormBuilder,private apiservice: ApiServiceService) { 
  }
  ngOnInit() {
    this.myForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      description: ['']
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.apiservice.sendCustomerDetails(formData).subscribe((res)=>{
        console.log("res",res);
        
      })    
      console.log(formData);
      this.myForms.reset();
    } else {
      console.log('Invalid form');
    }
  }
}
