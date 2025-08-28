import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {

}
