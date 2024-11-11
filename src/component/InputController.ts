import { Vector2 } from "angry-pixel";

export class InputController {
    axes: Vector2 = new Vector2(0, 0);
    jump: boolean = false;
    pause: boolean = false;
}
