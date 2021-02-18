import { CAMERA_TYPES, COLOR_VISION_TYPES } from '~/constants';
import { createContext, useReducer } from 'react';

const initialState = {
    colorVision: COLOR_VISION_TYPES[0].id,
    colorVisionTypes: COLOR_VISION_TYPES,
    cameraType: CAMERA_TYPES[0].id,
    cameraTypes: CAMERA_TYPES,
    correctionLevel: 0,
    showColorLabels: true,
    colorName: null,
};

function init(initialStore) {
    const cachedStore = localStorage.getItem('store');
    return cachedStore ? JSON.parse(cachedStore) : initialStore;
}

// update store
function reducer(state, action) {
    const newStore = { ...state, ...action };
    localStorage.setItem('store', JSON.stringify(newStore));
    return newStore;
}

const StoreContext = createContext(null);

function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState, init);
    return <StoreContext.Provider value={[state, dispatch]} {...props} />;
}

export { StoreContext };
export default StoreProvider;
