import { IUser } from "./UserPicker";

export interface IUserPickerProps {
  onSelect: (user?: IUser | null) => void;
  value?: number;
  className?: string;
  users?: IUser[];
  searchUsers?: (filter: string) => Promise<IUser[]>;
  getUserById?: (id: number) => Promise<IUser>;
}
