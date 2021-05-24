import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { YourNumberComponent } from './your-number/your-number.component'
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { Err404Component } from './err404/err404.component';
const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'about-us', component: AboutUsComponent},
  {path: 'your-number', component: YourNumberComponent},
  {path: 'private-policy', component:PrivatePolicyComponent},
  {path: 'site-map', component: SiteMapComponent},
  {path: 'err-404', component: Err404Component},
  {path: '**', redirectTo:'err-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
