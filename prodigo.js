//import { getLyrics, getSong } from 'genius-lyrics-api';
const genius = require("genius-lyrics-api")

const path = require('path');

const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.listen(process.env.PORT || 3001, function() {
	console.log(`Server is up and running on 3001 ...`);
  });
	
  app.get("/", (req, res) => {
	
	let data = {
		name: "GFG",
		age: 18,
		male: true
	}

	genius.getLyrics(options).then((lyrics) => {
		  res.json({ message: chooseRandomLine(lyrics) });
	});
	//res.sendFile(path.join(__dirname, '/index.html'));
	
	
  });

const options = {
	apiKey: '4q-SJRXo7viuaFHlhUGJgrUJH8iAMfGemvMhhd0Tj9ElrpsnajIL-5xpDN5H6mOB',
	title: 'Esquizofrénico',
	artist: 'Pródigo PRT',
	optimizeQuery: true
};



/*genius.getSong(options).then((song) => {
	chooseRandomLine(song.lyrics)

	//console.log(`${song.id}${song.url}${song.albumArt}${song.lyrics}`)

	
	}
);
*/

function chooseRandomLine(lyrics) {
	arrayOfLines = lyrics.match(/[^\r\n]+/g);
	uniq = [...new Set(arrayOfLines)];

	const rndInt = Math.floor(Math.random() * uniq.length) + 1
	var verso = uniq[rndInt]
	console.log("Verso random do prodigo -> " + verso)
	while (verso.includes('[')) {
		rndInt = Math.floor(Math.random() * uniq.length) + 1
		verso = uniq[rndInt]
	}

	return verso
}