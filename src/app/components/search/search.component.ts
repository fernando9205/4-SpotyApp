import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spoty: SpotifyService) {
    this.loading = false;
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    const aux = termino === '' ? 'a' : termino;
    termino = aux;
    this.loading = true;
    this.spoty.getArtist(termino)
      .subscribe(data => {
        this.artistas = data;
        this.loading = false;
      });
  }

}
