import * as React from 'react';

import { IOptionsPickerMenuProps } from './IOptionsPickerMenuProps';
import { IOptionsPickerMenuState } from './IOptionsPickerMenuState';
import Editor from './Editor/Editor';
import StatusViewer from './Viewer/Viewer';

export default class OptionsPickerMenu extends React.Component<
  IOptionsPickerMenuProps,
  IOptionsPickerMenuState
  > {
  constructor(props: IOptionsPickerMenuProps) {
    super(props);

    this.state = {
      edit: false,
    };

    this._onStatusSelect = this._onStatusSelect.bind(this);
    this._toggleEdit = this._toggleEdit.bind(this);
  }

  public componentDidUpdate(prevProps: IOptionsPickerMenuProps) {
    if (
      this.props.activeOptionId && prevProps.activeOptionId !== this.props.activeOptionId ||
      prevProps.options.length !== this.props.options.length
    ) {
      if (this.props.activeOptionId)
        this._setActiveOption(this.props.activeOptionId);
    }
  }

  public render(): JSX.Element {
    return (
      <div >
        <div style={{backgroundColor: "#fff"}} >
          {
            this.state.edit ?
              <Editor
                availableColors={[]}
                options={this.props.options}
                onSaveChanges={this.props.onSaveChange}
                toggleEdit={this._toggleEdit}
                colors={this.props.colors}
              /> :
              <StatusViewer
                onSelect={this._onStatusSelect}
                toggleEdit={this._toggleEdit}
                options={this.props.options}
                editable={this.props.editable}
                colors={this.props.colors}
              />
          }
        </div>
      </div>
    );
  }

  private _onStatusSelect(e: React.MouseEvent<HTMLInputElement>) {
    this._setActiveOption(parseInt(e.currentTarget.value), () => {
      if (this.props.onSelect && this.state.activeOption)
        this.props.onSelect(this.state.activeOption);
    });

    if (this.props.closeCallback) {
      this.props.closeCallback();
    }
  }

  private _setActiveOption(id: number | string, callback?: () => void) {
    const option = this.props.options.find(_option => _option.id === id);
    this.setState({ activeOption: option }, callback);
  }

  private _toggleEdit() {
    this.setState(prevState => ({
      edit: !prevState.edit,
    }));
  }
}
