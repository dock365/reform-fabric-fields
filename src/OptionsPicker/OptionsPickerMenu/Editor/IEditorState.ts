import { IOptionsPickerOption } from "../IOptionsPickerMenuProps";

export interface IEditorState {
  options: IOptionsPickerOption[];
  deletedOptions: number[];
  availableColors: string[];
}
