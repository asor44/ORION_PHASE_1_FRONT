import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {ItemDef, ItemService} from '../../item.service';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "../pages/header/header.component";
import {AppModule} from "../../app.module";

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
    standalone: false
})
export class ItemListComponent implements OnInit {
  items = [];
  currentPage = 1;
  itemsPerPage = 5;
  pagedItems :ItemDef[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.items = this.itemService.getItems();
    this.setPage(this.currentPage);
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.items.length - 1);
    this.pagedItems = this.items.slice(startIndex, endIndex + 1);
  }

  get totalPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }
}
