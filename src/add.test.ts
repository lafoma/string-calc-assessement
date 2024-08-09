import {describe, expect, test} from '@jest/globals';
import { add } from './add';

describe('String Addition TDD', () => {
  test('should add nums delimited by comma', () => {
    expect(add('1,5')).toBe(6);
  });
});


