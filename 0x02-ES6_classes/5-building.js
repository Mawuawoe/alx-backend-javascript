// 5-building.js
class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      // Allow direct instantiation of Building
      this._sqft = sqft;
    } else {
      // Check if the subclass has overridden the evacuationWarningMessage method
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
      // If it's a subclass, still initialize the sqft
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    if (this) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}

export default Building;
