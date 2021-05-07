import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-number',
  templateUrl: './add-number.component.html',
  styleUrls: ['./add-number.component.css']
})
export class AddNumberComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  number
  content
  inputFile

  ngOnInit() {
  }

  addNumber(){
    if(this.number && this.content ){
      let strApi='https://localhost:5001/addNumber?id=${number}&content=${content}&img={img}';
      this.http.get(strApi).subscribe((e)=>{
        this.number='';
        this.content='';
        this.inputFile=null;
      }, (err)=>{
        alert(err);
      })
    }
    else{
      alert("Missing filled"); 
    }
  }
  handleFileInput(){
    alert(1);
  };
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44329/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        debugger
        // if (event.type === HttpEventType.UploadProgress)
        //   this.progress = Math.round(100 * event.loaded / event.total);
        // else if (event.type === HttpEventType.Response) {
        //   this.message = 'Upload success.';
        //   this.onUploadFinished.emit(event.body);
        // }
        alert('done');
      });
  }

}


