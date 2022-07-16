export class Canvas {
  private ctx: CanvasRenderingContext2D;
  private imgSrc: string;
  private img: HTMLImageElement;
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
    this.img.crossOrigin = `Anonymous`;
    this.img.src = this.imgSrc;
    this.width = _width;
    this.height = _height;
  }

  public draw(): void {
    this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
  }

  public getImgInfos(): ImageData {
    return this.ctx.getImageData(0, 0, this.width, this.height);
  }

  public setImageFilter(imageData: ImageData) {
    this.ctx.putImageData(imageData, 0, 0);
  }
}
