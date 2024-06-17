import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  loadedFeature: string = 'recipe';

  navLinks = [
    { path: 'recipe', name: 'Recipes' },
    { path: 'shopping-list', name: 'Shopping List' }
  ];

  featureSelected = new EventEmitter<string>();

  constructor() { }

  navigate(path: string) {
    this.featureSelected.emit(path);
  }

  getNavLinks() {
    return this.navLinks.slice();
  }

  getLoadedFeature() {
    return this.loadedFeature;
  }
}
