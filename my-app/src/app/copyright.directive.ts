import { Directive, ElementRef } from '@angular/core';
import { appSettings } from "./app.config";

@Directive({
  selector: '[appCopyright]'
})

export class CopyrightDirective {
  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl = HTMLElement = el.nativeElement;
    targetEl.classList.add('copyright');
    targetEl.textContent = `${appSettings.title} v.${appSettings.version} - Copyright @${currentYear}
      Beef Erikson Studios, All Rights Reserved.`;
  }
}
