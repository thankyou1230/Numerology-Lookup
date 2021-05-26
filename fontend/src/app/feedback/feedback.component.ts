import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {

  constructor(private http: HttpClient) { }
  feedbacks
  loading_status
  ngOnInit() {
    this.loading_status=''
    this.http.get('https://pythagoras.azurewebsites.net/getFeedBack').subscribe((e) => {
        this.feedbacks = Object.keys(e).map(index => {
        let person = e[index];
        return person;
        });
      },
      err => {
        console.log(err);
        alert("Có lỗi trong quá trình thực thi, xin thử lại")
      }
    )
    this.loading_status='none'
  }

}
