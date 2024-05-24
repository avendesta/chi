import { NgFor, TitleCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Component, ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FeatureUpdate } from './interfaces/FeatureUpdate';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterOutlet, 
    TitleCasePipe, 
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'career-board';
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  pastFeatureUpdates: FeatureUpdate[];
  nextFeatureUpdate: FeatureUpdate;
  constructor(){
    this.pastFeatureUpdates = [
      {
        date: 'May 24, 2024', description: 'Create postgres database', 
        detail: `Connect to postgres database and create a sample table using PgAdmin`
      },
      {
        date: 'May 23, 2024', description: 'Add sonarqube to pipeline', 
        detail: `Sonarqube added to pipeline for both backend and frontend.`
      },
      {
        date: 'May 22, 2024', description: 'Website is up and running', 
        detail: `Website is up and running. 
        the backend service is responding. 
        new collaborators are added to the project.
        Pipeline for deployment is created in cloudbuild`
      },
    ];
    this.nextFeatureUpdate = {
      date: 'Upcoming!', description: 'API Specification', 
      detail: 'Add api specification for backend api'};
  }
}
