class Nave1 extends Enemigo{

    constructor(app){
       super(app);
        for (let i = 0; i < 4; i++) {
           this.imagen.push(this.app.loadImage('/imgs/Enemigo 1.png'));
            
        }
    }



}