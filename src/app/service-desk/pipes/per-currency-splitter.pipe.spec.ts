import { PerCurrencySplitterPipe } from './per-currency-splitter.pipe';

describe('PerCurrencySplitterPipe', () => {
  it('create an instance', () => {
    const pipe = new PerCurrencySplitterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should display numbers as iran currency', () => {
    const pipe = new PerCurrencySplitterPipe();
    const number = 123445;
    expect(pipe.transform(number.toString())).toEqual(`${'123445'}`);
  });

});
