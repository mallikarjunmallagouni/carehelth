import { Component, ElementRef, OnInit,HostListener, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder,Validators, NgForm  } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit  {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private router: Router,private app: ElementRef,private breakpointObserver: BreakpointObserver,
    private http: HttpClient,private renderer: Renderer2,private elementRef: ElementRef,
    private builder: FormBuilder,private apiservice:ApiServiceService) {

  }
  ngAfterViewInit(): void {

  }

  navigate(value: any) {
    this.router.navigate([value])
  }
  nav_variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if( document.documentElement.scrollTop>0){
      this.nav_variable = true;
    }
    else{
      this.nav_variable = false;
    }
  }

  activeSection: String = '';

  scrollToSection(section:any){
    this.activeSection = section
    if(section === 'contact-us'){
      // do nothing
    }
    else{
      document.getElementById(section)?.scrollIntoView({behavior:"smooth"})
    }
  }


  // popup

  @ViewChild('myclient') client!: ElementRef | undefined;

openModel() {
setTimeout(()=>{
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'block';
  } 
},500)
}

CloseModel() {
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'none';
  } 
}

// enquiry form
@ViewChild('myForms') myForms!: NgForm;
myForm!: FormGroup;

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