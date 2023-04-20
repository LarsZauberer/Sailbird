class Pillar{
    constructor(s, x){
        this.s = s

        this.x = x

        this.gap = this.s.random(200, this.s.height - 200)
        this.gapwidth = 200
    }

    update(){

        this.move()
        this.reset()
        this.display()
    }

    move(){
        this.x -= 5
       
    }

    reset(){
        if (this.x < 0){
            this.x = this.s.width;
            this.gap = this.s.random(200, this.s.height - 200)
        }
    
    }


    display(){


        this.s.push()
        this.s.strokeWeight(5)
        this.s.line(this.x, 0, this.x, this.gap)
        this.s.line(this.x, this.gap+this.gapwidth, this.x, this.s.height)
        this.s.pop()
    }
}