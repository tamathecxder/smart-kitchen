import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navLinks: any[];
  activeClasses = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
  inactiveClasses = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  loadedFeature: string;

  constructor(private navigationService: NavigationService) {
    this.navLinks = this.navigationService.getNavLinks();
    this.loadedFeature = this.navigationService.getLoadedFeature();
  }

  onSelect(feature: string) {
    this.navigationService.navigate(feature);

    this.loadedFeature = feature;
  }
}
