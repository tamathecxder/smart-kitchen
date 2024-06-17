import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor() { }

  @HostListener('click') toggleDropdown() {
    let button = document.getElementById('detailDropdownBtn');
    let dropdown = button?.nextElementSibling;

    if (dropdown) {
      dropdown.classList.toggle('hidden');
      dropdown.classList.toggle('block');
    }

    this.isOpen = !this.isOpen;
  }

}
