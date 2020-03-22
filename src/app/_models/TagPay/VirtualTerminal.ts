import {VirtualTerminalFunction} from './VirtualTerminalFunction';

export class VirtualTerminal {
  label: string;
  inactivityDelay: number;
  logo: string;
  functions: VirtualTerminalFunction;
}
