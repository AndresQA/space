class Logica {
    constructor(app) {
        this.app = app;
        this.pantalla = 0;
        this.app.imageMode(this.app.CENTER);
        this.morir = false;
        this.vidasj1 = 3;
        this.vidasj2 = 3;
        this.puntajej1 = 0;
        this.puntajej2 = 0;
        this.run = this.run.bind(this);
        this.iden = null;
        this.tiempo = 0;
        this.jugador1muerto = false;
        this.jugador2muerto = false;
        this.fuente = app.loadFont("./font/Chopsic.otf");
        this.fondo = this.app.loadImage("./imgs/fondo.jpg");
        this.controles = this.app.loadImage("./imgs/controles.png");
        this.inicia = {};
        this.inicia.start = new Elemento(this.app, "./imgs/jugar.png", 600, 500);
        this.inicia.comenzar = new Elemento(this.app, "./imgs/jugar.png", 600, 630);
        this.vidaj1ico = this.app.loadImage("./imgs/j1.png");
        this.vidaj2ico = this.app.loadImage("./imgs/j2.png");
        this.final = this.app.loadImage("./imgs/final.png");
        this.inicio = this.app.loadImage("./imgs/inicio.png");
        this.sonido = this.app.loadSound("./sound/disparo.mp3");
        this.impacto = this.app.loadSound("./sound/impacto.mp3");
        this.colision = this.app.loadSound("./sound/colision.mp3");
        this.perdida = this.app.loadSound("./sound/perdida.mp3");
        this.sonido.amp(0.2);
        this.impacto.amp(0.5);
        this.colision.amp(0.4);
        this.perdida.amp(0.3);
        this.dificultad = 700;
    }

    pintar() {

        switch (this.pantalla) {
            case 0:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.inicio, 0, 0, 1200, 700);
                this.inicia.start.pintar();
                break;
            case 1:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.controles, 0, 0, 1200, 700);
                this.inicia.comenzar.pintar();

                break;

            case 2:
                this.app.background(0);
                this.app.fill(255);
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.fondo, 0, 0);
                this.app.imageMode(this.app.CENTER);












                if (this.jugador1muerto == false) {
                    this.personaje.pintar();
                }
                if (this.jugador2muerto == false) {
                    this.personajeDos.pintar();
                }


                for (let i = 0; i < this.enemigos.length; i++) {
                    this.enemigos[i].pintar();
                    this.enemigos[i].actualizarTiempo(this.tiempo);

                }


                this.app.fill(145, 13, 242);
                this.app.noStroke();
                this.app.rect(0, 0, 1200, 50);
                this.app.fill(255);
                this.app.textFont(this.fuente);
                this.app.textAlign(this.app.CENTER);
                this.app.textSize(25);
                this.app.text('Tiempo:', 560, 35);
                this.app.text(this.tiempo, 645, 35);
                this.app.text('Jugador  1', 100, 35);
                this.app.text('Jugador  2', 1090, 35);

                this.app.fill(255, 250, 0);

                this.app.text(this.puntajej1, 450, 35);
                this.app.text(this.puntajej2, 720, 35);



                if (this.vidasj1 == 3) {


                    this.app.image(this.vidaj1ico, 228, 27);
                    this.app.image(this.vidaj1ico, 298, 27);
                    this.app.image(this.vidaj1ico, 368, 27);

                }

                if (this.vidasj1 == 2) {


                    this.app.image(this.vidaj1ico, 228, 27);
                    this.app.image(this.vidaj1ico, 298, 27);
                }

                if (this.vidasj1 == 1) {


                    this.app.image(this.vidaj1ico, 228, 27);

                }
                if (this.vidasj2 == 3) {
                    this.app.image(this.vidaj2ico, 960, 27);
                    this.app.image(this.vidaj2ico, 890, 27);
                    this.app.image(this.vidaj2ico, 820, 27);
                }

                if (this.vidasj2 == 2) {

                    this.app.image(this.vidaj2ico, 960, 27);
                    this.app.image(this.vidaj2ico, 890, 27);
                }

                if (this.vidasj2 == 1) {


                    this.app.image(this.vidaj2ico, 960, 27);
                }







                if (this.vidasj1 <= 0) {
                    this.jugador1muerto = true;
                    this.vidasj1 == 0;
                }

                if (this.puntajej1 <= 0) {
                    this.puntajej1 = 0;
                }

                if (this.vidasj2 <= 0) {
                    this.jugador2muerto = true;
                    this.vidasj2 = 0
                }

                if (this.puntajej2 <= 0) {
                    this.puntajej2 = 0;
                }

                if (this.jugador1muerto && this.jugador2muerto) {
                    this.morir = true;
                }


                if (this.morir) {
                    this.pantalla = 3;
                }
                break;



            case 3:
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.final, 0, 0, 1200, 700);
                this.app.fill(255);
                this.app.textFont(this.fuente);
                this.app.textSize(35);
                this.app.textAlign(this.app.CENTER);


                if (this.puntajej1 > this.puntajej2) {
                    this.app.text('Jugador  1  ha ganado', 600, 280);
                    this.app.textSize(20);

                    this.app.text('Jugador  1: ' + ' ' + this.puntajej1 + ' ' + 'puntos', 600, 370);
                    this.app.text('Jugador  2: ' + ' ' + this.puntajej2 + ' ' + 'puntos', 600, 440);


                }

                if (this.puntajej1 < this.puntajej2) {
                    this.app.text('Jugador  2  ha ganado', 600, 280);
                    this.app.textSize(20);

                    this.app.text('Jugador  2: ' + ' ' + this.puntajej2 + ' ' + 'puntos', 600, 370);
                    this.app.text('Jugador  1: ' + ' ' + this.puntajej1 + ' ' + 'puntos', 600, 440);


                }

                if (this.puntajej1 == this.puntajej2) {
                    this.app.text('empate', 600, 280);
                    this.app.textSize(20);

                    this.app.text('Jugador  1: ' + ' ' + this.puntajej1 + ' ' + 'puntos', 600, 370);
                    this.app.text('Jugador  2: ' + ' ' + this.puntajej2 + ' ' + 'puntos', 600, 440);


                }

                break;

        }


    }

   
    mouse() {
        switch (this.pantalla) {
            case 0:
                if (this.inicia.start.isSobre()) {
                    this.pantalla = 1;

                }

                break;

            case 1:

                if (this.inicia.comenzar.isSobre()) {
                    this.pantalla = 2;

                    if (this.iden == null) {
                        this.start();
                    } else {
                        clearInterval(this.iden);
                        this.iden = null;
                    }
                    this.personaje = new Personaje(this.app, 600, 1);
                    this.personajeDos = new Personaje2(this.app, 400, 2);
                    this.enemigos = [];
                    this.generarEnemigos = this.generarEnemigos.bind(this);
                    setInterval(this.generarEnemigos, this.dificultad);
                    this.update = this.update.bind(this);
                    setInterval(this.update, 20);
                    break;
                }

                case 2:



                    break;
        }

    }

    generarEnemigos() {
        let r = Math.round(this.app.random(0, 1));
        switch (r) {
            case 0:
                this.enemigos.push(new Nave1(this.app, this.tiempo));
                break;

            case 1:
                this.enemigos.push(new Nave2(this.app, this.tiempo));
                break;
        }

    }

    update() {

        for (let i = 0; i < this.enemigos.length; i++) {
            if (this.enemigos[i].y >= (this.app.height + 30) && this.pantalla == 2) {
                this.enemigos.splice(i, 1);

                if (this.jugador1muerto == false) {
                    this.vidasj1--;
                }
                if (this.jugador2muerto == false) {
                    this.vidasj2--;
                }
                this.perdida.play();


            }

        }

        for (let i = 0; i < Personaje.poderes.length; i++) {
            if (Personaje.poderes[i].y <= (-30) && this.pantalla == 2) {
                Personaje.poderes.splice(i, 1);
            }

        }

        for (let i = 0; i < Personaje2.poderes.length; i++) {
            if (Personaje2.poderes[i].y <= (-30) && this.pantalla == 2) {
                Personaje2.poderes.splice(i, 1);
            }

        }

        this.validarColisiones();


    }

    teclado() {

        if (this.pantalla == 2) {
            this.personaje.mover();
            this.personajeDos.mover();
        }
    }

    soltarTeclado() {
        if (this.pantalla == 2) {
            this.personaje.parar();
            this.personajeDos.parar();
            if (this.app.key == 'm' && this.pantalla == 2) {
                this.personaje.disparar();

                this.sonido.play();


            }

            if (this.app.key == 'v' && this.pantalla == 2) {
                this.personajeDos.disparar();
                this.sonido.play();
            }
        }

    }

    validarColisiones() {
        if (Personaje.poderes != null || this.jugador1muerto == false) {
            for (let i = 0; i < Personaje.poderes.length; i++) {
                for (let j = 0; j < this.enemigos.length; j++) {
                    let poder = Personaje.poderes[i];
                    let enemigo = this.enemigos[j];
                    if (this.app.dist(poder.x, poder.y, enemigo.x, enemigo.y) <= 45 && this.pantalla == 2) {
                        enemigo.stop();
                        poder.stop();
                        this.enemigos.splice(j, 1);
                        Personaje.poderes.splice(i, 1);
                        this.puntajej1++;
                        this.impacto.play();
                        return;
                    }

                }

            }
        }

        if (Personaje2.poderes != null || this.jugador2muerto == false) {
            for (let i = 0; i < Personaje2.poderes.length; i++) {
                for (let j = 0; j < this.enemigos.length; j++) {
                    let poder = Personaje2.poderes[i];
                    let enemigo = this.enemigos[j];
                    if (this.app.dist(poder.x, poder.y, enemigo.x, enemigo.y) <= 45 && this.pantalla == 2) {
                        enemigo.stop();
                        poder.stop();
                        this.enemigos.splice(j, 1);
                        Personaje2.poderes.splice(i, 1);
                        this.puntajej2++;
                        this.impacto.play();
                        return;
                    }

                }

            }
        }



        for (let j = 0; j < this.enemigos.length; j++) {
            let perso = this.personaje;
            let enemigo = this.enemigos[j];
            if (this.app.dist(perso.x, perso.y, enemigo.x, enemigo.y) <= 35 && this.pantalla == 2 && this.jugador1muerto == false) {
                enemigo.stop();
                this.enemigos.splice(j, 1);
                this.vidasj1--;
                this.puntajej1--;
                this.colision.play();
                return;
            }

            let persona = this.personajeDos;

            if (this.app.dist(persona.x, persona.y, enemigo.x, enemigo.y) <= 35 && this.pantalla == 2 && this.jugador2muerto == false) {
                enemigo.stop();
                this.enemigos.splice(j, 1);
                this.vidasj2--;
                this.puntajej2--;
                this.colision.play();
                return;
            }

        }





    }

    start() {
        this.iden = setInterval(this.run, 1000);
    }

    run() {
        this.tiempo++;
    }
}
