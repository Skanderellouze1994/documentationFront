enum Fonction {
  simplePayment = 'simplePayment',
  walletCreation = 'walletCreation',
  nXPayment = 'nXPayment'
}

export class VirtualTerminalFunction {
  function: Fonction;
  label: string;
  functionParameter: string;
}
