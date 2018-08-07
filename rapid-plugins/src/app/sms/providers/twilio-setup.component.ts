import {Component, Input, OnInit} from "@angular/core";
import {SmsService} from "../../@core/backend/sms/sms.service";

@Component({
  selector: 'twilio-setup',
  template: `
    <ng-container>
      <div lni inner-element>
        <label>API Key</label>
        <input type="text"
               class="form-control"
               placeholder="חשבון"
               [(ngModel)]="provider.config.account">
      </div>
      <div lni inner-element>
        <label>from</label>
        <input type="text"
               class="form-control"
               placeholder="מזהה אבטחה"
               [(ngModel)]="provider.config.authTok">
      </div>
    </ng-container>
  `,
  styles: [`
    :host {

    }


  `]
})
export class TwilioSetupComponent implements OnInit {
  @Input() provider;

  constructor(private smsService: SmsService) {
  }

  async ngOnInit() {
  }
}
