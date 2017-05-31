const extend = require('extend');
const Service = require('./index');

let testUsersStore = [
  { id: '1', firstName: 'Joe', lastName: 'Doe' },
  { id: '2', firstName: 'Nick', lastName: 'Nilson' },
  { id: '3', firstName: 'John', lastName: 'Smith' }
];
let testUserModel = (attrs) => extend(true, attrs, {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
})

const TestService = Service({
  model: (instance) => instance,
  fetchOne(id) {
    return this.hydrateModel(testUsersStore.find((item) => item.id === id));
  },
  fetchAll() {
    return this.hydrateModels(testUsersStore);
  }
});

describe('Lib Service', () => {
  it('should be defined', () => {
    expect(Service).to.not.be.undefined;
    expect(TestService).to.not.be.undefined;
  });

  it('should be overridable', () => {
    let instance2 = TestService({ model: testUserModel });
    let hydratedModel = instance2.fetchOne('1');
    expect(hydratedModel.fullName).to.not.be.undefined;
    expect(hydratedModel.fullName()).to.be.equal(`${hydratedModel.firstName} ${hydratedModel.lastName}`);
  });
});
