class Enemigo{

    constructor(app, tiempo){
        this.app=app;
        this.tiempo = tiempo;
        this.x=this.app.random(55,1145);
        this.y=-100;
        this.imagen=[];
        this.punt=0;
        this.animacion=this.animacion.bind(this);
        this.animar=setInterval(this.animacion,200);
        this.mover=this.mover.bind(this);
        this.moviendose=setInterval(this.mover,15);
        this.hardcore = 3.5;

    }


pintar(){
this.app.image(this.imagen[this.punt],this.x,this.y);

if(this.tiempo > 25){
    this.hardcore =5.5;
}

if(this.tiempo > 35){
    this.hardcore =8;
}

if(this.tiempo > 55){
    this.hardcore =10;
}

if(this.tiempo > 70){
    this.hardcore =12;
}

}



actualizarTiempo(tiempo){
    this.tiempo = tiempo;

}


animacion(){
    this.punt++;
    if(this.punt>3){
        this.punt=0;
    }
}

mover(){
this.y+=this.hardcore;

}

getX(){
    return this.x;
}

getY(){
    return this.y;
}

stop(){
    clearInterval(this.animar);
    clearInterval(this.moviendose);
}

}