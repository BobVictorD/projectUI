// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      {{ message }}
    </div>
  `
})
export class activityList {
  message: string = 'Hello world!';
}