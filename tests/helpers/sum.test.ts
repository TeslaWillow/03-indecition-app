import { addArray, sum } from '@/helpers/sum';
import { describe } from 'node:test';
import { expect, test } from 'vitest';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 4;

    // Estimulo
    const result = sum(a, b);

    // Comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('Sum numbers on array', () => {
    // preparacion
    const arr: number[] = [];
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      const number = Math.round(Math.random() * 10);
      counter += number;
      arr.push(number);
    }

    // Estimulo
    const result = addArray(arr);

    // Comportamiento esperado
    expect(result).toBe(counter);
  });

  test('Sum numbers of all Zero', () => {
    // preparacion
    const arr: number[] = [];

    // Estimulo
    const result = addArray(arr);

    // Comportamiento esperado
    expect(result).toBe(0);
  });
});
