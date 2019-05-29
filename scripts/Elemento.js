class Elemento {
  constructor(app, url, x, y) {
    this.app = app;
    this.parte = this.app.loadImage(url);
    this.pos = {};
    this.pos.x = x;
    this.pos.y = y;
    this.pos.inicial = {};
    this.pos.inicial.x = x;
    this.pos.inicial.y = y;

    this.block = false;
  }

  setposx(x){
    this.pos.x = x;

  }

  pintar() {
    this.app.imageMode(this.app.CENTER);
    this.app.image(this.parte, this.pos.x, this.pos.y);
  }
 

  isSobre() {

    if(this.app.mouseX > (this.pos.x - (this.parte.width/2)) && this.app.mouseX < (this.pos.x + (this.parte.width/2)) && 
    this.app.mouseY > (this.pos.y - (this.parte.height/2)) && this.app.mouseY < (this.pos.y + (this.parte.height/2))) {
      return true;
    }
    return false;
  }

  
}
