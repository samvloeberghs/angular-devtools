import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PostsService } from '../../services/posts.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Home {
  readonly #postsService = inject(PostsService);
  readonly #loggerService = inject(LoggerService);

  readonly posts = this.#postsService.posts.asReadonly();
  readonly numberOfPosts = computed<number>(() => {
    return this.posts.value()?.length ?? 0;
  });

  constructor(){
    this.#loggerService.log("Home component initialized");
  }
}
