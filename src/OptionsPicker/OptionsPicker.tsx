import * as React from 'react';
import { IOptionsPickerProps } from './IOptionsPickerProps';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { createRef } from '@uifabric/utilities/lib';
import { IOptionsPickerState } from './IOptionsPickerState';
import OptionsPickerMenu from './OptionsPickerMenu/OptionsPickerMenu';
import { IOptionsPickerOption } from './OptionsPickerMenu/IOptionsPickerMenuProps';

export default class OptionsPicker extends React.Component<IOptionsPickerProps, IOptionsPickerState> {
  private _menuButtonElement = createRef<HTMLElement>();

  constructor(props: IOptionsPickerProps) {
    super(props);
    this.state = {
      callout: false,
    };

    this._onToggleCalloutClick = this._onToggleCalloutClick.bind(this);
  }

  public render() {
    const { options } = this.props;
    let activeOption: IOptionsPickerOption;
    activeOption = typeof this.props.activeOption === "number" ?
      options.find(option => option.id === this.props.activeOption) :
      this.props.activeOption;

    return (
      <div style={{
        position: "relative",
        display: "inline-block",
      }}>
        <button
          ref={this._menuButtonElement}
          onClick={this._onToggleCalloutClick}
          type="button"
          style={{
            padding: 0,
            margin: 0,
            border: "none",
            backgroundColor: "transparent",
            verticalAlign: "middle",
            width: "100%",
          }}
        >
          {this.props.children ||
            <div
              style={{
                backgroundColor: activeOption && activeOption.id ?
                  activeOption.color && this.props.colors[activeOption.color] :
                  "#ccc",
                height: "32px",
                lineHeight: "31px",
                border: "none",
                width: "140px",
                padding: "0 8px",
                whiteSpace: "pre",
                overflow: "hidden",
                textOverflow: "ellipsis",
                margin: "0 auto",
              }}
            >
              {activeOption && activeOption.title || ""}
            </div>
          }
        </button>
        <Callout
          className="ms-CalloutExample-callout"
          ariaLabelledBy={'callout-label-1'}
          ariaDescribedBy={'callout-description-1'}
          role={'alertdialog'}
          gapSpace={0}
          target={this._menuButtonElement.current}
          onDismiss={() => this.setState({ callout: false })}
          setInitialFocus={true}
          hidden={!this.state.callout}
        >
          <OptionsPickerMenu
            closeCallback={() => this.setState({ callout: false })}
            activeOptionId={activeOption && activeOption.id}
            options={options || []}
            onSelect={this.props.onSelect}
            onSaveChange={this.props.onSaveChange}
            editable={this.props.editable}
            colors={this.props.colors}
          />
        </Callout>
      </div >
    );
  }

  private _onToggleCalloutClick(e: React.MouseEvent<HTMLButtonElement>) {
    this.setState(prevState => ({ callout: !prevState.callout }));
    // this.props.onClick(e);
  }
}
