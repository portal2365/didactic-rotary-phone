class Snake{

    constructor(x,y,width,height){

        this.x = x; 

        this.y = y;

        this.height = height;

        this.width = width;

    }

    setDir(x,y){
 

        this.x = floor(this.x+(x*scl));

      this.y = floor(this.y+(y*scl));

      

    }


    display(){

        fill(255);

        rect(this.x,this.y,this.width,this.height);

        snakeSprite = createSprite(this.x,this.y,this.width,this.height);


    }
}