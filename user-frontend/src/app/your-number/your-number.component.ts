import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-your-number',
  templateUrl: './your-number.component.html',
  styleUrls: ['./your-number.component.css']
})
export class YourNumberComponent implements OnInit {

  constructor(private http: HttpClient) { }
  date
  ngOnInit() {
  }

  returnResult(){
    this.http.get("http://localhost:5001/getResult?day="+this.date.getDay()+"&month="+(this.date.getMonth()+1)+"&year="+this.date.getFullYear()).subscribe(e=>{
      ;
    }, err=>{
      alert(err);
    })
  }

  updateDate(date){
    if(date!=undefined)
      this.date=date
  }

} 
