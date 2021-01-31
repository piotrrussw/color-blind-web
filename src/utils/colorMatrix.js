const normal = {
    r: [
        [1, 1],
        [0, 0],
        [0, 0],
    ],
    g: [
        [0, 0],
        [1, 1],
        [0, 0],
    ],
    b: [
        [0, 0],
        [0, 0],
        [1, 1],
    ],
};

const protanopia = {
    r: [
        [0.81667, 0.56667],
        [0.18333, 0.43333],
        [0, 0],
    ],
    g: [
        [0.33333, 0.55833],
        [0.66667, 0.44167],
        [0, 0],
    ],
    b: [
        [0, 0],
        [0.125, 0.24167],
        [0.875, 0.75833],
    ],
};

const deuteranopia = {
    r: [
        [0.8, 0.625],
        [0.2, 0.375],
        [0, 0],
    ],
    g: [
        [0.2533, 0.7],
        [0.74167, 0.3],
        [0, 0],
    ],
    b: [
        [0, 0],
        [0.14167, 0.3],
        [0.85833, 0.7],
    ],
};

const tritanopia = {
    r: [
        [0.96667, 0.95],
        [0.03333, 0.05],
        [0, 0],
    ],
    g: [
        [0, 0],
        [0.73333, 0.43333],
        [0.26667, 0.56667],
    ],
    b: [
        [0, 0],
        [0.18333, 0.475],
        [0.81667, 0.525],
    ],
};

const achromatopsia = {
    r: [
        [0.618, 0.299],
        [0.32, 0.587],
        [0.062, 0.114],
    ],
    g: [
        [0.163, 0.299],
        [0.774, 0.587],
        [0.062, 0.114],
    ],
    b: [
        [0.163, 0.299],
        [0.32, 0.587],
        [0.516, 0.114],
    ],
};

export const colorMatrix = {
    normal,
    protanopia,
    deuteranopia,
    tritanopia,
    achromatopsia,
};