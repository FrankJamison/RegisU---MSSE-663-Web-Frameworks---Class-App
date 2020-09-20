import { HeroesState } from './store/heroes-state.model';
import { HEROES_INITIAL_MOCK_STATE } from './store/heroes-initial-mock-state';
import { loadHero } from './store';
import { heroesReducer } from './store/reducers/heroes.reducer';
import { state } from '@angular/animations';

// import { state } from '@angular/animations';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HeroTableComponent } from './hero-table.component';
// import { getHeroes, loadHero } from './store';
// import { HeroesState } from './store/heroes-state.model'
// import { HEROES_INITIAL_MOCK_STATE } from './store/heroes-initial-mock-state';

// describe('HeroTableComponent', () => {
//   let component: HeroTableComponent;
//   let fixture: ComponentFixture<HeroTableComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [HeroTableComponent],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeroTableComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should display a list of heroes', () => {
//     expect(component.heroes$).toEqual(component.heroes$);
//   });
// });

describe('HeroTableComponent', () => {
  it('should display a list of heroes', () => {
    const action = loadHero();
    const expected: HeroesState = {
      ...HEROES_INITIAL_MOCK_STATE,
      heroes: HEROES_INITIAL_MOCK_STATE.heroes,
      // loading: false,
    };
    const actual = heroesReducer(HEROES_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(jasmine.objectContaining({
      heroes: jasmine.arrayContaining([
        jasmine.objectContaining({
          id: 1,
          ranking: "S",
          name: 'Spiderman',
          specialty: 'Superhuman abilities and reflexes',
          rent: 1000,
          hired: false,
        })
      ])
    }));
  });
});