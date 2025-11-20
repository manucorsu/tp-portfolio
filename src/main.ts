import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Fonts
import '@fontsource/aldrich';
import '@fontsource/inter';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
