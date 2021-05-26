import { Component, OnInit, ViewEncapsulation, Renderer2,ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-your-number',
  templateUrl: './your-number.component.html',
  styleUrls: ['./your-number.component.css'],
  
})
export class YourNumberComponent implements OnInit {


  @ViewChild('f') formfb: ElementRef;
  @ViewChild('btn_fb') btn: ElementRef;
  @ViewChild('childemail') emailinput: ElementRef;
  @ViewChild('childcontent') contentinput: ElementRef;
  @ViewChild('submit') btn_submit: ElementRef;
  constructor(private http: HttpClient, private renderer: Renderer2) { 
    this.renderer.listen('window', 'click',(e:Event)=>{
     if(e.target !== this.btn.nativeElement && e.target!==this.formfb.nativeElement && e.target!==this.emailinput.nativeElement && e.target!==this.contentinput.nativeElement && e.target!==this.btn_submit.nativeElement){
         this.fb_display='none';
         this.email='';
         this.content='';
         this.opacity='none'
         this.opacity1='100%'
     }
 });
  }
  date
  dialog=''
  result_display='none'
  text
  result_background
  fb_display='none'
  numb=''
  email
  content
  loading_status='none'
  opacity='none'
  opacity1='100%'
  ngOnInit() {
  }

  returnResult(){
    if(this.date!=undefined){
    this.loading_status=''
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
      this.loading_status='none'
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
    this.loading_status='none'
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
    this.opacity='blur(5px)'
    this.opacity1='0%'
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
    this.opacity1='none'
    this.opacity='100%'
  }


} 
