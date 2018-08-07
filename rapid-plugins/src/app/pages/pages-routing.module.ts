import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SmsPage} from '../sms/sms.page';
import {SmsLogsPage} from "../sms/sms-logs.page";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'sms/config',
      component: SmsPage,
    },
    {
      path: 'sms/logs',
      component: SmsLogsPage,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
