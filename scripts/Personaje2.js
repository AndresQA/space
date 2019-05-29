class Personaje2 {

    static poderes = [];

    constructor(app, x, jugador) {

        this.app = app;
        this.x = x;
        this.y = 600;
        this.imagenDos = this.app.loadImage("./imgs/Nave 2.png");
        this.animacion = this.animacion.bind(this);
        setInterval(this.animacion, 200);
        this.moverIzq = false;
        this.moverDer = false;
    }


    pintar() {

                this.app.image(this.imagenDos, this.x, this.y);

        for (let i = 0; i < Personaje2.poderes.length; i++) {
            Personaje2.poderes[i].pintar();
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

                switch (this.app.key) {

                    case 'd':
                        this.moverDer = true;
                        this.moverIzq = false;
                        break;

                    case 'a':
                        this.moverIzq = true;
                        this.moverDer = false;
                        break;
                }

    }

    parar() {
                switch (this.app.key) {

                    case 'd':
                        this.moverDer = false;

                        break;

                    case 'a':
                        this.moverIzq = false;

                        break;
                
        }
    }

    disparar() {
        Personaje2.poderes.push(new Poder2(this.app, this.x, this.y-50));
    }


}
