export type Race =
  | 'Dwarf'
  | 'Elf'
  | 'Halfling'
  | 'Human'
  | 'Gnome'
  | 'Half-Elf'
  | 'Half-Orc';

export type subRace =
  | 'Hill Dwarf'
  | 'Mountain Dwarf'
  | 'High Elf'
  | 'Wood Elf'
  | 'Lightfoot Halfling'
  | 'Stout Halfling'
  | 'Rock Gnome';

export enum RaceEnum {
  Dwarf = 'Dwarf',
  Elf = 'Elf',
  Halfling = 'Halfling',
  Human = 'Human',
  Gnome = 'Gnome',
  HalfElf = 'Half-Elf',
  HalfOrc = 'Half-Orc',
}

export enum SubRaceEnum {
  HillDwarf = 'Hill Dwarf',
  MountainDwarf = 'Mountain Dwarf',
  HighElf = 'High Elf',
  WoodElf = 'Wood Elf',
  LightfootHalfling = 'Lightfoot Halfling',
  StoutHalfling = 'Stout Halfling',
  RockGnome = 'Rock Gnome',
}
