import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Form Handling';
  titleStyle = {
    textAlign: 'center',
    margin: '1rem',
  }

  constructor(){
  }
}
