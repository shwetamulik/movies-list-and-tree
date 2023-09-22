import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private includeAdult = true; 
 moviesURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=263e31d1ad0c4defa8822787e614e716&page=1';
  constructor(private http:HttpClient) { }
  private apiKey: string = '263e31d1ad0c4defa8822787e614e716';
  private apiUrl: string = 'https://api.themoviedb.org/3/search/movie';
  private currentPage = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPage.asObservable();
getMovies(){
  return this.http.get(this.moviesURL)
}
searchMovies(query: string) {
  const url = `${this.apiUrl}?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=true`;
  return this.http.get(url);
}

}
