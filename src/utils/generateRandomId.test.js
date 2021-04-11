import { generateRandomId } from '.';

describe('generateRandomId', () => {
  it('should generate id', () => {
    const generatedId = generateRandomId('test');
    expect(generatedId).toContain('test');
    expect(generatedId).not.toEqual('test');
  });
});
