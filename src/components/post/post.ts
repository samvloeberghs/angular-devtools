import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.html',
  styleUrl: './post.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Post {
  protected readonly id = input.required<number>();
  readonly #postsService = inject(PostsService);
  protected readonly post = this.#postsService.post.asReadonly();

  constructor(){
    effect(() => {
      const id = this.id();
      this.#postsService.activePostId.set(id);
    }, {
      debugName: 'Post Component - Set Active Post Id'
    });
  }
}
