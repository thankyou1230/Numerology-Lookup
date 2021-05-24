import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit,OnChanges {

  constructor(private http:HttpClient) { }

  issues
  ngOnInit() {
    this.http.get('https://pythagoras.azurewebsites.net/getIssue').subscribe(e=>{
      this.issues = Object.keys(e).map(index => {
        let person = e[index];
        return person;
        });
    },err=>{
      alert('Xin lỗi hiện tại không load được trang này, xin thử lại sau')
    })
  }
  removeIssue(issue){
    this.http.get("https://pythagoras.azurewebsites.net/updateIssue?time="+issue['time']).subscribe(e=>{
      this.issues.splice(this.issues.indexOf(issue),1)
    },err=>{
      alert('Thao tác không thành công, xin thử lại sau')
      window.location.reload()
    })
  }
  ngOnChanges(){
    
  }

}
