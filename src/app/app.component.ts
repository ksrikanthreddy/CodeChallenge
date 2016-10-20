import { Component } from '@angular/core';
import {MdToolbar} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(){}
  title = 'app works!';
  isCustomTheme: boolean = false;
}
