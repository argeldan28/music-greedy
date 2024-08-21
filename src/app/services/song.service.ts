import { Injectable } from '@angular/core';
import { Song } from '../model/Song';

@Injectable({
  providedIn: 'root'
})
export class SongService 
{
 
 
  songs: Song[] = [
    { id: 1, titolo: 'Bohemian Rhapsody', album: 'A Night at the Opera', autore: 'Queen', durata: 354, vidUrl:"https://www.youtube.com/embed/vHU6ZRQJ50Q" },
    { id: 2, titolo: 'Stairway to Heaven', album: 'Led Zeppelin IV', autore: 'Led Zeppelin', durata: 482, vidUrl: "https://www.youtube.com/embed/QkF3oxziUI4?si=QDBz6oR2fXjrKkvo" },
    { id: 3, titolo: "Imagine", album: "Imagine", autore: "John Lennon", durata: 183, vidUrl: "https://www.youtube.com/embed/YkgkThdzX-8?si=bWKl2Y_NQBLoxUrN" },
    { id: 4, titolo: "Hotel California", album: "Hotel California", autore: "Eagles", durata: 391, vidUrl: "https://www.youtube.com/embed/09839DpTctU?si=dcoq1BoY52F0hXjH" },
    { id: 5, titolo: "Hey Jude", album: "Single", autore: "The Beatles", durata: 431, vidUrl: "https://www.youtube.com/embed/A_MjCqQoLLA" },
    { id: 6, titolo: "Smells Like Teen Spirit", album: "Nevermind", autore: "Nirvana", durata: 301, vidUrl: "https://www.youtube.com/embed/hTWKbfoikeg" },
    { id: 7, titolo: "Sweet Child O' Mine", album: "Appetite for Destruction", autore: "Guns N' Roses", durata: 356, vidUrl: "https://www.youtube.com/embed/1w7OgIMMRc4" },
    { id: 8, titolo: "Billie Jean", album: "Thriller", autore: "Michael Jackson", durata: 294, vidUrl: "https://www.youtube.com/embed/Zi_XLOBDo_Y" },
    { id: 9, titolo: "Like a Rolling Stone", album: "Highway 61 Revisited", autore: "Bob Dylan", durata: 369, vidUrl: "https://www.youtube.com/embed/IwOfCgkyEj0" },
    { id: 10, titolo: "Purple Haze", album: "Are You Experienced", autore: "Jimi Hendrix", durata: 170, vidUrl: "https://www.youtube.com/embed/WGoDaYjdfSg?si=lfoQFRj4g2PJMAYl"},
    { id: 11, titolo: "Wonderwall", album: "(What's the Story) Morning Glory?", autore: "Oasis", durata: 258, vidUrl: "https://www.youtube.com/embed/bx1Bh8ZvH84" },
    { id: 12, titolo: "What's Going On", album: "What's Going On", autore: "Marvin Gaye", durata: 233, vidUrl: "https://www.youtube.com/embed/H-kA3UtBj4M" },
    { id: 13, titolo: "Thunderstruck", album: "The Razors Edge", autore: "AC/DC", durata: 292, vidUrl: "https://www.youtube.com/embed/v2AC41dglnM" },
    { id: 14, titolo: "Superstition", album: "Talking Book", autore: "Stevie Wonder", durata: 245, vidUrl: "https://www.youtube.com/embed/0CFuCYNx-1g" },
    { id: 15, titolo: "Born to Run", album: "Born to Run", autore: "Bruce Springsteen", durata: 279, vidUrl: "https://www.youtube.com/embed/IxuThNgl3YA" },
    { id: 16, titolo: "Hallelujah", album: "Various Positions", autore: "Leonard Cohen", durata: 282, vidUrl: "https://www.youtube.com/embed/ttEMYvpoR-k" },
    { id: 17, titolo: "Good Vibrations", album: "Smiley Smile", autore: "The Beach Boys", durata: 219, vidUrl: "https://www.youtube.com/embed/Eab_beh07HU" },
    { id: 18, titolo: "Losing My Religion", album: "Out of Time", autore: "R.E.M.", durata: 268, vidUrl: "https://www.youtube.com/embed/xwtdhWltSIg" },
    { id: 19, titolo: "Let It Be", album: "Let It Be", autore: "The Beatles", durata: 243, vidUrl: "https://www.youtube.com/embed/QDYfEBY9NM4?si=buQIwD-u7mjGbHgN" },
    { id: 20, titolo: "Light My Fire", album: "The Doors", autore: "The Doors", durata: 425, vidUrl: "https://www.youtube.com/embed/mbj1RFaoyLk?si=u3Tmo3l8oMMMUz8c" }
  ];

  getAll(): Song[] 
  {
    return this.songs;
  }

  getFiltered(criteria: string): Song[] 
  {
    return this.getAll().filter(s=>(s.titolo+" "+s.autore+" "+s.album).includes(criteria));
  }



}
