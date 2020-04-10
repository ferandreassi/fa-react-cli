const mainAppView = require('../views/mainAppView');

const initializeApp = async () => {
    await mainAppView.initializeAppView();    
  };
  
exports.initializeApp = initializeApp;