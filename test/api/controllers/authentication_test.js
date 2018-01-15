/* globals api, expect, describe, beforeEach, afterEach, it */
require('../helper');

const User = require('../../../models/user');

describe('Authentications', function() {
  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('POST /api/register', function() {
    it('should register a user with the correct credentials', function(done) {
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
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Welcome person');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });

    describe('checking unique fields', function() {
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
          .then(() => done())
          .catch(() => done());
      });

      it('should not register a user with the same email, duplicate email', function(
        done
      ) {
        api
          .post('/api/register')
          .set('Accept', 'application/json')
          .send({
            username: 'person1',
            firstName: 'person1',
            lastName: 'person1',
            email: 'person@person.com',
            address: 'blah1',
            password: 'password1',
            passwordConfirmation: 'password1'
          })
          .end((err, res) => {
            expect(res.status).to.eq(400);
            expect(res.body).to.be.a('object');
            expect(res.body.message).to.eq('Bad Request');
            expect(res.body.errors).to.eq(
              'ValidationError: email: Error, expected `email` to be unique. Value: `person@person.com`'

            );
            done();
          });
      });
    });

    it('should not register a user without a first name', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'person',
          lastName: 'person',
          email: 'person@person.com',
          address: 'blah',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.eq(
            'ValidationError: firstName: This field is required.'
          );
          expect(res.body.message).to.eq('Bad Request');
          done();
        });
    });
    it('should not register a user without an email', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'person',
          firstName: 'person',
          lastName: 'person',
          address: 'blah',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.eq(
            'ValidationError: email: This field is required.'
          );
          expect(res.body.message).to.eq('Bad Request');
          done();
        });
    });
    it('should not register a user without an address', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'person',
          firstName: 'person',
          lastName: 'person',
          email: 'person@person.com',
          password: 'password',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.eq(
            'ValidationError: address: Path `address` is required.'
          );
          expect(res.body.message).to.eq('Bad Request');
          done();
        });
    });
    it('should not register a user without a password', function(done) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'person',
          firstName: 'person',
          lastName: 'person',
          email: 'person@person.com',
          address: 'blah',
          passwordConfirmation: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.eq(
            'ValidationError: password: Path `password` is required.'
          );
          expect(res.body.message).to.eq('Bad Request');
          done();
        });
    });
    it('should not register a user with no password confirmation', function(
      done
    ) {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          username: 'person',
          firstName: 'person',
          lastName: 'person',
          email: 'person@person.com',
          address: 'blah',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.eq(
            'ValidationError: passwordConfirmation: Passwords do not match.'
          );
          expect(res.body.message).to.eq('Bad Request');
          done();
        });
    });
  });

  describe('POST /api/login', function() {
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
        .end(() => {
          done();
        });
    });

    it('should login a user with the correct credentials', function(done) {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'person@person.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Welcome back person');
          expect(res.body.token).to.be.a('string');
          done();
        });
    });
    it('should not login a user without an email', function(done) {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(401);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Invalid credentials.');
          expect(Object.keys(res.body)).to.not.include('token');
          done();
        });
    });
    it('should not login a user with the wrong password', function(done) {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'person@person.com',
          password: '123123'
        })
        .end((err, res) => {
          expect(res.status).to.eq(401);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Invalid credentials.');
          expect(Object.keys(res.body)).to.not.include('token');
          done();
        });
    });
  });
});
