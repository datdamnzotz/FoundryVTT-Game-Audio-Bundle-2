Hooks.once("ready", async function () {
    if(game.moulinette) {
      game.moulinette.sources.push({ type: "sounds", publisher: "Sonniss", pack: "FoundryVTT Game Audio Bundle 2", source: "data", path: "modules/gAudioBundle-2/src" })
    }
  });