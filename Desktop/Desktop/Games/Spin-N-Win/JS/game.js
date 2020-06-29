let config={
    type: Phaser.CANVAS,
    width:800,
    height:800,
    backgroundColor : 0xffcc00,
    scene:{
        preload:preload,
        create:create,
        update:update,
    },
};

let game= new Phaser.Game(config);

let prizesConfig = {
    count:12,
    prize_names : ["3000 Credits","35% Off","Hard Luck","70% OFF","Swagpack","100% OFF","Netflix","50% Off","Amazon Voucher","2 Extra Spin", "CB Tshirt","CB Book"]
}

function preload(){
    this.load.image('backgroundImage', 'img/back.jpg');
    this.load.image('wheelImage', 'img/wheel.png');
    this.load.image('standImage', 'img/stand.png');
    this.load.image('pinImage', 'img/pin.png');
    this.load.image('button','img/button.png',);
    this.load.audio('spinning', 'Audio/spinning.mp3');
    this.load.audio('win', 'Audio/Ta Da-SoundBible.com-1884170640.mp3');

}

function create(){
    let W=game.config.width;
    let H=game.config.height;

    let background=this.add.sprite(0,0,'backgroundImage');
    background.setPosition(W/2,H/2);
    background.setScale(0.20);

    let stand=this.add.sprite(W/2,H/2+200,'standImage');
    stand.setScale(0.25);
    // stand.depth=1;

    this.wheel=this.add.sprite(W/2,H/2-50,'wheelImage');
    this.wheel.setScale(0.25);

    let pin=this.add.sprite(W/2,H/2-270,'pinImage');
    pin.setScale(0.25);

    this.spinning=this.sound.add('spinning');
    this.win=this.sound.add('win');

    let button=this.add.sprite(W/2,H/2+290,'button').setInteractive();

    button.on('pointerdown', spinwheel,this);
    button.on('pointerup',function(){
        console.log("pointer up");
    });
    // button.onInputUp.add(up, this);

    flag=false;

   // event listener
    // this.input.on("pointerdown",spinwheel,this);

    font_style={
        font: "bold 30px Roboto",
        align: "center",
        color: "red"
    }

    this.gameText=this.add.text(10,10,"Welcome to spin n win",font_style);
}

function update(){
    
}

function spinwheel(){
    if(flag==false){
        flag=true;
        this.spinning.play();
        this.gameText.setText("You clicked the mouse");

        let rounds=Phaser.Math.Between(2,4);
        let degrees=Phaser.Math.Between(0,11)*30;

        let totalAngle=rounds*360+degrees;
        let idx = prizesConfig.count - 1 - Math.floor(degrees/30);

        tween=this.tweens.add({
            targets:this.wheel,
            angle:totalAngle,
            duration:6000,
            ease:"Cubic.easeOut",
            callbackScope:this,
            onComplete: function(){
                
                this.win.play();
                this.gameText.setText("You won "+ prizesConfig.prize_names[idx]);
                flag=false;
                this.spinning.pause();
            },
        });
    }
}


