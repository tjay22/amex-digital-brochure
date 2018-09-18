import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

import { DataService } from '../shared/data.service';

import { NavigationItem } from '../models/navigation.model';
import { ContentItem } from '../models/content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  navigation: NavigationItem;
  content: ContentItem;
  image:any;
  contentID: Number;

  constructor(

    private route: ActivatedRoute,
    private dataService: DataService,
    private http: HttpClient

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const link = this.route.snapshot.paramMap.get('link');
      this.dataService.getNavigation(link).subscribe(content => this.navigation = content);
      this.contentID = this.navigation.id;
      console.log(this.navigation);
      this.getCopy();
      this.getImage();
    });
  }

  getCopy(){
    this.dataService.getHTML(this.contentID).subscribe(content => this.content = content);
  }

  getImage(){
    this.dataService.getImage(this.contentID).subscribe(imagedata => this.image = imagedata);
  }

}
