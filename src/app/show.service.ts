import { Injectable } from '@angular/core';
import { Show } from './models/show.model';
import { SHOWS } from './mock-shows';

@Injectable()
export class ShowService {

  constructor() { }

  getShows() {
    return SHOWS;
  }

  getShowById(showId: number){
    for (var i = 0; i <= SHOWS.length - 1; i++) {
      if (SHOWS[i].id === showId) {
        return SHOWS[i];
      }
    }
  }
}
