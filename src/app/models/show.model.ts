import { Season } from './season.model';

export class Show {
  watchlist: boolean = false;
  staffPick: boolean = false;

  constructor(
    public seasonsAmount: number,
    public seasons: Season[],
    public title: string,
    public genre: string,
    public network: string,
    public synopsis: string,
    public url: string
  ){}
}
