class Poder{


    constructor(app,x,y){
        this.app=app;
        this.x=x;
        this.y=y;
        this.imagen=(this.app.loadImage('/imgs/Misil.png'));
        this.mover=this.mover.bind(this);
        this.moviendose=setInterval(this.mover,50);
    }


    pintar(){
        this.app.image(this.imagen,this.x,this.y);

    }

    mover(){
        this.y-=10;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    stop(){
        clearInterval(this.moviendose);
    }


}