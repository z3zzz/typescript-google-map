class Vehicle {
  constructor(public brand: string) {}

  drive(): void {
    console.log('Wow driving!');
  }

  private honk(): void {
    console.log('hong!');
  }

  protected useHonk(): void {
    this.honk();
  }

  public getBrand(): void {
    console.log(this.brand);
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('Drive Car!');
  }
}

const car = new Car(4, 'red');

car.drive();
car.honk();
car.useHonk();

const vehicle = new Vehicle('Toyota');
vehicle.getBrand();
