const { server } = require('../src/server')
const supertest = require('supertest');
const mockreq = supertest(server);


const req = {};


describe('api server', (req, res) => {

  it('id unvalid', async () => {

    const response = await mockreq.get(`/food`);

    expect(response.status).toBe(200)
  })

  it('id unvalid', async () => {

    const response = await mockreq.get(`/food/ttt`);

    expect(response.status).toBe(500)
  })
  it('bad', async () => {

    const response = await mockreq.get(`/bad`);

    expect(response.status).toBe(404)
  })


})



function serialise(obj) {
  return Object.keys(obj)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');
}

describe('Test post /', () => {
  test('POST /example succeeds (200 OK)', () => {
    const toSend = {
      name: 'apple',
    };

    return supertest(server).post('/food').send(serialise(toSend)).expect(200);
  });


});
describe('Test delete /', () => {

  test('delete /example succeeds (204 OK) ', async () => {
    const toSend = {
      name: 'apple',
      id: '9-9-9'
    };
    await mockreq.post('/food').send(serialise(toSend))

    return supertest(server).delete(`/food/9-9-9`).send(serialise(toSend)).expect(204);
  });
});

describe('Test ubdate /', () => {

  test('put /example succeeds (200 OK) ', async () => {
    const toSend = {
      name: 'apple',
      id: '9-9-9'
    };
    await mockreq.post('/food').send(serialise(toSend))

    return supertest(server).put(`/food/9-9-9`).send(serialise(toSend)).expect(200);
  });
});