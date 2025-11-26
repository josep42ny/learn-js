export class Rectangle {
  constructor(surfaceColor, backgroundColor, width, height) {
    this.surfaceColor = surfaceColor ?? '000000';
    this.backgroundColor = backgroundColor ?? 'ff00ff';
    this.width = width ?? -Infinity;
    this.height = height ?? Infinity;
  }
}
