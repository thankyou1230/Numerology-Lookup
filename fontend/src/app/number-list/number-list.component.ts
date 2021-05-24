import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css'],
})
export class NumberListComponent implements OnInit {

  constructor(private http:HttpClient) { }
  numbers
  ngOnInit() {
    this.http.get('https://pythagoras.azurewebsites.net/getNumber').subscribe((e) => {
        this.numbers = Object.keys(e).map(index => {
        let person = e[index];
        return person;
        });    
      },
      err => {
        console.log(err);
        alert("Hiện tại không thể laod được trang này, xin thử lại sau")
      }
    )
  }

}
