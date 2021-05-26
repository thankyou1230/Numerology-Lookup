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
  loading_status='none'
  ngOnInit() {
  }

  public updateFile(files){
    this.inputFile=files;
  }

  public onSubmit(formValue){
    this.loading_status=''
    if (this.inputFile.length === 0 || this.content=='' || this.number=='') {
      return;
    }
    let fileToUpload = <File>this.inputFile[0];
    const formData = new FormData();  
    formData.append(this.content, fileToUpload, this.number);

    this.http.post('https://pythagoras.azurewebsites.net/Upload', formData)
      .subscribe(event => {
        alert('Cập nhật thành công')
        this.number='';
        this.content='';
      },err=>{
        alert("Đã xảy ra lỗi, hãy thử lại sau");
      });
    this.loading_status='none'
  }

}


