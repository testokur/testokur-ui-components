import filterDataAttributes from './filterDataAttributes';

describe('filterDataAttributes', () => {
  it('should filter data- attributes', () => {
    const attributes = {
      id: 'abc',
      name: '123',
      'data-test': '1',
      'data-test2': '2',
    };
    expect(filterDataAttributes(attributes)).toEqual({
      'data-test': '1',
      'data-test2': '2',
    });
  });
});
