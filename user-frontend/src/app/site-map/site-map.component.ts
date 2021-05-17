import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SiteMapComponent implements OnInit {

  constructor(private http:HttpClient) { }

  page_list=''
  ngOnInit() {
    this.http.get('http://localhost:5000/getSiteMap').subscribe(e=>{
      let resultArray = Object.keys(e).map(index => {
        let i = e[index];
        return i;
        });
      for(let l=0; l<resultArray.length; l++){
        this.page_list+='<li><a href="'+resultArray[l]["link"]+'">'+resultArray[l]["page"]+'</a></li>'
      }
    },err=>{
      alert('Error, try reload this page')
    })
  }
  



}
