import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { BoardSpaceNamePipe } from 'app/modules/portfolio/checkers/checkers-service/board-space-name.pipe';

@Component({
  selector: 'app-checkers-blog',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FuseHighlightComponent,
    MatDividerModule,
    BoardSpaceNamePipe,
    MatTooltipModule,
    RouterLink,
],
  templateUrl: './checkers-blog.component.html',
  styleUrl: './checkers-blog.component.scss'
})
export class CheckersBlogComponent {

  @Input() previewMode = false;

}
