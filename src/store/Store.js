import { createContext, useReducer } from 'react';
import { FLASH_MODE_OFF, COLOR_VISION_TYPES, CAMERA_TYPES } from '~/constants';

const initialState = {
    colorVision: COLOR_VISION_TYPES[0].id,
    colorVisionTypes: COLOR_VISION_TYPES,
    cameraType: CAMERA_TYPES[0].id,
    cameraTypes: CAMERA_TYPES,
    flashMode: FLASH_MODE_OFF,
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
