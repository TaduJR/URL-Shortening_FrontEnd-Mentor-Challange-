import * as model from "./model";
import shortenURLView from "./views/shortenURLView";
import shortnedURLView from "./views/shortnedURLView";

const controlShortenURL = async function () {
	try {
		const inputURL = shortenURLView.getQuery();
		if (!inputURL) return;
		shortenURLView.renderSpinner();
		await model.loadShortenURL(inputURL);
		shortenURLView.deRenderSpinner();
		console.log(model.state.shortenedURL);
		shortnedURLView.render(model.state.shortenedURL);
	} catch (err) {
		shortenURLView.deRenderSpinner();
		shortenURLView.renderError(err.error);
	}
};

const init = function () {
	shortenURLView.addHandlerShortenSubmit(controlShortenURL);
	shortenURLView.addHandlerError();
};

init();
