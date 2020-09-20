// import { Rank } from '../models/hero.model';
import { HeroesState } from './heroes-state.model';

export const HEROES_INITIAL_MOCK_STATE: HeroesState = {
  heroes: [
    {
      id: 1,
      ranking: 'S',
      name: 'Spiderman',
      specialty: 'Superhuman abilities and reflexes',
      rent: 1000,
      hired: false,
    },
  ],
};
