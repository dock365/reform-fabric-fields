import { IOptionsPickerOption } from '../IOptionsPickerMenuProps';
import { IColors } from '../../IOptionsPickerProps';

export interface IStatusViewerProps {
  onSelect: (e: any) => void;
  toggleEdit?: () => void;
  options: IOptionsPickerOption[];
  editable?: boolean;
  colors: IColors;
}
