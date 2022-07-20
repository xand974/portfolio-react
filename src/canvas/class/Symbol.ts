import { Effect } from "./Effect";

export class Symbol {
  private canvasHeight: number;
  private position: { x: number; y: number };
  private fontSize: number;
  private characters: string;
  private text: string;
  constructor(
    _canvasHeight: number,
    _position: { x: number; y: number },
    _fontSize: number
  ) {
    this.canvasHeight = _canvasHeight;
    this.position = _position;
    this.fontSize = _fontSize;
    this.characters = "maletalexandreenchanté";
    this.text = "";
  }

  public draw(ctx: CanvasRenderingContext2D, effect: Effect): void {
    const randomNum = Math.floor(Math.random() * this.characters.length);
    this.text = this.characters[randomNum] ?? this.characters[0];
    ctx.font = `${effect.fontSize}px monospace`;
    ctx.fillStyle = "rgba(255, 255, 255, .4)";
    ctx.fillText(
      this.text,
      this.position.x * this.fontSize,
      this.position.y * this.fontSize
    );
    this.resetWhenTouchGround();
  }

  private resetWhenTouchGround(): void {
    if (
      this.position.y * this.fontSize > this.canvasHeight &&
      Math.random() > 0.7
    ) {
      this.position.y = 0;
      return;
    }
    this.position.y++;
  }
}
