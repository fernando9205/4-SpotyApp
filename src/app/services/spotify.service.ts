import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getquery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer c328d472097648cc906c1212b2e42198'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getquery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items
      ));
  }

  getArtist(termino: string) {
    return this.getquery(`search?q=${termino}&type=artist`)
      .pipe(map((data: any) => data.artists.items
      ));
  }

  getArtistToId(id: string) {
    return this.getquery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getquery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map((data: any) => data.tracks));
  }





}
