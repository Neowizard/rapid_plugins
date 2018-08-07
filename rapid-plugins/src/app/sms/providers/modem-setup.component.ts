import {Component, Input} from "@angular/core";

@Component({
  selector: 'modem-setup',
  template: `
    modem
  `,
  styles: [`
    :host {

    }

  `]
})
export class ModemSetupComponent {
  @Input() provider;
}
