import { Component, OnInit } from '@angular/core';

import { navigationTopLevelItems, navigationSecondLevelItems } from './data/navigation';
import { DataService } from './shared/data.service';
import { NavigationItem } from './models/navigation.model';

import { fadeAnimation } from './animations';
import 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Digital Brochure';

  selecteditem: NavigationItem;
  menuitems: NavigationItem[];
  timeline;

  menuTopLevelItems = navigationTopLevelItems;
  menuSecondLevelItems = navigationSecondLevelItems;

  constructor(private _data:DataService){}

  ngOnInit() {
    this.getMenuItems();
  }

  ngAfterViewInit() {
    //this.timeline = new TimelineLite();
  }
 
  onSelect(content: NavigationItem): void {
    this.selecteditem = content;
  }
 
  getMenuItems(): void {
    this._data.getContents()
        .subscribe(content => this.menuitems = content);
  }
}
