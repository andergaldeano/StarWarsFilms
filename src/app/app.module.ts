import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import {routes} from './routes';
import { LocalStorageModule } from 'angular-2-local-storage';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import {MainService} from './services/main.service';

// PIPE
import { FilterPipe } from './pipes/filter.pipe';


//PRIME NG
import { ButtonModule } from 'primeng/components/button/button';
import {CarouselModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilmDetailsComponent,
    FilterPipe,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CarouselModule,
    ButtonModule,
    AutoCompleteModule,
    AccordionModule,
    SharedModule,   
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LocalStorageModule.withConfig({
           prefix: 'my-app',
           storageType: 'localStorage'
       })
  ],
  providers: [MainService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
