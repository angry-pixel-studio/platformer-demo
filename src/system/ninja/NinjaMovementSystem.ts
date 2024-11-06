import { BoxCollider, Children, GameSystem, RigidBody, Transform } from "angry-pixel";
import { NinjaMovement } from "@component/ninja/NinjaMovement";
import { InputController } from "@component/InputController";
import { COLLISION_LAYERS } from "@config/layers";

export class NinjaMovementSystem extends GameSystem {
    public onUpdate(): void {
        this.entityManager.search(NinjaMovement).forEach(({ component: movement, entity }) => {
            const inputController = this.entityManager.search(InputController)[0].component;
            const transform = this.entityManager.getComponent(entity, Transform);
            const rigidBody = this.entityManager.getComponent(entity, RigidBody);
            const children = this.entityManager.getComponent(entity, Children);
            const collider = this.entityManager.getComponent(children.entities[0], BoxCollider);

            rigidBody.gravity = movement.gravity;

            movement.platformCollision = this.collisionRepository.findCollisionsForColliderAndLayer(
                collider,
                COLLISION_LAYERS.MovingPlatform,
            )[0];

            movement.grounded =
                this.collisionRepository.findCollisionsForColliderAndLayer(collider, COLLISION_LAYERS.Foreground)
                    .length > 0 || movement.platformCollision !== undefined;

            this.walk(movement, rigidBody, inputController);
            this.jump(movement, rigidBody, inputController);
            this.checkForMovingPlatform(movement, transform);
        });
    }

    private walk(movement: NinjaMovement, rigidBody: RigidBody, inputController: InputController): void {
        rigidBody.velocity.x = inputController.axes.x * movement.walkSpeed;
        movement.walking = movement.grounded && rigidBody.velocity.x !== 0;
    }

    private jump(movement: NinjaMovement, rigidBody: RigidBody, inputController: InputController): void {
        movement.jumping &&= !movement.grounded;

        if (movement.grounded && inputController.jump && movement.jumpReleased) {
            movement.jumping = true;
            rigidBody.velocity.y = movement.jumpSpeed;
        }

        movement.jumpReleased = !inputController.jump;
    }

    private checkForMovingPlatform(movement: NinjaMovement, transform: Transform): void {
        if (movement.platformCollision && !transform.parent) {
            transform.parent = this.entityManager.getComponent(movement.platformCollision.remoteEntity, Transform);
        } else if (!movement.platformCollision && transform.parent) {
            transform.parent = undefined;
        }
    }
}
