// ***** define some clobal sound variables here to work across scenes
var start_sfx;
var background_music;
JSON.parse(localStorage.getItem("score"))
  ? null
  : localStorage.setItem("score", JSON.stringify(0));
var score = parseInt(JSON.parse(localStorage.getItem("score")));

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

var userId = getCookie("user_id") || null;
// userId = '62af4d28c5f4c025f7203347'

window.addEventListener("load", function () {
  WebFont.load({
    custom: {
      families: [
        "Young-Techs",
        "Robot-Font",
        "D-DIN-Bold",
        "DINPro-Bold",
        "DINPro-Medium",
        "DINPro",
        "Misty-Cotton",
        "MyriadPro-Bold",
        "MyriadPro-Regular",
        "Roboto-Regular",
        "Righteous-Regular",
      ],
    },
  });

  if (true) {
    var game = new Phaser.Game({
      parent: "gameContainer",
      width: 360,
      height: 640,
      // height: 1024,
      type: Phaser.AUTO,
      backgroundColor: "#242424",
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      render: {
        pixelArt: false,
      },
      input: {
        activePointers: 3,
      },
    //   fps: {
    //     target: 30,
    //     forceSetTimeOut: true,
    //   },
    });

    game.scene.add("Boot", Boot, true);
  }
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/preload-pack.json");
  }

  create() {
    start_sfx = this.sound.add("start_sfx", { volume: 0.7, loop: false });


    // superglobal settings
    this.registry.set("transitionDuration", 500);
    this.scene.start("Preload");
  }
}
