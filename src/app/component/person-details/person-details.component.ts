import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
person!: Person;
personId!: number;
  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.personId = params['id'];
      this.peopleService.getPersonDetail(this.personId).subscribe(result => {
        this.person = result;
      });
    })
  }

}
