const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;

var drops = [];
var maxDrops = 100;

var t1, t2, t3, t4;
var man1, man2, man3, man4, man5, man6, man7, man8;

var rand, thunder;

var u1;

function preload() {
    
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
    /*
    man1 = loadImage("images/Walking Frame/walking_1.png");
    man2 = loadImage("images/Walking Frame/walking_2.png");
    man3 = loadImage("images/Walking Frame/walking_3.png");
    man4 = loadImage("images/Walking Frame/walking_4.png");
    man5 = loadImage("images/Walking Frame/walking_5.png");
    man6 = loadImage("images/Walking Frame/walking_6.png");
    man7 = loadImage("images/Walking Frame/walking_7.png");
    man8 = loadImage("images/Walking Frame/walking_8.png");
    */
    
}

function setup(){
    var canvas = createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){ 
        drops.push(new Drop(random(0,400), random(0,400))); 
    }
}
    u1 = new Umbrella(200, 300);

}

function draw(){
    Engine.update(engine);

    background(0);

    for(var i=0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].update();
    }

    rand = Math.round(random(1, 4));
    if(frameCount % 60 === 0){
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break;
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;             
        }
        thunder.scale = random(0.3, 0.6);
    }

    u1.display();

    drawSprite()
}
