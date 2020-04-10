var fs = require('fs');

const createFile = async (paramsObject) => {
  let fileContent = null;
  const functionFileContent = `
import React from 'react';

export default () => {
  return (
    <h1>Hello FUNCTION</h1>
  );
}   
  `;

  const classFileContent = `
import React, { Component } from "react";

class ${paramsObject.className} extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello ${paramsObject.className}</h1>
      </div>
    );
  }
}

export default ${paramsObject.className};
  `;

  if (paramsObject.type == '-f') {
    fileContent = functionFileContent;
  }

  if (paramsObject.type == '-c') {
    fileContent = classFileContent;
  }
  
  fs.writeFileSync(paramsObject.fileName, fileContent);
  //Move to a fx
  console.log('');
  console.log('\u001b[42;1m %s \x1b[0m', ' File Created Succesfully! ');
};

exports.createFile = createFile;