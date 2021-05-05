import {Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title
  constructor(private http: HttpClient) {
    this.title=this.getViewData();
  }

  getViewData() {
    this.http.get('https://localhost:44382/getName').subscribe((rs) => {
      this.title=rs[0];
      console.log(rs);
  }, (err) =>{
      console.log('err');
  });

  }

}
