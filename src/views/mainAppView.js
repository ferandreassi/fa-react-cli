// const styles = require('../style/styles');

const initializeAppView = async () => {
  // console.clear();
  console.log('\x1b[44m%s\x1b[0m', '                                                  ');
  console.log('\x1b[44m\x1b[37;1m%s\x1b[0m', '  * fa-react-cli -- Another CLI for React      *  ');
  console.log('\x1b[44m\x1b[37m%s\x1b[0m', '    by Fernando Andreassi                         ');
  console.log('\x1b[44m%s\x1b[0m', '                                                  ');
  console.log('');
};

const endAppView = async () => {
  console.log('');
  console.log('\x1b[44m\x1b[37m%s\x1b[0m','                 -- END PROGRAM --                ');
  console.log('');
};

const successMessage = async (message) => {
  console.log('');
  console.log('\x1b[42;1m %s \x1b[0m', message);
  console.log('');
};

const errorMessage = async (message) => {
  console.log('');
  console.log('\x1b[41m%s\x1b[0m', ' ERROR! - ' + message);
  console.log('');
};

exports.initializeAppView = initializeAppView;
exports.endAppView        = endAppView;
exports.successMessage    = successMessage;
exports.errorMessage      = errorMessage;