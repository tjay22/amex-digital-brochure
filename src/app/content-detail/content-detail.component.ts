import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { contentAnimation } from '../animations/content-animations';

import { TweenMax, TimelineLite, Power1, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";

declare var TweenMax:any;

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
  animations: [ contentAnimation ]
})

export class ContentDetailComponent implements OnInit {

  @Input() content;

  copy = "";
  copyHTML;
  breadcrumb;

  constructor(

    private http: HttpClient

  ) { }

  ngOnInit() {
    console.log("content: "+this.content.htmlfile);
    this.copy = this.content.htmlfile;
    this.getHTML();
  }

  ngOnChanges(){
    this.copy = this.content.htmlfile;
    this.getHTML();    
  }

  getHTML(){
    if(this.content.parent == 'null'){
      this.breadcrumb = this.content.title;
    }else{
      this.breadcrumb = this.content.parent + ': ' + this.content.title;
    }
    this.http.get(this.content.htmlfile, {responseType: 'text'}).subscribe(data => this.copy = data);

    setTimeout (() => {
      //TweenMax.fromTo('.section-content', 1, {y: 440, opacity:0}, {y: 0, opacity:1, ease: Power1.easeOut});
    }, 1000);
  }

}
