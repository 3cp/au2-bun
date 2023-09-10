import { render } from './helper';
import { MyApp } from '../src/my-app';
import { expect, test, describe } from "bun:test";

describe('my-app', () => {
  test('should render message', async () => {
    const node = (await render('<my-app></my-app>', MyApp)).firstElementChild;
    const text =  node.textContent;
    expect(text.trim()).toBe('Hello World!');
  });
});
