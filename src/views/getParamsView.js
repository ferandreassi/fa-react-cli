const startGet = async () => {
  console.log('\x1b[33m%s\x1b[0m', '- Start geting params...');
};

const endGet = async () => {
  console.log('\x1b[33m%s\x1b[0m', '- Finish get params.');
};

exports.startGet  = startGet;
exports.endGet    = endGet;
