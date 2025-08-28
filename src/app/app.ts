import { Component, input } from '@angular/core';
import { Shell } from '../components/shell/shell';

@Component({
  selector: 'app-root',
  imports: [
    Shell
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
