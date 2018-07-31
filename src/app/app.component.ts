import { Component, Input } from '@angular/core';
import { ItemModel } from './Models/item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public person: ItemModel;

  catchPerson(person) {
    this.person = person;
  }
}
