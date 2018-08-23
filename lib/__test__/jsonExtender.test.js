/**
 * Unit test for json server extender.
 */

const jsonExtender = require('../jsonExtender');
const path = require('path');

describe('JsonExtender', () => {
  it('Sould have been instantiated with the specified parameters.', () => {
    const je = new jsonExtender({ filePath: 'db.json', generatedPath: './gen', staticPath: './static' });
    expect(je).toHaveProperty('register');
    expect(je).toHaveProperty('generate');
    expect(je).toHaveProperty('createJson');
    expect(je).toHaveProperty('extend');
    expect(je.filePath).toBe('db.json');
    expect(je.generatedPath).toBe('./gen');
    expect(je.staticPath).toBe('./static');
  });
  it('Sould have been instantiated with the specified parameters.', () => {
    const je = new jsonExtender({ filePath: 'db.json' });
    expect(je).toHaveProperty('register');
    expect(je).toHaveProperty('generate');
    expect(je).toHaveProperty('createJson');
    expect(je).toHaveProperty('extend');
    expect(je.filePath).toBe('db.json');
    const libPath = path.normalize(`${__dirname}\\..`)
    expect(je.generatedPath).toBe(`${libPath}/generated`);
    expect(je.staticPath).toBe(`${libPath}/static`);
  });
  describe('register', () => {
    it('', () => {

    });
  });
});