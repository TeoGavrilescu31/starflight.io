import tatooine from './Planets/Tatooine.png'
import EpisodeI from './Movies/ThePhantomMenace.webp'
import EpisodeII from './Movies/AttackoftheClones.webp'
import EpisodeIII from './Movies/RevengeoftheSith.webp'
import EpisodeIV from './Movies/ANewHope.webp'
import EpisodeV from './Movies/TheEmpireStrikesBack.webp'
import EpisodeVI from './Movies/ReturnoftheJedi.webp'
import MillenniumFalcon1 from './Starships/MillenniumFalcon.png'
import TIEAdvancedx2 from './Starships/TIEAdvancedx1.png'
import StarDestroyer1 from './Starships/StarDestroyer.png'
import CR90Corvette1 from './Starships/CR90Corvette.png'
import Slave2 from './Starships/Slave1.png'
import YWing1 from './Starships/Y-wing.png'

export const Starships: any = {
  MillenniumFalcon: MillenniumFalcon1,
  TIEAdvancedx1: TIEAdvancedx2,
  StarDestroyer: StarDestroyer1,
  CR90corvette: CR90Corvette1,
  Slave1: Slave2,
  Ywing: YWing1,
}

export const Planets: any = {
  Tatooine: tatooine,
}

export const Movies: any = {
  ThePhantomMenace: EpisodeI,
  AttackoftheClones: EpisodeII,
  RevengeoftheSith: EpisodeIII,
  ANewHope: EpisodeIV,
  TheEmpireStrikesBack: EpisodeV,
  ReturnoftheJedi: EpisodeVI,
}
