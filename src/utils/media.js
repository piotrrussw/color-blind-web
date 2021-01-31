export const getCamerasList = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === 'videoinput');
};

export const getMediaConstraints = (isFrontCamera) => {
    const supports = window.navigator.mediaDevices.getSupportedConstraints();

    let config = {
        video: {
            // is overwritten below
        },
    };

    //Video
    /*
        2160p: 3840 x 2160
        1440p: 2560 x 1440
        1080p: 1920 x 1080
        720p: 1280 x 720
        480p: 854 x 480
        360p: 640 x 360
        240p: 426 x 240
    */
    let modernVideoParams = {
        width: { ideal: 640 },
        height: { ideal: 360 },
    };

    let legacyVideoParams = {
        width: { min: 320, max: 640 },
        // do not set the height
    };

    if (supports['frameRate']) {
        // do not set a value too low for max params
        modernVideoParams.frameRate = { ideal: 15, max: 30 };
        legacyVideoParams.frameRate = { ideal: 10, max: 30 };
    }

    config.video = modernVideoParams;
    config.video.facingMode = isFrontCamera ? 'user' : 'environment';

    return config;
};

export const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const supportGetUserMedia = () => {
    return (
        window.navigator.mediaDevices &&
        typeof window.navigator.mediaDevices.getUserMedia === 'function'
    );
};
