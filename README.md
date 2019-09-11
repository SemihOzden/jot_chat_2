# Jotform Chatbot

By importing one react component `JotChat`, you can use it as chatbot in your projects.

## Install

`npm install jotform_chatbot`

or

` yarn add jotform_chatbot `

## Usage

1.  Include jotform javascript api into your main html page.
``` javascript
<script src="https://js.jotform.com/JotForm.js"></script>
 ```
2.  Include following bootstrap and scripts into your main html page between `<head>` tags.

``` javascript
<link href="http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css"
    rel="stylesheet"
>
```

3.  You should import ` node_modules/jot_chat_2/lib/cjs/index.css ` from your node modules. It is my css file.

### Example usage
``` javascript
import React from 'react';
import JotChat from 'jotform_chatbot';
import '../node_modules/jot_chat_2/lib/cjs/index.css'

function App() {

  const initialState = {
    formId: 'Your_jotform_form_id',
    apiKey: 'your_jotform_apiKey'
  };
  return (
    <div className="App">
      <JotChat initialState={initialState}/>
    </div>
  );
}

export default App;

```
## Properties

You should use following properties to use this jotform_chatbot properly.

| Properties        | Type           | Required  | Default value | Description |
| -------------     |:-------------: | -----:    | -----:        | ---------------------------------------------:
| formId            | string         |   yes     |   not         | Related form Id from your jotform forms|
| apiKey            | string         |   yes     |   not         | Special key defined in your jotform profile |

## Specificially used jotform question types

I have been using 7 different question types in my `jotform_chatbot` project.


| Question Types        |
| -------------     |
| control_name |
| control_email |
| control_dropdown |
| control_textarea |
| control_datetime (dd-mm-yyyy) |
| control_radio |
| control_checkbox           |

Other question types will be added. They are in the progress.

## Contributing
Feel free to send pull request.

## Licence

MIT [semihOzden](https://github.com/SemihOzden)
