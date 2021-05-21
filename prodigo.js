//import { getLyrics, getSong } from 'genius-lyrics-api';
const genius = require("genius-lyrics-api")

const express = require("express");
  
const app = express();


app.listen(process.env.PORT || 5000, function() {
	console.log(`Server is up and running on 5000 ...`);
  });
	
  app.get("/", (req, res) => {
	
	let data = {
		name: "GFG",
		age: 18,
		male: true
	}

	genius.getLyrics(options).then((lyrics) => {
		  res.send(chooseRandomLine(lyrics))
	});
	
	  
  });

const options = {
	apiKey: '4q-SJRXo7viuaFHlhUGJgrUJH8iAMfGemvMhhd0Tj9ElrpsnajIL-5xpDN5H6mOB',
	title: 'Vamos Bafar',
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
	const rndInt = Math.floor(Math.random() * arrayOfLines.length) + 1

	console.log("Verso random do prodigo -> " + arrayOfLines[rndInt])

	return arrayOfLines[rndInt]
}