// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorPreload() {
    this.load.pack("asset-pack", "assets/asset-pack.json");
  }

  /** @returns {void} */
  editorCreate() {
    // logos_background
    this.add.image(180, 320, "logos_background");

    // loading
    const loading = this.add.image(115, 533, "beat_meter_empty");
    loading.setOrigin(0, 0.5);

    // percentage
    const percentage = this.add.text(180, 553, "", {});
    percentage.setOrigin(0.5, 0.5);
    percentage.visible = false;
    percentage.text = "0%";
    percentage.setStyle({
      align: "center",
      fontFamily: "DINPro-Medium",
      fontSize: "15px",
    });

    // current_asset
    const current_asset = this.add.text(180, 603, "", {});
    current_asset.setOrigin(0.5, 0.5);
    current_asset.visible = false;
    current_asset.text = "null";
    current_asset.setStyle({ align: "center", fontSize: "13px" });

    // loading_txt
    const loading_txt = this.add.text(180, 497, "", {});
    loading_txt.setOrigin(0.5, 0.5);
    loading_txt.text = "LOADING";
    loading_txt.setStyle({ fontFamily: "DINPro", fontSize: "15px" });

    // beats_logo
    const beats_logo = this.add.image(173, 245, "beats_logo");
    beats_logo.scaleX = 0.4;
    beats_logo.scaleY = 0.4;

    // play_button
    const play_button = this.add.image(180, 522, "play_button");
    play_button.scaleX = 0.6;
    play_button.scaleY = 0.6;
    play_button.visible = false;

    // play_text
    const play_text = this.add.text(180, 521.9580186429495, "", {});
    play_text.setOrigin(0.5, 0.5);
    play_text.visible = false;
    play_text.text = "LET'S GO!";
    play_text.setStyle({ fontFamily: "DINPro", fontSize: "15px" });

    this.loading = loading;
    this.percentage = percentage;
    this.current_asset = current_asset;
    this.loading_txt = loading_txt;
    this.play_button = play_button;
    this.play_text = play_text;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Image} */
  loading;
  /** @type {Phaser.GameObjects.Text} */
  percentage;
  /** @type {Phaser.GameObjects.Text} */
  current_asset;
  /** @type {Phaser.GameObjects.Text} */
  loading_txt;
  /** @type {Phaser.GameObjects.Image} */
  play_button;
  /** @type {Phaser.GameObjects.Text} */
  play_text;

  /* START-USER-CODE */

  // Write your code here
  preload() {
    // this.video = this.add.video(180,320, 'title_screen_video').setScale(0.35).setLoop(true)
    // this.video.play()

    this.editorCreate();

    this.loading.setOrigin(0, 0.5);
    this.loading.scaleX = 0;

    this.load.on(Phaser.Loader.Events.PROGRESS, (p) => {
      // console.log(Math.round(p/1 * 100))
      this.percentage.setText("LOADING..." + Math.round((p / 1) * 100) + " %");
      this.loading.scaleX = p + 0.66;
    });


    this.editorPreload();
  }

  async create() {
    console.log("Preload.js create()");
    // console.log(this.song_list);

    this.cache.json.add("song-list", this.song_list);

    this.midi = await Midi.fromUrl(`assets/sounds/test.mid`);

    this.loading_txt.setVisible(false)
    this.loading.setVisible(false)

    this.play_button.setVisible(true);
    this.play_text.setVisible(true);


    this.track = {
      image_asset: "carousel_2",
      artist_name: "Test Artist",
      song_name: "test",
      maximum_score: 0
    }


    this.play_button.setInteractive()
    this.play_button.on("pointerup", ()=>{

      // // this.scale.startFullscreen();
      // this.scene.start("BrandingTransitionScene", {
      //   track: this.track,
      // });

      this.scene.start("Level", { track: this.track, midi: this.midi });



    })


    

    // this.scene.start("EpisodeSelect", {song_list: this.song_list});
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
