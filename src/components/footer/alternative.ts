import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-footer-alternative',
  template: '&copy; Angular - Alternative footer template',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Alternative {
}
