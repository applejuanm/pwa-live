/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement } from 'lit-element';
import { store } from '../redux/store';
import { updateMetadata } from './../redux/actions/app-actions';

export class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
     //esto lo que hace es que si el componente se tiene que actualizar o no
    //solo se actualiza si la propiedad active esta en true
    //este metodo dice si se tiene que actualizar, puede ocurrir si tienen un monton de componentes si se
    //estan actualizando/cambiando el template/ es decir va actualizando cosas
    //solo los componentes que esten activos a true se van a actualizar
  shouldUpdate() {
    return this.active;
  }

  static get properties() {
    return {
      active: { type: Boolean }
    }
  }

  updated(changedProperties){
    if(changedProperties.has('active') && this.active) {
      this.changeMetadata();
    }
  }

  changeMetadata() {
    store.dispatch(updateMetadata({
      title: 'Mi PWA con LitElement',
      description: 'Esta es una descripción genérica de mi app',
      url: window.location.href,
      image: '/images/escuelait.png'
    }));
  }

}