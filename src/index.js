import { 
    Application,
    Loader,
    Sprite,
    Rectangle,
    utils
 } from 'pixi.js';
import config from './lib/config';
import { movement } from './utils/movement'
const loader = new Loader();
const resources = loader.resources;
const shipPath = 'assets/tileset.png';

const app = new Application({
    width: config.app.width,
    height: config.app.heigth
});

document.body.appendChild(app.view);

let ship, state;

loader
  .add(shipPath)
  .load(setup);

function setup() {
  const texture = utils.TextureCache[shipPath];
  const rectangle = new Rectangle(192, 128, 64, 64);

  texture.frame = rectangle;

  ship = new Sprite(texture);
  ship.x = 64;
  ship.y = 64;

  app.stage.addChild(ship);
}
