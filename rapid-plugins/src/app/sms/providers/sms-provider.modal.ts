import {
  Component,
} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SmsService} from "../../@core/backend/sms/sms.service";
import {ISmsProvider} from "../../@core/backend/sms/sms.model";

@Component({
  selector: 'sms-provider-modal',
  template: `
    <nb-card>
      <nb-card-header>
        <span title>הגדרות ספק SMS</span>

        <select provider class="form-control" [(ngModel)]="provider">
          <option *ngFor="let p of providers" [ngValue]="p">{{p.name}}</option>
        </select>
      </nb-card-header>
      <nb-card-body>
        <twilio-setup *ngIf="provider.name == 'TWILIO'" [provider]="provider"></twilio-setup>
        <active-trail-setup *ngIf="provider.name == 'A-TRAIL'" [provider]="provider"></active-trail-setup>
        <modem-setup *ngIf="provider.name == 'MODEM'" [provider]="provider"></modem-setup>
      </nb-card-body>
      <nb-card-footer>
        <button class="btn btn-primary" (click)="save()">שמירה</button>
        <button class="btn btn-warning" (click)="cancel()">ביטול</button>
      </nb-card-footer>
    </nb-card>



  `,
  styles: [`
    :host {

    }

    nb-card {
      margin: 0;
    }

    [provider] {
      flex-grow: 1;
      flex-basis: 0;
    }

    [title] {
      flex-grow: 1;
    }

    nb-card-header {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    nb-card-footer {
      border: none;
      text-align: start;
    }

  `]
})
export class SmsProviderModal {
  providers: ISmsProvider[];
  provider: ISmsProvider;

  constructor(private smsService: SmsService, private activeModal: NgbActiveModal,) {
    this.providers = smsService.getSmsProviders();
    this.provider = this.providers.find(p => p.active);
  }

  cancel() {
    this.activeModal.dismiss();
  }

  save() {
    this.smsService.setSmsProvider(this.provider);
    this.activeModal.close();
  }

}
