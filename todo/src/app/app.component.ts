import { Component } from '@angular/core';
import { Item } from './item';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  styles: ['h1 { color: red; }'],
})

export class AppComponent {
  title = 'To do App';

  filter: 'all' | 'active'| 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];



  get items() {
    if (this.filter == 'all') {
      return this.allItems;
    }
    if(this.filter=="done")
    {
      return this.allItems.filter(item=>item.done==true);
    }
    if(this.filter=="active")
      {
        return this.allItems.filter(item=>item.done==false);
      }
    return undefined;
  }

  addItem(description: string) {
    this.allItems.unshift({ description, done: false });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
 
}

