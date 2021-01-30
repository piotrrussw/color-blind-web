import { useEffect, useState } from 'react';
import ColorblindRenderer from '~/utils/ColorblindRenderer';
import { useStore } from '~/store';
import { useResize } from '~/hooks';

function CorrectionCamera() {
    const [store] = useStore();
    const [renderer, setRenderer] = useState(null);
    const size = useResize();

    const renderCamera = () => {
        const video = document.getElementById('video');
        const colorblindRenderer = new ColorblindRenderer(video);
        const colorVision = getColorVisionName();

        colorblindRenderer.render(colorVision);
        colorblindRenderer.animate();
        setRenderer(colorblindRenderer);

        return () => {
            colorblindRenderer.destroy();
            setRenderer(null);
        };
    };

    const getColorVisionName = () => {
        return store.colorVisionTypes.find((type) => type.id === store.colorVision).value;
    };

    // on mount
    useEffect(renderCamera, []);
    // on resize
    useEffect(() => {
        if (renderer) {
            renderer.handleResize();
        }
    }, [size]);

    useEffect(() => {
        console.log('camera type update', store.cameraType);
    }, [store.cameraType]);

    return null;
}

CorrectionCamera.propTypes = {};

export default CorrectionCamera;
