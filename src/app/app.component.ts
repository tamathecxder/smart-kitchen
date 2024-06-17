import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smart-kitchen';
  loadedFeature: string;

  constructor(private navigationService: NavigationService) {
    this.navigationService.featureSelected.subscribe((path: string) => {
      this.loadedFeature = path;
    });
  }

  ngOnInit(): void {
    this.loadedFeature = this.navigationService.getLoadedFeature();

    initFlowbite();
  }
}
