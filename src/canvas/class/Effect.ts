import { Symbol } from "./Symbol";

export class Effect {
  private columns: number;
  private canvasWidth: number;
  private canvasHeight: number;
  public symbols: Symbol[];
  public fontSize: number;

  constructor(_canvasWidth: number, _canvasHeight: number, _fontSize?: number) {
    this.fontSize = _fontSize ?? 15;
    this.canvasHeight = _canvasHeight;
    this.canvasWidth = _canvasWidth;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.populateSymbols();
  }

  private populateSymbols() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(
        this.canvasHeight,
        { x: i, y: 0 },
        this.fontSize
      );
    }
  }
}
