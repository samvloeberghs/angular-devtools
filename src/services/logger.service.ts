import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // default: one global instance
})
export class LoggerService {
  private id: number;

  constructor() {
    // create a random id so we can tell instances apart
    this.id = Math.floor(Math.random() * 10000);
    console.log(`LoggerService instance created with id: ${this.id}`);
  }

  log(message: string) {
    console.log(`[LoggerService ${this.id}]: ${message}`);
  }
}
