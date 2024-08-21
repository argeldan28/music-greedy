import { Component, Input } from '@angular/core';
import { Album } from '../model/Album';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [RouterLink, MatCardModule, CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent 
{
  @Input() content!:Album;

  getFormattedDuration(): string {
    const minutes = Math.floor(this.content.durataTotale / 60);
    const seconds = this.content.durataTotale % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
