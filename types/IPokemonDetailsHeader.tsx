export interface IPokemonDetailsHeader {
  id: string;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
  cries: { latest: string };
}
