import { ApplicationConfig, importProvidersFrom, Provider } from '@angular/core';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export function getBaseUrlProvider(baseUrl: string): Provider {
  return { provide: 'baseUrl', useValue: baseUrl, multi: true };
}

export const appConfig: ApplicationConfig = (baseUrl: string): ApplicationConfig => ({
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideEnvironmentNgxMask(),
    provideHttpClient(),
    getBaseUrlProvider(baseUrl),
    { provide: 'Url', useValue: baseUrl, multi: true },
    { provide: 'authApiUrl', useValue: `${baseUrl}/authapi/api`, multi: true },
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: [baseUrl, `${baseUrl}/authapi`],
        },
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
  ],
});

export function tokenGetter() {
  return sessionStorage.getItem('access_token');
}
