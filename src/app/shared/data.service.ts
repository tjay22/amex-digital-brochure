import { Injectable } from '@angular/core';
import * as Rx from "rxjs";

import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

import { NavigationItem } from '../models/navigation.model';
import { navigationItems } from '../data/navigation';

import { ContentItem } from '../models/content.model';
import { contentItems } from '../data/content';

import { ImageItem } from '../models/image.model';
import { imageItems } from '../data/images';

import { PageTitle } from '../models/page-title.model';
import { pageTitleItems } from '../data/page-titles';
import { stagger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  width;
  height;

  private screenWidth = new Rx.BehaviorSubject<number>(window.innerWidth);
  private screenHeight = new Rx.BehaviorSubject<number>(window.innerHeight);
  private screenOrientation = new Rx.BehaviorSubject<string>(null);
  private state = new Rx.BehaviorSubject<string>(null);
  private sectionState = new Rx.BehaviorSubject<string>('main');
  private prevSectionState = new Rx.BehaviorSubject<string>('main');
  private openingScene = new Rx.BehaviorSubject<boolean>(false);
  private imageLoadedId = new Rx.BehaviorSubject<Number>(1);

  currentScreenWidth = this.screenWidth.asObservable();
  currentScreenHeight = this.screenHeight.asObservable();
  currentScreenOrientation = this.screenOrientation.asObservable();
  currentState = this.state.asObservable();
  currentSectionState = this.sectionState.asObservable();
  prevSectionStateVar = this.prevSectionState.asObservable();
  currentOpeningScene = this.openingScene.asObservable();
  currentImageId = this.imageLoadedId.asObservable();

  xs = 576;
  sm = 768;
  md = 992;
  lg = 1200;

  desktop = true;
  mobile = false;

  constructor(private http: HttpClient) {
    // this.currentScreenWidth.subscribe(value => console.log("screenWidth: "+value));
    // this.currentScreenHeight.subscribe(value => console.log("screenHeight: "+value));
    // this.currentScreenOrientation.subscribe(value => console.log("screenOrientation: "+value));
    // this.currentOpeningScene.subscribe(value => console.log("openingScene: "+value));
  }

  getNavigation(link: string): Observable<NavigationItem> {
    return of(navigationItems.find(content => content.link === link));
  }

  getHTML(id: Number): Observable<ContentItem> {
    return of(contentItems.find(content => content.id === id));
  }

  getImage(id: Number): Observable<ImageItem> {
    return of(imageItems.find(image => image.id === id));
  }

  getPageTitle(id: Number): Observable<PageTitle> {
    return of(pageTitleItems.find(pageTitle => pageTitle.id === id));
  }

  getSublink(id: Number): Observable<NavigationItem> {
    return of(navigationItems.find(content => content.id === id));
  }

  getCurrentState(){
    return this.state;
  }

  getSectionState(){
    return this.sectionState;
  }

  getItemsLength(){
    return navigationItems.length;
  }  

  changeScreenWidth(width: number){
    this.screenWidth.next(width);
  }

  changeScreenHeight(height: number){
    this.screenHeight.next(height);
  }

  changeOrientation(val: string){
    this.screenOrientation.next(val);
  }

  changeCollapse(val: string){
    this.state.next(val);
  }

  changeSectionState(val: string){
    this.sectionState.next(val);
  }

  changePrevSectionState(val: string){
    this.prevSectionState.next(val);
  }

  changeLoadedImageId(val: Number){
    this.imageLoadedId.next(val);
  }

  playOpeningScene(val: boolean){
    this.openingScene.next(val);
  }


}
