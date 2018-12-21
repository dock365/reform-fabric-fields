import { IOptionsPickerOption } from "../IOptionsPickerMenuProps";
import { IColors } from "../../IOptionsPickerProps";

export interface IEditorProps {
  toggleEdit?: () => void;
  options: IOptionsPickerOption[];
  availableColors: string[];
  onSaveChanges?: (options: IOptionsPickerOption[], deletedIds: number[]) => void;
  colors: IColors;
}
