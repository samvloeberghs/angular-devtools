import {
  ChangeDetectionStrategy,
  Component,
  computed, inject,
  linkedSignal,
  signal,
  TemplateRef,
  viewChild
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Alternative } from './alternative/alternative';
import { Default } from './default/default';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [
    NgIf,
    NgTemplateOutlet,
    Alternative,
    Default
  ],
  providers: [
    LoggerService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  readonly defaultFooterTemplate = viewChild.required<TemplateRef<unknown>>('defaultFooterTemplate', {
    debugName: 'defaultFooterTemplate'
  });
  readonly alternativeFooterTemplate = viewChild.required<TemplateRef<unknown>>('alternativeFooterTemplate', {
    debugName: 'alternativeFooterTemplate'
  });
  readonly useAlternativeTemplate = signal(false);

  readonly footerTemplate = computed(() => {
    const useAlternativeTemplate = this.useAlternativeTemplate();
    return useAlternativeTemplate ? this.alternativeFooterTemplate() : this.defaultFooterTemplate();
  });

  readonly #loggerService = inject(LoggerService);

  constructor(){
    this.#loggerService.log('Footer component initialized');
  }

  toggleFooterTemplate(){
    this.useAlternativeTemplate.update(useAlternativeTemplate =>!useAlternativeTemplate);
  }
}
