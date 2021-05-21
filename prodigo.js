//import { getLyrics, getSong } from 'genius-lyrics-api';
const genius = require("genius-lyrics-api")

const options = {
	apiKey: '4q-SJRXo7viuaFHlhUGJgrUJH8iAMfGemvMhhd0Tj9ElrpsnajIL-5xpDN5H6mOB',
	title: 'Vamos Bafar',
	artist: 'Pródigo PRT',
	optimizeQuery: true
};

genius.getLyrics(options).then((lyrics) => chooseRandomLine(lyrics));

/*genius.getSong(options).then((song) => {
	chooseRandomLine(song.lyrics)

	//console.log(`${song.id}${song.url}${song.albumArt}${song.lyrics}`)

	
	}
);
*/

function chooseRandomLine(lyrics) {
	arrayOfLines = lyrics.match(/[^\r\n]+/g);
	const rndInt = Math.floor(Math.random() * arrayOfLines.length) + 1

	console.log("Verso random do prodigo -> " + arrayOfLines[rndInt])
}