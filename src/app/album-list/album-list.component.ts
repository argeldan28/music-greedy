import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AlbumService } from '../services/album.service';
import { Album } from '../model/Album';
import { AlbumComponent } from "../album/album.component";

@Component({
    selector: 'app-album-list',
    standalone: true,
    templateUrl: './album-list.component.html',
    styleUrl: './album-list.component.css',
    imports: [MatGridListModule, FormsModule, MatButtonModule, MatIconModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, AlbumComponent]
})
export class AlbumListComponent 
{
  constructor(private albumService:AlbumService)
  {
    this.albumsToShow = albumService.getAll();
  }

  albumsToShow:Album[];
  filterCriteria:string="";

  filter():void
  {
    this.albumsToShow = this.albumService.getFiltered(this.filterCriteria);
  }

  clearFilter():void
  {
    this.albumsToShow = this.albumService.getAll();
    this.filterCriteria = "";
  }
}
