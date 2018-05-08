import { HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Route {
    method: string;
    path: string;
    intercept: (request: HttpRequest<any>) => Observable<any>;
  }