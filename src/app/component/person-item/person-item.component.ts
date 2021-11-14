import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/people.interface';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  
@Input() person!: Person;
  constructor() { }

  ngOnInit(): void {
  }

  getPeopleId(url: string | undefined): string {
    if(url) {
      let splitArray = url.split("/");
      return splitArray[5];
    } else {
      return '';
    }
  }
 
  
}
