import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from '../items.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  topItems: Item[] = [];
 
  constructor(private itemsService: ItemsService) { }
 
  ngOnInit() {
    this.getTopItems();
  }
 
  getTopItems(): void {
    this.itemsService.getTopItems()
      .subscribe(items => this.topItems = items);
  }
}