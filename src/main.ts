import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {...appConfig,
  providers: [
    provideRouter(routes),
    provideClientHydration(),
  ]
})

  .catch((err) => console.error(err));
