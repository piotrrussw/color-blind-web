import { createContext, useReducer } from 'react';
import { FLASH_MODE_OFF, COLOR_VISION_TYPES, CAMERA_TYPE_BACK } from '~/constants';

const initialState = {
    colorVision: COLOR_VISION_TYPES[0],
    colorVisionTypes: COLOR_VISION_TYPES,
    cameraType: CAMERA_TYPE_BACK,
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
