import Vector from './classes/Vector.js';
import {loadImageInCatalog} from './functions/lib.js';
import GameObject from './classes/GameObject.js';
import Player from './classes/Player.js';

const canvas = document.getElementById(`canvas`),
  ctx = canvas.getContext(`2d`);

let catalog = {},
    player;


const init = () => {
  Promise.all([
    loadImageInCatalog(`img/bullet.png`,`bullet`,catalog),
    loadImageInCatalog(`img/player.png`,`player`,catalog),
    loadImageInCatalog(`img/enemy.png`,`enemy`,catalog),
    loadImageInCatalog(`img/explosion.png`,`explosion`,catalog),
  ]).then(loaded);

 
};

const loaded = () => {
  console.log(`images ingeladen`);
  player = new Player(canvas.width/2,500,catalog.player);
  

  draw();
}

const draw = () =>{
  
  ctx.fillStyle = `black`;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  if(!player.killed){
  player.update();
  player.draw(ctx);
  }

  window.requestAnimationFrame(draw);
}


init();
