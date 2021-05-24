import {Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private http: HttpClient) {
  }

}
