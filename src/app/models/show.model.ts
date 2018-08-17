import { Season } from './season.model';

export class Show {
  constructor(public id: number, public seasons: Season[], public title: string, public genre: string,
              public network: string, public synopsis: string){}
}
