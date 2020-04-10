const checkParams = async (paramsObject) => {
  let retVal = false;
  const values = Object.values(paramsObject);
  let found = values.find((e)=>e == null);
  found === null?retVal = false : retVal = true
  return retVal;
};

exports.checkParams = checkParams;