const showProgramUsageView = () => {
    console.log('Program usage:');
    console.log('-------------');
    console.log('fa-react-cli <fileName.extension> [-type] [ClassName]');
    console.log('\nExample:');
    console.log('-------');
    console.log('fa-react-cli MyComponent.js -c ClassName');
    console.log('\ntype:');
    console.log('-f :Create a function component (default)');
    console.log('-c :Create a class component');
    console.log('');
  };
  
exports.showProgramUsageView = showProgramUsageView;