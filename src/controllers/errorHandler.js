const programUsageView = require('../views/programUsageView');
const mainAppView = require('../views/mainAppView');

const errorHandler = (error) => {
  mainAppView.errorMessage(error.message);
  programUsageView.showProgramUsageView();
};

exports.errorHandler = errorHandler;