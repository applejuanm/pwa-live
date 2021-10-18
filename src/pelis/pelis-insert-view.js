import { LitElement, html, css } from 'lit-element';
import { store } from '../redux/store.js';
import { peliInsert } from '../redux/actions/pelis-actions';
import 'dile-input/dile-input.js';
import 'dile-rounded-button/dile-rounded-button.js';
import './peli-form.js';

export class PelisInsertView extends LitElement {

static get styles() {
        return css`
        :host {
            display: block;
            margin: 15px 0;
        }
        h2 {
            font-weight: 300;
            margin-bottom: 10px;
        }
        .withBorder {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 10px;
        }
        `;
    }

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            peli: { type: Object}
        };
    }

    constructor() {
        super();
        this.peli = {
            nombre: '',
            director: ''
        }
    
    }

    render() {
        return html`
        <h2>Insertar</h2>
        <div class="withBorder">
            <peli-form .peli="${this.peli}" @changed="${this.inputChanged}"></peli-form>
        </div>
        <dile-rounded-button @click="${this.insert}">Insertar</dile-rounded-button>
        `;
    }

    inputChanged(e){
        // console.log(e.target.name, e.target.value);
        this.peli = e.detail;
    }

    insert(){
        store.dispatch(peliInsert(this.peli));
    }


}
customElements.define('pelis-insert-view', PelisInsertView);