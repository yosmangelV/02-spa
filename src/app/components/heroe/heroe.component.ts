import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor( private activatedRouter: ActivatedRoute,
               private _heroeService: HeroesService ) {
    this.activatedRouter.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe( params['id'] );
    });
  }

  ngOnInit() {
  }

}
