import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FeedbackComponent implements OnInit {

  constructor(private http: HttpClient) { }
  appendHTML: string="";
  ngOnInit() {
    this.http.get('https://localhost:5001/getFeedBack').subscribe((e) => {
         for(let l=0; l<Object.keys(e).length; l++){
            this.appendHTML+="<p class='feedback'>"+e[l]+"</p>";
         }
      },
      err => {
        console.log(err);
      }
    )
  }

}
