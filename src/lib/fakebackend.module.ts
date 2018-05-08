import { NgModule, InjectionToken } from '@angular/core';
import { HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteInterceptor } from './RouteInterceptor';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Route } from './routes';
import { ROUTES } from './constants';

@NgModule()
export class FakebackendModule { 
  static forRoutes(route: Route[]): ModuleWithProviders {
     return {
        ngModule: FakebackendModule,
        providers: [
          {
            provide: ROUTES,
            useValue: route
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: RouteInterceptor,
            multi: true,
          }
        ]
     };
  }
}




