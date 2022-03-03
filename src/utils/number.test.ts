import { clamp, limitDecimals } from './number';

describe('limitDecimals', () => {
  it('returns 2 decimals by default', () => {
    const value = limitDecimals(12.12212);
    expect(value).toBe('12.12');
  });

  it('returns 3 decimals', () => {
    const value = limitDecimals(12.12212, 3);
    expect(value).toBe('12.122');
  });
});

describe('clamp', () => {
  it('returns number between min and max', () => {
    expect(clamp(-50, -20, 200)).toBe(-20);
    expect(clamp(1000, 10, 50)).toBe(50);
    expect(clamp(23.23, 0, 200)).toBe(23.23);
  });
});

export {};
