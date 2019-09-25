import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitzer: DomSanitizer) { }

  transform(value: string): any {
    let sub = value.substr(value.indexOf(':') + 1, value.length );
    sub = sub.replace(':', '/');
    const url = `https://open.spotify.com/embed/${sub}`;
    return this.domSanitzer.bypassSecurityTrustResourceUrl(url);
  }

}
