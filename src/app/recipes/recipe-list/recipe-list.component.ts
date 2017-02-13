import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.haocai777.com/Article/UploadFiles2012c/201501/2015010709343083.jpg');
  constructor() {}

  ngOnInit() {
  }

}
