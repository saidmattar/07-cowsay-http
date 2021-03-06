'use strict';

const server = require('../server.js');
const superagent = require('superagent');
require('jest');
describe('Testing the server file', function () {
  afterAll((done) => {
    server.close();
    done();
  });

  describe('POST method, / endpoint', () => {

    test('should return a status code of 200', done => {
      superagent.post('localhost:3000/')
      .send({})
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        done();
      });
    });

    test('undefined endpoint', done => {
      superagent.get('localhost:3000/')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        done();
      });
    });

    test('undefined endpoint', done => {
      superagent.post('localhost:3000/')
      .send({'value': 'scott'})
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        done();
      });
    });

    test('should respond with user input', done => {
      superagent.get('localhost:3000/cawsay')
      .end((err, res) => {
        if(err) return done(err);
        expect(res.text).toEqual(req.url.query.text);
        done();
      });
    });
  });

  // describe('requests to any other route', () => {
  //   describe('correctly formatted', () => {
  //     test('a GET request', done => {
  //       done();
  //     });
  //     test('a POST request', done => {
  //       done();
  //     });
  //   });
  //   describe('incorrectly formatted', () => {
  //     test('a GET request', done => {
  //       done();
  //     });
  //     test('a POST request', done => {
  //       done();
  //     });
  //   });
  // });
});
