import { Observable } from "rxjs";

import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Route } from "./routes";
import { ROUTES } from "./constants";

@Injectable()
export class RouteInterceptor implements HttpInterceptor {

    private routes: Route[];
    constructor(@Inject(ROUTES) iRoutes) {
        this.routes = iRoutes;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        var routeHandler: Route = this.routes.find(route => {
            return route.method.toLocaleUpperCase() == req.method && req.url.endsWith(route.path);
        });

        return routeHandler != null ? routeHandler.intercept(req) : new Observable<any>();
    }
}