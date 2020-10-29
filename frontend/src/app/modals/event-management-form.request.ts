import { IEventmanagementTicket } from "./event-management-ticket.modal";

export interface IEventManagemantFormRequest {
  eventName: string;
  eventDesc: string;
  startDate: Date;
  endDate: Date;
  organizer: string;
  tickets: IEventmanagementTicket[];
}
