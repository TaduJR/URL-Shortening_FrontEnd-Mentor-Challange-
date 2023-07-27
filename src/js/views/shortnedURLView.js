import { mark } from "regenerator-runtime";

class ShortnedURLView {
	_parentElement = document.querySelector(".section__links--shortned");
	_data;

	_generateMarkup() {
		return `<div class="section__links--shortned-list">
			<a
				href="#"
				target="_blank"
				class="section__links--shortned-link section__links--shortned-link__input"
			>
				${this._data.original_link}
			</a>
			<a
				href="#"
				target="_blank"
				class="section__links--shortned-link section__links--shortned-link__final"
			>
				${this._data.short_link}
			</a>
			<button class="btn btn__copy">Copy</button>
		</div>`;
	}

	render(data) {
		this._data = data;
		console.log(this._data.original_link);
		const markup = this._generateMarkup();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}
}

export default new ShortnedURLView();
