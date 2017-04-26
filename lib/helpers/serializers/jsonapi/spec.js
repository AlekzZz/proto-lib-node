const extend = require('extend');
const JsonApiSerializer = require('./index');
const sampleData = {
  id: 1,
  type: 'test-type',
  attributes: {
    firstName: 'Joe',
    lastName: 'Doe'
  }
};

describe('Lib Helpers Serializers JSONAPI', () => {
  let sampleDataStub;

  beforeEach(() => {
    sampleDataStub = Object.assign({}, sampleData);
  });

  it('should be defined', () => {
    expect(JsonApiSerializer).to.not.be.undefined;
  });

  it('should flatten jsonapi object', () => {
    expect(JsonApiSerializer(sampleDataStub)).to.deep.equal({
      id: sampleDataStub.id,
      type: sampleDataStub.type,
      firstName: sampleDataStub.attributes.firstName,
      lastName: sampleDataStub.attributes.lastName
    });
  });

  it('should hold no reference to passed object', () => {
    let serializedData = JsonApiSerializer(sampleDataStub);
    serializedData.testProp = 'test';
    sampleDataStub.testProp = 'test2';

    expect(serializedData).to.deep.equal({
      id: sampleDataStub.id,
      type: sampleDataStub.type,
      firstName: sampleDataStub.attributes.firstName,
      lastName: sampleDataStub.attributes.lastName,
      testProp: serializedData.testProp
    });

    expect(sampleDataStub).to.deep.equal({
      id: sampleDataStub.id,
      type: sampleDataStub.type,
      attributes: Object.assign({}, sampleDataStub.attributes),
      testProp: sampleDataStub.testProp
    });
  });
});
