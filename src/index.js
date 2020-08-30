import { Application } from 'pixi.js';
import config from './lib/config';

const app = new Application({
    width: config.app.width,
    height: config.app.heigth
});

document.body.appendChild(app.view);