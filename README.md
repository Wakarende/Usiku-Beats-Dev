# Usiku Beats: Game Development and Level-Testing Environment

**Play the game:** https://usikubeats.com/

Usiku Beats is a browser-based rhythm game built by Usiku Games. This repository is the Phaser project used to develop and test the game's scenes, visuals and levels, built with Phaser Editor 2D. Levels are driven by MIDI files synced to the song audio.

> Published with Usiku Games' permission. The full commit history is kept. A deployment script containing infrastructure credentials was removed from the history before publishing.

Related repositories: [usiku-beats-frontend](https://github.com/Wakarende/usiku-beats-frontend) (the Next.js web application the game runs inside) and [usiku-beats-backend](https://github.com/Wakarende/usiku-beats-backend) (the Django REST Framework API).

## Stack

JavaScript, Phaser 3, Phaser Editor 2D, MIDI, Rex UI plugins, PHP page shell.

## What I built

**Gameplay wave visualiser.** I built an animated wave visual for the play scene as a reusable `Visualizer` component to make levels more visually engaging while a song plays. I built it in stages: a moving wave, then a wave that rises and falls, a right-hand divider wave and a randomised wave, before packaging it as the new visualiser.

**Tile creation and a layering fix.** I updated tile creation in the level scene so it works across all tile types, and fixed a layering issue with held tiles.

**Rewind in the level-testing environment.** I added rewind to the testing environment, so a level designer checking a change can jump back instead of replaying the whole song from the start.

**Level testing against real tracks.** I set up and iterated MIDI and audio test tracks to check timing and visuals in the level scene while building the features above.

## Running locally

The game page is served through `index.php`, so run it with PHP's built-in server and open http://localhost:8000:

```bash
php -S localhost:8000
```

The project can also be opened in Phaser Editor 2D.
