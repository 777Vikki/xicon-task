import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { EventManagemantService } from "./event-managemant.service";
import { IEventManagemantFormRequest, IEventmanagementTicket } from "./modals";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  eventManagementForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private eventManagementService: EventManagemantService
  ) {}

  ngOnInit() {
    this.createEventManagementForm();
  }

  createEventManagementForm() {
    this.eventManagementForm = this.fb.group({
      eventName: [""],
      eventDesc: [""],
      startDate: [""],
      endDate: [""],
      organizer: [""],
      tickets: this.fb.array([]),
    });
  }

  get tickets() {
    return this.eventManagementForm.get("tickets") as FormArray;
  }

  addTicket() {
    this.tickets.insert(
      0,
      this.fb.group({
        id: ["", [Validators.required]],
        ticketNo: ["", [Validators.required]],
        price: ["", [Validators.required]],
        isSave: [false],
      })
    );
  }

  removeRow(index: number) {
    this.tickets.removeAt(index);
  }

  checkDisabled(): boolean {
    if (
      this.eventManagementForm.value.tickets.length === 0 ||
      this.eventManagementForm.invalid
    ) {
      return true;
    }
  }

  saveDetail(index: number) {
    this.tickets.at(index).patchValue({
      isSave: !this.eventManagementForm.value.tickets[index].isSave,
    });
  }

  getD(isSave) {
    console.log(isSave);
  }

  getTicket(ticket) {
    console.log(ticket);
  }

  onSubmit() {
    const checkEverySave = this.eventManagementForm.value.tickets.every(
      (ticket) => ticket.isSave
    );
    if (!checkEverySave) {
      this.toastrService.warning("Please save all the tickets");
      return;
    }
    const formDetail: IEventManagemantFormRequest = {
      eventName: this.eventManagementForm.value.eventName,
      eventDesc: this.eventManagementForm.value.eventDesc,
      startDate: this.eventManagementForm.value.startDate,
      endDate: this.eventManagementForm.value.endDate,
      organizer: this.eventManagementForm.value.organizer,
      tickets: this.eventManagementForm.value.tickets.map((d) => {
        const ticketDetail: IEventmanagementTicket = {
          ticketId: d.id,
          ticketNo: d.ticketNo,
          price: d.price,
        };
        return ticketDetail;
      }),
    };
    this.eventManagementService.postTicketDetails(formDetail).subscribe((d) => {
      console.log(d);
    });
  }
}
