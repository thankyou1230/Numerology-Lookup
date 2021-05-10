import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { YourNumberComponent } from './your-number/your-number.component'
const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'about-us', component: AboutUsComponent},
  {path: 'your-number', component: YourNumberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
