import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { NgxPaginationModule} from 'ngx-pagination'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegionComponent } from './region/region.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { FilterComponent } from './filter/filter.component';
import { NgxSpinnerModule} from 'ngx-spinner';
import { LanguageComponent } from './language/language.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home/region/:region',component:RegionComponent},
  {path:'name/:name',component:CountryComponent},
  {path:'currency/:code',component:FilterComponent},
  {path:'lang/:code',component:LanguageComponent},
  {path:'search/:id',component:SearchResultComponent},
  {path:'not_found',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegionComponent,
    CountryComponent,
    FilterComponent,
    LanguageComponent,
    SearchComponent,
    SearchResultComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
