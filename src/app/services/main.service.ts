import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs';
import {Http} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()
export class MainService {
  url;

  constructor(
    private http: Http,
    private localStorage: LocalStorageService
  ) { }


// GET FILMS LIST

  public findFilms(){
     return this.http.get(`https://swapi.co/api/films/`)
      .map((res) => res.json());
  }

// GET CHARACTERS LIST

  public findCharacters(){
     return this.http.get(`https://swapi.co/api/people/`)
      .map((res) => res.json());
  }

// URL SHARE AND GET

  public getUrl() {
    return this.url
  }

  public shareUrl(url) {
    this.url = url
  }

// GET SPECIFIC FILM DETAILS

  public filmDetails(index) {
    return this.http.get(`https://swapi.co/api/films/${index}`)
    .map((res) => res.json());
  }

// SAVE PAGE AS SEEN

  public savePageAsSeen(name, details) {
    localStorage.setItem(name, JSON.stringify(details))
  }

// GET SEEN PAGES

  public findSeenPages(){
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
     return values
  }

// DELETE ALL SEEN PAGES

  public deleteSeenPages() {
      localStorage.clear();
     }
}
