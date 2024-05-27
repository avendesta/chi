import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  posts: Post[] = [];

  constructor(private homeService: HomeService){}
  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts(): void {
    this.homeService.getAllPosts()
      .subscribe(posts => this.posts = posts);
  }
}
