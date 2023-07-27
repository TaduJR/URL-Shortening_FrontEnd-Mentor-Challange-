import { API_URL } from "./config";
import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error(`Request took too long! Please Try again`));
		}, s * 1000);
	});
};

export const getJSON = async function (url) {
	try {
		const fetchPro = fetch(`${API_URL}${url}`);
		const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
		const data = await response.json();
		if (!response.ok) new Error(`${data.message} ${response.status}`);
		return data;
	} catch (err) {
		throw err;
	}
};
