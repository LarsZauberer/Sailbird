//http://joemckaystudio.com/multisketches/


function createCNV(sketch) {
    div = document.getElementById("cnv");
    
    //content.style.height = "calc(100% - " + nav.getBoundingClientRect().height.toString() +"px)"
    let cnv = sketch.createCanvas(div.getBoundingClientRect().width, div.getBoundingClientRect().height);
    cnv.parent("cnv");
    cnv.style("display", "block")
    
    actualResize(sketch)

    return cnv;
}
function actualResize(sketch){
    div = document.getElementById("cnv");
    sketch.resizeCanvas(div.getBoundingClientRect().width, div.getBoundingClientRect().height);
}



window.onload = function () {
    

};






let cnv = function(s) {
    s.setup = function() {

        createCNV(s)
        s.strokeWeight(0);

        flappy = new Flappy(s, 0.1)

        pillars = []
        pillars.push(new Pillar(s, s.width))
        pillars.push(new Pillar(s, s.width*1.2))
        pillars.push(new Pillar(s, s.width*1.4))
        pillars.push(new Pillar(s, s.width*1.6))
        pillars.push(new Pillar(s, s.width*1.8))

        s.background(100)
        

    };
    s.draw = function() {

        if(flappy.died){
            
        }
        else{
            s.background(100)
        
            for(let i = 0; i < pillars.length; i++){
                pillars[i].update()
            }

            flappy.gravity()
            flappy.update()
            flappy.display()
            flappy.die()
        }
        
    }
    s.mousePressed = function(){
        flappy.flap()
    }
    s.windowResized = function() {
        actualResize(s, )
    }

};
    
    let cnv_p5 = new p5(cnv);


