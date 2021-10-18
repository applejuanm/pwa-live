import { html } from 'lit-element';
import { MiCSS } from '../css';
import { store } from '../redux/store';
import { PageViewElement } from './page-view-element';
import { updateMetadata } from './../redux/actions/app-actions';


class ViewContact  extends PageViewElement {

  static get styles() {
    return [MiCSS];
  }

  render() {
    return html`
      <div>
        <h2>Contacto</h2>
      </div>
      <p>Esto es el home!!!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci fuga, dolorem, deserunt nemo laborum exercitationem obcaecati eius beatae velit nam aut magni maxime perferendis voluptatum magnam repellendus sunt quam?</p>
    `;
  }


  changeMetadata(){
    store.dispatch(updateMetadata({
        title: 'Contacta con nosotros',
        description: 'Esta es informacion de contacto',
        url: window.location.href,
        image: './images/escuelait.png'
    }));
}

}

customElements.define('view-contact', ViewContact); 