import { html, css } from 'lit-element';

import { PageViewElement } from '../views/page-view-element.js';

export class HeadquartersMadridView extends PageViewElement {

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `
    }


    render() {
        return html`
        <h2>Madrid</h2>
        <p>Esta es la bonita sede de Madrid</p>
        `;
    }
}
customElements.define('headquarters-madrid-view', HeadquartersMadridView);