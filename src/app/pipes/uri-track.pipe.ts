import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uriTrack'
})
export class UriTrackPipe implements PipeTransform {

  transform(uri: string, args?: any): any {
    debugger;
    const sub = uri.substr(0, uri.indexOf(':'));
    console.log(sub);
    return sub;
  }

}
