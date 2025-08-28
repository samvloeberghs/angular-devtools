import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private readonly postsService = inject(PostsService);
  public readonly posts = this.postsService.posts.asReadonly();
  public readonly numberOfPosts = computed<number>(() => {
    console.log('Calculating number of posts');
    return this.posts.value()?.length ?? 0;
  })
}
