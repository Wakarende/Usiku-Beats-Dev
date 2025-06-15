// /scenes/components/Visualizer.js
import p5 from "p5";

class Visualizer {
  constructor(phaserScene) {
    this.phaserScene = phaserScene; // Reference to your Phaser scene
    this.p5Instance = null;
    this.fft = null;
    this.audio = null;
  }

  setup() {
    // Set up the p5 sketch
    this.p5Instance = new p5((p) => {
      p.setup = () => {
        // Create the canvas and position it at the bottom of the screen
        this.canvas = p.createCanvas(p.windowWidth, 100); // Slim bar at the bottom
        this.canvas.position(0, p.windowHeight - 100); // Position at the bottom
        this.canvas.style("z-index", "10"); // Above the Phaser canvas
        this.canvas.style("pointer-events", "none"); // Non-interactive
        p.noFill();
        this.fft = new p5.FFT();
      };

      p.draw = () => {
        p.clear(); // Clear the canvas on each draw call to avoid visual artifacts
        p.background(0, 0, 0, 150); // Semi-transparent black background

        if (this.audio && this.audio.isPlaying()) {
          const spectrum = this.fft.analyze();
          p.stroke(0, 255, 0); // Set wave color
          p.beginShape();
          for (let i = 0; i < spectrum.length; i++) {
            const x = p.map(i, 0, spectrum.length, 0, p.width);
            const y = p.map(spectrum[i], 0, 255, p.height, 0);
            p.vertex(x, y);
          }
          p.endShape();
        }
      };

      p.windowResized = () => {
        // Ensure the canvas resizes when the window is resized
        p.resizeCanvas(p.windowWidth, 100);
        this.canvas.position(0, p.windowHeight - 100);
      };
    });
  }

  loadAudioFromPhaser(audioBuffer) {
    // Create a p5.SoundFile from the Phaser audio buffer
    this.audio = new p5.SoundFile();
    this.audio.setBuffer([
      audioBuffer.getChannelData(0),
      audioBuffer.getChannelData(1),
    ]);
    this.fft.setInput(this.audio);
    this.audio.play();
  }
}

export default Visualizer;
