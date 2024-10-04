export interface IPokemonDetails {
  id: string;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  cries: { latest: string };
  abilities: { ability: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  weight: number;
  height: number;
}
