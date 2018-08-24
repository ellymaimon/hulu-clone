import { Season } from './season.model';

export class Show {
  watchlist: boolean = false;
  staffPick: boolean = false;

  constructor(
    public title: string,
    public genre: string,
    public network: string,
    public synopsis: string,
    public imgUrl: string,
    public seasonsAmount: number,
    public seasons: Season[]
  ){}
}
