import { Injectable } from '@angular/core';
import { SHOWS } from './mock-shows';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShowService {
  shows: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.shows = database.list('shows');
  }

  getShows() {
    return this.shows;
  }

  getShowById(showId: number){
    // for (var i = 0; i <= SHOWS.length - 1; i++) {
    //   if (SHOWS[i].id === showId) {
    //     return SHOWS[i];
    //   }
    // }
  }
}
