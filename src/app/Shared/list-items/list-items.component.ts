import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeopleService } from '../../Service/people-service.service'
import { ItemModel } from '../../Models/item-model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Output() personOne: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  public people: ItemModel[] = [];
  public person: ItemModel;

  constructor(private peopleService: PeopleService) {
    this.person = null;
  }

  ngOnInit() {
    this.peopleService.getAll().subscribe((result: ItemModel[]) => {
      this.people = result;
    },
      err => {
        console.log("error");
      });
  }
  selectThis(person: ItemModel)
  {
    this.personOne.emit(person);
    console.log(this.personOne);
  }
}
