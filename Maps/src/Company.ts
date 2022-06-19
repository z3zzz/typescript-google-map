import faker from 'faker';
import { Markable } from './CustomMap';

export class Company implements Markable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = 'red';
  }

  markerContent(): string {
    return `
      <div>
        <h1>${this.companyName}</h1>
        <h3>${this.catchPhrase}</h1>
      </div>
    `;
  }
}
