import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { LoggerService } from '../../services/logger.service';


@Component({
  selector: 'app-shell',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    Header,
    Footer
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss'
})
export class Shell {
  readonly #loggerService = inject(LoggerService);

  constructor() {
    this.#loggerService.log('Shell component initialized');
  }
}
