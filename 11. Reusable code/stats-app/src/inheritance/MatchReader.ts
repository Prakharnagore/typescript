import { MatchResult } from "../MatchResult";
import { dateStringToDate } from "../utils";
import { CsvFileReader } from "./CsvFileReader";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // This is Type Assertion. row[5] is one of the value of MatchResult
      row[6],
    ];
  }
}
