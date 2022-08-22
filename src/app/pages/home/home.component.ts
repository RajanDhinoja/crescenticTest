import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models/i-movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  page = 1;
  movies: IMovie[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getMovies(this.page).subscribe((movies: IMovie[]) => {
      this.movies = movies;
    });
  }

  onScroll(): void {
    this.movieService.getMovies(++this.page).subscribe((movies: IMovie[]) => {
      this.movies.push(...movies);
    });
  }

  gotoDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
