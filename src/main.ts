import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers!,
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ]
})
  .catch((err) => console.error(err));
