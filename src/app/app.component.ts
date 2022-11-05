import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// {{ Interpolation binding syntax }}
// Below are like variables that can be accessed by HTML
export class AppComponent {
  title = 'Tour of Heroes';
  testingExport = 'NanaMocchy';
}
