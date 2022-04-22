import {Component, OnInit} from "@angular/core";
import { NgForm } from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { PostsService } from "../posts.service";
import {Post} from "../post.model";


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  isLoading = false
  private mode = 'create'
  private postId: string | null | undefined

  // @ts-ignore
  constructor(public postsService: PostsService, public route: ActivatedRoute) {

    // this.ngOnInit() {
    //   this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //     if (paramMap.has('postId')) {
    //       this.mode = 'edit'
    //       this.postId = paramMap.get('postId')
    //     } else {
    //       this.mode = 'create'
    //       this.postId = null
    //     }
    //   });
    // }
  }

  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.postsService.addPost(form.value.title, form.value.content)
    form.resetForm()
  }
}

