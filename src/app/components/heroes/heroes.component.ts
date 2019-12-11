import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               public _router: Router) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    this._router.navigate(['heroe', idx ]);
  }

}
