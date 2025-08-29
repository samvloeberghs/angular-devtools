import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-about-angular',
  template: 'Angular - The Best Framework Out There',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Angular {
}
