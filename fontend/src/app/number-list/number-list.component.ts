import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NumberListComponent implements OnInit {

  constructor(private http:HttpClient) { }
  appendHTML: string="";
  ngOnInit() {
    this.http.get('http://localhost:5000/getNumber').subscribe((e) => {
      for(let l=0; l<Object.keys(e).length; l++){
          const resultArray = Object.keys(e[l]).map(index => {
          let person = e[l][index];
          return person;
          });    
          this.appendHTML+="<p class='number'>Số "+resultArray[0]+"</p>";
         }
      },
      err => {
        console.log(err);
        alert("Có lỗi trong quá trình thực thi, xin thử lại")
      }
    )
  }

}
