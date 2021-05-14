import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const originalState = `
# Welcome to my React Markdown Previewer!

## Sub Heading 

* list item
* list item
* list item

Here is an example of a code:


\`\`\`\

var test = "Hello";
console.log(test);

\`\`\`\

This is a \`<div></div>\`

This is a [link](https://www.freecodecamp.com)

>Block Quotes!

**A bold text**

![React](https://goo.gl/Umyytc)
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: originalState,
      setString:''
    };
  }
  handleChange(e) {
    this.setState({string: e.target.value});
  }
  render() {
    const { string, setString } = this.state;

    const markup = marked(string, {breaks: true});
    return (      
    <div>
      <h1 className="text-center">
      Markdown Previewer
      <hr />
    </h1>
      <div className="co">
      <div className="col-6">
        <legend className="text-center">Editor</legend>
        {/*<CKEditor
          editor={ClassicEditor}
          />*/}
        <textarea className="form-control" id="editor" onChange={this.props.onChange} value={string}></textarea>
            </div>

      <div className="pre col-6">
      <legend className="text-center">Previewer</legend>
    <div className="preview">
        <div dangerouslySetInnerHTML={{__html: markup}} />
        </div>
  </div>
  </div>
  </div>
    );
  }
}

export default App;
