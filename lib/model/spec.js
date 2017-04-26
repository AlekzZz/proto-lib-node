const Model = require('./index');

const spy = sinon.spy();
const TestModel = Model({
  init() {}
});

describe('Lib Model', () => {
  let attrsA = {
    id: 'modelA',
    firstName: 'Joe',
    lastName: 'Doe'
  };
  let attrsB = {
    id: 'modelB',
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

  it('should allow for custom serializer', () => {
    let serializerSpy = sinon.spy();
    let TestSerializer = Model({}, {
      serializer(data) {
        serializerSpy.call(this);
        return data;
      }
    });
    let testAttr = 'myTest';
    let instanceWithCustomSerializer = TestSerializer({ testAttr });

    assert(serializerSpy.calledOnce);
    expect(instanceWithCustomSerializer).to.be.deep.equal({ id: instanceWithCustomSerializer.id, testAttr });
  });
});
