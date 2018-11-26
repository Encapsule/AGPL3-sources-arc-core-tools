var chalk = require('chalk');
module.exports = {
    // tool entry banner styles
    banner: chalk.cyan,
    bannerAuthor: chalk.cyan,
    bannerPackage: chalk.cyan.bold,
    bannerToolname: chalk.green.bold,
    bannerVersion: chalk.yellow.bold,
    bannerRelease: chalk.cyan.bold,
    bannerBuild: chalk.cyan.bold,

    // tool exit banner styles
    bannerExit: chalk.cyan.bold,
    exitCode: chalk.bold.magenta,

    // tool warnings/errors styles
    toolError: chalk.red.bold,

    // general shared styles
    dirInput: chalk.green.bold,
    dirOutput: chalk.red.bold,
    fileInput: chalk.green,
    fileOutput: chalk.red,

    // compiler styles
    infoHead: chalk.bold.cyan,
    infoBody: chalk.cyan,
    processStepHeader: chalk.blue.bold,
    compilerSummaryHeader: chalk.green.bold,
    compilerSummaryData: chalk.cyan,
    errorReportHeader: chalk.magenta.bold,
    errorReportErrors: chalk.red.bold

};
