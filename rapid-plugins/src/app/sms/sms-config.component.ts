import {Component, Input} from '@angular/core';
import {ISmsNotif} from "../@core/backend/sms/sms.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'sms-config',
  template: `
    <ng-template #templateHelp>
      <div [innerHtml]="notif.templateHelpHtml"></div>
    </ng-template>
    <nb-card>

      <nb-card-header>
        {{notif.name}}
        <small *ngIf="!notif.enabled">(לא פעיל)</small>

      </nb-card-header>
      <nb-card-body>

        <div row>

          <ui-switch defaultBoColor="none" [(ngModel)]="notif.enabled">Enabled</ui-switch>
          <span templateLabel>{{templateLabel}}</span>
          <button style="padding:5px;" type="button" placement="right" class="btn btn-tn btn-outline-secondary"
                  [ngbTooltip]="templateHelp">
            פרטים
          </button>
        </div>
        <textarea [disabled]="!notif.enabled" [style.opacity] = "notif.enabled ? 1 : 0.7" class="form-control" [rows]=2 [(ngModel)]="notif.template"></textarea>

      </nb-card-body>
    </nb-card>
  `,
  styles: [`
    :host {
      display: flex;
    }

    [templateLabel] {
      flex-grow: 1;
    }

    [row] {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    ui-switch {
      padding: 2px 2px 2px 10px;
    }

    nb-card {
      flex-grow: 1;
      display: flex;
    }

    nb-card-header {
      padding: 8px;
    }

    nb-card-body {
      padding: 8px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    textarea {
      flex-grow: 1;
    }
  `]
})
export class SmsConfigComponent {
  @Input() public notif: ISmsNotif;

  get templateLabel() {
    let length = 0;
    if (this.notif && this.notif.template) {
      length = this.notif.template.length;
    }
    return `תבנית (${length}):`
  }

  constructor(private modal: NgbModal) {
  }

}
