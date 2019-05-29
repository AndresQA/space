new p5(function (app) {
  var log;
  app.setup = function () {
    app.createCanvas(1200, 700);

    log = new Logica(app);
  }

  app.draw = function () {
    app.text(app.KEY, app.mouseX, app.mouseY);

    log.pintar();

  }

  app.keyPressed = function () {
    log.teclado();
    console.log(app.keyCode);
  }

  app.keyReleased = function () {
    log.soltarTeclado();
  }

  app.mousePressed = function () {
    log.mouse();
    // if(log.morir==true && log.pantalla==2){
    //  this.setup();
    //}
    //if(log.ganar==true && log.pantalla==3){
    //  this.setup();
    //}
  }


}
);



