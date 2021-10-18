import { LitElement, html, css } from 'lit-element';
import { MiCSS } from '../css';

class View404  extends LitElement {

  static get styles() {
    return [MiCSS, css`
      :host {
        display: block;
      }
    `];
  }

  render() {
    return html`
      <div>
        <h2>Pagina no encontrada</h2>
      </div>
      <p>Esto es un error 404</p>
    `;
  }
}

customElements.define('view-404', View404); 