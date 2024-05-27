import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { Post } from '../../interfaces/Post';
import { CommonModule, NgFor, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitleCasePipe, 
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    NgFor,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  title = 'career-board';
  @ViewChild(MatAccordion) accordion!: MatAccordion;
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
