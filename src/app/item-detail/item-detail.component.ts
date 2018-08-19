import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../item';
import { ItemsService }  from '../items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemsService.getItem(id)
      .subscribe(hero => this.item = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
