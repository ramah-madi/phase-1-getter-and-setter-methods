// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter method for diameter
  get diameter() {
    return this.radius * 2;
  }

  // Setter method for diameter
  set diameter(value) {
    this.radius = value / 2;
  }

  // Getter method for circumference
  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  // Setter method for circumference
  set circumference(value) {
    this.radius = value / (2 * Math.PI);
  }

  // Getter method for area
  get area() {
    return Math.PI * this.radius ** 2;
  }

  // Setter method for area
  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}
