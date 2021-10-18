export const UPDATE_PAGE = 'UPDATE_PAGE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const UPDATE_SEGMENTS = 'UPDATE_SEGMENTS';
export const UPDATE_METADATA = 'UPDATE_METADATA';
export const SEND_FEEDBACK = 'SEND_FEEDBACK';

const sendFeedback = (feedback) => {
    return {
        type: SEND_FEEDBACK,
        feedback
    }
}

export const positiveFeedback = (msg) => {
    return sendFeedback({
        msg,
        status: 'success'
    })
}
export const negativeFeedback = (msg) => {
    return sendFeedback({
        msg,
        status: 'error'
    })
}

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

//voy a crear un nuevo metodo dentro de 
//de la 

export const navigate = (path) => dispatch => {
    //la pagina empieza con una barra porque si empieza con una barra
    //que alguien pide que accedas a la ruta raiz entonces la pagina que quieres ir es home
    const url = (path === '/') ? 'home' : path.slice(1);
    // console.log(url, 'y', path);
    //ahora tenemos la page pero la page puede tener segmentos y separarlos
    //cogo la url y la decodifico
    const decodedUrl = decodeUrl(url);
    // console.log('url decodificada', decodedUrl);
    dispatch(loadPage(decodedUrl.page));
    dispatch(loadSection(decodedUrl.page, decodedUrl.segments));
}

const loadSection = (page, segments) => (dispatch) => {
    //cual es la seccion 
    //y cuales son los parametros actuales de la ruta
    let pageSection = '';
    let pageParameter = '';

    if (segments.length > 0) {
        //accedo a la primera parte del segmento
        pageSection = segments[0];
        if (page == 'headquarters') {
            switch (pageSection) {
                case 'madrid':
                    import('../../headquarters/headquarters-madrid-view');
                    break;
                case 'barcelona':
                    import('../../headquarters/headquarters-barcelona-view');
                    break;
                default:
                    dispatch(loadPage('404'));
            }

        } else if (page == 'pelis') {
            switch (pageSection) {
                case 'list':
                    import('../../pelis/pelis-list-view');
                    break;
                case 'insert':
                    import('../../pelis/pelis-insert-view');
                    break;
                case 'edit':
                    import('../../pelis/pelis-edit-view');
                    break;
                default:
                    dispatch(loadPage('404'));
            }
        }
    }
    if (segments.length > 1) {
        pageParameter = segments[1];
    }
    //hago un dispatch con el metodo 'updateSegments'
    dispatch(updateSegments(pageSection, pageParameter));
}

const updateSegments = (pageSection, pageParameter) => {
    return {
        //llamamos a la accion de redux
        type: UPDATE_SEGMENTS,
        pageSection,
        pageParameter
    }
}


export const loadPage = (page) => (dispatch) => {
    //analizo con page para cada tipo de page
    //meto imports

    switch (page) {
        case 'home':
            import('../../views/view-home.js');
            break;
        case 'about':
            import('../../views/view-about.js');
            break;
        case 'contact':
            import('../../views/view-contact.js');
            break;
        case 'map':
            import('../../views/view-map.js');
            break;
        case 'headquarters':
            import('../../views/view-headquarters.js');
            break;
        case 'pelis':
            import('../../views/view-pelis.js');
            break;
        default:
            import('../../views/view-404.js');
            page = '404';
            break;
    }
    //hago el dispatch de update page para terminar
    dispatch(updatePage(page));
}


//este page es la propiedad del objeto y esto es lo que estoy recibiendo por parametro
export const updatePage = (page) => {
    return {
        type: UPDATE_PAGE,
        page
    }
}

export const navigateDelay = (page) => (dispatch) => {
    dispatch(startLoading());
    setTimeout(() => {
        dispatch(stopLoading());
        dispatch(navigate(page));
    }, 3000);
}

//recibe la url y 
//coge todos los segmenteos de la url
//incluyendo la page 
//cada uno de los segmentos los divide por una barra '/'
//cada uno de los segmentos los pasa a un shift que cuando
//pilla cada primer elemento del array y al array original
//le quita ese elemento le quita solamente la parte que ha quitado
//y devuevlo la pagina y los segmentos
const decodeUrl = (url) => {
    const segments = url.split('/');
    const page = segments.shift();
    return {
        page,
        segments
    }
}

export const updateMetadata = (metadata) => {
    return {
        type: UPDATE_METADATA,
        metadata
    }
}
