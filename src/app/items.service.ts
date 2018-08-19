import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }
}
