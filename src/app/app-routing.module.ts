import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsReviewComponent } from './clients-review/clients-review.component';

const routes: Routes = [
    { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
  { path: 'services', component: ServicesComponent, title: 'Services' },
  {path: 'clients-review', component: ClientsReviewComponent,title: 'clients'},
  {path:'contact-us',component: ContactUsComponent,title:'Contact Us'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
