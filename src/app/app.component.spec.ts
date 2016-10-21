/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieComponent } from './movie/movie.component';
import { CardComponent } from './card/card.component';
import {APP_BASE_HREF} from '@angular/common';

describe('App: Challenge', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MovieComponent,
        CardComponent
      ],
      imports: [
      MaterialModule.forRoot(),
      RouterTestingModule.withRoutes([
    { path: '', component: MovieComponent },
      { path: 'fav-movie', component: MovieComponent },
      { path: 'card-game', component: CardComponent }
    ])
      ],
      providers:[
      {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as isCustomTheme 'false'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.isCustomTheme).toEqual(false);
  }));

  it('should have md-toolbar with class md-primary', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').classList.contains('md-primary')).toBe(true);
  }));

  it('should have Movie Details button', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let toolbar = compiled.querySelector('md-toolbar');
    expect(toolbar.querySelectorAll('button')[0].querySelector('span').textContent).toEqual('Movie Details');
  }));

  it('should have Card Game button', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let toolbar = compiled.querySelector('md-toolbar');
    expect(toolbar.querySelectorAll('button')[1].querySelector('span').textContent).toEqual('Card Game');
  }));

  it('should have CHANGE THEME button', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let toolbar = compiled.querySelector('md-toolbar');
    expect(toolbar.querySelectorAll('button')[2].querySelector('span').textContent).toEqual('CHANGE THEME');
  }));

  it('should have router-outlet element', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));
});
