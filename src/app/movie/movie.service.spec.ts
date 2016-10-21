/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  ResponseOptions,
  Response,
  Http,
  BaseRequestOptions,
  RequestOptions,
  RequestMethod,
  ConnectionBackend
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MovieService } from './movie.service';



describe('Service: Movie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService, Http, MockBackend, BaseRequestOptions,
    {
      provide: Http,
      useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    },MovieService
    ]
    });
  });
  let subject: MovieService = null;
  let backend: MockBackend = null;
  beforeEach(inject([MovieService, MockBackend], (movieService: MovieService, mockBackend: MockBackend) => {
    subject = movieService;
    backend = mockBackend;
  }));

  it('should ...', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
  it('should call getMovieDetails', inject([MovieService], (service: MovieService) => {
    expect(service.getMovieDetails()).toBeTruthy();
  }));
  it('service should call getMovieDetails endpoint and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .getMovieDetails()
      .subscribe((response) => {
        expect(response).toEqual({ success: true });
        done();
      });
  });
  it('service should call getMovieCredits endpoint and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .getMovieCredits()
      .subscribe((response) => {
        expect(response).toEqual({ success: true });
        done();
      });
  });
  
});
