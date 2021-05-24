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
  email
  content
  ngOnInit() {
  }

  returnResult(){
    if(this.date!=undefined){
    this.http.get("https://pythagoras.azurewebsites.net/getResult?date="+this.date).subscribe(e=>{
        let resultArray = Object.keys(e).map(index => {
        let person = e[index];
        return person;
        });
        if (resultArray!=undefined)
          this.displayResult(resultArray[0]);
        else
          alert('Your number is not available now, please try again later')
    }, err=>{
      alert("Sorry, your number is not available now, please try again later");
    })
    }
    else{
      alert('Select a date to dicorver')
    }
  }

  updateDate(curdate){
    if(curdate!=undefined)
      this.date=curdate
  }

  displayResult(arr){
    this.text=arr["infors"]
    this.result_display='';
    this.result_background=arr["image"]
    this.numb=arr["number"]
  }

  closeResult(){
    this.result_display='none';
    this.fb_display='none'
  }

  closeFeedback(){ 
    this.fb_display='none'
  }
  
  fb_pressed(){
    this.fb_display=''
  }


  onSubmit(formValue){
    let date=new Date()
    this.http.post("https://pythagoras.azurewebsites.net/addFeedBack?email="+formValue.email+"&fb="+formValue.content+"&time="+date,"").subscribe(e=>{
      alert('Thanks for your feedback!')
      this.fb_display='none'
      this.email=''
      this.content=''
    },err=>{
        alert('Oops, please try to send feedback again',)
      })
  }
} 
