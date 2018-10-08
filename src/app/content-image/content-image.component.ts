import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';

import { fadeAnimation, routeSlide, routerAnimation } from '../animations/router-animations';
import { contentAnimation } from '../animations/content-animations';

import { DataService } from '../shared/data.service';

import { TweenMax, TweenLite, TimelineMax, TextPlugin, Linear, Power1, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";


declare var TweenMax:any;
declare var $: any;

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss'],
  animations: [ routerAnimation ],
  host: {
    '[@animateHeadline]': 'sectionState',
    '(@animateHeadline.start)': 'animationStart($event)',
    '(@animateHeadline.done)': 'animationEnd($event)'
  }
})
export class ContentImageComponent implements OnInit {

  @ViewChild('headline') headlineBox: ElementRef;

  @Input() image;
  @Input() headline;
  @Input() state;

  desktop;
  mobile;
  sectionState:string = 'none';

  imagefile;
  background;
  bgPosX;
  bgPosY;
  collapsedBgPosX;
  mobileBgPosX;
  headlineText = "";
  hlPosX;
  hlPosY;
  hlColor;
  hlFontSize;
  hlWidth;

  currentBackgroundStyles = {};
  currentImageStyles = {};
  currentHeadlineStyles = {};

  headlineAnimation = new TimelineMax();
  headlineDiv = $('.section-headline');
  backgroundDiv = $('.section-image');


  constructor(private data:DataService, private router: Router) {
    this.desktop = this.data.desktop;
    this.mobile = this.data.mobile;
    this.data.currentSectionState.subscribe((value) => this.sectionState = value);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('content-image NavigationEnd');
        this.sectionState = 'none';
      }
      // if (event instanceof NavigationEnd) {
      //   this.animateElements('in');
      //   this.headlineText = '';
      //   console.log("this.headlineText: "+this.headlineText);
      // }
    })
  }

  ngOnInit() {
    //console.log("state onInit(): "+this.state);
    this.headlineText = this.headline.headline;
    this.createStyles();
  }

  ngOnChanges() {
    //console.log("state onChanges(): "+this.state);
    this.headlineText = this.headline.headline;    
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
    this.headlineText = this.headline.headline;
    if(this.desktop){
      if(this.state == "expanded"){
        this.bgPosX =  this.image.bgPosX ? this.image.bgPosX : '-30%';
        this.hlPosX = this.headline.hlPosX ? this.headline.hlPosX : '3vw';
        this.hlPosY = this.headline.hlPosY ? this.headline.hlPosY : '50vh';
        this.hlColor = this.headline.hlColor ? this.headline.hlColor : '#ffffff';
        this.hlFontSize = this.headline.hlFontSize ? this.headline.hlFontSize : '2.5rem';
        this.hlWidth = this.headline.hlWidth ? this.headline.hlWidth : '30vw';
      }else if(this.state == "collapsed"){
        this.bgPosX =  this.image.collapsedBgPosX ? this.image.collapsedBgPosX : '-30%';
        this.hlPosX = this.headline.collapsedHLPosX ? this.headline.collapsedHLPosX : '2vw';
        this.hlPosY = this.headline.collapsedHLPosY ? this.headline.collapsedHLPosY : '60vh';
        this.hlColor = this.headline.collapsedHLColor ? this.headline.collapsedHLColor : '#ffffff';
        this.hlFontSize = this.headline.collapsedHLFontSize ? this.headline.collapsedHLFontSize : '2rem';
        this.hlWidth = this.headline.collapsedHLWidth ? this.headline.collapsedHLWidth : '20vw';
      }
    }
    if(this.mobile){
      this.bgPosX =  this.image.mobileBgPosX ? this.image.mobileBgPosX : '50%';
      this.hlPosX = this.headline.mobileHLPosX ? this.headline.mobileHLPosX : '5vw';
      this.hlPosY = this.headline.mobileHLPosY ? this.headline.mobileHLPosY : '60vh';
      this.hlColor = this.headline.mobileHLColor ? this.headline.mobileHLColor : '#ffffff';
      this.hlFontSize = this.headline.mobileHLFontSize ? this.headline.mobileHLFontSize : '2rem';
      this.hlWidth = this.headline.mobileHLWidth ? this.headline.mobileHLWidth : '90vw';
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

    this.currentHeadlineStyles = {
      'color': this.hlColor,
      'margin': this.hlPosX,
      'top': this.hlPosY,
      //'transform': 'translateY(' + this.hlPosY + ')',
      'font-size': this.hlFontSize,
      'max-width': this.hlWidth
    }
    //this.animateElements('in');
  }

  checkAnimation(){
    this.createStyles();
  }

  animateElements(state: string){

    if(state == 'out'){
      this.headlineAnimation.add(TweenMax.fromTo(this.headlineBox.nativeElement, 1, {opacity: 1, transform: 'translateX(0px)'}, {opacity: 0, transform: 'translateX(-100px)'}));
      //this.headlineAnimation.add(TweenLite.to(this.headlineBox.nativeElement, 1, {text:{value:this.headlineText, oldClass:"class1", newClass:"class2", delimiter:" "}}));
      //this.headlineAnimation.add(TweenMax.fromTo(this.backgroundDiv, 1, {opacity: 1}, {opacity: 0}));
      // setTimeout (() => {
      //   this.createStyles();
      // }, 1000);
    }else if(state == 'in'){
      //this.headlineAnimation.add(TweenLite.to(this.headlineBox.nativeElement, 1, {text:{value:this.headlineText, oldClass:"class1", newClass:"class2", delimiter:" "}}));
      this.headlineAnimation.add(TweenMax.fromTo(this.headlineBox.nativeElement, 1, {opacity: 0, transform: 'translateX(-100px)'}, {opacity: 1, transform: 'translateX(0px)'}));
      //this.headlineAnimation.add(TweenMax.fromTo(this.backgroundDiv, 1, {opacity: 0}, {opacity: 1}));
    }
    this.headlineAnimation.play();

  }

  animationStart(event){
    console.log('content-image animation started and this.sectionState = '+this.sectionState);
  }
  animationEnd(event){
    console.log('content-image animation ended');
    this.sectionState = 'none';
  }

}
