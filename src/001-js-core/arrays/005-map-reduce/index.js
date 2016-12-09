import Presidents from '../datasets/presidents';

// Map
export const names = Presidents.map(p => p.name);

// Map + Filter
export const hasJamesInName = names.filter(name => name.includes('James'));

export const PresidentMadison = Presidents.filter(p => p.name.includes('James Madison'))
                                          .map(p => ({ name: p.name, party: p.party }))
                                          .reduce((prev, current) => current, {});