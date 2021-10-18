import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

import { connect } from 'pwa-helpers';
import { store } from '../redux/store.js';

import 'dile-pages/dile-pages.js';
import { DileSmoothScrollMixin } from 'dile-smooth-scroll/DileSmoothScrollMixin.js';

// import '../headquarters/headquarters-barcelona-view.js';
// import '../headquarters/headquarters-madrid-view.js';

class ViewHeadquarters extends connect(store)(DileSmoothScrollMixin(PageViewElement)) {
  static get properties() {
    return {
      section: { type: Array }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h2>Sedes</h2>
          <p>
            <a href="/headquarters/madrid" @click="${this.headquartersClick}">Sede de Madrid</a> | 
            <a href="/headquarters/barcelona" @click="${this.headquartersClick}">Sede de Barcelona</a> |
            <a href="/headquarters/bilbao">Sede de Bilbao (no existe)</a> |
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit atque cumque architecto ad dolor ipsam itaque, eum officiis neque, blanditiis cum non soluta in dicta. Numquam est odio iste?</p>
          <p>Sed aut voluptatem ex hic ea, velit inventore temporibus ipsum architecto perspiciatis natus laboriosam modi excepturi est, provident officia voluptatum! Corrupti praesentium beatae assumenda tempora rem autem, dolores unde perspiciatis!</p>
          <p>Vero ipsum enim repudiandae esse, nulla sed fugit facilis blanditiis quidem, nesciunt architecto suscipit. Quaerat error corporis quas aut. Perspiciatis, consequuntur. Sequi ducimus commodi similique quis? Dolor dicta est molestiae.</p>
          <p>Nobis fuga, alias ipsam voluptate dolor sint repudiandae qui mollitia dolore eius molestiae laborum nemo eos? Adipisci laborum ad, molestiae itaque velit aliquid ratione dolores exercitationem, labore, aspernatur nostrum ducimus?</p>
          <p>Ipsam similique consequuntur voluptatibus sit eius! Repudiandae, molestiae nulla culpa illum reprehenderit consequuntur placeat dicta nostrum aliquam cupiditate officiis iure similique veritatis sit id quae at assumenda numquam excepturi. Facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint quas laudantium cum maiores dignissimos aspernatur consequatur similique vel quia quos, eligendi modi debitis temporibus eius, commodi ab ipsam. Dolorem.</p>
          <p>In magni, voluptatum delectus sequi quaerat odit alias molestiae cumque deleniti perspiciatis consectetur voluptatem maiores sit veritatis excepturi placeat voluptate neque! Consectetur eius in aperiam iure quasi quibusdam molestias pariatur!</p>
          <p>Quasi doloribus sunt culpa laborum, rerum eos ea itaque. Itaque fugiat perferendis dicta voluptatem, modi, iusto tempora dignissimos, esse nam dolorem sit! Explicabo velit eum similique fugit minima adipisci quae.</p>
          <dile-pages selected="${this.section}" attrForSelected="name" id="info">
            <headquarters-madrid-view name="madrid" ?active="${this.section == 'madrid'}"></headquarters-madrid-view>
            <headquarters-barcelona-view name="barcelona" ?active="${this.section == 'barcelona'}"></headquarters-barcelona-view>
          </dile-pages>
      </div>
    `;
  }

  headquartersClick(){
    this.smoothScrollElementIntoView(this.shadowRoot.getElementById("info"));
  }

  stateChanged(state){

      this.section = state.app.pageSection;

  }
  
}

customElements.define('view-headquarters', ViewHeadquarters); 