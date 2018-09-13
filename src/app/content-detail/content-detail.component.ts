import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { DataService } from '../shared/data.service';

import { NavigationItem } from '../models/navigation.model';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  content: NavigationItem;
  htmlfile: any;

  constructor(

    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location,
    private http: HttpClient

  ) { }

  ngOnInit() {
    //this.getContent();
    //console.log(this.content);

    this.route.paramMap.subscribe((params: ParamMap) => {
      const link = this.route.snapshot.paramMap.get('link');
      this.dataService.getContent(link)
      .subscribe(content => this.content = content);
      console.log(this.content);
      this.getHTML();
    });
  }

  getContent(): void {
    const link = this.route.snapshot.paramMap.get('link');
    this.dataService.getContent(link)
      .subscribe(content => this.content = content);
  }

  getHTML(){
    this.http.get(this.content.htmlfile, {responseType: 'text'}).subscribe(data => this.htmlfile = data);
  }
  

}
