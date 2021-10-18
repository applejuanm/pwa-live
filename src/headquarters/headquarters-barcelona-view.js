import { html, css } from 'lit-element';

import { PageViewElement } from '../views/page-view-element.js';


export class HeadquartersBarcelona extends PageViewElement {

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `
    }


    render() {
        return html`
        <h2>Barcelona</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae illum 
        numquam quasi possimus! Nobis recusandae fuga deleniti sequi
        architecto aperiam culpa eveniet rem fugit? Repellat cum nam deleniti! Culpa.</p>
        `;
    }
}
customElements.define('headquarters-barcelona-view', HeadquartersBarcelona);