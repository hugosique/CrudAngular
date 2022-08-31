import { IHeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<IHeaderData>({
    title: 'Ínicio',
    icon: 'home',
    routeUrl: '',
  })

  constructor() { }

  get headerData() {
    return this._headerData.value
  }

  set headerData(headerData: IHeaderData) {
    this._headerData.next(headerData)
  }
}
