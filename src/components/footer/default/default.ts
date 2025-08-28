import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-footer-default',
  template: '&copy; Angular - Default footer template',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Default {
}
