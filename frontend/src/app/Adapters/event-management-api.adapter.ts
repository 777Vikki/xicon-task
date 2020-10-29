import {
  IEventManagemanetFormResponse,
  IEventManagementFormView,
} from "../modals";
export class EventManagementApiAdapter {
  static to(data: IEventManagemanetFormResponse[]): IEventManagementFormView[] {
    return [...data];
  }
}
