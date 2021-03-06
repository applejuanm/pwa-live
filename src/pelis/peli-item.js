import { LitElement, html, css } from 'lit-element';
import { peliDelete } from '../redux/actions/pelis-actions';
import { store } from '../redux/store';

class PeliItem extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
          }
          .container {
            border-bottom: 1px solid #ddd;
            padding: 10px;
          }
          .peli {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .name {
            flex-grow: 1;
          }
          .name span {
            display: block;
            font-size: 0.8em;
          }
          .actions {
            white-space: nowrap;
            font-size: 0.8em;
            text-transform: uppercase;
          }
          h2 {
            font-size: 1.2em;
            margin: 15px 0 5px;
          }
        `;
    }

    static get properties() {
        return {
            peli: { type: Object },
        };
    }

    constructor() {
        super();
        this.peli = [];
    }

    render() {
        return html`
        <div class="container">
            <div class="peli">
                <div class="name">
                    ${this.peli.nombre}
                    <span>${this.peli.director}</span>
                </div>
                <div class="actions">
                    <a href="#" @click="${this.doDelete}">[borrar]</a>
                    <a href="/pelis/edit/${this.peli.id}">[editar]</a>
                </div>
            </div>
        </div>
        `;
    }

      doDelete() {
        store.dispatch(peliDelete(this.peli));
      }

}

customElements.define('peli-item', PeliItem);