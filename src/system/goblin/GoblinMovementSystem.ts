import { BoxCollider, EdgeCollider, GameSystem, RigidBody, Transform } from "angry-pixel";
import { GoblinMovement } from "@component/goblin/GoblinMovement";
import { COLLISION_LAYERS } from "@config/layers";

export class GoblinMovementSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(GoblinMovement).forEach(({ entity, component: movement }) => {
            const rigidBody = this.entityManager.getComponent(entity, RigidBody);
            const transform = this.entityManager.getComponent(entity, Transform);
            const edgeCollider = this.entityManager.getComponent(entity, EdgeCollider);
            const boxCollider = this.entityManager.getComponent(entity, BoxCollider);

            const edgeCollision =
                this.collisionRepository.findCollisionsForColliderAndLayer(edgeCollider, COLLISION_LAYERS.Foreground)
                    .length > 0;
            const bodyCollisions = this.collisionRepository.findCollisionsForColliderAndLayer(
                boxCollider,
                COLLISION_LAYERS.Foreground,
            );
            const bodyCollision = bodyCollisions.length > 0;
            const wallCollision = bodyCollision && bodyCollisions.some((c) => c.resolution.direction.x !== 0);

            if ((!edgeCollision || wallCollision) && bodyCollision) movement.directionX *= -1;

            transform.scale.x = movement.directionX;
            rigidBody.velocity.x = movement.directionX * movement.walkSpeed;
        });
    }
}
