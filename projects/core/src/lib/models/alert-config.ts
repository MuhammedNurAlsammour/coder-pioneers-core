// projects/core/src/lib/models/alert-config.model.ts
import { AlertPosition } from "../enums/alert-position";

export class AlertConfig {
  duration?: number;
  positionY?: AlertPosition;
  positionX?: AlertPosition;

  constructor(duration?: number, positionY?: AlertPosition, positionX?: AlertPosition) {
    this.duration = duration ?? 2500;
    this.positionY = positionY ?? AlertPosition.Bottom;
    this.positionX = positionX ?? AlertPosition.Right;
  }
}
