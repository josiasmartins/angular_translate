import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TranslatesModule } from './core/translate/translate.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      TranslatesModule
    ]),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
