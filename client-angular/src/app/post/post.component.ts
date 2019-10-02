import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  newPost: Post = new Post();

  // @ViewChild("fileInput")
  // fileInput;

  onFileChanged($event) {
    this.newPost.image = $event.target.files[0];
  }

  getPost() {
    this.postService.getPost().subscribe(f => (this.posts = f));
  }

  onSubmit(){
    console.log(this.newPost);
    this.postService.addPost(this.newPost).subscribe(f => {
      this.newPost = new Post();
      this.fileInput.nativeElement.value = null;
      this.getPost();
    }) 
  }

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPost();
  }

}
