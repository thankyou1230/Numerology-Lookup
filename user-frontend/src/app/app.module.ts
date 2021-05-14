import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { YourNumberComponent } from './your-number/your-number.component';
import {HttpClientModule} from '@angular/common/http';
import { SiteMapComponent } from './site-map/site-map.component';
import { Err404Component } from './err404/err404.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    PrivatePolicyComponent,
    YourNumberComponent,
    SiteMapComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }