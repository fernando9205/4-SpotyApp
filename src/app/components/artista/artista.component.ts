import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';
import { disableBindings } from '@angular/core/src/render3';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });



  }

  async getArtist(id: string) {
    this.loading = true;
    await this.spotify.getArtistToId(id).subscribe(
      (data: any) => {
        this.artista = data;
        this.loading = false;
      });
  }


  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(data => {
        console.log("tracks", data);
        this.topTracks = data;

      });

  }

}
