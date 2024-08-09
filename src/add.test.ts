import {describe, expect, test} from '@jest/globals';
import { add } from './add';

describe('String Addition TDD', () => {
  test('should add nums delimited by comma', () => {
    expect(add('1,5')).toBe(6);
  });
  test('should return 0 when a blank string is provided as input', () => {
    expect(add('')).toBe(0);
  })
  test('should handle new lines between numbers. for e.g. add("1\n2,3") would output 6', () => {
    expect(add('1\n2,3')).toBe(6);
  })

});


