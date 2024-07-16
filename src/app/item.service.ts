import { Injectable } from '@angular/core';

export interface ItemDef {
  id: number;
  title:string;
  description:string;
  img:string;
}
  @Injectable({
    providedIn: 'root'
  })
  export class ItemService {
    private items : ItemDef[] = [
      {
        id: 1,
        title: 'Noteworthy technology acquisitions 2021',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        img: ''
      },
      {
        id: 2,
        title: 'Noteworthy technology acquisitions 2021',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        img: ''
      },
      {
        id: 3,
        title: 'Noteworthy technology acquisitions 2021',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        img: ''
      },
      {
        id: 4,
        title: 'Noteworthy technology acquisitions 2021',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        img: ''
      },
      // Ajoutez plus d'éléments ici
    ];

    constructor() {
    }

    getItems() {
      return this.items;
    }
  }

