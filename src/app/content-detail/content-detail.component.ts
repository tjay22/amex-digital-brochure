import { Component, OnInit, Input, OnChanges, ViewChild, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { DataService } from '../shared/data.service';

import { fadeAnimation, routeSlide, routerAnimation } from '../animations/router-animations';
import { contentAnimation } from '../animations/content-animations';

import { TweenMax, TimelineLite, Power1, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";

declare var TweenMax:any;

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
  animations: [ routerAnimation ],
  // host: {
  //   '[@animateContent]': 'sectionState',
  //   '(@animateContent.start)': 'animationStart($event)',
  //   '(@animateContent.done)': 'animationEnd($event)'
  // }
})

export class ContentDetailComponent implements OnInit {

  //@HostBinding('@animateContent')

  @Input() content;

  copy = "";
  copyHTML;
  breadcrumb;
  sectionState:string = 'none';

  constructor( private http: HttpClient, private data: DataService ) {
    
  }

  ngOnInit() {
    //console.log("content: "+this.content.htmlfile);
    this.copy = this.content.htmlfile;
    this.getHTML();
  }

  ngOnChanges(){
    this.data.currentSectionState.subscribe((value) => this.sectionState = value);
    this.copy = this.content.htmlfile;
    this.getHTML();    
  }

  ngOnDestroy(){
    //console.log("<<  content-detail ngOnDestroy  >>");
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

  animationStart(event){
    console.log('content-detail animation started and this.sectionState = '+this.sectionState);
  }
  animationEnd(event){
    console.log('******** content-detail animation ended ********');
    this.sectionState = 'none';
  }

}
