class Flappy{
    constructor(s, size){
        this.s = s 
        this.size = size
        this.x = 200;
        this.y = 200;
        this.died = false
        this.gravspeed = 0
    }

    
    update(){
        this.y += this.gravspeed
    }
    
    display(){
        this.s.push();
        this.s.fill(255, 0, 0)
        this.s.circle(this.x, this.y, 30)
        this.s.pop()
    }


    gravity(){
      
        this.gravspeed += 1*this.size
        
        
    }

    flap(){
        this.gravspeed = 0
        this.gravspeed -= 25*this.size
    }

    die(){
        for(let i = 0; i < pillars.length; i++){
            if (this.s.abs(this.x - pillars[i].x) < 5){
                if (this.y < pillars[i].gap || this. y > pillars[i].gap+pillars[i].gapwidth){
                    this.died = true
                }  
            }       
        }
    }
}