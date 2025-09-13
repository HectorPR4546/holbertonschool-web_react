import { hello } from '../js/main';

describe('hello', () => {
  it('greets by name', () => {
    expect(hello('Holberton')).toBe('Hello, Holberton!');
  });
});

