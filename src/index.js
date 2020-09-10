import { 
    Application,
    Loader,
    Sprite,
    Rectangle,
    Texture,
    Container
 } from 'pixi.js';
import config from './lib/config';
import { movementHandler, moveX } from './utils/movement-handler'
const loader = new Loader();
const tilesetPath = 'assets/tileset.png';

const app = new Application({
    width: config.app.width,
    height: config.app.heigth
});

document.body.appendChild(app.view);

let ship, 
    rocket,
    state,
    container;

loader
  .add(tilesetPath)
  .load(setup);

function setup() {
  container = new Container();
  createShip();
  movementHandler(ship);

  createRocket();

  state = play;
 
  app.ticker.add(delta => gameLoop(delta));

  app.stage.addChild(container);
}

function gameLoop(delta){
  state(delta);
}

function play(delta) {
  ship.x += ship.vx;
  ship.y += ship.vy

  moveX(rocket, delta);
}

function createShip() {
  const resources = loader.resources;
  const textureForShip = new Texture(resources[tilesetPath].texture.baseTexture);
  const rectangle = new Rectangle(192, 128, 64, 64);
  textureForShip.frame = rectangle;

  ship = new Sprite(textureForShip);
  ship.x = 64;
  ship.y = 64;
  ship.vx = 0;
  ship.vy = 0;

  container.addChild(ship);
}

function createRocket() {
  const resources = loader.resources;
  const textureForRocket = new Texture(resources[tilesetPath].texture.baseTexture);
  const rectangle = new Rectangle(320, 128, 32, 32);
  textureForRocket.frame = rectangle;
  
  rocket = new Sprite(textureForRocket);
  rocket.x = 128;
  rocket.y = 128;
  rocket.vx = 2;
  rocket.vy = 2;
  
  container.addChild(rocket);
}
