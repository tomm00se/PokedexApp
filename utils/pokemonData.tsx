const pokemonData = [
  {
    name: "Bulbasaur",
    id: "#001",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "Ivysaur",
    id: "#002",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Venusaur",
    id: "#003",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    name: "Charmander",
    id: "#004",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "Charmeleon",
    id: "#005",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    name: "Charizard",
    id: "#006",
    type: "Fire",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    name: "Squirtle",
    id: "#007",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    name: "Wartortle",
    id: "#008",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    name: "Blastoise",
    id: "#009",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    name: "Caterpie",
    id: "#010",
    type: "Bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    name: "Metapod",
    id: "#011",
    type: "Bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    name: "Butterfree",
    id: "#012",
    type: "Bug",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    name: "Weedle",
    id: "#013",
    type: "Bug",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    name: "Kakuna",
    id: "#014",
    type: "Bug",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    name: "Beedrill",
    id: "#015",
    type: "Bug",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    name: "Pidgey",
    id: "#016",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    name: "Pidgeotto",
    id: "#017",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    name: "Pidgeot",
    id: "#018",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    name: "Rattata",
    id: "#019",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    name: "Raticate",
    id: "#020",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
  {
    name: "Spearow",
    id: "#021",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  },
  {
    name: "Fearow",
    id: "#022",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  },
  {
    name: "Ekans",
    id: "#023",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  },
  {
    name: "Arbok",
    id: "#024",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  },
  {
    name: "Pikachu",
    id: "#025",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    name: "Raichu",
    id: "#026",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  },
  {
    name: "Sandshrew",
    id: "#027",
    type: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  },
  {
    name: "Sandslash",
    id: "#028",
    type: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  },
  {
    name: "Nidoran♀",
    id: "#029",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  },
  {
    name: "Nidorina",
    id: "#030",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  },
  {
    name: "Nidoqueen",
    id: "#031",
    type: "Poison",
    secondType: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  },
  {
    name: "Nidoran♂",
    id: "#032",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  },
  {
    name: "Nidorino",
    id: "#033",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  },
  {
    name: "Nidoking",
    id: "#034",
    type: "Poison",
    secondType: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  },
  {
    name: "Clefairy",
    id: "#035",
    type: "Fairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  },
  {
    name: "Clefable",
    id: "#036",
    type: "Fairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  },
  {
    name: "Vulpix",
    id: "#037",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  },
  {
    name: "Ninetales",
    id: "#038",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  },
  {
    name: "Jigglypuff",
    id: "#039",
    type: "Normal",
    secondType: "Fairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    name: "Wigglytuff",
    id: "#040",
    type: "Normal",
    secondType: "Fairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  },
  {
    name: "Zubat",
    id: "#041",
    type: "Poison",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  },
  {
    name: "Golbat",
    id: "#042",
    type: "Poison",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  },
  {
    name: "Oddish",
    id: "#043",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  },
  {
    name: "Gloom",
    id: "#044",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  },
  {
    name: "Vileplume",
    id: "#045",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  },
  {
    name: "Paras",
    id: "#046",
    type: "Bug",
    secondType: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  },
  {
    name: "Parasect",
    id: "#047",
    type: "Bug",
    secondType: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  },
  {
    name: "Venonat",
    id: "#048",
    type: "Bug",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  },
  {
    name: "Venomoth",
    id: "#049",
    type: "Bug",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  },
  {
    name: "Diglett",
    id: "#050",
    type: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  },
  {
    name: "Dugtrio",
    id: "#051",
    type: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  },
  {
    name: "Meowth",
    id: "#052",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    name: "Persian",
    id: "#053",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  },
  {
    name: "Psyduck",
    id: "#054",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    name: "Golduck",
    id: "#055",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  },
  {
    name: "Mankey",
    id: "#056",
    type: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  },
  {
    name: "Primeape",
    id: "#057",
    type: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  },
  {
    name: "Growlithe",
    id: "#058",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  },
  {
    name: "Arcanine",
    id: "#059",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  },
  {
    name: "Poliwag",
    id: "#060",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  },
  {
    name: "Poliwhirl",
    id: "#061",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  },
  {
    name: "Poliwrath",
    id: "#062",
    type: "Water",
    secondType: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  },
  {
    name: "Abra",
    id: "#063",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  },
  {
    name: "Kadabra",
    id: "#064",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  },
  {
    name: "Alakazam",
    id: "#065",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  },
  {
    name: "Machop",
    id: "#066",
    type: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  },
  {
    name: "Machoke",
    id: "#067",
    type: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  },
  {
    name: "Machamp",
    id: "#068",
    type: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  },
  {
    name: "Bellsprout",
    id: "#069",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
  },
  {
    name: "Weepinbell",
    id: "#070",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  },
  {
    name: "Victreebel",
    id: "#071",
    type: "Grass",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  },
  {
    name: "Tentacool",
    id: "#072",
    type: "Water",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
  },
  {
    name: "Tentacruel",
    id: "#073",
    type: "Water",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  },
  {
    name: "Geodude",
    id: "#074",
    type: "Rock",
    secondType: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  },
  {
    name: "Graveler",
    id: "#075",
    type: "Rock",
    secondType: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  },
  {
    name: "Golem",
    id: "#076",
    type: "Rock",
    secondType: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  },
  {
    name: "Ponyta",
    id: "#077",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
  },
  {
    name: "Rapidash",
    id: "#078",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
  },
  {
    name: "Slowpoke",
    id: "#079",
    type: "Water",
    secondType: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
  },
  {
    name: "Slowbro",
    id: "#080",
    type: "Water",
    secondType: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
  {
    name: "Magnemite",
    id: "#081",
    type: "Electric",
    secondType: "Steel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  },
  {
    name: "Magneton",
    id: "#082",
    type: "Electric",
    secondType: "Steel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  },
  {
    name: "Farfetch'd",
    id: "#083",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
  },
  {
    name: "Doduo",
    id: "#084",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
  },
  {
    name: "Dodrio",
    id: "#085",
    type: "Normal",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
  },
  {
    name: "Seel",
    id: "#086",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
  },
  {
    name: "Dewgong",
    id: "#087",
    type: "Water",
    secondType: "Ice",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
  },
  {
    name: "Grimer",
    id: "#088",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
  },
  {
    name: "Muk",
    id: "#089",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
  },
  {
    name: "Shellder",
    id: "#090",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
  },
  {
    name: "Cloyster",
    id: "#091",
    type: "Water",
    secondType: "Ice",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
  },
  {
    name: "Gastly",
    id: "#092",
    type: "Ghost",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  },
  {
    name: "Haunter",
    id: "#093",
    type: "Ghost",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  },
  {
    name: "Gengar",
    id: "#094",
    type: "Ghost",
    secondType: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  {
    name: "Onix",
    id: "#095",
    type: "Rock",
    secondType: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  },
  {
    name: "Drowzee",
    id: "#096",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
  },
  {
    name: "Hypno",
    id: "#097",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
  },
  {
    name: "Krabby",
    id: "#098",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
  },
  {
    name: "Kingler",
    id: "#099",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
  },
  {
    name: "Voltorb",
    id: "#100",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  },
  {
    name: "Electrode",
    id: "#101",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
  },
  {
    name: "Exeggcute",
    id: "#102",
    type: "Grass",
    secondType: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
  },
  {
    name: "Exeggutor",
    id: "#103",
    type: "Grass",
    secondType: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
  },
  {
    name: "Cubone",
    id: "#104",
    type: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
  },
  {
    name: "Marowak",
    id: "#105",
    type: "Ground",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  },
  {
    name: "Hitmonlee",
    id: "#106",
    type: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  },
  {
    name: "Hitmonchan",
    id: "#107",
    type: "Fighting",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
  },
  {
    name: "Lickitung",
    id: "#108",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
  },
  {
    name: "Koffing",
    id: "#109",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
  },
  {
    name: "Weezing",
    id: "#110",
    type: "Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
  },
  {
    name: "Rhyhorn",
    id: "#111",
    type: "Ground",
    secondType: "Rock",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
  },
  {
    name: "Rhydon",
    id: "#112",
    type: "Ground",
    secondType: "Rock",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
  },
  {
    name: "Chansey",
    id: "#113",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
  },
  {
    name: "Tangela",
    id: "#114",
    type: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
  },
  {
    name: "Kangaskhan",
    id: "#115",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
  },
  {
    name: "Horsea",
    id: "#116",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
  },
  {
    name: "Seadra",
    id: "#117",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
  },
  {
    name: "Goldeen",
    id: "#118",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
  },
  {
    name: "Seaking",
    id: "#119",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  },
  {
    name: "Staryu",
    id: "#120",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
  },
  {
    name: "Starmie",
    id: "#121",
    type: "Water",
    secondType: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
  },
  {
    name: "Mr. Mime",
    id: "#122",
    type: "Psychic",
    secondType: "Fairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
  },
  {
    name: "Scyther",
    id: "#123",
    type: "Bug",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  },
  {
    name: "Jynx",
    id: "#124",
    type: "Ice",
    secondType: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  },
  {
    name: "Electabuzz",
    id: "#125",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
  },
  {
    name: "Magmar",
    id: "#126",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
  },
  {
    name: "Pinsir",
    id: "#127",
    type: "Bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
  },
  {
    name: "Tauros",
    id: "#128",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
  },
  {
    name: "Magikarp",
    id: "#129",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
  },
  {
    name: "Gyarados",
    id: "#130",
    type: "Water",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  },
  {
    name: "Lapras",
    id: "#131",
    type: "Water",
    secondType: "Ice",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  },
  {
    name: "Ditto",
    id: "#132",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
  {
    name: "Eevee",
    id: "#133",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    name: "Vaporeon",
    id: "#134",
    type: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  },
  {
    name: "Jolteon",
    id: "#135",
    type: "Electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  },
  {
    name: "Flareon",
    id: "#136",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  },
  {
    name: "Porygon",
    id: "#137",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
  },
  {
    name: "Omanyte",
    id: "#138",
    type: "Rock",
    secondType: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
  },
  {
    name: "Omastar",
    id: "#139",
    type: "Rock",
    secondType: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
  },
  {
    name: "Kabuto",
    id: "#140",
    type: "Rock",
    secondType: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
  },
  {
    name: "Kabutops",
    id: "#141",
    type: "Rock",
    secondType: "Water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
  },
  {
    name: "Aerodactyl",
    id: "#142",
    type: "Rock",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
  },
  {
    name: "Snorlax",
    id: "#143",
    type: "Normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  },
  {
    name: "Articuno",
    id: "#144",
    type: "Ice",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
  },
  {
    name: "Zapdos",
    id: "#145",
    type: "Electric",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  },
  {
    name: "Moltres",
    id: "#146",
    type: "Fire",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
  },
  {
    name: "Dratini",
    id: "#147",
    type: "Dragon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  },
  {
    name: "Dragonair",
    id: "#148",
    type: "Dragon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
  },
  {
    name: "Dragonite",
    id: "#149",
    type: "Dragon",
    secondType: "Flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  },
  {
    name: "Mewtwo",
    id: "#150",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    name: "Mew",
    id: "#151",
    type: "Psychic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
  },
];

export default pokemonData;
