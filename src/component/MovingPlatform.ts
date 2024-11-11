import { Vector2 } from "angry-pixel";

export class MovingPlatform {
    direction: Vector2 = new Vector2();
    nextSpot: number = 0;
    spots: Vector2[] = [];
    speed: number = 50;

    constructor(options?: Partial<MovingPlatform>) {
        Object.assign(this, options);
    }
}
