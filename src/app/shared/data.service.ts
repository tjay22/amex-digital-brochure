import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _navMenu:string = './assets/data/navigation.json';
  menuItems = this.getMenuItems();

  constructor(private http: HttpClient) {}

  public getMenuItems(): Observable<any> {
    return this.http.get(this._navMenu);
  }

  getContent(id: number): Observable<any> {
    return of(this.menuItems.find(content => this.menuItems.id === content));
  }

}
