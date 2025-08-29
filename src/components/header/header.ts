import { ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [
    DatePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  readonly subTitle = input.required();
  readonly currentTime = linkedSignal({
    source: toSignal(interval(10000)),
    computation: () => new Date(),
  });
}
