import { MONTHS } from '../../src/interfaces/CalendarTypes';
import reducer, { setMonth } from '../../src/redux/calendarSlice';

describe('calendarSlice reducers', () => {
  let initialState;
  const date = new Date();
  const currMonth = date.getMonth();
  const currYear = date.getFullYear();
  const monthKey = MONTHS[currMonth] + currYear;

  beforeEach(() => {
    initialState = {
      month: 0,
      year: 0,
      moods: [],
      storedMonths: {},
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...initialState });
  });

  describe('setMonth', () => {
    describe('for new months', () => {
      it('should update state to specified month and add to storedMonths', () => {
        const initialStore = initialState.storedMonths;
        const { month, year, moods, storedMonths } = reducer(initialState, setMonth(date));

        expect(month).toEqual(currMonth);
        expect(year).toEqual(currYear);
        expect(moods.length).toBeGreaterThan(28);
        expect(initialStore[monthKey]).toBeFalsy();
        expect(storedMonths[monthKey]).toBeTruthy();
      });
    });
    describe('for seen months', () => {
      it('should update state to specified month without adding to storedMonths', () => {
        const state1 = reducer(initialState, setMonth(date));
        const { month, year, moods, storedMonths } = reducer(state1, setMonth(date));

        expect(month).toEqual(currMonth);
        expect(year).toEqual(currYear);
        expect(moods.length).toBeGreaterThan(28);
        expect(state1.storedMonths[monthKey]).toBeTruthy();
        expect(storedMonths[monthKey]).toBeTruthy();
        expect(Object.keys(storedMonths).length).toEqual(1);
      });
    });
  });
});
