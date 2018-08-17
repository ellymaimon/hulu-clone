export class Movie {
  constructor(public id: number, public title: string, public genre: string, public director: string, public actors: string[],
  public synopsis: string, public year: number) { }
}