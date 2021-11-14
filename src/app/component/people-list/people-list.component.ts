import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
people: Person[] = [];
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPerson().subscribe(result => {
      this.people = result.results;
    })
  }

}
