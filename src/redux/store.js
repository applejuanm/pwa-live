import { applyMiddleware, 
        createStore, 
        compose, 
        combineReducers } 
from 'redux';

import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';


import thunk from 'redux-thunk';


// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//esto es un reducer
import { app } from './reducers/app-reducer';


// y combinamos los reducer
//le paso todos los reducer que quieres combinar en un reducer
// const combinedReducers = combineReducers({
//   app: app,
//   counter: counter,
// });


// creamos el store con la función createStore(), enviando el reducer como parámetro.
// exportamos el store para que otros lo puedan importar fuera de este módulo.
 
  export const store = createStore(
    state => state,
    devCompose(
      applyMiddleware(thunk),
      lazyReducerEnhancer(combineReducers),
        
    )
);

store.addReducers({
  app: app
})