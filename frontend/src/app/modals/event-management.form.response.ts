export interface IEventManagemanetFormResponse {
  _id: string;
  eventName: string;
  eventDesc: string;
  startDate: Date;
  endDate: Date;
  organizer: string;
  tickets: IEventmanagementTicketResponse[];
}

interface IEventmanagementTicketResponse {
  _id: string;
  ticketId: string;
  ticketNo: string;
  price: string;
}
