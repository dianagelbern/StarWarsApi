import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetItemComponent } from './component/planet-item/planet-item.component';
import { PlanetListComponent } from './component/planet-list/planet-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PersonItemComponent } from './component/person-item/person-item.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';
import {MatDividerModule} from '@angular/material/divider';
import { MaterialImportsModule } from './modules/material-import.module';

@NgModule({
  declarations: [
    AppComponent,
    PlanetItemComponent,
    PlanetListComponent,
    PeopleListComponent,
    PersonItemComponent,
    PersonDetailsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    MaterialImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
