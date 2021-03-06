require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.be.String();

    data.should.have.property('name');
    data.code.should.be.String();

    data.should.have.property('divisionId');
    data.divisionId.should.be.Object();

    data.should.have.property('division');
    data.division.should.be.Object();

    // data.should.have.property('storeId');
    // data.storeId.should.be.Object();

    // data.should.have.property('store');
    // data.store.should.be.Object();

    data.should.have.property('description');
    data.description.should.be.String();

};