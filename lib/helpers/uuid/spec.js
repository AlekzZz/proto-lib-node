const extend = require('extend');
const UUID = require('./index');

describe('Lib Helpers UUID', () => {
  let instanceA;
  let instanceB;

  beforeEach(() => {
    instanceA = UUID({});
    instanceB = UUID({});
  });

  it('should be defined', () => {
    expect(UUID).to.not.be.undefined;
    expect(instanceA).to.not.be.undefined;
    expect(instanceA.id).to.not.be.undefined;
    expect(instanceB).to.not.be.undefined;
    expect(instanceB.id).to.not.be.undefined;
  });

  it('should have a uuid', () => {
    expect(instanceA.id.length).to.equal(36);
  });

  it('should have a unique uuid, different from other instances', () => {
    expect(instanceA.id).to.not.equal(instanceB.id);
  });
});
