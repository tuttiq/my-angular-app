import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  selectedItem: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems()
      .subscribe(items => this.items = items);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
