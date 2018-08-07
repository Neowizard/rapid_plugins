import {Injectable} from "@angular/core";
import {ISmsProvider, ISmsNotif} from "./sms.model";

@Injectable()
export class SmsService {

  private mockProviders: ISmsProvider[] = [
    {
      name: "TWILIO",
      displayName: "טוויליו",
      config: {
        authTok: "c93d5c2c310bdc1f2e0355935ad4a61a",
        account: "ACd7a5a1f053206ce7bebccd7645f77a61"
      },
      active: true
    },
    {
      name: "A-TRAIL",
      displayName: "אקטיב טרייל",
      config: undefined,
      active: false
    },
    {
      name: "MODEM",
      displayName: "מודם GSM מקומי",
      config: undefined,
      active: false
    }
  ];
  private mockNotifs: ISmsNotif[] = [
    {
      enabled: true,
      id: 1,
      name: "חיסונים",
      options: undefined,
      optionsHtmlForm: "",
      templateHelpHtml: "",
      template: ""
    },
    {
      enabled: true,
      id: 2,
      name: "ניתוחים",
      options: undefined,
      optionsHtmlForm: "",
      templateHelpHtml: "",
      template: ""
    },
    {
      enabled: true,
      id: 2,
      name: "תור",
      options: undefined,
      optionsHtmlForm: "",
      templateHelpHtml: "<b>(שם) זה שם לקוח",
      template: ""
    }
  ];

  constructor() {
  }

  async getSmsNotifications() {
    return this.mockNotifs;
  }

  getSmsProviders(){
    return this.mockProviders;
  }

  setSmsProvider(provider: ISmsProvider) {

  }
}
