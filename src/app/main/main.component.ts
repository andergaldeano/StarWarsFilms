import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  allFilms;
  allCharacters;
  seenFilms;

  filteredFilms: any[];
  films: string[];

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    public mainService: MainService
  ) { }

  ngOnInit() {
      this.mainService.findFilms()
        .subscribe(data => {
         this.allFilms = data.results
         this.filmsName();
        })

      this.mainService.findCharacters()
        .subscribe(data => {
         this.allCharacters = data.results
       })

      this.seenFilms = this.mainService.findSeenPages()
  }

// WATCH A FILM DETAILS

  watchFilm(url){
    var x = url.split('/');
    var index = x[x.length - 2];
    this.router.navigate(['film', index]);
  }

// INPUT

  //RESCUE FILM NAMES FOR INPUT

  filmsName(){
    var filmsName = []
    for(var i=0; i<this.allFilms.length; i++){
      filmsName.push(this.allFilms[i].title);
    }
    this.films=filmsName
  }

  // FILTER FILMS

  filterFilms(event) {
    this.filteredFilms = [];
    for(let i = 0; i < this.films.length; i++) {
        let film = this.films[i];
        if(film.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredFilms.push(film);
        }
    }
  }

// CLEAR SEEN FILMS LIST

  clearList(){
    this.mainService.deleteSeenPages()
    this.seenFilms = this.mainService.findSeenPages()
  }

}
