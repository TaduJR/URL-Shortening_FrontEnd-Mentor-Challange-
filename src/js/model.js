import { getJSON } from "./helpers";

export const state = { shortenedURL: {} };

const createURLObject = function (data) {
	const { result: shortenedURL } = data;
	return {
		urlCode: shortenedURL.code,
		full_share_link: shortenedURL.full_share_link,
		full_short_link: shortenedURL.full_short_link,
		original_link: shortenedURL.original_link,
		share_link: shortenedURL.share_link,
		short_link: shortenedURL.short_link,
	};
};

export const loadShortenURL = async function (url) {
	const data = await getJSON(url);
	if (!data.ok) throw data;
	state.shortenedURL = createURLObject(data);
};
