import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilindexComponent } from './accueilindex/accueilindex.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailEcoleComponent } from './detail-ecole/detail-ecole.component';

 const appRoutes: Routes = [
     { path: 'accueil', component: AccueilComponent},
     { path: 'accueil/:id/:longitude/:latitude', component: DetailEcoleComponent},
     { path: '', component: AccueilComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AccueilindexComponent,
    DetailEcoleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
