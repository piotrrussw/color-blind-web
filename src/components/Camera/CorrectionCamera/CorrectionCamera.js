import { useEffect, useState } from 'react';
import ColorblindRenderer from '~/utils/colorblindRenderer';
import { useStore } from '~/store';
import { useResize } from '~/hooks';

function CorrectionCamera() {
    const [store, dispatch] = useStore();
    const [renderer, setRenderer] = useState(null);
    const size = useResize();

    const renderCamera = () => {
        const video = document.getElementById('video');
        const colorblindRenderer = new ColorblindRenderer(video);
        const colorVision = getColorVisionName();

        colorblindRenderer.render(colorVision, store.cameraType === 1);
        colorblindRenderer.animate();

        colorblindRenderer.on('color-name', (props) => {
            dispatch({ colorName: props.name[1] });
        });

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
            // renderer.updateIntensity();
        }
    }, [size]);

    // on camera flip
    useEffect(() => {
        if (renderer) {
            renderer.flipCamera(store.cameraType);
        }
    }, [store.cameraType]);

    // on correction change
    useEffect(() => {
        if (renderer) {
            renderer.updateIntensity(store.correctionLevel);
        }
    }, [store.correctionLevel]);

    return null;
}

CorrectionCamera.propTypes = {};

export default CorrectionCamera;
