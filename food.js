class Food{

    constructor(x,y,width,height){

        this.x = x; 

        this.y = y;

        this.height = height;

        this.width = width;

    }

    foodLocation(){

        var col = width/scl;

      var row = height/scl;

      this.x = floor(random(0,col));

      this.y = floor(random(0,row));

      this.x = this.x*scl

      this.y = this.y*scl;

    }

    display(){

        fill("red");

        rect(this.x,this.y,this.width,this.height);

        foodSprite = createSprite(this.x,this.y,this.width,this.height)

    }
}