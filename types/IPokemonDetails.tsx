export interface IPokemonDetails {
  id: string;
  name: string;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  weight: number;
  height: number;
  sprites: { front_default: string };
}
