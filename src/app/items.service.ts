import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Item } from './item';
import { ITEMS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    // TODO: send the message _after_ fetching the items
    this.messageService.add('ItemsService: fetched items');
    return of(ITEMS);
  }

  getTopItems(): Observable<Item[]> {
    this.messageService.add('ItemsService: fetched top items');
    return of(ITEMS.slice(1, 5))
  }
}
