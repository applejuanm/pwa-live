
import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

// redux
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store';
import {incrementarContador , decrementarContador} from '../redux/actions/counter-actions';
import { counter } from '../redux/reducers/counter-reducer';
import { updateMetadata } from './../redux/actions/app-actions';
//implantamos reducers reducers

import {viewCSS} from '../styles/stylesView.js';

store.addReducers({
    counter: counter
})

class ViewAbout extends connect(store)(PageViewElement)  {

    static get properties() {
        return {
            counter: { type: Number },
        };
    }

    static get styles() {
        return [viewCSS, css`
            p {
                color: orange;
            }
        `];
    }

    render() {
        return html`
            <h2>Sobre</h2>
            <p>Mi contador vale: ${this.counter}</p>
            <button @click=${this.incrementar}>+1</button>
            <button @click=${this.decrementar}>-1</button>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex asperiores suscipit voluptates magni similique hic vitae, sit omnis, enim doloribus voluptatem ratione distinctio molestiae quaerat adipisci autem? Maxime, error nesciunt.</p>
                <img src="https://picsum.photos/300/200" alt="imagen">
                <p>Officiis quam tempora repellendus unde nulla reiciendis blanditiis, voluptate pariatur illum placeat commodi maiores temporibus, quibusdam iusto iure saepe! Veniam necessitatibus, doloribus optio iusto magni aperiam dolore distinctio accusantium aspernatur?</p>
                <p>Dicta possimus perspiciatis odio dolorem nulla earum quibusdam magnam repudiandae et enim quidem iste, consectetur ratione commodi vero perferendis eligendi officiis. Incidunt, a. Impedit quasi rem aspernatur, quia quidem quibusdam.</p>
                <p>Obcaecati numquam suscipit ullam, alias voluptates quod eligendi doloribus. Perferendis, ea eveniet hic quaerat obcaecati doloremque magni omnis ipsum suscipit officia, minima distinctio. Aliquid aut animi nulla ipsa magnam sint!</p>
                <p>Magni assumenda itaque alias eligendi, illum distinctio error aliquam blanditiis veniam porro nihil eveniet libero ullam nisi, quos ipsum doloremque minima reiciendis vero. Dignissimos repudiandae voluptates nulla illo dolor labore.</p>

        `;
    }


    stateChanged(state) {
  //      console.log('Soy About y el estado es', state);
  //se almacena en el nuevo reducer que es counter
        this.counter = state.counter.counter;
    }

    incrementar() {
        const action = incrementarContador();
        store.dispatch(action);
    }

    

    decrementar() {
        store.dispatch(decrementarContador());
    }

    changeMetadata(){
        store.dispatch(updateMetadata({
            title: 'Sobre nosotros',
            description: 'Esta es informacion de nuestra empresa',
            url: window.location.href,
            image: '../images/escuelait.png'
        }));
    }

    
}
customElements.define('view-about', ViewAbout);