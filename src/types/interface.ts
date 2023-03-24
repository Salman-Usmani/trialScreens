export interface ITextBox {
  title?: string;
  onChangeValue: (text: string) => void;
  onIconPress?: Function;
  errormsg?: string;
  show: boolean;
  icon?: string;
  placeholder?: string;
}
