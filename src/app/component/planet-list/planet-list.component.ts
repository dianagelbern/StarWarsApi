import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet.interface';
import { PlanetService } from 'src/app/service/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planetList: Planet[] = [];
  
  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe(result => {
      this.planetList = result.results
    });
  }

}
