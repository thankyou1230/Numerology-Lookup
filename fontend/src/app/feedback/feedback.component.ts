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
    this.http.get('http://localhost:5000/getFeedBack').subscribe((e) => {
      let resultArray = Object.keys(e).map(index => {
        let person = e[index];
        return person;
        });
        for(let l=0; l<resultArray.length; l++){
          this.appendHTML+="<p class='feedback'><span class='email'>"+resultArray[l]['fb_email']+': </span> <br><br>"'+resultArray[l]['fb_content']+'"</p>';
        }
      },
      err => {
        console.log(err);
        alert("Có lỗi trong quá trình thực thi, xin thử lại")
      }
    )
  }

}
