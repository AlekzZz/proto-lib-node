const extend = require('extend');
const Setuper = require('./index');
const optionsStub = {
  nameA: 'SetuperTestA'
};
const protoStub = {
  defaults: {
    nameB: 'SetuperTestB'
  }
};

// const TestControl = Setuper({
//   options: optionsStub
// });

describe('Lib Helpers Setuper', () => {
  it('should be defined', () => {
    expect(Setuper).to.not.be.undefined;
  });

  it('should set options', () => {
    let expected = JSON.stringify(extend(protoStub.defaults, optionsStub));
    let result = JSON.stringify(Setuper({ options: optionsStub, proto: protoStub }).options);

    expect(expected).to.equal(result);
  });

  it('should work with empty options and without proto', () => {
    let { options } = Setuper({ options: {} });
    expect(options).to.deep.equal({});
  });

  it('should work without options', () => {
    let { options } = Setuper();
    expect(options).to.deep.equal({});
  });
});
