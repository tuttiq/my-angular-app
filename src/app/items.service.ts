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
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(ITEMS);
  }
}
