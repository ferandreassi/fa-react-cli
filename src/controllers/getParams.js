const getParamsView = require('../views/getParamsView');

let paramsObject = {
  fileName  : null,
  type      : '-f',
  className : 'NAME'
};

const getParams = async () => {
  await getParamsView.startGet();
  //Check params (move to another fx)
  if(process.argv.length > 2){
    process.argv.forEach((val, index) => {
      if(index > 1){
        //Check filename
        if(val.indexOf('.')>-1){
          paramsObject.fileName = val;
        }
        //Check type
        if(val == '-f' || val == '-c'){
          paramsObject.type = val;
        }
        //Check classname
        if(val.indexOf('.')== -1 && val.indexOf('-') ==-1){
          paramsObject.className = val;
        }
      }
    });    
  }
  await getParamsView.endGet();
  return paramsObject;  
};

exports.getParams = getParams;