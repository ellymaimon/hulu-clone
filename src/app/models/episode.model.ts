export class Episode {
    constructor(
      public title: string,
      public episodeNumber: number,
      public runtime: string,
      public airdate: string,
      public synopsis: string,
    ) {}
  }