import { Component, Input } from '@angular/core';
import { load } from './index.server';
import { LoadResult, injectLoad } from '@analogjs/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular2! </h3>

    <p>Is Edge? {{ data().edge }}</p>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

    <p class="read-the-docs">
      For guides on how to customize this project, visit the
      <a href="https://analogjs.org" target="_blank">Analog documentation</a>
    </p>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {

  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
  count = 0;

  increment() {
    this.count++;
  }
}



