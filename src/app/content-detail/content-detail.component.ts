import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  content;

  constructor(

    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location

  ) { }

  ngOnInit() {
    this.getContent();
  }

  getContent(){
    const id = +this.route.snapshot.paramMap.get('link');
    this.dataService.getContent(id)
      .subscribe(content => this.content = content);
  }
  

}
