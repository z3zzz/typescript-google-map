// summary function that returns string
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// object should have below property and type value
// contain condition
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`${vehicle.name}, ${vehicle.year}, ${vehicle.broken}`);
};

printVehicle(oldCivic);

const getVehicle = (vehicle: Vehicle): void => {
  console.log(`${vehicle.name}, ${vehicle.year}, ${vehicle.broken}`);
};

getVehicle(oldCivic);

const newCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

getVehicle(newCivic);

const findReport = (report: Reportable): void => {
  console.log(report.summary());
};

const myReport = {
  tell: true,
  summary(): string {
    return 'summary';
  },
};

findReport(myReport);
