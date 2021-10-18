import { html, css } from 'lit-element';

import { PageViewElement } from './page-view-element';

class ViewMap  extends PageViewElement {

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `
    }

    render() {
        return html`
        <div>
            <h2>Mapa del sitio</h2>
        </div>
        <p>
            <select @change="${this.selectChanged}">
                <option value="">Selecciona una pagina</option>
                <option value="home">Home</option>
                <option value="about">Sobre nosotros</option>
                <option value="contact">Contacto</option>
            </select>
        </p>
        `;
    }

    selectChanged(e){
        let page = e.target.value;
     //   console.log(e.target.value);

     //aqui le enviamos los cambios al padre
     this.dispatchEvent(new CustomEvent('navigate', {
        bubbles: true,
        composed: true,
        detail: page
     }));

    }

}
customElements.define('view-map', ViewMap);