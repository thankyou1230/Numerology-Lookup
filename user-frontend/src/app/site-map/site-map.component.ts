import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit} from '@angular/core';
@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css'],
})
export class SiteMapComponent implements OnInit, OnDestroy {

  constructor(private http:HttpClient) { }

  loading_status=''
  page_list
  ngOnInit() {
    this.http.get('https://pythagoras.azurewebsites.net/getSiteMap').subscribe(e=>{
      this.page_list = Object.keys(e).map(index => {
        let i = e[index];
        return i;
        });
        this.loading_status='none'
    },err=>{
      alert('Error, try reload this page')
    })
  }
  
  ngOnDestroy () {
  }


}
