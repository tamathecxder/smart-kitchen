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

  constructor(public localStorageService: LocalStorageService) {}

  onNavigate(data: string) {}

  ngOnInit(): void {
    initFlowbite();
  }
}
