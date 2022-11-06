import { Component, OnInit } from '@angular/core';

import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes', //The component's CSS element selector.
  templateUrl: './heroes.component.html', //The location of the component's template file
  styleUrls: ['./heroes.component.scss'], //The location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  //********PROPERTIES********
  selectedHero?: Hero;
  heroes: Hero[] = [];

  //Add a private heroService parameter of type HeroService to the constructor.
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  //********ngOnInit()********
  //The ngOnInit() is a lifecycle hook.
  ngOnInit(): void {
    this.getHeroes();
  }

  //********METHODS********
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  //Call data from service
  getHeroes(): void {
    //Previous method
    //this.heroes = this.heroService.getHeroes();
    //The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.

    //New method using subscribe / observable
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    //The new version waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    //This asynchronous approach works when the HeroService requests heroes from the server.
  }
}
