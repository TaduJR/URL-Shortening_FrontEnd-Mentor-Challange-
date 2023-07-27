class ShortenURLView {
	_data;
	_parentElement = document.querySelector(".section__links--shortner");
	_errorMessage = "Unknown error";
	_errorPopup = document.querySelector(".error__message");
	_overlay = document.querySelector(".overlay");

	addHandlerShortenSubmit(handler) {
		document.addEventListener("submit", function (e) {
			e.preventDefault();
			handler();
		});
	}

	getQuery() {
		const inputURL = this._parentElement.querySelector(
			".section__links--shortner-input"
		).value;
		return inputURL;
	}

	renderSpinner() {
		this._parentElement
			.querySelector(".btn__shortner")
			.classList.add("btn__shortner--loading");
		this._parentElement
			.querySelector(".btn__shortner")
			.setAttribute("disabled", true);
	}

	deRenderSpinner() {
		this._parentElement
			.querySelector(".btn__shortner")
			.classList.remove("btn__shortner--loading");
		this._parentElement.querySelector(".btn__shortner").disabled = false;
	}

	_openErrorPopup() {
		this._errorPopup.classList.remove("hidden");
		this._overlay.classList.remove("hidden");
	}

	_closeErrorPopup() {
		this._errorPopup.innerHTML = "";
		this._errorPopup.classList.add("hidden");
		this._overlay.classList.add("hidden");
	}

	addHandlerError() {
		this._overlay.addEventListener("click", this._closeErrorPopup.bind(this));
		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape" && !modal.classList.contains("hidden"))
				this._closeErrorPopup();
		});
	}

	renderError(message = this._errorMessage) {
		this._errorPopup.innerHTML = "";
		this._openErrorPopup();
		const markup = `
			<div class="error__message--top">
				<svg
					class="error__message--icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
					<path
						d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
					/>
				</svg>
			</div>

			<div class="error__message--description">
				<h3 class="heading-3 error__message--heading-3">Ooops!</h3>
				<p class="error__message--paragraph">
					${message}
				</p>
			</div>
		`;
		this._errorPopup.insertAdjacentHTML("afterbegin", markup);
	}
}

export default new ShortenURLView();
