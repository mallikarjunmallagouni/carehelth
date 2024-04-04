import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  toaboutus(){
    document.getElementById("about-us")?.scrollIntoView({behavior:"smooth"})
  }
  toservices(){
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"})
  }
  tohome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"})
  }
  toclientreview(){
    document.getElementById("clients-review")?.scrollIntoView({behavior:"smooth"})
  }
}
