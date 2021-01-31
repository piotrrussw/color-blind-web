import { CAMERA_TYPES, COLOR_VISION_TYPES } from '~/constants';
import { createContext, useReducer } from 'react';

const initialState = {
    colorVision: COLOR_VISION_TYPES[0].id,
    colorVisionTypes: COLOR_VISION_TYPES,
    cameraType: CAMERA_TYPES[0].id,
    cameraTypes: CAMERA_TYPES,
    correctionLevel: 0,
    showColorLabels: true,
};

function reducer(state, action) {
    return { ...state, ...action };
}

const StoreContext = createContext(null);

function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <StoreContext.Provider value={[state, dispatch]} {...props} />;
}

export { StoreContext };
export default StoreProvider;
