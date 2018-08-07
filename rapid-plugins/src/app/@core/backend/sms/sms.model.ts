export interface ISmsNotif {
  id: number,
  name: string,
  template: string,
  templateHelpHtml: string
  enabled: boolean,
  options: any
  optionsHtmlForm: string,
}

export interface ISmsProvider {
  name: string,
  displayName: string,
  config: any;
  active: boolean;
}
