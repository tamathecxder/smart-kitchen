import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smart-kitchen';
  loadedFeature: string = 'recipe';

  constructor(public localStorageService: LocalStorageService) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
