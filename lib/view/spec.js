// import { View } from 'lib';
//
// beforeEach(() => {
//   templates['test-template'] = Handlebars.compile('<p>{{value}}</p>');
// });
//
// describe('Lib View', () => {
//   it('should be defined', () => {
//     let instance = View('test-template');
//     expect(View).to.not.be.undefined;
//     expect(instance).to.not.be.undefined;
//   });
//
//   it('should render template with values', () => {
//     expect(View('test-template', { value: 'test' })).to.equal('<p>test</p>');
//   });
//
//   it('should throw an error if template doesn\'t exist', () => {
//     let errorMessage;
//
//     try {
//       View('idontexist');
//     } catch(e) {
//       errorMessage = e.message;
//     }
//
//     expect(errorMessage).to.equal('View file "idontexist" not found.');
//   });
// });
