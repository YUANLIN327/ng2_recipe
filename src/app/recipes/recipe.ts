import { Ingredient } from '../share/ingredient';
export class Recipe {
  constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) { }
}
