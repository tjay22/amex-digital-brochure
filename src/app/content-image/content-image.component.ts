import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent implements OnInit {

  @Input() image;

  imagefile;
  headline;
  background;
  posX;
  posY;
  currentStyles = {};

  constructor() { }

  ngOnInit() {
    console.log("image: "+this.image.imagefile);
    this.imagefile = this.image.imagefile;
    this.headline = this.image.headline;
    this.background = this.image.background;
    this.posX =  this.image.posX;
    this.posY = this.image.posY;
    this.setCurrentStyles();
  }

  setCurrentStyles(){
    this.currentStyles = {
      'background-image': 'url("' + this.imagefile + '")',
      'background-position': this.posX + ' ' + this.posY,
      'background-size': 'cover',
    };
  }

}
