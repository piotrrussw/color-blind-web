// camera
export const FLASH_MODE_OFF = 'off';
export const FLASH_MODE_ON = 'torch';

// color vision types
export const COLOR_VISION_TYPES = [
    { id: 1, label: 'Normal vision', colorDeficiency: null, value: 'normal' },
    { id: 2, label: 'Protanopia', colorDeficiency: 'red', value: 'protanopia' },
    { id: 3, label: 'Deutranopia', colorDeficiency: 'green', value: 'deuteranopia' },
    { id: 4, label: 'Tritanopia', colorDeficiency: 'blue', value: 'tritanopia' },
    {
        id: 5,
        label: 'Achromatopsia',
        colorDeficiency: 'only black and white',
        value: 'achromatopsia',
    },
];

export const CAMERA_TYPES = [
    { id: 1, label: 'back' },
    { id: 2, label: 'front' },
];

export const COLOR_NAMES_TYPES = [
    { id: 1, label: 'on', value: true },
    { id: 2, label: 'off', value: false },
];
