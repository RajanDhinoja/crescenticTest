import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models/i-movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  newMovies: IMovie[] = [];
  oldMovies: IMovie[] = [];
  isNewMovieLoading: boolean = true;
  isOldMovieLoading: boolean = true;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.movieService.getMovies().subscribe((movies: IMovie[]) => {
        this.newMovies = movies;
        this.oldMovies = movies;
        this.isNewMovieLoading = false;
        this.isOldMovieLoading = false;
      });
    }, 5000);
  }

  reloadNewMovies() {
    this.newMovies = [];
    this.isNewMovieLoading = true;
    setTimeout(() => {
      this.movieService.getMovies().subscribe((movies: IMovie[]) => {
        this.newMovies = movies;
        this.isNewMovieLoading = false;
      });
    }, 5000);
  }

  reloadOldMovies() {
    this.oldMovies = [];
    this.isOldMovieLoading = true;
    setTimeout(() => {
      this.movieService.getMovies().subscribe((movies: IMovie[]) => {
        this.oldMovies = movies;
        this.isOldMovieLoading = false;
      });
    }, 5000);
  }

  gotoHome() {
    this.router.navigateByUrl('/home');
  }
}
