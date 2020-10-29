import { Injectable } from "@angular/core";
import {
  IEventManagemantFormRequest,
  IEventManagemanetFormResponse,
  IEventManagementFormView,
} from "./modals";
import { EventManagementApiAdapter } from "./Adapters";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class EventManagemantService {
  constructor(private httpClient: HttpClient) {}

postTicketDetails(
    data: IEventManagemantFormRequest
  ): Observable<IEventManagementFormView[]> {
    return this.httpClient
      .post<IEventManagemanetFormResponse[]>(
        "http://localhost:3000/save-detail",
        data
      )
      .pipe(
        map((d) => {
          return EventManagementApiAdapter.to(d);
        })
      );
  }
}
