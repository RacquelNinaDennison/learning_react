import React from "react";
import ReactDOM from "react-dom";

// using react to get into react
// JSX , the react uses the complier
// Babel is the javascript complier and lets every browser understand

ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"));

// rendering multiple elements
ReactDOM.render(
	<div>
		<h1>Hello World!</h1>
		<p>Hello to the world said bob</p>
	</div>,
	document.getElementById("root")
);


//challenge , how to render stuff onto a page 
ReactDOM.render(
    <div>
      <h1>Heading</h1>
      <ul>
        <li>hello</li>
        <li>Apple</li>
        <li>tree</li>
      </ul>
    </div>,
    document.getElementById("root")
  );