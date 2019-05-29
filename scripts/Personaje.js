class Personaje {

    static poderes = [];

    constructor(app, x, jugador) {

        this.app = app;
        this.x = x;
        this.y = 600;
        this.jugador = jugador;
        this.imagen = this.app.loadImage("/imgs/Nave 1.png");
        this.animacion = this.animacion.bind(this);
        setInterval(this.animacion, 200);
        this.moverIzq = false;
        this.moverDer = false;
    }


    pintar() {

                this.app.image(this.imagen, this.x, this.y);
               

        
        for (let i = 0; i < Personaje.poderes.length; i++) {
            Personaje.poderes[i].pintar();
        }
        if (this.moverIzq && this.x > 55) {
            this.x -= 14;
        }

        if (this.moverDer && this.x < 1145) {
            this.x += 14;
        }

    }

    animacion() {
        this.punt++;
        if (this.punt > 3) {
            this.punt = 0;
        }
    }

    mover() {
 
                switch (this.app.keyCode) {

                    case this.app.RIGHT_ARROW:
                        this.moverDer = true;
                        this.moverIzq = false;
                        break;

                    case this.app.LEFT_ARROW:
                        this.moverIzq = true;
                        this.moverDer = false;
                        break;
                }

            
        

    }

    parar() {
                switch (this.app.keyCode) {

                    case this.app.RIGHT_ARROW:
                        this.moverDer = false;

                        break;

                    case this.app.LEFT_ARROW:
                        this.moverIzq = false;

                        break;
                }

    }

    disparar() {
        Personaje.poderes.push(new Poder(this.app, this.x, this.y-50));
    }


}