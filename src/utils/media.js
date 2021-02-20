export const getCamerasList = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === 'videoinput');
};

export const getMediaConstraints = (isFrontCamera) => {
    const supports = window.navigator.mediaDevices.getSupportedConstraints();
    let config = { video: {} };
    let modernVideoParams = {
        width: { ideal: 640 },
        height: { ideal: 360 },
    };

    let legacyVideoParams = { width: { min: 320, max: 640 } };

    if (supports['frameRate']) {
        modernVideoParams.frameRate = { ideal: 10, max: 20 };
        legacyVideoParams.frameRate = { ideal: 10, max: 20 };
    }

    config.video = modernVideoParams;
    config.video.facingMode = isFrontCamera ? 'user' : 'environment';

    return config;
};
