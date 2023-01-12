class PlayByGenre {
  constructor(genres, plays) {
    const genresList = this.genresListGetter(genres);
    this.playsByGenre = {};

    this.initializer(genresList);
    this.playsListSetter(genres, plays);
    this.sumByGenre(genresList);
    this.playsListSorter(genresList);
    this.sortedGenreList = this.genreListSorter(genresList);
  }

  initializer(genresList) {
    for (const genre of genresList) {
      this.playsByGenre[genre] = { totalPlays: 0, playsList: [] };
    }
  }

  playsListSetter(genres, plays) {
    for (let index = 0; index < plays.length; index += 1) {
      this.playsByGenre[genres[index]].playsList.push([plays[index], index]);
    }
  }

  genresListGetter(genres) {
    return new Set(genres);
  }

  sumByGenre(genresList) {
    for (const genre of genresList) {
      this.playsByGenre[genre].totalPlays = this.playsByGenre[
        genre
      ].playsList.reduce((ac, cur) => {
        return ac + cur[0];
      }, 0);
    }
  }

  playsListSorter(genresList) {
    for (const genre of genresList) {
      this.playsByGenre[genre].playsList.sort((a, b) => {
        return b[0] - a[0];
      });
    }
  }

  genreListSorter(genresList) {
    const sortedGenreList = [...genresList];

    sortedGenreList.sort((a, b) => {
      return this.playsByGenre[b].totalPlays - this.playsByGenre[a].totalPlays;
    });

    return sortedGenreList;
  }
}

function solution(genres, plays) {
  const { playsByGenre, sortedGenreList } = new PlayByGenre(genres, plays);
  const answer = [];

  for (genre of sortedGenreList) {
    if (playsByGenre[genre].playsList[1]) {
      answer.push(
        playsByGenre[genre].playsList[0][1],
        playsByGenre[genre].playsList[1][1]
      );
    } else {
      answer.push(playsByGenre[genre].playsList[0][1]);
    }
  }

  console.log("answer : ", answer);

  return answer;
}
