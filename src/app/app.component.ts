import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lisa-Portfolio';

  onActivate(event) {
    window.scroll(0,0);
}
}
