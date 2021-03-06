const extend = require('extend');
const Controller = require('./index');

const defaultsStub = { fullName: 'TestControl' };
const optionsStubA = { shortName: 'TestCtrlA' };
const optionsStubB = { shortName: 'TestCtrlB' };

const TestControl = Controller({
  defaults: defaultsStub
});

describe('Lib Controller', () => {
  let instanceA;
  let instanceB;

  beforeEach(() => {
    instanceA = TestControl(optionsStubA);
    instanceB = TestControl(optionsStubB);
  });

  it('should be defined', () => {
    expect(Controller).to.not.be.undefined;
    expect(instanceA).to.not.be.undefined;
    expect(instanceB).to.not.be.undefined;
  });

  it('should set options', () => {
    let expected = JSON.stringify(instanceA.options);
    let result = JSON.stringify(extend(Object.assign({}, defaultsStub), Object.assign({}, optionsStubA)));

    expect(expected).to.equal(result);
  });

  it('should work without options', () => {
    let blankInstance = TestControl();
    expect(blankInstance.options).to.deep.equal(defaultsStub);
  });

  it('should not pollute options when using multiple instances', () => {
    const SecondControl = Controller({});
    let testA = SecondControl({ name: 'TestA' });
    let testB = SecondControl({ name: 'TestB' });

    expect(testA.options.name).to.equal('TestA');
    expect(testB.options.name).to.equal('TestB');
  });

  it('should trigger init() special method if defined', () => {
    let initSpy = sinon.spy();
    let TestInit = Controller({ init: initSpy });
    let instanceInit = TestInit({});

    assert(initSpy.calledOnce);
    expect(instanceInit).to.not.be.undefined;
  });

  it('should trigger setup() special method if defined', () => {
    let setupSpy = sinon.spy();
    let TestSetup = Controller({
      setup() {
        setupSpy();
        return {};
      }
    });
    let instanceSetup = TestSetup({});

    assert(setupSpy.calledOnce);
    expect(instanceSetup).to.not.be.undefined;
  });
});
