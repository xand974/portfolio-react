import { Effect } from "./class/Effect";

export class Canvas {
  private imgSrc: string;
  private img: HTMLImageElement;
  public ctx: CanvasRenderingContext2D;
  public width: number;
  public height: number;

  constructor(
    _ctx: CanvasRenderingContext2D,
    _imgSrc: string,
    _width: number,
    _height: number
  ) {
    this.ctx = _ctx;
    this.imgSrc = _imgSrc;
    this.img = new Image();
    // this.img.onload = () => {
    //   this.img.crossOrigin = `Anonymous`;
    //   this.img.src = this.imgSrc;
    // };
    this.width = _width;
    this.height = _height;
  }

  public printSymbols() {
    const effect = new Effect(this.width, this.height);
    for (const symbol of effect.symbols) {
      symbol.draw(this.ctx, effect);
    }
  }

  public debug() {
    const rect = { width: 50, height: 50, color: "blue" };
    this.ctx.fillStyle = rect.color;
    this.ctx.fillRect(0, 50, rect.width, rect.height);
  }
}
