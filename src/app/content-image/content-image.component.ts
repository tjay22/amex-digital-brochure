import { Component, OnInit, Input, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';

import { routerAnimation } from '../animations/router-animations';

import { DataService } from '../shared/data.service';

import { TweenMax, TweenLite, TimelineMax, TextPlugin, Linear, Power1, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";


declare var TweenMax:any;
declare var $: any;

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss'],
  animations: [ routerAnimation ]
})
export class ContentImageComponent implements OnInit {

  //@ViewChild('headline') headlineBox: ElementRef;

  //@HostBinding('@animateContent')

  @Input() image
  @Input() state

  desktop;
  mobile;
  sectionState:string = 'none';

  imagefile;
  background;
  bgPosX;
  bgPosY;
  collapsedBgPosX;
  mobileBgPosX;

  currentBackgroundStyles = {};
  currentImageStyles = {};


  constructor(private data:DataService, private router: Router) {
    this.desktop = this.data.desktop;
    this.mobile = this.data.mobile;
    
    router.events.subscribe(event => {
      // if (event instanceof NavigationStart) {
        
      // }
      // if (event instanceof NavigationEnd) {
      //   this.animateElements('in');
      //   this.headlineText = '';
      //   console.log("this.headlineText: "+this.headlineText);
      // }
    })
  }

  ngOnInit() {
    //console.log("state onInit(): "+this.state);
    //this.headlineText = this.headline.headline;
    this.createStyles();
  }

  ngOnChanges() {
    //console.log("state onChanges(): "+this.state);
    //this.headlineText = this.headline.headline;    
    this.data.currentSectionState.subscribe((value) => this.sectionState = value);
    console.log("content-image ngOnChanges and this.sectionState = "+this.sectionState);
    this.createStyles();
    //this.animateElements('out');
  }

  createStyles(){
    // console.log("=======================");
    // console.log("image: "+this.image );
    // console.log("headline: "+this.headline);
    // console.log("state: "+this.state);
    // console.log("=======================");

    this.imagefile = this.image.imagefile;
    this.background = this.image.background;
    this.bgPosY = this.image.bgPosY ? this.image.bgPosY : '0%';
    if(this.desktop){
      if(this.state == "expanded"){
        this.bgPosX =  this.image.bgPosX ? this.image.bgPosX : '-30%';
      }else if(this.state == "collapsed"){
        this.bgPosX =  this.image.collapsedBgPosX ? this.image.collapsedBgPosX : '-30%';
      }
    }
    if(this.mobile){
      this.bgPosX =  this.image.mobileBgPosX ? this.image.mobileBgPosX : '50%';
    }
    this.setCurrentStyles();
  }

  setCurrentStyles(){
    this.currentBackgroundStyles = {
      'background-image': 'url("' + this.imagefile + '")',
      'background-position': this.bgPosX + ' ' + this.bgPosY,
      'background-size': 'cover'
    };

    this.currentImageStyles = {
      'transform': 'translate(' + this.bgPosX + ', ' + this.bgPosY + ')'
    };
    
  }

  animationStart(event){
    console.log('content-image animation started and this.sectionState = '+this.sectionState);
  }
  animationEnd(event){
    console.log('--------- content-image animation ended ----------');
    this.sectionState = 'none';
  }

}
