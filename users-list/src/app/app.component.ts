import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список користувачів. ';
  typesOfShoes: string[] = ['Ivan','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
