import { describe, expect, it } from 'vitest';
import { projects } from '../src/data/projects';
import { tabooCards } from '../src/data/taboo-cards';
import { average, csvCell } from '../src/lib/content';
import { resources } from '../src/i18n/resources';
describe('content', () => {
  it('computes project averages', () => {
    expect(average(projects.filter((x) => x.level === 'TEK1').map((x) => x.grade))).toBeCloseTo(
      15.333,
    );
    expect(average(projects.filter((x) => x.level === 'TEK2').map((x) => x.grade))).toBeCloseTo(
      16.667,
    );
  });
  it('has nine unique projects', () => {
    expect(projects).toHaveLength(9);
    expect(new Set(projects.map((x) => x.slug)).size).toBe(9);
  });
  it('has a complete taboo deck', () => expect(tabooCards.length).toBeGreaterThanOrEqual(24));
  it('protects CSV exports from formulas', () =>
    expect(csvCell('=IMPORTXML()')).toBe('"\'=IMPORTXML()"'));
  it('keeps translation structures aligned', () =>
    expect(Object.keys(resources.fr.translation).sort()).toEqual(
      Object.keys(resources.en.translation).sort(),
    ));
});
