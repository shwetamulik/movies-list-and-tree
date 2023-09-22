import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subject, debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  query = 'YOUR_SEARCH_QUERY'; 
  searchTerm: any;
  moviesData: any = { results: [] };
  currentPage = 1;
  totalPages = 1;
  private searchTerms = new Subject<string>();
  movies:any=[];
  image:any = [];
  params:any;
  thumbnail='https://image.tmdb.org/t/p/w500';
  constructor(private sharedService: SharedService,private router: Router){
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        if (term.trim() === '') {
          return this.sharedService.getMovies(); 
        } else {
          return this.sharedService.searchMovies(term);
        }
      })
    ).subscribe((data: any) => {
      this.movies = data;
    });
  }
ngOnInit(): void {
    this.sharedService.getMovies().subscribe(res=>{
      this.movies = res;
      const moviesArr = Object.values(this.movies)
     
      console.log('this.movies', this.movies)
    })


}

navigateToTree() {
  this.router.navigate(['/tree']); // Navigate to the 'tree' route
} 
searchMovies() {
  this.searchTerms.next(this.searchTerm);
}


}
