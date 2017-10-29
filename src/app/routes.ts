import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FilmDetailsComponent} from './film-details/film-details.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'film/:id', component: FilmDetailsComponent},
    { path: '**', redirectTo: '' }
];
