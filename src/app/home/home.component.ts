import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesFacade } from '../heroes/heroes.facade';
import { Hero } from '../heroes/models/hero.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  budget = 10000;
  heroes$: Observable<Hero[]>;

  constructor(private heroesFacade: HeroesFacade) {}

  ngOnInit(): void {
    this.heroes$ = this.heroesFacade.heroes$;
    this.heroesFacade.loadHeroes();
  }
}
