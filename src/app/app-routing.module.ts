import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';

const routes: Routes = [

  {path: 'people',  component: PeopleListComponent},
  {path: 'people/personDetails/:id',  component: PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
