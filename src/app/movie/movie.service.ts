import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {
  apiKey = '0e9ff1bbcee05ae1493f26f6ddd4eed1';
  movieDetailsUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=' + this.apiKey;
  movieCreditsUrl = 'https://api.themoviedb.org/3/movie/76341/credits?api_key=' + this.apiKey;

  constructor(@Inject(Http) private http: Http) { }
  	getMovieDetails() {
    	return this.http.get(this.movieDetailsUrl)
                    .map(res => res.json())
                    .catch(err => this.handleError(err));;
  	}
  	getMovieCredits() {
    	return this.http.get(this.movieCreditsUrl)
                    .map(res => res.json())
                    .catch(err => this.handleError(err));;
  	}
  	
  	public handleError(error) {
	    console.error(error);
	    return Observable.throw(error || 'Server error');
    }
}
