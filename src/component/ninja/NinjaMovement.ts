import { Collision } from "angry-pixel";

export class NinjaMovement {
    gravity: number = 1000;
    walkSpeed: number = 106;
    jumpSpeed: number = 350;
    grounded: boolean = false;
    jumping: boolean = false;
    jumpReleased: boolean = false;
    walking: boolean = false;
    platformCollision: Collision = undefined;
}
