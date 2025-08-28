import { inject, Injectable, makeStateKey, PLATFORM_ID, resource, signal, TransferState } from '@angular/core';
import { Post } from '../models/post.model';
import { isPlatformServer } from '@angular/common';

const API_URL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public readonly activePostId = signal<number | null>(null);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly transferState = inject(TransferState);

  public readonly post = resource({
    params: () => {
      const activePostId = this.activePostId();

      if (!activePostId) {
        return undefined;
      }

      return { postId: activePostId };
    },
    loader: async ({ params }) => {
      const POST_DETAIL_DATA_KEY = makeStateKey<any>(`posts-${ params.postId }`);
      const path = `${ API_URL }posts/${ params.postId }`;
      const fetchIt = () => fetch(path).then(res => res.json() as Promise<Post>);

      if (isPlatformServer(this.platformId)) {
        const data = await fetchIt();
        this.transferState.set(POST_DETAIL_DATA_KEY, data);
        return Promise.resolve(data);
      } else {
        const data = this.transferState.get<Post>(POST_DETAIL_DATA_KEY, null as any);

        if (data) {
          this.transferState.remove(POST_DETAIL_DATA_KEY);
          return Promise.resolve(data);
        }

        return fetchIt();
      }
    },
  })

  public readonly posts = resource({
    loader: async () => {
      const POSTS_DATA_KEY = makeStateKey<any>('posts');
      const path = `${ API_URL }posts`;
      const fetchIt = () => fetch(path).then(res => res.json() as Promise<Post[]>);

      if (isPlatformServer(this.platformId)) {
        const data = (await fetchIt()).slice(0, 3);
        console.log('setting transfer state for posts', data);
        this.transferState.set(POSTS_DATA_KEY, data);
        return data;
      } else {
        const data =  Promise.resolve(this.transferState.get<Post[]>(POSTS_DATA_KEY, null as any));

        if (data) {
          this.transferState.remove(POSTS_DATA_KEY);
          return Promise.resolve(data);
        }

        return fetchIt();
      }
    },
  })
}
