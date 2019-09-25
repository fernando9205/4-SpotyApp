import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  message: string;


  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe(data => {
        this.newReleases = data;
        this.loading = false;
      }, (error) => {
        this.error = true;
        this.message = error.error.error.message;
        this.loading = false;
      });
  }

}
