export class Movie {
  constructor(
    public title: string,
    public genre: string,
    public director: string,
    public actors: string[],
    public synopsis: string,
    public year: number,
    public runtime: number,
    public rating: string
  ) {}
}