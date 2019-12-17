import inputNumber from '../src/app';

test('Введено не число - example', () => {
  const expected = 'error';
  const received = inputNumber('example');

  expect(received).toBe(expected);
});

test('Введено число 5', () => {
  const expected = 5;
  const received = inputNumber('5');

  expect(received).toBe(expected);
});

test('Введено не число - 0x5A3', () => {
  const expected = 'error';
  const received = inputNumber('0x5A3');

  expect(received).toBe(expected);
});

test('Введено не число - пробел', () => {
  const expected = 'error';
  const received = inputNumber(' ');

  expect(received).toBe(expected);
});