import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})

export class ContentDetailComponent implements OnInit {

  @Input() content;

  copy = "";
  copyHTML;

  constructor(

    private http: HttpClient

  ) { }

  ngOnInit() {
    console.log("content: "+this.content.htmlfile);
    this.copy = this.content.htmlfile;
    this.getHTML();
  }

  getHTML(){
    this.http.get(this.content.htmlfile, {responseType: 'text'}).subscribe(data => this.copy = data);
  }

}
