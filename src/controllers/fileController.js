var fs = require('fs');
mainAppView = require('../views/mainAppView');

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
  
  try{
    fs.writeFileSync(paramsObject.fileName, fileContent);
    mainAppView.successMessage('File Created Succesfully!');
  }catch(e){
    throw new Error('File create error');
  }
};

exports.createFile = createFile;