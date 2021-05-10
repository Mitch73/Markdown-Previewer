import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from 'react-bootstrap';

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


class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: originalState
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({string: e.target.value});
  }
  newMarkup() {
    return { __html: marked(this.state.string, {breaks: true}) };
  }
  render() {
    return (
      <div className="container"> 
      <div className="row">
      <div className="col-12">
      <legend className="text-center">Previewer</legend>
    <textarea id="editor"></textarea>
    <div className="preview">
        <div dangerouslySetInnerHTML={this.props.markup}></div>
        </div>
        </div>
  </div>
  
  <div>
  <div className="col-12">
    <legend className="text-center">Editor</legend>
    <textarea className="form-control" id="editor" onChange={this.props.onChange} value={this.props.value}></textarea>
        </div>
        </div>
  </div>
    );
  }
}

export default App;
