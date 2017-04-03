const extend = require('extend');
const Identifier = require('./index');

describe('Lib Helpers Identifier', () => {
  let instanceA;
  let instanceB;

  beforeEach(() => {
    instanceA = Identifier({});
    instanceB = Identifier({});
  });

  it('should be defined', () => {
    expect(Identifier).to.not.be.undefined;
    expect(instanceA).to.not.be.undefined;
    expect(instanceA.id).to.not.be.undefined;
    expect(instanceB).to.not.be.undefined;
    expect(instanceB.id).to.not.be.undefined;
  });

  it('should follow consecutive ID assignment', () => {
    expect(instanceB.id).to.equal(instanceA.id + 1);
  });
});
