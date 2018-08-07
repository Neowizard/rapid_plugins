import {NgModule} from '@angular/core';

import {SmsPage} from './sms.page';
import {ThemeModule} from "../@theme/theme.module";
import {SmsLogsPage} from "./sms-logs.page";
import {TwilioSetupComponent} from "./providers/twilio-setup.component";
import {ModemSetupComponent} from "./providers/modem-setup.component";
import {ActiveTrailSetupComponent} from "./providers/active-trail-setup.component";
import {SmsConfigComponent} from "./sms-config.component";
import {UiSwitchModule} from "ngx-ui-switch";
import {SmsProviderModal} from "./providers/sms-provider.modal";
import {InfinitableComponent} from "./infinitable/infinitable.component";

@NgModule({
  imports: [
    ThemeModule,
    UiSwitchModule,

  ],
  declarations: [
    SmsPage,
    SmsLogsPage,
    TwilioSetupComponent,
    ModemSetupComponent,
    ActiveTrailSetupComponent,
    SmsConfigComponent,
    SmsProviderModal,
    InfinitableComponent
  ],
  entryComponents: [
    SmsProviderModal
  ]
})
export class SmsModule {
}
