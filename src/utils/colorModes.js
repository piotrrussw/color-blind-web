import * as THREE from 'three';

export const colorModes = {
    normal: {
        r: new THREE.Vector3(1, 0, 0),
        g: new THREE.Vector3(0, 1, 0),
        b: new THREE.Vector3(0, 0, 1),
    },
    protanopia: {
        r: new THREE.Vector3(0.56667, 0.43333, 0),
        g: new THREE.Vector3(0.55833, 0.44167, 0),
        b: new THREE.Vector3(0, 0.24167, 0.75833),
    },
    deuteranopia: {
        r: new THREE.Vector3(0.625, 0.375, 0),
        g: new THREE.Vector3(0.7, 0.3, 0),
        b: new THREE.Vector3(0, 0.3, 0.7),
    },
    tritanopia: {
        r: new THREE.Vector3(0.95, 0.05, 0),
        g: new THREE.Vector3(0, 0.43333, 0.56667),
        b: new THREE.Vector3(0, 0.475, 0.525),
    },
    achromatopsia: {
        r: new THREE.Vector3(0.299, 0.587, 0.114),
        g: new THREE.Vector3(0.299, 0.587, 0.114),
        b: new THREE.Vector3(0.299, 0.587, 0.114),
    },
};
