import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'node_modules/rxjs';
import { ItemModel } from '../Models/item-model'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  api: string;

  constructor(private http: HttpClient) { 
    this.api = environment.baseUrl + "/employees";
  }

  public getAll(): Observable<any> {
    return this.http.get(this.api).pipe(map((result: ItemModel[]) => {
      return result;
    }));
  }
}
