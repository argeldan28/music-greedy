import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SongListComponent } from './song-list/song-list.component';
import { AlbumListComponent } from './album-list/album-list.component';

export const routes: Routes = [
    {path:"", component:HomepageComponent},
    {path:"songs", component:SongListComponent},
    {path:"albums", component:AlbumListComponent}
];
