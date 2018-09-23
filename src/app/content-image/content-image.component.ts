import { Component, OnInit, Input } from '@angular/core';

import { contentAnimation } from '../animations/content-animations';

import { DataService } from '../shared/data.service';

import { TweenMax, TweenLite, TimelineMax, TextPlugin, Linear, Power1, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";


//declare var TweenMax:any;
declare var $: any;

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss'],
  animations: [ contentAnimation ]
})
export class ContentImageComponent implements OnInit {

  @Input() image;
  @Input() headline;
  @Input() state;

  desktop;
  mobile;

  imagefile;
  background;
  bgPosX;
  bgPosY;
  collapsedBgPosX;
  mobileBgPosX;
  headlineText;
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


  constructor(private data:DataService) {
    this.desktop = this.data.desktop;
    this.mobile = this.data.mobile;
  }

  ngOnInit() {
    console.log("state onInit(): "+this.state);
    this.createStyles();
  }

  ngOnChanges() {
    console.log("state onChanges(): "+this.state);
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
    console.log('animation complete');
    this.createStyles();
  }

  animateElements(state: string){

    if(state == 'out'){
      this.headlineAnimation.add(TweenLite.fromTo(this.headlineDiv, 1, {opacity: 1, transform: 'translateX(0px)'}, {opacity: 0, transform: 'translateX(-50px)'}));
      this.headlineAnimation.add(TweenLite.fromTo(this.backgroundDiv, 1, {opacity: 1}, {opacity: 0}));
      setTimeout (() => {
        this.createStyles();
      }, 1000);
    }else if(state == 'in'){
      this.headlineAnimation.add(TweenLite.fromTo(this.headlineDiv, 1, {opacity: 0, transform: 'translateX(-50px)'}, {opacity: 1, transform: 'translateX(0px)'}));
      this.headlineAnimation.add(TweenLite.fromTo(this.backgroundDiv, 1, {opacity: 0}, {opacity: 1}));
    }
    this.headlineAnimation.play();

  }

}
