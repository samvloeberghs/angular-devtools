import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // default: one global instance
})
export class LoggerService {
  #id: number = Math.floor(Math.random() * 10000);

  constructor() {
    console.log(`LoggerService instance created with id: ${this.#id}`);
  }

  log(message: string) {
    console.log(`[LoggerService ${this.#id}]: ${message}`);
  }
}
