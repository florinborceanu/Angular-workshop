import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ItemModel } from '../../Models/item-model';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  @Input() person: ItemModel;

  constructor() {
    this.person = new ItemModel();
   }

  ngOnInit() {
    console.log(this.person);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.person);
  }
}
