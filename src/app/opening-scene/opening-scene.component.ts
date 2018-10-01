import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-opening-scene',
  templateUrl: './opening-scene.component.html',
  styleUrls: ['./opening-scene.component.scss']
})
export class OpeningSceneComponent implements OnInit {

  playOpeningScene;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentOpeningScene.subscribe(value => this.playOpeningScene = value);
  }

}
