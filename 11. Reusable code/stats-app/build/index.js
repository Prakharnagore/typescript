"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Composition Approach 1 (This is without using static fromCsv() in MatchReader class)
// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// console.log();
// Composition Approach 1 (refractor)
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
console.log(matchReader.matches);
// Composition Approach 2 Example 1 (This is without using static winsAnalysisWithReport in Summary class)
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );
// Composition Approach 2 Example 2 (This is without using static winsAnalysisWithReport in Summary class)
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);
// Composition Approach 2 Refractor
const summary = Summary_1.Summary.winsAnalysisWithReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
