import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/module/app.module.js';

describe('AppResolver (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('runs the profile query', async () => {
    const query = `query { profile {name} }`;

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200);

    expect(response.body)
  });

  
  it('have my data', async () => {
    const query = `query { profile {name} }`;

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200);

    expect(response.body).toEqual({data: {profile: {name: "Ivan Loznitsa"}}});
  });
  
  afterEach(async () => {
    await app.close();
  });
});
