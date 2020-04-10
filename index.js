#!/usr/bin/env node

//Import modules

//include program modules
const initializeApp   = require('./src/controllers/initializeApp');
const endApp          = require('./src/controllers/endApp');
const errorHandler    = require('./src/controllers/errorHandler');
const getParams       = require('./src/controllers/getParams');
const checkParams     = require('./src/controllers/checkParams');
const fileController  = require('./src/controllers/fileController');

//define vars
let exitCode = 1;

//Start program
(async () => {
  await initializeApp.initializeApp();

  //Get params
  try {
    let paramsObject = await getParams.getParams();
    let verifiedParams = await checkParams.checkParams(paramsObject);
    if (verifiedParams) {
      //Create file
      try{
        await fileController.createFile(paramsObject);
        //End program
        await endApp.endApp(exitCode);
      }catch(e){
        throw new Error('File create error');
      }
    } else {
      throw new Error('Params Error');
    }
  } catch (e) {
    errorHandler.errorHandler(e);
    exitCode = 0; 
    await endApp.endApp(exitCode);
  }
})();
