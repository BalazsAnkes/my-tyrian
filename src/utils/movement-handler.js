import { keyboardHandler } from './keyboard-handler'

export const movementHandler = (gameObject) => {
  let left = keyboardHandler("ArrowLeft"),
      up = keyboardHandler("ArrowUp"),
      right = keyboardHandler("ArrowRight"),
      down = keyboardHandler("ArrowDown");

  left.press = () => {
    gameObject.vx = -5;
    gameObject.vy = 0;
  };
  
  left.release = () => {
    if (!right.isDown && gameObject.vy === 0) {
      gameObject.vx = 0;
    }
  };

  up.press = () => {
    gameObject.vy = -5;
    gameObject.vx = 0;
  };

  up.release = () => {
    if (!down.isDown && gameObject.vx === 0) {
      gameObject.vy = 0;
    }
  };

  right.press = () => {
    gameObject.vx = 5;
    gameObject.vy = 0;
  };

  right.release = () => {
    if (!left.isDown && gameObject.vy === 0) {
      gameObject.vx = 0;
    }
  };

  down.press = () => {
    gameObject.vy = 5;
    gameObject.vx = 0;
  };
  
  down.release = () => {
    if (!up.isDown && gameObject.vx === 0) {
      gameObject.vy = 0;
    }
  };
}

export const moveX = (gameObject, delta) => {
  gameObject.x = (gameObject.x + gameObject.vx + delta) % 800;
}
