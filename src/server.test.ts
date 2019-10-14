import * as request from 'supertest';
import * as server from './server';

describe('Post /add', () => {
    it('2 + 2 should be equal to 4', async () => {
        const res: request.Response = await request(server.app)
            .post('/add')
            .send({
                a: 2,
                b: 2,
            });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toEqual(4);
    });

    it('No input should be equal to 0', async () => {
      const res = await request(server.app)
          .post('/add')
          .send({});
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('result');
      expect(res.body.result).toEqual(0);
    });
});

describe('Post /subtract', () => {
    it('5 - 4 should be equal to 1', async () => {
        const res = await request(server.app)
            .post('/subtract')
            .send({
                a: 5,
                b: 4,
            });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toEqual(1);
    });

    it('No input should be equal to 0', async () => {
        const res = await request(server.app)
            .post('/subtract')
            .send({});
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toEqual(0);
    });
});

describe('Post /mulitply', () => {
    it('11 - 3 should be equal to 33', async () => {
        const res = await request(server.app)
            .post('/multiply')
            .send({
                a: 11,
                b: 3,
            });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toEqual(33);
    });

    it('No input should be equal to 0', async () => {
        const res = await request(server.app)
            .post('/multiply')
            .send({});
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toEqual(0);
    });
});

describe('Post /divide', () => {
    it('20 - 2 should be equal to 10', async () => {
        const res = await request(server.app)
            .post('/divide')
            .send({
                a: 20,
                b: 2,
            });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toEqual(10);
    });

    it('No input should be equal to 0', async () => {
        const res = await request(server.app)
            .post('/divide')
            .send({});
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('result');
        expect(res.body.result).toEqual(0);
    });
});