"use strict";

const getJSON = async function (url) {
	try {
		const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
		if (!response.ok) throw new Error("Problem getting location data");
		const { result: data } = await responseURL.json();
		console.log(dataURL);
	} catch (error) {}
};
