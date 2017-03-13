import { Model } from 'lib';
const spy = sinon.spy();
const TestModel = Model({
  init() {}
});

describe('Lib Model', () => {
  let attrsA = {
    firstName: 'Joe',
    lastName: 'Doe'
  };
  let attrsB = {
    firstName: 'Terry',
    lastName: 'Fox'
  };
  let instanceA;
  let instanceB;

  beforeEach(() => {
    instanceA = TestModel(attrsA);
    instanceB = TestModel(attrsB);
  });

  // Tests
  it('should be defined', () => {
    expect(Model).to.not.be.undefined;
    expect(instanceA).to.not.be.undefined;
    expect(instanceB).to.not.be.undefined;
  });

  it('should merge attributes', () => {
    // JSON.stringify strips out functions, therefore we can test attributes only this way
    expect(JSON.stringify(instanceA)).to.be.equal(JSON.stringify(attrsA));
    expect(JSON.stringify(instanceB)).to.be.equal(JSON.stringify(attrsB));
  });

  it('should trigger init() special method if defined', () => {
    let initSpy = sinon.spy();
    let TestInit = Model({ init: initSpy });
    let instanceInit = TestInit({});

    assert(initSpy.calledOnce);
  });
});
