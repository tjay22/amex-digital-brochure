import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { routerAnimation } from '../animations/router-animations';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-content-headline',
  templateUrl: './content-headline.component.html',
  styleUrls: ['./content-headline.component.scss'],
  animations: [ routerAnimation ]
})
export class ContentHeadlineComponent implements OnInit {

  @Input() headline
  @Input() state

  desktop;
  mobile;
  sectionState:string = 'none';

  headlineText = "";
  hlPosX;
  hlPosY;
  hlColor;
  hlFontSize;
  hlWidth;

  currentHeadlineStyles = {};

  constructor(private data:DataService, private router: Router) {
    this.desktop = this.data.desktop;
    this.mobile = this.data.mobile;
    
    router.events.subscribe(event => {
      
    })
  }

  ngOnInit() {
    this.createStyles();
  }

  ngOnChanges() {
    this.data.currentSectionState.subscribe((value) => this.sectionState = value);
    this.createStyles();
  }

  createStyles(){

    this.headlineText = this.headline.headline;
    if(this.desktop){
      if(this.state == "expanded"){
        this.hlPosX = this.headline.hlPosX ? this.headline.hlPosX : '3vw';
        this.hlPosY = this.headline.hlPosY ? this.headline.hlPosY : '50vh';
        this.hlColor = this.headline.hlColor ? this.headline.hlColor : '#ffffff';
        this.hlFontSize = this.headline.hlFontSize ? this.headline.hlFontSize : '2.5rem';
        this.hlWidth = this.headline.hlWidth ? this.headline.hlWidth : '30vw';
      }else if(this.state == "collapsed"){
        this.hlPosX = this.headline.collapsedHLPosX ? this.headline.collapsedHLPosX : '2vw';
        this.hlPosY = this.headline.collapsedHLPosY ? this.headline.collapsedHLPosY : '60vh';
        this.hlColor = this.headline.collapsedHLColor ? this.headline.collapsedHLColor : '#ffffff';
        this.hlFontSize = this.headline.collapsedHLFontSize ? this.headline.collapsedHLFontSize : '2rem';
        this.hlWidth = this.headline.collapsedHLWidth ? this.headline.collapsedHLWidth : '20vw';
      }
    }
    if(this.mobile){
      this.hlPosX = this.headline.mobileHLPosX ? this.headline.mobileHLPosX : '5vw';
      this.hlPosY = this.headline.mobileHLPosY ? this.headline.mobileHLPosY : '60vh';
      this.hlColor = this.headline.mobileHLColor ? this.headline.mobileHLColor : '#ffffff';
      this.hlFontSize = this.headline.mobileHLFontSize ? this.headline.mobileHLFontSize : '2rem';
      this.hlWidth = this.headline.mobileHLWidth ? this.headline.mobileHLWidth : '90vw';
    }
    this.setCurrentStyles();
  }

  setCurrentStyles(){

    this.currentHeadlineStyles = {
      'color': this.hlColor,
      'margin': this.hlPosX,
      'top': this.hlPosY,
      'font-size': this.hlFontSize,
      'max-width': this.hlWidth
    }
  }

}
