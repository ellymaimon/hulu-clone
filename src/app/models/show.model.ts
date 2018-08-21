import { Season } from './season.model';

export class Show {
  favorite: boolean = false;
  staffPick: boolean = false;

  constructor(
    public seasons: Season[],
    public title: string,
    public genre: string,
    public network: string,
    public synopsis: string,
    public url: string
  ){}
}
