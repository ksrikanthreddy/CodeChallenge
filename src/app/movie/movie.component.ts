import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [
    MovieService
  ]
})
export class MovieComponent implements OnInit {
  movieTitle = '';
  movieReleaseDate;
  moviePosterPath = '';
  movieOverview = '';
  movieCast = [];
  
  constructor(private movieService: MovieService) { }
  movieDetails(res){
    this.movieTitle = res.original_title;
  	this.movieReleaseDate = (new Date(res.release_date)).getFullYear();
  	this.moviePosterPath = 'http://image.tmdb.org/t/p/w500/' + res.poster_path;
  	this.movieOverview = res.overview;
  }
  movieCredits(res){
    console.log(res.cast);
    this.movieCast = res.cast;
  }
  logError(err){
  	console.log(err);
  }
  viewProfile(profileId){
  	window.open("https://www.themoviedb.org/person/"+profileId, "_blank");
  }
  ngOnInit() {
  this.movieService.getMovieDetails()
	   			.subscribe(res => this.movieDetails(res),
	   			err  => this.logError(err));
	
  this.movieService.getMovieCredits()
  				.subscribe(res => this.movieCredits(res),
				err => this.logError(err));
  }

}
