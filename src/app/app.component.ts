import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';

import { navigationTopLevelItems, navigationSecondLevelItems } from './data/navigation';
import { DataService } from './shared/data.service';
import { NavigationItem } from './models/navigation.model';

import { fadeAnimation, routeSlide, routerAnimation } from './animations/router-animations';
import { contentAnimation } from './animations/content-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerAnimation, contentAnimation ]
})
export class AppComponent implements OnInit {

  title = 'Digital Brochure';
  selecteditem: NavigationItem;
  menuitems: NavigationItem[];
  screenWidth;
  screenHeight;
  screenOrientation;
  desktop = true;
  mobile = false;
  navOpen = false;
  currentNav;
  currentState;
  playOpeningScene = false;

  menuTopLevelItems = navigationTopLevelItems;
  menuSecondLevelItems = navigationSecondLevelItems;

  constructor(private data:DataService){
    this.data.currentScreenWidth.subscribe((value) => this.screenWidth = value );
    this.data.currentScreenHeight.subscribe((value) => this.screenHeight = value );
    this.data.currentScreenOrientation.subscribe((value) => this.screenOrientation = value );
  }

  ngOnInit() {
    this.getScreenSize();
    this.data.currentOpeningScene.subscribe(value => this.playOpeningScene = value);
  }

  onResize(event){
    this.screenWidth = event.target.innerWidth;
    this.screenHeight = event.target.innerHeight;
    this.data.changeScreenWidth(this.screenWidth);
    this.data.changeScreenHeight(this.screenHeight);
    this.getScreenSize();
  }

  getScreenSize(){
    if(this.screenWidth < this.screenHeight){
      this.data.changeOrientation("portrait");
    }else{
      this.data.changeOrientation("landscape");
    }

    if((this.screenOrientation == "landscape" && this.screenHeight < this.data.xs) || (this.screenOrientation == "portrait" && this.screenWidth < this.data.xs)){
      this.desktop = false;
      this.mobile = true;
      this.data.desktop = false;
      this.data.mobile = true;
    }else{
      this.desktop = true;
      this.mobile = false;
      this.data.desktop = true;
      this.data.mobile = false;
    }
  }

  getState(outletRef: RouterOutlet){
    return{
      value: outletRef.activatedRoute.snapshot.params.index
    }
  }

  toggle(item){
    if(this.currentNav != item && this.currentNav){
      this.currentNav.state = "closed";
    }
    if(item.link == 'null'){
      item.state = (item.state == 'closed') ? 'open' : 'closed';
      this.currentNav = item;
      this.currentState = item.state;
    }
  }
}
