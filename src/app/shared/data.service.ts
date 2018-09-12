import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _navMenu:string = '../../assets/data/navigation.json'; 

  constructor(private http: HttpClient) {}

  public getMenuItems(): Observable<any> {
    return this.http.get(this._navMenu);
  }

}
