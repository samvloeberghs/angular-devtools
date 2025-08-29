import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: 'Sam - A Lazy Loaded Engineer',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Me {
}
