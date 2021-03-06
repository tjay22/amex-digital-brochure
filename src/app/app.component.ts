import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';

import { navigationTopLevelItems, navigationSecondLevelItems } from './data/navigation';
import { DataService } from './shared/data.service';
import { NavigationItem } from './models/navigation.model';

import { routerAnimation } from './animations/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerAnimation ]
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
  currentState = 'expanded';
  currentNavId:Number = 1;
  sectionState:string = 'none';
  prevSectionState;
  playOpeningScene = false;

  navigation: NavigationItem;
  image: any;

  menuTopLevelItems = navigationTopLevelItems;
  menuSecondLevelItems = navigationSecondLevelItems;

  constructor(private data:DataService, private router: Router){
    this.data.currentScreenWidth.subscribe((value) => this.screenWidth = value );
    this.data.currentScreenHeight.subscribe((value) => this.screenHeight = value );
    this.data.currentScreenOrientation.subscribe((value) => this.screenOrientation = value );
    this.data.currentOpeningScene.subscribe((value) => this.playOpeningScene = value);
    this.data.currentState.subscribe(value => this.currentState = value);
    this.data.currentSectionState.subscribe((value) => this.sectionState = value);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("------------------  LINK CLICKED!  -------------------");
        this.ngOnInit();
      }
    })
  }

  ngOnInit() {
    this.getScreenSize();
    this.data.currentSectionState.subscribe((value) => this.sectionState = value);
    this.data.currentState.subscribe(value => this.currentState = value);

    console.log("this.sectionState: "+this.sectionState+", this.currentState: "+this.currentState);
    
    const link = this.router.url.replace('/', '');

    this.data.getNavigation(link).subscribe(content => this.navigation = content);
    if(this.navigation){
      this.currentNavId = this.navigation.imageID;
      console.log('currentNavId: '+this.currentNavId);
      this.getImage();
    }
  }

  ngOnChanges(){
    //this.data.currentNavigationId.subscribe((value) => this.currentNavId = value);
    console.log('currentNavId: '+this.currentNavId);
    if(this.navigation){
      this.getImage();
    }
  }

  getImage(){
    this.data.getImage(this.currentNavId).subscribe(imagedata => this.image = imagedata);
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

  // toggle(item){
  //   if(this.currentNav != item && this.currentNav){
  //     this.currentNav.state = "closed";
  //   }
  //   if(item.link == 'null'){
  //     item.state = (item.state == 'closed') ? 'open' : 'closed';
  //     this.currentNav = item;
  //     this.currentState = item.state;
  //   }
  // }

  animationStart(event){
    //console.log('parent animation started');
  }
  animationEnd(event){
    //console.log('parent animation ended');
    this.sectionState = 'none';
  }

  getSectionState(routerOutlet){
    
    if(routerOutlet.isActivated){

      //console.log(this.data.getSectionState().value)
      return this.data.getSectionState().value;

      // const { path } = routerOutlet.activatedRoute.routeConfig
      // const isSame = this.previousPath === path
      // const isBackward = this.previousPath.startsWith(path)
      // const isForward = path.startsWith(this.previousPath)

      // if (isSame) {
      //   this.transitionName = 'none'
      // } else if (isBackward && isForward) {
      //   this.transitionName = 'main'
      // } else if (isBackward) {
      //   this.transitionName = 'subsection'
      // } else if (isForward) {
      //   this.transitionName = 'main'
      // }

      // this.counter++;

      // this.previousPath = path
      // console.log("this.transitionName: "+this.transitionName);
      // this.data.currentSectionState.subscribe((value) => this.sectionState = value );
      // console.log("routerOutlet: "+routerOutlet.activatedRoute);
      // console.log("this.sectionState: "+this.sectionState);
      // return 'main';
      
    }
    
  }
}
