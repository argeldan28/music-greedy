import { Injectable } from '@angular/core';
import { Album } from '../model/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService
{
  albums: Album[] = [
    { id: 1, autore: 'John Lennon', nomeAlbum: 'Imagine', durataTotale: 183, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/John_Lennon_Imagine_album_cover.jpg' },
    { id: 2, autore: 'Eagles', nomeAlbum: 'Hotel California', durataTotale: 391, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg' },
    { id: 3, autore: 'The Beatles', nomeAlbum: 'Hey Jude', durataTotale: 431, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e1/TheBeatlesHeyJudealbumcover.jpg' },
    { id: 4, autore: 'Nirvana', nomeAlbum: 'Nevermind', durataTotale: 301, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg' },
    { id: 5, autore: 'Guns N\' Roses', nomeAlbum: 'Appetite for Destruction', durataTotale: 356, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg' },
    { id: 6, autore: 'Michael Jackson', nomeAlbum: 'Thriller', durataTotale: 294, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png' },
    { id: 7, autore: 'Bob Dylan', nomeAlbum: 'Highway 61 Revisited', durataTotale: 369, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Bob_Dylan_-_Highway_61_Revisited.jpg' },
    { id: 8, autore: 'Jimi Hendrix', nomeAlbum: 'Are You Experienced', durataTotale: 170, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Are_You_Experienced_-_US_cover-edit.jpg' },
    { id: 9, autore: 'Oasis', nomeAlbum: '(What\'s the Story) Morning Glory?', durataTotale: 258, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/Oasis_%28What%27s_the_Story%29_Morning_Glory_album_cover.jpg' },
    { id: 10, autore: 'Marvin Gaye', nomeAlbum: 'What\'s Going On', durataTotale: 233, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg' },
    { id: 11, autore: 'AC/DC', nomeAlbum: 'The Razors Edge', durataTotale: 292, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7e/ACDC_-_The_Razors_Edge.JPG' },
    { id: 12, autore: 'Stevie Wonder', nomeAlbum: 'Talking Book', durataTotale: 245, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fe/StevieWonder-TalkingBook.jpg' },
    { id: 13, autore: 'Bruce Springsteen', nomeAlbum: 'Born to Run', durataTotale: 279, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Born_to_Run_-_Front.jpg' },
    { id: 14, autore: 'Leonard Cohen', nomeAlbum: 'Various Positions', durataTotale: 282, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Leonard_Cohen_-_Various_Positions.png' },
    { id: 15, autore: 'The Beach Boys', nomeAlbum: 'Smiley Smile', durataTotale: 219, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/SmileySmileCover.jpg' },
    { id: 16, autore: 'R.E.M.', nomeAlbum: 'Out of Time', durataTotale: 268, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Out_of_Time.jpg' },
    { id: 17, autore: 'The Beatles', nomeAlbum: 'Let It Be', durataTotale: 243, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg' },
    { id: 18, autore: 'The Doors', nomeAlbum: 'The Doors', durataTotale: 425, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/01/TheDoorsTheDoorsalbumcover.jpg' },
    { id: 19, autore: 'Queen', nomeAlbum: 'A Night at the Opera', durataTotale: 43, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/09/Queen_A_Night_At_The_Opera.png' },
    { id: 20, autore: 'Pink Floyd', nomeAlbum: 'The Dark Side of the Moon', durataTotale: 321, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png' }
];
  getAll(): Album[] 
  {
    return this.albums;
  }

  getFiltered(criteria: string): Album[] 
  {
    return this.getAll().filter(s=>(s.nomeAlbum+" "+s.autore).includes(criteria));
  }
}
