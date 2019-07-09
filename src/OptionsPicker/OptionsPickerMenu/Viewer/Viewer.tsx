import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { IStatusViewerProps } from './IViewerProps';

export default class StatusViewer extends React.Component<IStatusViewerProps, {}> {
  public render() {
    const { options } = this.props;
    const widthOfAStatus = 144;
    const noOfOptionsInAColumn = 4;
    const noOfOptions = options.length;
    let width = Math.ceil(noOfOptions / noOfOptionsInAColumn) * widthOfAStatus;
    width = width < widthOfAStatus * 2 ? widthOfAStatus * 2 : width;

    return (
      <div className="optionsPickerViewMenu">
        <div style={{
          width: `${width}px`,
          padding: "5px",
          height: "140px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "flex-start",
          boxSizing: "content-box",
        }}>
          {options.map(option =>
            <button
              onClick={this.props.onSelect}
              className="optionsPickerOptionButton"
              value={option.id}
              type="button"
              style={{
                backgroundColor: option.color && this.props.colors[option.color] || option.color,
                height: "30px",
                margin: "2px",
                width: "140px",
                border: "0",
                padding: "0 8px",
                whiteSpace: "pre",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              title={option.title}
            >{option.title}</button>,
          )}
        </div>
        {
          this.props.editable ?
            <DefaultButton
              text="Add / Edit Labels"
              onClick={this.props.toggleEdit}
              type="button"
              style={{
                display: "block",
                width: "100%",
                height: "40px",
              }}
            />
            : null
        }
      </div >
    );
  }
}
