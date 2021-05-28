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
  issue_count
  emty='none'
  err_dis='none'
  ngOnInit() {
    this.http.get('https://pythagoras.azurewebsites.net/getIssue').subscribe(e=>{
      this.issues = Object.keys(e).map(index => {
        let person = e[index];
        return person;
        });
      this.issue_count=Object.keys(e).length
      if (this.issue_count<=0){
        this.emty=''
      }
    },err=>{
      alert('Xin lỗi hiện tại không load được trang này, xin thử lại sau')
      this.err_dis=''
    })
  }
  removeIssue(issue){
    this.http.get("https://pythagoras.azurewebsites.net/updateIssue?time="+issue['time']).subscribe(e=>{
      this.issues.splice(this.issues.indexOf(issue),1)
      this.issue_count=this.issue_count-1
      if (this.issue_count>0){
        this.emty='none'
      }
      if (this.issue_count<=0){
        this.emty=''
      }
    },err=>{
      alert('Thao tác không thành công, xin thử lại sau')
      this.issue_count=this.issue_count+1
      window.location.reload()
    })
  }
  ngOnChanges(){
    
  }

}
