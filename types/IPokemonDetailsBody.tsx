export interface IPokemonDetailsBody {
  abilities: { ability: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  weight: number;
  height: number;
  flavor_text_entries: { flavor_text: string }[];
  evolves_from_species: { name: string };
}
