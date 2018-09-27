import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url1 = "https://restcountries.eu/rest/v2/region/"
  private url2 = "https://restcountries.eu/rest/v2/name/"
  private url3 = "https://restcountries.eu/rest/v2/currency/"
  private url4 = "https://restcountries.eu/rest/v2/lang/"

  constructor(private http:HttpClient) { }

  public getRegion(region):Observable<any>{
    return this.http.get(this.url1+region);
  }

  public getCountry(name):Observable<any>{
    return this.http.get(this.url2+name);
  }

  public getCountryByCurrency(name):Observable<any>{
    return this.http.get(this.url3+name);
  }

  public getCountryByLanguage(name):Observable<any>{
    return this.http.get(this.url4+name);
  }
}
