import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
people: Person[] = [];
genderFormControl = new FormControl('');
//Creamos una lista de personajes para filtrar
listaPersonajesFiltrados: Person [] = [];
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.genderFormControl.setValue('male');
    this.peopleService.getPerson().subscribe(result => {
      this.people = result.results;
      //Igualamos la lista de generos filtrados y la lista normal
      this.listaPersonajesFiltrados = this.people;
    })
  }

  doFilter(){
    let genderSelected = this.genderFormControl.value;
    //Si tu genero es el seleccionado entras si no No
    this.listaPersonajesFiltrados = this.people.filter(p => p.gender == genderSelected);
  }

}
