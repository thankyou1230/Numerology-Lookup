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
  status
  ngOnInit() {
  }

  public updateFile(files){
    this.inputFile=files;
  }

  public uploadFile = () => {
    if (this.inputFile.length === 0 || this.content=='' || this.number=='') {
      return;
    }
    let fileToUpload = <File>this.inputFile[0];
    const formData = new FormData();
    formData.append(this.content, fileToUpload, this.number);

    this.http.post('https://localhost:5001/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        this.status=1
      },err=>{
        alert(err);
        this.status=0
      });
    if(this.status==1){
      alert("Change sucessfully!")
    }
  }

}


