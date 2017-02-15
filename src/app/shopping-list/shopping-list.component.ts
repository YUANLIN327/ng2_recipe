import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../share/ingredient';
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[];
  constructor() { }

  ngOnInit() {
  }

}
