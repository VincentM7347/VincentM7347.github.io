import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectService } from '../../services/project.service';
import { CommonModule, Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  safeScreencastUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute, 
    private projectService: ProjectService,
    private sanitizer: DomSanitizer,
    private location: Location
  ) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.projectService.getProjectByTitle(title).subscribe(project => {
        this.project = project;
        if (this.project && this.project.screencastUrl) {
          this.safeScreencastUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.screencastUrl);
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
