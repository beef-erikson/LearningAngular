import { InjectionToken } from "@angular/core";

export interface AppConfig {
  title: string,
  version: number;
}

export const appSettings: AppConfig = {
  title: "Beef's Wondorium Emporium",
  version: 1.1
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
