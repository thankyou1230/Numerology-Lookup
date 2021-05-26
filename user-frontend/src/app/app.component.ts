import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { YourNumberComponent } from './your-number/your-number.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild(YourNumberComponent) child;
  constructor(){}
  blur
  ngAfterViewInit(){

  }
  
  ngOnInit(){
    
  }

}
