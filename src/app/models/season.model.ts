import { Episode } from './episode.model';

export class Season {
  constructor(
    public seasonNumber: number,
    public episodesAmount: number,
    public episodes: Episode[]
  ) {}
}
