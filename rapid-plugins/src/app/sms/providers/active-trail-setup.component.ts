import {Component, Input} from "@angular/core";

@Component({
  selector: 'active-trail-setup',
  template: `
    active-trail
  `,
  styles: [`
    :host {

    }

    
  `]
})
export class ActiveTrailSetupComponent {
  @Input() provider;
}
