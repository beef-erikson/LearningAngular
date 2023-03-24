import { Component, Inject, OnDestroy } from '@angular/core';
import {APP_CONFIG, appSettings, AppConfig } from "./app.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_CONFIG, useValue: appSettings}]
})

export class AppComponent implements OnDestroy {
  title;
  version;
  today = new Date();

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
    this.version = config.version;
  }

  ngOnDestroy() {
    console.log('Boom!');
  }
}
