import { Component } from '@angular/core';

@Component({
  template: `  
  <router-outlet name="modal"><router-outlet>
  `
})
export class InnerComponent {
}
