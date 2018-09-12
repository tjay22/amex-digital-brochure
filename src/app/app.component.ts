import { Component, OnInit } from '@angular/core';

import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Digital Brochure';

  public menuItems = [];

  constructor(private _data:DataService){}

  ngOnInit(){
    this._data.getMenuItems()
      .subscribe(data => this.menuItems = data);
  }
}
