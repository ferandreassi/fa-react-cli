const mainAppView = require('../views/mainAppView');

const endApp = async (exitCode) => {
    await mainAppView.endAppView();
    process.exit(exitCode);
  };
  
exports.endApp = endApp;