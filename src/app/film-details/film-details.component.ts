import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film;

  constructor(
    public mainService: MainService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      var index = this.route.snapshot.params["id"];
      this.getFilmDetails(index);
  }

// GET UNIC FILM DETAILS

  getFilmDetails(index) {
    this.mainService.filmDetails(index);
    .subscribe((data) => {
        this.film = data;
        this.saveFilmAsSeen(data.title, data);
      });
  }

// SAVE FILM AS SEEN

  saveFilmAsSeen(filmName, filmDetails) {
    this.mainService.savePageAsSeen(filmName, filmDetails);
  }
}
