import { Component, Input } from '@angular/core';
import { Song } from '../model/Song';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [RouterLink, MatCardModule, CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent 
{
  constructor(private sanitizer: DomSanitizer) {}

  @Input() content!:Song;

  urlSan:SafeResourceUrl="";

  ngOnInit(): void 
  {
    this.urlSan = this.sanitizer.bypassSecurityTrustResourceUrl(this.content.vidUrl);
  }

  getFormattedDuration(): string {
    const minutes = Math.floor(this.content.durata / 60);
    const seconds = this.content.durata % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
