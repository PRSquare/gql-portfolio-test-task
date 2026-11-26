import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import type { Request, Response } from 'express';
import express from 'express';
import { AppModule } from '../src/module/app.module';

const server = express();
const adapter = new ExpressAdapter(server);

let appPromise: ReturnType<typeof NestFactory.create>;

async function getApp() {
  if (!appPromise) {
    appPromise = NestFactory.create(AppModule, adapter).then(async (app) => {
      await app.init();
      return app;
    });
  }

  return appPromise;
}

export default async function handler(req: Request, res: Response) {
  res.status(200).send('API function is running');
//  await getApp();
//  server(req, res);
}
