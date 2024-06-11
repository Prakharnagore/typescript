import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrases: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrases = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<div>
    <h1>Company name: ${this.companyName}</h1>
    <h3>Catch Phrases: ${this.catchPhrases}</h3>
    </div>`;
  }
}
