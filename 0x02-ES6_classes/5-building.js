export default class Building {
  constructor(sqft) {
    /*
        In the constructor, we check if new.target === Building.
        If this is true, it means someone is trying to instantiate Building directly,
        and we throw an error, preventing it from being instantiated.

        if(new.target === Building) {
            throw new Error("Cannot instantiate an abstract class")
        } */
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  /*
    The method evacuationWarningMessage()
    throws an error if not implemented by any subclass that extends Building.
    This ensures the abstract nature of the method.
    */
  evacuationWarningMessage() {
    if (this) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
