import { Component, OnInit } from '@angular/core';

import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

	recipes: Recipes[] = [
		new Recipes('Test Recipe', 'This is simply Test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
		new Recipes('Test Recipe', 'This is simply Test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
	];

	constructor() { }

	ngOnInit() {
	}

}
