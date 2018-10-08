import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

import { DataService } from '../shared/data.service';

import { NavigationItem } from '../models/navigation.model';
import { ContentItem } from '../models/content.model';

import { fadeAnimation, routeSlide, routerAnimation } from '../animations/router-animations';
import { pageResizeAnimation } from '../animations/page-animations';
import { contentAnimation } from '../animations/content-animations';

//@HostBinding('@animateContentPanels')
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [ pageResizeAnimation, routerAnimation ],
  host: {
    '[@animateContentPanels]': 'sectionState',
    '(@animateContentPanels.start)': 'animationStart($event)',
    '(@animateContentPanels.done)': 'animationEnd($event)'
  }
})
export class ContentComponent implements OnInit {

  navigation: NavigationItem;
  content: ContentItem;
  image: any;
  prevImageId;
  headline: any;
  contentID: number;
  imageID: Number;
  pageTitleID: Number;
  isCollapsed = false;
  isMainSection = true;
  currentState = 'expanded';
  sectionState:string = 'none';
  desktop;
  mobile;
  sublinks;
  previousSublink;
  nextSublink;
  previousID;
  nextID;
  previousLink;
  previousTitle;
  nextLink;
  nextTitle;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private data: DataService,
    private http: HttpClient

  ){
    this.desktop = this.data.desktop;
    this.mobile = this.data.mobile;
    this.data.currentSectionState.subscribe((value) => this.sectionState = value);
    router.events.subscribe( (event: Event) => {
      if(event instanceof NavigationStart){
        //console.log("Navigation Start");
      }
      if(event instanceof NavigationEnd){
        //console.log("Navigation End");
      }
      if(event instanceof NavigationError){
        //console.log("Error: "+event.error);
      }
    });
  }

  ngOnInit() {

    const link = this.router.url.replace('/', '');
    console.log("link: "+link);

    this.data.currentImageId.subscribe(value => this.prevImageId = value);

    this.data.getNavigation(link).subscribe(content => this.navigation = content);

    this.data.currentState.subscribe(value => this.currentState = value);
    this.currentState == 'collapsed' ? this.isCollapsed = true : this.isCollapsed = false;
    
    if(this.navigation){
      //console.log("this.prevImageId: "+this.prevImageId);
      //console.log("this.navigaiton.imageId: "+this.navigation.imageID);
      if(this.prevImageId == this.navigation.imageID){
        this.data.changeSectionState('subsection');
        //console.log("loading subsection");
        this.isMainSection = false;
      }else{
        this.data.changeSectionState('main');
        //console.log("loading main section")
        this.isMainSection = true;
      }

      this.contentID = this.navigation.id;
      this.imageID = this.navigation.imageID;
      this.pageTitleID = this.navigation.pageTitleID;
      this.getCopy();
      this.getImage();
      this.getPageTitle();
      this.getPreviousLink();
      this.getNextLink();
      this.data.changeLoadedImageId(this.imageID);
    }else{
      this.router.navigate(['/page-not-found']);
    }

    // this.route.paramMap.subscribe((params: ParamMap) => {

    //   this.data.currentImageId.subscribe(value => this.prevImageId = value);

    //   const link = this.route.snapshot.paramMap.get('link');
    //   console.log("link: "+link);
    //   this.data.getNavigation(link).subscribe(content => this.navigation = content);

    //   this.data.currentState.subscribe(value => this.currentState = value);
    //   this.currentState == 'collapsed' ? this.isCollapsed = true : this.isCollapsed = false;
      
    //   if(this.navigation){
    //     //console.log("this.prevImageId: "+this.prevImageId);
    //     //console.log("this.navigaiton.imageId: "+this.navigation.imageID);
    //     if(this.prevImageId == this.navigation.imageID){
    //       this.data.changeSectionState('subsection');
    //       //console.log("loading subsection");
    //       this.isMainSection = false;
    //     }else{
    //       this.data.changeSectionState('main');
    //       //console.log("loading main section")
    //       this.isMainSection = true;
    //     }

    //     this.contentID = this.navigation.id;
    //     this.imageID = this.navigation.imageID;
    //     this.pageTitleID = this.navigation.pageTitleID;
    //     this.getCopy();
    //     this.getImage();
    //     this.getPageTitle();
    //     this.getPreviousLink();
    //     this.getNextLink();
    //     this.data.changeLoadedImageId(this.imageID);
    //   }else{
    //     this.router.navigate(['/page-not-found']);
    //   }
    // });
    // this.data.getSectionState().subscribe(content => this.currentSectionState = content);
    // console.log("this.currentSectionState: "+this.currentSectionState);
  }

  getCopy(){
    this.data.getHTML(this.contentID).subscribe(content => this.content = content);
  }

  getImage(){
    this.data.getImage(this.imageID).subscribe(imagedata => this.image = imagedata);
  }

  getPageTitle(){
    this.data.getPageTitle(this.pageTitleID).subscribe(pageTitle => this.headline = pageTitle);
  }

  getPreviousLink(){
    this.previousID = this.contentID-1;
    //console.log("previousID: "+this.previousID);
    
    if(this.previousID > 0 && this.previousID < this.data.getItemsLength()){
      this.data.getSublink(this.previousID).subscribe(content => this.previousSublink = content);
      this.previousLink = this.previousSublink.link;
      this.previousTitle = this.previousSublink.name;
      //console.log("previousTitle: "+this.previousTitle);
    }else{
      this.previousLink = this.previousTitle = null;
    }
  }

  getNextLink(){
    this.nextID = this.contentID+1;
    //console.log("nextID: "+this.nextID);
    
    if(this.nextID > 0 && this.nextID < this.data.getItemsLength()){
      this.data.getSublink(this.nextID).subscribe(content => this.nextSublink = content);
      this.nextLink = this.nextSublink.link;
      this.nextTitle = this.nextSublink.name;
      //console.log("nextTitle: "+this.nextTitle);
    }else{
      this.nextLink = this.nextTitle = null;
    }
    
  }

  animationStart(event){
    console.log('child animation started');
  }
  animationEnd(event){
    console.log('child animation ended');
    this.sectionState = 'none';
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsed ? this.currentState = 'collapsed' : this.currentState = 'expanded';
    this.data.changeCollapse(this.currentState);
  }

}
