const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return an error if "fullName" if different than string ', () => {
    expect(formatFullname(1)).to.equal('Error');
  });
  it('should return an error if date format is different than expected', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
});
