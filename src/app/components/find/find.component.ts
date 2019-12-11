import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  heroes: Heroe[] = [];
  term: string;

  constructor(private _heroesService: HeroesService,
              private activatedRouter: ActivatedRoute,
              public _router: Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      this.term = params['name'];
      this.heroes = this._heroesService.buscarHeroes( params['name'] );
      console.log(this.heroes);
    });
  }

  verHeroe(index: number) {
    this._router.navigate(['heroe', index ]);
  }

}
