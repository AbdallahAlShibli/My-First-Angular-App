import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'The Recipe Name',
      'The Recipe Description Details',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'The Recipe Name',
      'The Recipe Description Details',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'The Recipe Name',
      'The Recipe Description Details',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'The Recipe Name',
      'The Recipe Description Details',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505'
    ),
  ];

  constructor() {}
  ngOnInit() {}
}
