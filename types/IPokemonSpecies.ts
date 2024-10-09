export interface IPokemonSpecies {
  abilities: { ability: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  weight: number;
  height: number;
  moves: { move: { name: string } }[];
  flavor_text_entries: { flavor_text: string }[];
  evolves_from_species: { name: string };
}