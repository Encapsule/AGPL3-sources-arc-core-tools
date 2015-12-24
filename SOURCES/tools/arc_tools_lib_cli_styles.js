var chalk = require('chalk');
module.exports = {
    bannerEnter: chalk.white.bold,
    bannerAuthor: chalk.blue,
    bannerPackage: chalk.green,
    bannerToolname: chalk.yellow,
    bannerRelease: chalk.cyan,
    bannerBuild: chalk.cyan,
    bannerExit: chalk.cyan,

    dirInput: chalk.green.bold,
    dirOutput: chalk.red.bold,
    fileInput: chalk.green,
    fileOutput: chalk.red,

    infoHead: chalk.bold.cyan,
    infoBody: chalk.cyan,
    processStepHeader: chalk.blue.bold,
    compilerSummaryHeader: chalk.green.bold,
    compilerSummaryData: chalk.cyan,
    errorReportHeader: chalk.magenta.bold,
    errorReportErrors: chalk.red.bold,
    exitCode: chalk.bold.magenta
};
