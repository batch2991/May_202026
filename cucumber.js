module.exports = {
  default: {
    requireModule: ['ts-node/register'],   
    require:[
          'src/test/commons/hooks.ts',
          'src/test/stepdef/*.ts'
    ],
    paths: ['src/test/features/*.feature'],
    format: ['progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
    ],

    dryRun:false
  }
};
