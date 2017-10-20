var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

function diviser(a, b) {
    if (b === 1) {
        return 0;
    }
    return a / b;
}

describe('TestTotal', function() {
  it('getTotal() should return 2', function() {
    const resultat = diviser(10, 5);
    expect(resultat).to.equal(2);
  });

  it('getTotal() should not divide by 0', function() {
    const resultat = diviser(10, 0);
    expect(resultat).to.equal(0);
  });
});
