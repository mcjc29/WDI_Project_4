// /* globals api, expect, describe, beforeEach, afterEach, it */
//
// require('../spec_helper');
//
// const User = require('../../../models/user');
//
// describe('Ratings', function() {
//   let token;
//
//   beforeEach(done => {
//     User.collection.remove();
//     done();
//   });
//
//   afterEach(done => {
//     User.collection.remove();
//     done();
//   });
//
//   describe('GET /api/ratings', () => {
//     beforeEach(done => {
//       api
//         .post('/api/register')
//         .set('Accept', 'application/json')
//         .send({
//           username: 'person',
//           firstName: 'person',
//           lastName: 'person',
//           email: 'person@person.com',
//           address: 'blah',
//           password: 'password',
//           passwordConfirmation: 'password'
//         })
//         .end((err, res) => {
//           token = res.body.token;
//           done();
//         });
//     });
//
//     beforeEach(done => {
//       User.create({
//         firstName: 'person2',
//         lastName: 'person2',
//         role: 'student',
//         cohort: 'WDI-30',
//         email: 'person2@person2.com',
//         password: 'password',
//         passwordConfirmation: 'password'
//       })
//         .then(user => {
//           return Rating.create({
//             createdBy: user,
//             pace: 10,
//             concepts: 10,
//             syntax: 10,
//             confidence: 10,
//             message: 'lovin it'
//           });
//         })
//         .then(() => done())
//         .catch(done);
//     });
//
//     it('should return a 200 response', done => {
//       api
//         .get('/api/ratings')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${token}`)
//         .expect(200, done);
//     });
//
//     it('should return a JSON object', done => {
//       api
//         .get('/api/ratings')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${token}`)
//         .end((err, res) => {
//           expect(res.header['content-type']).to.be.eq(
//             'application/json; charset=utf-8'
//           );
//           done();
//         });
//     });
//
//
//     it('should have properties: _id, createdBy, rating, createdAt, updatedAt', function(
//       done
//     ) {
//       api
//         .get('/api/ratings')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${token}`)
//         .end((err, res) => {
//           const firstRating = res.body[0];
//           expect(firstRating)
//             .to.have.property('_id')
//             .and.to.be.a('string');
//           expect(firstRating)
//             .to.have.property('createdBy')
//             .and.to.be.a('object');
//           expect(firstRating)
//             .to.have.property('pace')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('concepts')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('syntax')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('confidence')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('message')
//             .and.to.be.a('string');
//           done();
//         });
//     });
//   });
//
//   describe('returns multiple ratings', () => {
//     beforeEach(done => {
//       api
//         .post('/api/register')
//         .set('Accept', 'application/json')
//         .send({
//           firstName: 'person',
//           lastName: 'person',
//           image: 'person',
//           role: 'student',
//           cohort: 'WDI-30',
//           email: 'person@person.com',
//           password: 'password',
//           passwordConfirmation: 'password'
//         })
//         .end((err, res) => {
//           token = res.body.token;
//           done();
//         });
//     });
//
//     beforeEach(done => {
//       User.create({
//         firstName: 'person2',
//         lastName: 'person2',
//         role: 'student',
//         cohort: 'WDI-30',
//         email: 'person2@person2.com',
//         password: 'password',
//         passwordConfirmation: 'password'
//       })
//         .then(user => {
//           return Rating.create([
//             {
//               createdBy: user,
//               pace: 10,
//               concepts: 10,
//               syntax: 10,
//               confidence: 10,
//               message: 'lovin it'
//             },
//             {
//               createdBy: user,
//               pace: 11,
//               concepts: 10,
//               syntax: 11,
//               confidence: 11,
//               message: 'yay'
//             }
//           ]);
//         })
//         .then(() => done())
//         .catch(done);
//     });
//
//     it('should create 2 ratings', done => {
//       api
//         .get('/api/ratings')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${token}`)
//         .end((err, res) => {
//           expect(res.body.length).to.equal(2);
//           done();
//         });
//     });
//   });
//
//   describe('POST /api/ratings', () => {
//     it('should return a 201 response', done => {
//       api
//         .post('/api/ratings')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${token}`)
//         .send({
//           createdBy: 'person',
//           pace: 10,
//           concepts: 10,
//           syntax: 10,
//           confidence: 10,
//           message: 'lovin it'
//         })
//         .expect(201, done);
//     });
//
//     it('should create a new rating', done => {
//       api
//         .post('/api/ratings')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${token}`)
//         .send({
//           createdBy: 'person',
//           pace: 10,
//           concepts: 10,
//           syntax: 10,
//           confidence: 10,
//           message: 'lovin it'
//         })
//         .end((err, res) => {
//           const firstRating = res.body;
//
//           expect(firstRating)
//             .to.have.property('_id')
//             .and.to.be.a('string');
//           expect(firstRating)
//             .to.have.property('createdBy')
//             .and.to.be.a('string');
//           expect(firstRating)
//             .to.have.property('pace')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('concepts')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('syntax')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('confidence')
//             .and.to.be.a('number');
//           expect(firstRating)
//             .to.have.property('message')
//             .and.to.be.a('string');
//           expect(firstRating)
//             .to.have.property('createdAt')
//             .and.to.be.a('string');
//
//           expect(firstRating)
//             .to.have.property('updatedAt')
//             .and.to.be.a('string');
//
//           done();
//         });
//     });
//   });
// });
