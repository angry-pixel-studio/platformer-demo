export class GoblinMovement {
    gravity: number = 1000;
    walkSpeed: number = 50;
    jumpSpeed: number = 350;
    grounded: boolean = false;
    jumping: boolean = false;
    directionX: number = 1;

    constructor(options: Partial<GoblinMovement>) {
        Object.assign(this, options);
    }
}
