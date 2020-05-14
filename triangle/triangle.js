export class Triangle {
  constructor(side1, side2, side3) {
    const [small, medium, large] = [side1, side2, side3].sort()
    this.small = small
    this.medium = medium
    this.large = large
    if (small < 0) throw new Error('Sides cannot be of non-positive length')
  }

  isEquilateral() {
    return this.isValidTriangle() && this.small > 0 && this.small == this.medium && this.medium == this.large
  }

  isIsosceles() {
    return this.isValidTriangle() && (this.small == this.medium || this.medium == this.large)
  }

  isScalene() {
    return this.isValidTriangle() && (this.small != this.medium && this.medium != this.large)
  }

  isDegenerate() {
    return this.isValidTriangle() && (this.small + this.medium) == this.large
  }

  isValidTriangle(){
    return this.large <= this.small + this.medium
  }
}
