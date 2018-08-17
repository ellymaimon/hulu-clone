import { Show } from './models/show.model';
import { Season } from './models/season.model';

  
let handmaidS1: Season = new Season(1, 2017, [
  'Offred', 'Birth Day', 'Late', 'Nolite Te Bastardes Carborundorum', 'Faithful', 'A Woman\'s Place',
  'The Other Side', 'Jezebels', 'The Bridge', 'Night'
]);

let handmaidS2: Season = new Season(2, 2018, [
  'June', 'Unwomen', 'Baggage', 'Other Women', 'Seeds', 'First Blood', 'After', 'Women\'s Work',
  'Smart Power', 'The Last Ceremony', 'Holly', 'Postpartum', 'The Word'
]);

let freaksS1: Season = new Season(1, 1999, [
  'Pilot', 'Beers and Weirs', 'Tricks and Treats', 'Kim Kelly Is My Friend', 'Tests and Breasts', 
  'I\m with the Band', 'Carded and Discarded', 'Girlfriends and Boyfriends', 'We\'ve Got Spirit', 'The Diary', 
  'Looks and Books', 'The Garage Door', 'Chokin and Tokin', 'Dead Dogs and Gym Teachers', 'Noshing and Moshing', 
  'Smooching and Mooching', 'The Little Things', 'Discos and Dragons'
]);

export const SHOWS: Show[] = [
  new Show(1, [handmaidS1, handmaidS2], "The Handmaid's Tale", "Drama", "Hulu", "Adapted from the classic novel by Margaret Atwood, The Handmaid's Tale is the story of life in the dystopia of Gilead, a totalitarian society in what was formerly the United States. Facing environmental disasters and a plunging birthrate, Gilead is ruled by a twisted fundamentalism in its militarized ‘return to traditional values'. As one of the few remaining fertile women, Offred (Elisabeth Moss) is a Handmaid in the Commander’s household, one of the caste of women forced into sexual servitude as a last desperate attempt to repopulate the world. In this terrifying society, Offred must navigate between Commanders, their cruel Wives, domestic Marthas, and her fellow Handmaids – where anyone could be a spy for Gilead – all with one goal: to survive and find the daughter that was taken from her."),
  new Show(2, [freaksS1], "Freaks and Geeks", "Comedy", "NBC", "It's the 1980s and at McKinley High, there's two different groups of teenagers, the Freaks with cool and charismatic Daniel Desario and tomboy Lindsay Weir and the Geeks with Lindsay's shy younger brother Sam, gentle Bill Haverchuck, and self-proclaimed ladies' man Neal Schweiber. The show chronicles the normal teen/adolescence problems any teenager goes through including acceptance, drugs, drinking, and bullying.")
]