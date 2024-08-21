import { Component } from '@angular/core';
import { SongService } from '../services/song.service';
import { Song } from '../model/Song';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { SongComponent } from "../song/song.component";
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-song-list',
    standalone: true,
    templateUrl: './song-list.component.html',
    styleUrl: './song-list.component.css',
    imports: [MatGridListModule, FormsModule, MatButtonModule, MatIconModule, CommonModule, MatFormFieldModule, SongComponent, MatInputModule, MatButtonModule]
})
export class SongListComponent 
{
  constructor(private songService:SongService)
  {
    this.songsToShow = songService.getAll();
  }

  songsToShow:Song[];
  filterCriteria:string="";

  filter():void
  {
    this.songsToShow = this.songService.getFiltered(this.filterCriteria);
  }

  clearFilter():void
  {
    this.songsToShow = this.songService.getAll();
    this.filterCriteria = "";
  }
}
