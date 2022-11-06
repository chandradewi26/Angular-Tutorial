import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // {{ Interpolation binding syntax }}
  // Below are called properties : they are like variables that can be accessed by HTML
  title = 'Tour of Heroes';
  testingExport = 'NanaMocchy';
}
