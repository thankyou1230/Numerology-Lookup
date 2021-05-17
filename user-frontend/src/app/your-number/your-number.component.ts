import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomePageComponent } from '../home-page/home-page.component';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-your-number',
  templateUrl: './your-number.component.html',
  styleUrls: ['./your-number.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class YourNumberComponent implements OnInit {

  constructor(private http: HttpClient) { }
  date
  dialog=''
  result_display='none'
  text
  result_background
  fb_display='none'
  numb=''
  ngOnInit() {
  }

  returnResult(){
    console.log(this.date)
    if(this.date!=undefined){
    this.http.get("http://localhost:5000/getResult?date="+this.date).subscribe(e=>{
        let resultArray = Object.keys(e).map(index => {
        let person = e[index];
        return person;
        });
      this.displayResult(resultArray[0]);
    }, err=>{
      alert("An unexpected error ");
    })
    }
    else{
      alert('Select a date to dicorver')
    }
  }

  updateDate(curdate){
    if(curdate!=undefined)
      this.date=curdate
      console.log(curdate)
  }

  displayResult(arr){
    this.text=arr["infors"]
    this.result_display='';
    this.result_background=arr["image"]
    this.numb=arr["number"]
    console.log(this.text)
    console.log(this.result_background)
  }

  closeResult(){
    this.result_display='none';
    this.fb_display='none'
    this.fb_content='';
    this.fb_email='';
  }

  closeFeedback(){
    this.fb_display='none'
  }
  fb_pressed(){
    this.fb_display=''
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  fb_email=null
  fb_content=null
  sendFeedBack(){
    if(this.validateEmail(this.fb_email)!==true || this.fb_content==null){
      alert("Please fill the missing content")
    }
    else{
      this.http.post("http://localhost:5000/addFeedBack?email="+this.fb_email+"&fb="+this.fb_content,"").subscribe(e=>{
        alert('Thanks  for your feedback!')
        this.fb_display='none'
        this.fb_email=null
        this.fb_content=null
      },err=>{
          alert(err+'/n please try again',)
      })
    }
  }
} 
