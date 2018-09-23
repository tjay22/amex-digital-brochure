import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

import { DataService } from '../shared/data.service';

import { NavigationItem } from '../models/navigation.model';
import { ContentItem } from '../models/content.model';

import { pageResizeAnimation } from '../animations/page-animations';
import { contentAnimation } from '../animations/content-animations';

@HostBinding('@animateImagePanel')
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [ pageResizeAnimation, contentAnimation ],
  host: {
    '[@animateImagePanel]': ''
  }
})
export class ContentComponent implements OnInit {

  navigation: NavigationItem;
  content: ContentItem;
  image: any;
  headline: any;
  contentID: Number;
  imageID: Number;
  pageTitleID: Number;
  isCollapsed = false;
  currentState = 'expanded';
  desktop;
  mobile;

  constructor(

    private pageNotFound: Router,
    private route: ActivatedRoute,
    private data: DataService,
    private http: HttpClient

  ){
    this.desktop = this.data.desktop;
    this.mobile = this.data.mobile;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {

      const link = this.route.snapshot.paramMap.get('link');
      this.data.getNavigation(link).subscribe(content => this.navigation = content);

      this.data.currentState.subscribe(value => this.currentState = value);
      this.currentState == 'collapsed' ? this.isCollapsed = true : this.isCollapsed = false;
      
      if(this.navigation){
        this.contentID = this.navigation.id;
        this.imageID = this.navigation.imageID;
        this.pageTitleID = this.navigation.pageTitleID;
        this.getCopy();
        this.getImage();
        this.getPageTitle();
      }else{
        this.pageNotFound.navigate(['/page-not-found']);
      }
    });
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

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsed ? this.currentState = 'collapsed' : this.currentState = 'expanded';
    this.data.changeCollapse(this.currentState);
  }

}
