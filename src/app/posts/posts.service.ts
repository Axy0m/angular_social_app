import { Post } from "./post.model";
import {Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators"
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = []
  private postsUpdated = new Subject<Post[]>()

  // constructor(private: http: HttpClient) {}

  getPosts() {
    return [...this.posts]
  }

  getPostUpdateListener () {
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }
}

// deletePost(postId: string) {
//   this.http.delete("http://localhost:3000/api/posts/" + postId)
//     .subscribe(() => {
//       const updatedPosts = this.posts.filter(post => post.id !== postId)
//       this.posts = updatedPosts
//       this.postsUpdated.next([...this.posts])
//     })
// }
