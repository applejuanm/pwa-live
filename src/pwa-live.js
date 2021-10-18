import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';


//redux
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../src/redux/store';
import { navigate } from '../src/redux/actions/app-actions';


import './utils/responsive-banner.js';
import './icons/eit-icons.js';
import './utils/menu-responsive.js';
import './utils/eit-feedback.js';

// import './views/view-about';
// import './views/view-home';
// import './views/view-contact';
// import './views/view-map';
// import './views/view-blog';

import 'dile-tabs/dile-tabs.js';
import 'dile-pages/dile-pages.js';
import 'dile-spinner/dile-spinner-modal.js';

class PwaLive extends connect(store)(LitElement) {

	static get styles() {
		return css`
			:host {
				display: block;
				
				--primary-color: #673ab7;
				--primary-light-color: #9a67ea;
				--secondary-color: #fbc02d;
				--secondary-light-color: #fbd09d;
				--text-color: #303030;
				--reverse-text-color: #fff;
				--reverse-accent-color: #fdd835;
				
				padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
				--dile-tab-selected-line-color: var(--secondary-color);
				--dile-tab-text-color: var(--reverse-color, #fff);
				--dile-tab-selected-text-color: var(--reverse-accent-color, #fff);
				background-color: #f9f9f9;
			}
			h1 {
				font-weight: 300;
				flex-grow: 1;
			}
			.menumobile {
				margin-top: 10px;
				padding: 10px 0 20px 5px;
			}
			.menumobile a {
				display: block;
				margin: 10px 20px;
				text-decoration: none;
				text-transform: uppercase;
				font-weight: bold;
				color: var(--secondary-light-color);
			}
			.page {
				display: none;
			}
			.page[active] {
				display: block;
			}
			dile-tabs {
				border-bottom: 1px solid #ddd;
				margin-bottom: 15px;
				margin-right: 15px;
			}
			dile-pages {
				padding: 0 10px 10px;
			}
			header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: var(--primary-color, #ddd);
				color: var(--reverse-text-color, #303030);
				padding: 10px;
				--eit-icon-size: 32px;
				--eit-icon-color: var(--secondary-color);
			}
			dile-spinner-modal {
				--dile-spinner-color: var(--secondary-color);
			}
	
			}
			.homelink {
				color: inherit;
				text-decoration: none;
			}
			footer {
				text-align: center;
				padding 10px;
				font-size: 0.8em;
			}
		`;
	}

	static get properties() {
		return {
			loading: { type: Boolean },
			page: { type: String },
			section: { type: String },
		};
	}

	constructor() {
		super();
		//	this.page = 'home';
		installRouter((location) => this.handleNavigation(location.pathname));
		this.addEventListener('navigate', (e) => this.navigate(e.detail));
	}
	render() {
		return html`
		<header>
			<h1>My App</h1>
			<menu-responsive>
				<div slot="menudesk">
							<dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
									<dile-tab name="home">Home</dile-tab>
									<dile-tab name="about">About</dile-tab>
									<dile-tab name="contact">Contact me</dile-tab>
									<dile-tab name="map">Mapa</dile-tab>
									<dile-tab name="headquarters">Sedes</dile-tab>
									<dile-tab name="pelis/list">pelis</dile-tab>
							</dile-tabs>
						</div>
						<div slot="menumobile" class="menumobile">
							<a href="/">Home</a>
							<a href="/about">About</a>
							<a href="/contact">Contact</a>
							<a href="/map">Site map</a>
							<a href="/todo">To Do</a>
							<a href="/pelis/list">Pelis</a>
					</div>
						</menu-responsive>
						<div>
							<eit-icon icon="account_box"></eit-icon>
						</div>
			<!--Punto de bindeo a la propiedad segments-->
			</header>

			<responsive-banner></responsive-banner>

			<dile-pages selected="${this.page}" attrForSelected="name">
				<view-home name="home" ?active=${this.page=='home' }></view-home>
				<view-login name="login" ?active=${this.page=='login' }></view-login>
				<view-about name="about" ?active=${this.page=='about' }></view-about>
				<view-contact name="contact" ?active=${this.page=='contact' }></view-contact>
				<view-map name="map" ?active=${this.page=='map' }></view-map>
				<view-headquarters name="headquarters" ?active=${this.page=='headquarters' }></view-headquarters>
				<view-pelis name="pelis" ?active=${this.page=='pelis'} section=${this.section}></view-pelis>
				<view-404 name="404" ?active=${this.page=='404' }></view-404>
			</dile-pages>
			<!--Bindeo a atributo booleano-->
			<dile-spinner-modal ?active="${this.loading}"></dile-spinner-modal>
			<update-metadata></update-metadata>
			<eit-feedback></eit-feedback>
					`;
	}
	selectedChanged(e) {
		let page = e.detail;
		this.navigate(page);
	}

	handleNavigation(path) {
		path = decodeURIComponent(path);
		//el store se encarga de manipular la pagina y actualizar el estado
		store.dispatch(navigate(path));
	}

	//navegar entre paginas
	navigate(page) {
		window.history.pushState({}, '', '/' + page);
		this.handleNavigation(window.location.pathname);
	}

	//las partes del componente que necesito saber
	stateChanged(state) {
		console.log('app-live', state);
		this.page = state.app.page;
		this.loading = state.app.loading;
		this.feedback = state.app.feedback;
		this.section = state.app.pageSection;
	}

}
customElements.define('pwa-live', PwaLive);