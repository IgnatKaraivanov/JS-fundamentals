function playList(input) {
  class Song {
    constructor(playList, name, time) {
      (this.playList = playList), (this.name = name), (this.time = time);
      this.print = () => console.log(this.name);
    }
  }
  let numberOfSongs = input.shift();
  let desiredPlaylist = input.pop();

  let songs = [];

  for (let i = 0; i < numberOfSongs; i++) {
    let currentInput = input[i];
    let currentArray = currentInput.split("_");
    let currentSong = new Song(
      currentArray[0],
      currentArray[1],
      currentArray[2]
    );
    songs.push(currentSong);
  }
  if (desiredPlaylist === "all") {
    songs.forEach(s => s.print());
  } else {
    let filteredSongs = songs.filter(s => s.playList === desiredPlaylist);
    filteredSongs.forEach((s) => s.print());
  }
}

playList([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
