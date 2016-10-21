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
import { MaterialModule } from '@angular/material';
import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';

describe('Component: Movie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieComponent
      ],
      imports: [
      MaterialModule.forRoot()
      ],
      providers:[
      MovieService, Http, MockBackend, BaseRequestOptions,
    {
      provide: Http,
      useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }
      ]
    });
  });
  let subject: MovieService = null;
  let backend: MockBackend = null;
  beforeEach(inject([MovieService, MockBackend], (movieService: MovieService, mockBackend: MockBackend) => {
    subject = movieService;
    backend = mockBackend;
  }));
  it('should create an instance', inject([MovieService], (service: MovieService) => {
    let component = new MovieComponent(service);
    expect(component).toBeTruthy();
  }));
  it('should call ViewProfile', inject([MovieService], (service: MovieService) => {
    let component = new MovieComponent(service);
    
    spyOn(window, 'open');
    component.viewProfile(3);
    expect(window.open).toHaveBeenCalled();
  }));
  it('should call logError', inject([MovieService], (service: MovieService) => {
    let component = new MovieComponent(service);
    
    spyOn(console, 'log');
    component.logError('error');
    expect(console.log).toHaveBeenCalled();
  }));

  it('should create an instance and call ngOnInit', inject([MovieService], (service: MovieService) => {
    //let spy = spyOn(service, 'getMovieDetails')
      //.and.returnValue({subscribe: function(res){return res;}});
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });
    let component = new MovieComponent(service);
    component.ngOnInit();
    
  }));
});
