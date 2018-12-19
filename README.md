# Reform Fabric Fields
Fabric UI Fields for [@dock365/reform](https://github.com/dock365/reform)

## Requirement
* [@dock365/reform](https://github.com/dock365/reform)
* [office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react)

## Install
1 Install react confirm as dependency
  ```bash
  # Using yarn package manager
  $ yarn add @dock365/reform-fabric-fields

  # Using npm package manager
  $ npm install --save @dock365/reform-fabric-fields
  ```
2 Import React confirm module
  ```javascript
  // ES6
  import Confirm from "@dock365/reform-fabric-fields"

  // ES5
  var Confirm = require("@dock365/reform-fabric-fields");
  ```

## Example

```javascript
  import React from "react";
  import { Form, Field } from "@dock365/reform";
  import { TextField } from "@dock365/reform-fabric-fields";

  const App = (props) => {
    return (
      <div className="App">
        <Form onSubmit={(e, values) => console.log(values)}>
          <Field
            name="fullName"
            label="Full Name"
            render={TextField}
            defaultValue="Jhon doe"
          />
          <button>Submit</button>
        </Form>
      </div>
    );
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
```
## Properties
### TextField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|nil|nil|nil|

### CheckboxField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|nil|nil|nil|

### ChoiceGroupField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|options|`{ key: string, text: string }[]` or `IChoiceGroupOption[]`|Options to display in choice group|

### DatePickerField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|allowTextInput|`boolean`|allow custom text input|
|disableAutoFocus|`boolean`|Disable auto focus|
|showClearBtn|`boolean`|Show clear field button|

### DropdownField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|options|`{ key: string, text: string }[]` or `IDropdownOption[]`|Options to display in dropdown|

### MultilineTextField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|showLength|`boolean`|show length of value|
|description|`string`|Description|
|rows|`number`|Number of rows|

### RatingField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|min|`number`|Minimum no of stars|
|max|`number`|Maximum no of stars|
|size|`0|1` or `RatingSize`|Size of rating star|

### SliderField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|min|`number`|Minimum value|
|max|`number`|Maximum value|
|step|`number`|Number of steps|
|showValue|`boolean`| Show selected value|

### UserPickerField CustomProps
| Name               | Type   | Description                                                          |
| :----------------- | :----- | :----------------- | :------------------------------------------------------------------- |
|users|`{Title: string, Id: number }[]` or `IUser[]`|Users data|
|searchUsers|`(query: string) => Promise<IUser[]>`|User search promise|
|getUserById|`(id: number) => Promise<IUser>`|Get user by id|


## Contributing!
All contributions are super welcome!


## License

Reform Fabric Fields is MIT licensed.