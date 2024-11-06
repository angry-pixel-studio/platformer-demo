import { CollisionMatrix } from "angry-pixel";
import { COLLISION_LAYERS } from "./layers";

const queryParams = new URLSearchParams(window.location.search);

const collisionMatrix = [
    [COLLISION_LAYERS.Foreground, COLLISION_LAYERS.Ninja],
    [COLLISION_LAYERS.Foreground, COLLISION_LAYERS.Goblin],
    [COLLISION_LAYERS.MovingPlatform, COLLISION_LAYERS.Ninja],
    [COLLISION_LAYERS.MovingPlatform, COLLISION_LAYERS.Goblin],
] as CollisionMatrix;

if (Number(queryParams.get("ninjaGoblinCollision")) === 1) {
    collisionMatrix.push([COLLISION_LAYERS.Ninja, COLLISION_LAYERS.Goblin]);
}

export { collisionMatrix };
