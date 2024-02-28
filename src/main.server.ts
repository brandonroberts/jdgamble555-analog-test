import 'zone.js/node';
import '@angular/platform-server/init';

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { renderApplication } from '@angular/platform-server';

import { config as appConfig } from './app/app.config.server';
import { AppComponent } from './app/app.component';

if (import.meta.env.PROD) {
  enableProdMode();
}

export function bootstrap() {
  return bootstrapApplication(AppComponent, appConfig);
}

export default async function render(url: string, document: string) {
  const html = await renderApplication(bootstrap, {
    document,
    url,
  });

  return html;
}

export const config = {
  runtime: 'edge',
};
