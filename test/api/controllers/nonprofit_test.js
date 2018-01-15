/* globals api, expect, describe, beforeEach, afterEach, it */

require('../helper');

const Nonprofit = require('../../../models/nonprofit');
// const Us er = require('../../../models/user');

describe('Nonprofits', function() {
  let token;

  beforeEach(done => {
    Nonprofit.collection.remove();
    // User.collection.remove();
    done();
  });

  afterEach(done => {
    Nonprofit.collection.remove();
    // User.collection.remove();
    done();
  });

  describe('GET /api/nonpofits', () => {
    beforeEach(done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'person',
          firstName: 'person',
          lastName: 'person',
          email: 'person@person.com',
          address: 'blah',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });

    beforeEach(done => {
      Nonprofit.create({
        name: 'bla',
        registration: 'bla',
        address: 'bla',
        website: 'bla'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq(
            'application/json; charset=utf-8'
          );
          done();
        });
    });

    it('should return an array of nonpofits', function(done) {
      api
        .get('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of nonpofits objects', function(done) {
      api
        .get('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'name',
              'registration',
              'address',
              'website',
              'createdAt',
              'updatedAt'

            ]);
          done();
        });
    });

    it('should have properties: _id, name, registation, address, website', function(done) {
      api
        .get('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          const firstnonprof = res.body[0];
          expect(firstnonprof)
            .to.have.property('_id')
            .and.to.be.a('string');
          expect(firstnonprof)
            .to.have.property('name')
            .and.to.be.a('string');
          expect(firstnonprof)
            .to.have.property('registration')
            .and.to.be.a('string');
          expect(firstnonprof)
            .to.have.property('address')
            .and.to.be.a('string');
          done();
        });
    });
  });

  describe('returns multiple nonpofits', () => {
    beforeEach(done => {
      Nonprofit.create([
        {
          name: 'bla',
          registration: 'bla',
          address: 'bla',
          website: 'bla'
        },
        {
          name: 'bla2',
          registration: 'bla2',
          address: 'bla2',
          website: 'bla2'
        }
      ])
        .then(() => done())
        .catch(done);
    });

    it('should create 2 nonpofits', done => {
      api
        .get('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body.length).to.equal(2);
          done();
        });
    });
  });

  describe('POST /api/nonpofits', () => {
    it('should return a 201 response', done => {
      api
        .post('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'bla',
          registration: 'bla',
          address: 'bla',
          website: 'bla'
        })
        .expect(201, done);
    });

    it('should create a new nonpofit', done => {
      api
        .post('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'bla',
          registration: 'bla',
          address: 'bla',
          website: 'bla'
        })
        .end((err, res) => {
          const nonpofit = res.body;

          expect(nonpofit)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(nonpofit)
            .to.have.property('name')
            .and.to.be.a('string');

          expect(nonpofit)
            .to.have.property('registation')
            .and.to.be.a('string');

          expect(nonpofit)
            .to.have.property('adress')
            .and.to.be.a('string');

          expect(nonpofit)
            .to.have.property('website')
            .and.to.be.a('string');

          expect(nonpofit)
            .to.have.property('createdAt')
            .and.to.be.a('string');

          expect(nonpofit)
            .to.have.property('updatedAt')
            .and.to.be.a('string');

          done();
        });
    });
  });

  describe('checking unique fields', function() {
    beforeEach(done => {
      api
        .post('/api/nonpofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'bla',
          registration: 'bla',
          address: 'bla',
          website: 'bla'
        })
        .then(() => done())
        .catch(() => done());
    });

    it('should not create a user with the same name, duplicate nonprofit', function(
      done
    ) {
      api
        .post('/api/nonprofits')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'bla',
          registration: 'bla',
          address: 'bla',
          website: 'bla'
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Bad Request');
          expect(res.body.errors).to.eq(
            'ValidationError: name: Path `name` (bla) is not unique.'
          );
          done();
        });
    });
  });
  describe('GET /api/nonprofits/:id', () => {
    let nonprofit;

    beforeEach(done => {
      Nonprofit.create({
        name: 'bla',
        registration: 'bla',
        address: 'bla',
        website: 'bla'
      })
        .then(nonprofitData => {
          nonprofit = nonprofitData;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/nonprofits/${nonprofit.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

    it('should return a JSON object', done => {
      api
        .get(`/api/nonprofits/${nonprofit.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq(
            'application/json; charset=utf-8'
          );
          done();
        });
    });
    it('should return object with properties:_id, name, registration, website, address, createdAt, updatedAt', done => {
      api
        .get(`/api/nonpofits/${nonprofit.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body).and.have.all.keys([
            '__v',
            '_id',
            'name',
            'registration',
            'address',
            'website',
            'createdAt',
            'updatedAt'
          ]);
          done();
        });
    });
  });

  describe('PUT /api/nonprofits/:id', () => {
    let nonprofit;

    beforeEach(done => {
      Nonprofit.create({
        name: 'bla',
        registration: 'bla',
        address: 'bla',
        website: 'bla'
      })
        .then(nonprofitData => {
          nonprofit = nonprofitData;
          done();
        })
        .catch(done);
    });

    it('should return 200 status', function(done) {
      api
        .put(`/api/nonprofits/${nonprofit.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'bla1',
          registration: 'bla',
          address: 'bla',
          website: 'bla'
        })
        .expect(200, done);
    });
    it('should return a JSON object', done => {
      api
        .get(`/api/nonprofits/${nonprofit.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq(
            'application/json; charset=utf-8'
          );
          done();
        });
    });
    it('should return object with properties: _id, name, registration, website, address, createdAt, updatedAt', done => {
      api
        .get(`/api/nonprofits/${nonprofit.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body).and.have.all.keys([
            '__v',
            '_id',
            'name',
            'registration',
            'address',
            'website',
            'createdAt',
            'updatedAt'
          ]);
          done();
        });
    });
    it('should return updated data', function(done) {
      api
        .put(`/api/nonprofits/${nonprofit.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'bla1',
          registration: 'bla',
          address: 'bla',
          website: 'bla'
        })
        .end((err, res) => {
          expect(res.body.name).to.be.eq('bla1');
          done();
        });
    });
  });

  describe('DELETE /api/nonprofits/:id', () => {
    let nonprofit;

    beforeEach(done => {
      Nonprofit.create({
        name: 'bla1',
        registration: 'bla',
        address: 'bla',
        website: 'bla'
      })
        .then(nonprofitData => {
          nonprofit = nonprofitData;
          done();
        })
        .catch(done);
    });

    it('should remove a nonprofit by id', function(done) {
      api
        .delete(`/api/nonprofits/${nonprofit.id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(204, done);
    });
  });
});
