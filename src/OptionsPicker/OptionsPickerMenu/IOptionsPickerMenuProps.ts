import { IColors } from "../IOptionsPickerProps";

export interface IOptionsPickerOption {
  id?: number;
  title?: string;
  color?: string;
  sortingOrder?: number;
  protected?: boolean;
}

export interface IOptionsPickerMenuProps {
  closeCallback?: () => void;
  options: IOptionsPickerOption[];
  activeOptionId?: number;
  editable?: boolean;
  onSelect?: (option: IOptionsPickerOption) => void;
  onSaveChange?: (options: IOptionsPickerOption[], deletedIds: number[]) => void;
  colors: IColors;
}
