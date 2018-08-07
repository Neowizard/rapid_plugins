import {Component, OnInit} from '@angular/core';
import {ISmsNotif} from "../@core/backend/sms/sms.model";
import {SmsService} from "../@core/backend/sms/sms.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SmsProviderModal} from "./providers/sms-provider.modal";

@Component({
  selector: 'sms-page',
  template: `
    <nb-card>
      <nb-card-header>
        <div row>
          <span title>תזכורות SMS</span>
          <nb-action setup (click)="showSettings()" icon="nb-gear"></nb-action>

        </div>
      </nb-card-header>
      <nb-card-body>
        <div *ngFor="let notif of notifs">
          <sms-config [notif]="notif"></sms-config>
        </div>
      </nb-card-body>
    </nb-card>`,
  styles: [`
    :host {
    }

    [row] {
      display: flex;
    }

    [setup] {
      font-size: x-large;
    }

    [title] {
      flex-grow: 1;
    }

  `]
})
export class SmsPage implements OnInit {
  public notifs: ISmsNotif[];


  constructor(private smsService: SmsService, private modalService: NgbModal) {
  }

  async ngOnInit() {
    this.notifs = await this.smsService.getSmsNotifications();
  }

  showSettings(): boolean {
    const activeModal = this.modalService.open(SmsProviderModal, {container: 'nb-layout'});
    return false;
  }
}
